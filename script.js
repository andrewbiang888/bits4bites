var persons = [{
  name: 'Andrew',
  description: '',
  photo: '',
  resume: ''
}, {
  name: 'Pirtle',
  description: '',
  photo: '',
  resume: ''
}, {
  name: 'Sam',
  description: '',
  photo: '',
  resume: ''
}]

var bits4bites = new Vue({
  el: '#bits4bites',
  data: {
    persons: persons
  }
});

// $(".button-collapse").sideNav();
//
//     $(document).ready(function(){
//       console.log('setting caro!')
//       $('.carousel.carousel-slider').carousel({full_width: true});
//       $('.carousel.carousel-slider').height('300px')
//     });

$('.carousel.carousel-slider').carousel({
  full_width: true
});

$(document).ready(function() {
  $(".button-collapse").sideNav({
    menuWidth: 75 + '%', // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on &lt;a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
});
