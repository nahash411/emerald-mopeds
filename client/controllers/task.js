angular.module('lancealot.task', [])

  .controller('TaskController', function ($scope, $routeParams, $window, Tasks) {

    $scope.getEditingTask = function () {
      $scope.editingTask = Tasks.getEditingTask();
    };

    $scope.updateTask = function(task) {


      if (task.start) {
        $scope.editingTask.start = task.start;
      }

      if (task.startTime) {
        var startDate = new Date($scope.editingTask.start);
        startDate.setHours(task.startTime.getHours());
        startDate.setMinutes(task.startTime.getMinutes());
        $scope.editingTask.start = startDate;
      }

      if (task.end) {
        $scope.editingTask.end = task.end;
      }

      if (task.endTime) {
        var endDate = new Date($scope.editingTask.end);
        endDate.setHours(task.endTime.getHours());
        endDate.setMinutes(task.endTime.getMinutes());
        $scope.editingTask.end = endDate;
      }

      // task.start.setHours(task.startTime.getHours());
      // task.start.setMinutes(task.startTime.getMinutes());
      // task.end.setHours(task.endTime.getHours());
      // task.end.setMinutes(task.endTime.getMinutes());

      Tasks.updateTask($scope.editingTask, $routeParams.jobId)
      .then(function () {
        Tasks.setEditingTask(undefined);
        $window.history.back();
      })
    };

    $scope.getDate = function (startOrEnd) {
      var date = new Date($scope.editingTask[startOrEnd]);
      return date.toJSON().slice(0, 10);
    };

    $scope.getTime = function (startOrEnd) {
      var date = new Date($scope.editingTask[startOrEnd]);
      return date.toJSON().slice(11,19);
    };

    $scope.getEditingTask();
  })
