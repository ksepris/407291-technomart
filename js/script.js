var link = document.querySelector(".company_contacts .main_btn");
var popup = document.querySelector(".modal_content");
var close = popup.querySelector(".modal_content_close");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal_content_show");
      });
close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal_content_show");
      });

var link_clg = document.querySelector(".buy_btn");
var popup_clg = document.querySelector(".modal_content");
var close_clg = popup.querySelector(".modal_content_close");
link_clg.addEventListener("click", function(event) {
  event.preventDefault();
  popup_clg.classList.add("modal_content_show");
      });
close_clg.addEventListener("click", function(event) {
        event.preventDefault();
        popup_clg.classList.remove("modal_content_show");
      });