Lancealot.singleJobView = Backbone.View.extend({
  tagName: 'div',

  template: Templates['singleJob'],

  initialize: function() {
    //this.model.on('change', this.render, this);
    //this.model.on('sync', this.addOne);
    console.log(this.model);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  addOne: function(){
    //var view = new Lancealot.JobView({ model: this.collection.models[0] });
    this.$el.append(view.render().el);
  }

});