// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var apiToken = $('#api-token').val();
$.ajaxSetup({
  headers: {
    "token": apiToken
  }
});

//
// $('.picture-maker').on('submit', function(e){
//   e.preventDefault();
//
//   var data = {};
//
//   var fileInput = $('#url')[0];
//   var file = fileInput.files[0];
//   var reader = new FileReader();
//
//   reader.readAsDataURL(file);
//
//   reader.onloadend = function () {
//     data.url = reader.result;
//     // data.description = $('#description').val();
//
//     $.ajax({
//       method: 'post',
//       url: '/api/pictures',
//       data: {'post': data},
//       success: function(response){
//         console.log('good')
//         window.location = '/';
//       }
//     });
//   }
//
// });




//****************************************************************************

var Picture = Backbone.Model.extend({});
var PictureCollection = Backbone.Collection.extend({
  model: Picture,
  url: '/api/pictures'
});

var PictureView = Backbone.View.extend({
  tagName: 'option',
  className: 'picture',
  template: _.template( $('#picture-view').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $(html)
    this.$el.append( $html  )
  },
  events:{
    'click button.remove': 'removePicture'
  },
  removePicture: function(){
    this.$el.remove();
    this.model.destroy();
  }
});

var PictureListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.empty();
    var pictures = this.collection.models;
    var view;
    for (var i = 0; i < pictures.length; i++) {
      view = new PictureView({model: pictures[i]});
      view.render();
      this.$el.append(view.$el);
    }
  }
});
var allThePictures = new PictureCollection();
var picturesPainter = new PictureListView({
  collection: allThePictures,
  el: $('.pictures')
});
allThePictures.fetch();

$('form.picture-maker').on('submit', function(e){
  e.preventDefault();
  var data = {};

  var fileInput = $('#url')[0];
  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onloadend = function () {
    data.url = reader.result;
    allThePictures.create(data);
  }
}
//Tried to make a callback function that refreshes page after image submission, is NOT working.
// , function(){
//    window.location="/users/profile"
// }
);
$(document).ready(function (){
  $(".image_picker_selector").imagepicker({limit: 2})
   hide_select: true
   $("select").imagepicker({ selected : function (selected){}, })
   $(".button-collapse").sideNav();

});
