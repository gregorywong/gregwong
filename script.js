$('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// to prevent external linking navbar links from changing colors after being clicked
$('.nav-link').on("focus", function() {
  $(this).blur();
});
