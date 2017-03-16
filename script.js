var persons = [{
  name: 'Andrew',
  description: 'Bacon ipsum dolor amet tri-tip shoulder biltong, brisket bacon doner cupim turkey drumstick andouille. Bacon ipsum dolor amet tri-tip shoulder biltong, brisket bacon doner cupim turkey drumstick andouille.',
  photo: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/14264927_1198730703506419_792765636242202081_n.jpg?oh=9f1f079ed641fc39454e2a72edecb54a&oe=596EF2CB',
  resume: '',
  title: 'Snookie'
}, {
  name: 'Pirtle',
  description: 'Rump cupim bacon tongue, capicola andouille sirloin beef drumstick shank brisket swine. Bacon ipsum dolor amet tri-tip shoulder biltong, brisket bacon doner cupim turkey drumstick andouille.',
  photo: 'https://scontent-sea1-1.xx.fbcdn.net/v/t34.0-12/10634315_10154473586370562_1799877597_n.jpg?oh=b42dd51a9aa40599659d7916ff379c92&oe=58CACE27',
  resume: '',
  title: 'Bronch'
}, {
  name: 'Sam',
  description: 'Porchetta shankle biltong, ball tip venison tenderloin sausage bacon sirloin tail strip steak salami turkey. Bacon ipsum dolor amet tri-tip shoulder biltong, brisket bacon doner cupim turkey drumstick andouille.',
  photo: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/521848_10151843368756124_732343295_n.jpg?oh=6a267feeb0232fe05e943b1ca2723f9a&oe=596804BB',
  resume: '',
  title: 'Fizzle'
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



$(document).ready(function() {
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
  $(".button-collapse").sideNav({
    menuWidth: 75 + '%', // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on &lt;a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
  var options = [{
    selector: '#staggered-test',
    offset: 300,
    callback: function(el) {

// more options here: https://github.com/Dogfalo/materialize/blob/9d673705fa114842bd05cd0b879e706aa4d9e716/js/transitions.js
      Materialize.showStaggeredList($(el));
    }
  }];
  Materialize.scrollFire(options);
});
