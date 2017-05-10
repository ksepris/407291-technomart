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
