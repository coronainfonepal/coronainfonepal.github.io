/*Custom JavaScript*/
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
});
