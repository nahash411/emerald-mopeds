// Job Model
Lancealot.Job = Backbone.Model.extend({
  url: '/jobs',
  select: function(){
    console.log("click in job model");
    this.trigger("jobViewClick", this);
  }
});