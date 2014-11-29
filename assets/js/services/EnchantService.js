app.service('EnchantService', function ($log) {
  var reset = function (instance) {
    $log.debug("reset enchant instance")
    instance = null;
  }

  return {
    reset: reset
  };
});
