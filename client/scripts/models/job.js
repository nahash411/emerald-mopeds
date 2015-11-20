// Job Model
Lancealot.Job = Backbone.Model.extend({
  url: '/jobs',
  select: function(){
    this.trigger("jobViewClick", this);
  }
});