const stripe = require("stripe")(process.env.STRIPE_KEY);

'use strict';

/**
 * Order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { cart } = ctx.request.body;
      if (!cart) {
        ctx.response.status = 400;
        return { error: 'Cart not found in request body' };
      }

      const lineItems = await Promise.all(
        cart.map(async (product) => {
          const item = await strapi.service("api::product.product").findOne(product.id);
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title
              },
              unit_amount: item.price * 100,
            },
            quantity: product.amount,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?success=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
        payment_method_types: ["card"]
      });

      await strapi.service("api::order.order").create({
        data: {
          products: cart,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (error) {
      // Handle any caught errors here
      console.error('Error occurred:', error);
      ctx.response.status = 500;
      return { error: 'Internal Server Error' };
    }
  }
}));
