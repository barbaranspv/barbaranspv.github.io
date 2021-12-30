var items = document.querySelectorAll(".timeline li");

var cards = document.querySelectorAll(".card");

var elements;
  var windowHeight;
  $( document ).ready(function() {
    
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  

$("a[href='#timeline']").click(function() {
  $("html, body").animate({ scrollTop: $(".timeline").offset().top }, 1000);
  return false;
});


});
  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight+150 || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
        
    }
}for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = elements[i].getBoundingClientRect().top;

    if (isElementInViewport(elements[i])) {
      element.classList.add('fade-in-element');
      element.classList.remove('hidden');
    }
  }
}


init();

document.body.addEventListener('scroll', callbackFunc);
window.addEventListener("load", callbackFunc);
window.addEventListener('resize', init);

//window.addEventListener("scroll", callbackFunc);