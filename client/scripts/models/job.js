// Job Model
Lancealot.Job = Backbone.Model.extend({
  url: '/jobs',
  select: function(){
    console.log(this);
    this.trigger("jobViewClick", this);
  }
});