$(document).ready(function () {

  let num = 0;
  $('#gun').click(function () {
    num++;
    $(this).text(num);
  })
  $('#click-box').click(function () {
    num++;
    $('#gun').text(num);
    $('#gun').toggleClass('shake')
    // on fire click CSS animation effect to shake gun
  })
  

  window.alert('Pew Pew!!!');

});

// 3 boxes in a row containing different fire arms in a line across the bottom
// ability to select different firearms at intervals of 10, 100, 1000 points
// attach a sound effect to the fire button, that changes with the selection of different firearms
// on click have a flash effect in the background
//