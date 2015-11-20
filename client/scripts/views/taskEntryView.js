Lancealot.TaskEntryView = Backbone.View.extend({

  template: Templates['taskManager'],

  events: {
    'submit': 'handleSubmit'
  },

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var name = $('#description').val();
    var start = $('#start').val();
    var end = $('#end').val();

    var task = new Lancealot.Task({
      name: name,
      start: start,
      end: end,
    });

    task.save({});

    $('input').val('');
  }

});