    //function to display the send message box
    function contactDisplay() {
        var element = document.getElementById("contact");
        if (element.style.display === "block") {
          element.style.display = "none";
        } else {
          element.style.display = "block";
        }
      }

    //function to set a scrollable image carousel
      var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slides");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
      }
