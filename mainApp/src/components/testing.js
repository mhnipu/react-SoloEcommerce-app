// import React, { useState, useEffect } from 'react';

// const Qty = ({ item }) => {

//     const [selectedAmount, setSelectedAmount] = useState(item.amount > 1000 ? '1000+' : item.amount.toString());

//     // Update the selectedAmount when item.amount changes
//     useEffect(() => {
//         setSelectedAmount(item.amount > 1000 ? '1000+' : item.amount.toString());
//     }, [item.amount]);

//     const handleAmountChange = (newValue) => {
//         const newAmount = newValue === 'inc' ? parseInt(selectedAmount) + 1 : parseInt(selectedAmount) - 1;
//         setSelectedAmount(newAmount <= 0 ? '1' : newAmount > 1000 ? '1000+' : newAmount.toString());
//         // Handle any additional logic needed when the amount changes
//     };

//     return (
//         <div className='flex gap-x-1 items-center'>
//             {item.amount >= 1 ? (
//                 <>
//                     <select
//                         value={selectedAmount}
//                         className='p-2 rounded-md w-[80px] outline-none h-12 input'
//                         onChange={(e) => setSelectedAmount(e.target.value)}
//                     >
//                         {Array.from({ length: 1000 }, (_, index) => index + 1).map((value) => (
//                             <option key={value} value={value.toString()}>
//                                 {value}
//                             </option>
//                         ))}
//                     </select>
//                     <div className="flex flex-col justify-center items-center ">
//                         <button onClick={() => handleAmountChange('inc')} className="px-2 rounded-md hover:bg-accent hover:text-black hover:transition-all duration-300 text-gray-200 mb-1 bg-[#1d1f23]">+</button>
//                         <button onClick={() => handleAmountChange('dec')} className="px-2 rounded-md hover:bg-accent hover:text-black hover:transition-all duration-300 text-gray-200  bg-[#1d1f23]">-</button>
//                     </div>
//                 </>
//             ) : (
//                 <input
//                     type="text"
//                     className="text-gray-50 placeholder:text-gray-300 h-10 rounded-md p-4 w-[100px] input"
//                     placeholder={`${item.amount}`}
//                 />
//             )}
//         </div>
//     );
// };

// export default Qty;






