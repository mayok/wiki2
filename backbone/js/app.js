$(function() {
  var TitleList = Backbone.Model.extend({
    defaults: function() {
      return {
        id: '',
        title: '',
      };
    }
  });

  var Page = Backbone.Model.extend({
    defaults: function() {
      return {
        title: '',
        content: '',
      }
    },

    urlRoot: 'http://127.0.0.1:4001/api/pages',

    validate: function(attributes) {
      if(attributes.title === '') {
        return 'title must not be empty.';
      }
    }
  });

  var TitleListCollection = Backbone.Collection.extend({
    model: TitleList,
    url: 'http://127.0.0.1:4001/api/pages',
  });


  var ATitleView = Backbone.View.extend({
    template: _.template('<li class="title"><%= title %></li>'),

    events: {
      "click .title": "jump"
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },

    jump: function() {
      console.log(this.model.id);
      var model = new Page({ id: this.model.id });
      var page = new PageView({ model: model });
    },
  })

  var TitleListView = Backbone.View.extend({
    el: $('#main'),

    initialize: function() {
      _.bindAll(this, 'render', 'update');
      this.listenTo(this.collection, 'update', this.render);
      this.collection.fetch();
    },

    render: function() {
      this.$el.html('');

      this.collection.each(function(model) {
        var view = new ATitleView({ model: model });
        this.$el.append(view.render().el);
        return this;
      }, this);
    },

    update: function() {
    }

  });

  var PageView = Backbone.View.extend({
    el: $('#main'),

    initialize: function() {
      _.bindAll(this, 'render');
      this.listenTo(this.model, 'change', this.render);

      this.model.fetch();
    },

    template: _.template('<div><%= title %></div><div><%= content %></div>'),

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

  var Router = Backbone.Router.extend({
    routes: {
      ''         : 'index',
      'page/:id' : 'show',
      'edit/:id' : 'edit',
      'create'   : 'create'
    },

    initialize: function() {
      this.titleList = new TitleListCollection;
      this.titleListView = new TitleListView({ collection: this.titleList });
    },

    index: function() {
      this.titleListView.render();
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
