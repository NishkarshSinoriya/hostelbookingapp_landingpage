$(document).ready(function() {
    var owl = $("#owl-demo");
    owl.owlCarousel({
        navigation: false,
        singleItem: true,
        mouseDrag: true,
        pagination: true,
        autoPlay: 5000,
        autoHeight: true,
        addClassActive: true,
    });
});
$(document).ready(function() {
    var owl = $("#owl-demo2");
    owl.owlCarousel({
        navigation: false,
        singleItem: true,
        mouseDrag: true,
        pagination: true,
        autoPlay: 5000,
        autoHeight: true,
        addClassActive: true,
    });
});


// $(window).scroll(function() {
//     var height = $(window).scrollTop();
//     var navclass= 'navbar navbar-default navbar-fixed-top';
//     if (height > 40) {
//       document.getElementById('navbar').className=navclass+' '+'small';
//     }
//     if (height < 40) {
//       document.getElementById('navbar').className=navclass;
//     }
// });

$(document).ready(function() {
  $("#owl-demo3").owlCarousel({
      items: 5,
      lazyLoad: true,
      pagination: true,
      navigation: false,
      autoPlay: 3000,
      stopOnHover:true,
      navigationText: [
          "<div class='car-ico-big'></div>",
          "<div class='car-ico-big-reverse'></div>"
      ]
  });
});

// $(document).ready(function() {
//   var scrollDuration = 800;
//   $('#scrolldown').click(function(event) {
//     event.preventDefault();
//     $('html, body').delay(50).animate({
//       scrollTop: $("#services").offset().top
//     }, scrollDuration);
//   });
// });
// $(document).ready(function() {
//   var scrollDuration = 800;
//   $('#scrolltop').click(function(event) {
//     event.preventDefault();
//     $('html, body').delay(100).animate({
//       scrollTop: 0
//     }, scrollDuration);
//   });
// });



// var now_page=location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
// var nav=document.getElementById(now_page).className="active";

function toggle_line(args) {
    var pills = document.getElementsByClassName("pill");
    var details = document.getElementsByClassName("rel");
    document.getElementById('p' + args).className = 'pill active';
    document.getElementById('rel' + args).className = 'rel active';
    var i = 0;
    while (i < pills.length) {
        var pill = pills.item(i).id;
        var detail = details.item(i).id;
        var samepill = document.getElementById('p' + args).id;
        var samedetail = document.getElementById('rel' + args).id;
        if (pill !== samepill) {
            document.getElementById(pill).className = 'pill';
        }
        if (detail !== samedetail) {
            document.getElementById(detail).className = 'rel';
        }
        i++;
    }
}
