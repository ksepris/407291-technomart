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

var link_map = document.querySelector(".map_open");
var popup_map = document.querySelector(".modal_content_map");
var close_map = popup_map.querySelector(".modal_content_close");

link_map.addEventListener("click", function(event) {
  event.preventDefault();
  popup_map.classList.add("modal_content_show");
      });
close_map.addEventListener("click", function(event) {
        event.preventDefault();
        popup_map.classList.remove("modal_content_show");
      });