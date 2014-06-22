Ant = (function() {
  function Ant(context, color, map, positions) {
    this.context = context;
    this.map = map;
    this.color = color;
    this.positions = positions;

    this.moveTo(this.x(), this.y(), North);
  }

  Ant.prototype.x = function() {
    return this.positions[0];
  };

  Ant.prototype.y = function() {
    return this.positions[1];
  };

  Ant.prototype.move = function() {
    var newCords = this.nextStep();

    this.map.was_here(this.x(), this.y(), this.color);
    this.moveTo(newCords.x, newCords.y, newCords.orientation);

    setTimeout(this.move.bind(this), 1);
  };

  Ant.prototype.nextStep = function() {
    var orientation = new this.orientation(this.x(), this.y());

    if(this.map.am_i_was_here(this.x(), this.y())) {
      return orientation.moveLeft();
    }
    else {
      return orientation.moveRight();
    }
  };
  
  Ant.prototype.moveTo = function(x, y, orientation) {
    this.context.fillStyle = this.color;
    this.context.fillRect(x, y, 2, 2);
    this.positions = [x, y]; 
    this.orientation = orientation;
  };

  return Ant;
})();