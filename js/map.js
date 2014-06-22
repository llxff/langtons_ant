Map = (function(){

  function Map(context, dimension) {
    this.context = context;
    this.maxX = dimension[0] - 4;
    this.maxY = dimension[1] - 4;
    this.map = [];
  }

  Map.prototype.am_i_was_here = function(x,y) {
    var is_on_map = x >= 0 && x <= this.maxX && y >= 0 && y <= this.maxY;
    return is_on_map && this.map[x] && this.map[x][y];
  }

  Map.prototype.was_here = function(x, y, color) {
    if(!this.map[x]) {
      this.map[x] = [];
    }

    if(this.map[x][y]) {
      this.context.fillStyle = color;
      this.map[x][y] = false;
    }
    else {
      this.context.fillStyle = '#ffffff';
      this.map[x][y] = true;
    }

    this.context.fillRect(x, y, 2, 2);
  }

  return Map;
})();