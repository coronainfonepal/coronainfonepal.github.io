/*Custom JavaScript*/
// Lazy Loading of images
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

$(function(){
  // Activate wow.js
  new WOW().init();

  // rendering youtube video in the Modal
  var $videoSrc;
  $(".youtube-video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // when the modal is opened autoplay it
  $("#youtubeVideoModal").on("shown.bs.modal", function (e) {
    $("#youtubeVideo").attr("src", $videoSrc);
  });

  // stop playing the youtube video when I close the modal
  $("#youtubeVideoModal").on("hide.bs.modal", function (e) {
    $("#youtubeVideo").replaceWith(
      '<iframe class="embed-responsive-item" src="" id="youtubeVideo" allowscriptaccess="always" allow="autoplay"></iframe>'
    );
  });

  // ------------ rendering facebook video in the modal
  var $videoSrc;
  $(".facebook-video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);
  // when the modal is opened autoplay it
  $("#facebookVideoModal").on("shown.bs.modal", function (e) {
    $("#facebookVideo").attr("src", $videoSrc);
  });

  // stop playing the facebook video when I close the modal
  $("#facebookVideoModal").on("hide.bs.modal", function (e) {
    $("#facebookVideo").replaceWith(
      '<iframe id="facebookVideo" class="embed-responsive-item" src="" style="border:none;overflow:hidden"\
          scrolling = "no" frameborder = "0" allowTransparency = "true" allow = "encrypted-media"\
          allowFullScreen = "true" ></iframe>'
    );
  });
});
