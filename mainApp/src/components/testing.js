/* Add this CSS to your stylesheets */
.cart - items - scrollable {
    /* Other styles */
    overflow - y: scroll; /* Enable vertical scrollbar */
    scrollbar - width: thin; /* For Firefox */
    scrollbar - color: transparent transparent; /* For Firefox */
    scrollbar - width: none; /* For WebKit-based browsers */
    -ms - overflow - style: none; /* For Internet Explorer and Edge */

  /* Hide scrollbar for WebKit-based browsers */
  &:: -webkit - scrollbar {
        display: none;
    }
}
