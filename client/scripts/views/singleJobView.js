Lancealot.singleJobView = Backbone.View.extend({
  tagName: 'div',

  template: Templates['singleJob'],

  initialize: function() {
    //this.model.on('change', this.render, this);
    this.collection.on('sync', this.addOne);
    this.collection.fetch();
  },

  render: function() {
    console.log(this.collection);
    this.$el.html(this.template());
    return this;
  },

  addOne: function(){
    var view = new Lancealot.JobView({ model: this.collection.models[0] });
    this.$el.append(view.render().el);
  }

});