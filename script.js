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

$(".button-collapse").sideNav();

    $(document).ready(function(){
      console.log('setting caro!')
      $('.carousel.carousel-slider').carousel({full_width: true});
      $('.carousel.carousel-slider').height('300px')
    });
