var isTouch = false;

$(document).ready(function() {
  checkForTouch();

  if (!isTouch) {
    $('.watch-trailer-btn').magnificPopup({
      type: "iframe"
    });
  }
});

var checkForTouch = function() {
  isTouch = 'ontouchstart' in window || 'onmsgesturechange' in window;
};
