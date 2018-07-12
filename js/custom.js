$(function(){
var $bubbles = $('.bubbles');

function bubbles() {

  // Settings
  var min_bubble_count = 20, // Minimum number of bubbles
    max_bubble_count = 40, // Maximum number of bubbles
    min_bubble_size = 3, // Smallest possible bubble diameter (px)
    max_bubble_size = 8; // Largest possible bubble diameter (px)

  // Calculate a random number of bubbles based on our min/max
  var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));

  // Create the bubbles
  for (var i = 0; i < bubbleCount; i++) {
    $bubbles.append('<div class="bubble-container"><div class="bubble"></div></div>');
  }

  // Now randomise the various bubble elements
  $bubbles.find('.bubble-container').each(function () {

    // Randomise the bubble positions (0 - 100%)
    var pos_rand = Math.floor(Math.random() * 101);

    // Randomise their size
    var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));

    // Randomise the time they start rising (0-15s)
    var delay_rand = Math.floor(Math.random() * 16);

    // Randomise their speed (3-8s)
    var speed_rand = 1.5 + Math.random() * 2;

    // Cache the this selector
    var $this = $(this);

    // Apply the new styles
    $this.css({
      'left': pos_rand + '%',

      '-webkit-animation-duration': speed_rand + 's',
      '-moz-animation-duration': speed_rand + 's',
      '-ms-animation-duration': speed_rand + 's',
      'animation-duration': speed_rand + 's',

      '-webkit-animation-delay': delay_rand + 's',
      '-moz-animation-delay': delay_rand + 's',
      '-ms-animation-delay': delay_rand + 's',
      'animation-delay': delay_rand + 's'
    });

    $this.children('.bubble').css({
      'width': size_rand + 'px',
      'height': size_rand + 'px'
    });

  });
}

// In case users value their laptop battery life
// Allow them to turn the bubbles off
$('.bubble-toggle').click(function () {
  if ($bubbles.is(':empty')) {
    bubbles();
    $bubbles.show();
    $(this).text('Bubbles Off');
  } else {
    $bubbles.fadeOut(function () {
      $(this).empty();
    });
    $(this).text('Bubbles On');
  }

  return false;
});
bubbles();


SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate:'<li><a href="{url}"><i class= "fa fa-link"></i>{title}</a></li>'
})

$('.nav .fa-search').click(function(){
  $('.search').addClass('search--open');
  $('.overlay').show();
  return false;
});
$('.overlay').click(function () {
  $('.search').removeClass('search--open');
  $(this).hide();
  return false;
});

hljs.initHighlightingOnLoad();

    function displayTargetArticle (groupName) {
        if (groupName) {
            $('.taglist').children().addClass('hidden');
            $('[data-blongs='+groupName+']').removeClass('hidden');
        }
    }

    $(document).on('click','li.dropdown',function(){
        displayTargetArticle($(this).find('>a').attr('title'));
    });

    displayTargetArticle(decodeURI(location.hash).substr(1));
});