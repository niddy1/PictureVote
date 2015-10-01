// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var apiToken = $('#api-token').val();
$.ajaxSetup({
  headers: {
    "token": apiToken
  }
});


var Picture = Backbone.Model.extend({});
var PictureCollection = Backbone.Collection.extend({
  model: Picture,
  url: '/api/pictures'
});

var PictureView = Backbone.View.extend({
  tagName: 'li',
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

$('form.new-picture').on('submit', function(e){
  e.preventDefault();
  var newUrl = $(this).find('input[name="picture[url]"]').val();
  allThePictures.create({url: newUrl});
});
