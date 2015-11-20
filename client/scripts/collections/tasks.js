//Tasks collection
Lancealot.Tasks = Backbone.Collection.extend({

  model: Lancealot.Task,

  url: function() {
    return '/jobs/' + this.models[0].attributes.job_id;
  }

  // initialize: function() {
  //   this.set('url', '/jobs/' + this.get('job_id')); 
  // }

});
