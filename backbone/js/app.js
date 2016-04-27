$(function() {
  var TitleList = Backbone.Model.extend({
    defaults: function() {
      return {
        id: '',
        title: '',
      };
    }
  });

  var TitleListCollection = Backbone.Collection.extend({
    model: TitleList,
    url: '',
  });

  var Page = Backbone.Model.extend({
    defaults: function() {
      return {
        title: '',
        content: '',
      }
    },

    urlRoot: '',

    validate: function(attributes) {
      if(attributes.title === '') {
        return 'title must not be empty.';
      }
    }
  });

  var TitleListView = Backbone.View.extend({
    el: $('#main'),

    initialize: function() {
      _.bindAll(this, 'render');
    },

    render: function() {

    }
  });

  var PageView = Backbone.View.extend({
    el: $('#main'),

    initialize: function() {
      _.bindAll(this, 'render');
    },

    render: function() {

    }
  });

  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'page/:id': 'show',
      'edit/:id': 'edit',
      'create': 'create'
    },

    initialize: function() {

    },

    index: function() {

    },

    show: function() {

    },

    edit: function() {

    },

    create: function() {

    },
  });

  var router = new Router();
  Backbone.history.start();
  // Backbone.history.start({ pushState: true });
});
