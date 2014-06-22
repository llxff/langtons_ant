North = (function() {

  function North(x, y) {
    this.x = x;
    this.y = y;
  }

  North.prototype.moveRight = function() {
    return { x: this.x + 2, y: this.y, orientation: East };
  };

  North.prototype.moveLeft = function() {
    return { x: this.x - 2, y: this.y, orientation: West };
  };

  return North;
})();

West = (function() {

  function West(x, y) {
    this.x = x;
    this.y = y;
  }

  West.prototype.moveRight = function() {
    return { x: this.x, y: this.y - 2, orientation: North };
  };

  West.prototype.moveLeft = function() {
    return { x: this.x, y: this.y + 2, orientation: South };
  };

  return West;
})();

South = (function() {

  function South(x, y) {
    this.x = x;
    this.y = y;
  }

  South.prototype.moveRight = function() {
    return { x: this.x - 2, y: this.y, orientation: West };
  };

  South.prototype.moveLeft = function() {
    return { x: this.x + 2, y: this.y, orientation: East };
  };

  return South;
})();

East = (function() {

  function East(x, y) {
    this.x = x;
    this.y = y;
  }

  East.prototype.moveRight = function() {
    return { x: this.x, y: this.y + 2, orientation: South };
  };

  East.prototype.moveLeft = function() {
    return { x: this.x, y: this.y - 2, orientation: North };
  };

  return East;
})();