'use strict';

const directions = [ 'east', 'west', 'north', 'south' ];

function Robot() {
  this.orient = function (currentDirection) {
    if (directions.includes(currentDirection)) {
      this.bearing = currentDirection
    } else {
      throw(new Error("Invalid Robot Bearing"))
    }
  };
  this.turnRight = function () {
    switch(this.bearing) {
      case 'east': {
        this.bearing = 'south'
        break
      }
      case 'south': {
        this.bearing = 'west'
        break
      }
      case 'west': {
        this.bearing = 'north'
        break
      }
      case 'north': {
        this.bearing = 'east'
        break
      }
      default: {
        this.bearing = this.bearing
        break
      }
    }
  };
  this.turnLeft = function () {
    switch(this.bearing) {
      case 'east': {
        this.bearing = 'north'
        break
      }
      case 'north': {
        this.bearing = 'west'
        break
      }
      case 'west': {
        this.bearing = 'south'
        break
      }
      case 'south': {
        this.bearing = 'east'
        break
      }
      default: {
        this.bearing = this.bearing
        break
      }
    }
  };
  // make hash of above functions; e.g. for turnleft, {east: north, etc.}
  this.at = function (intOne, intTwo) {
    this.coordinates = []
    this.coordinates.push(intOne)
    this.coordinates.push(intTwo)
  };
  this.advance = function () {
    switch(this.bearing) {
      case 'east': {
        this.coordinates[0] += 1
        break
      }
      case 'west': {
        this.coordinates[0] -= 1
        break
      }
      case 'north': {
        this.coordinates[1] += 1
        break
      }
      case 'south': {
        this.coordinates[1] -= 1
        break
      }
      default: {
        this.coordinates = this.coordinates
        break
      }
    }
  };
  this.instructions = function(instructions) {
    return instructions.split("").map(function(letter) {
      if (letter === "R") {
        return "turnRight"
      } else if (letter === "L") {
        return "turnLeft"
      } else if (letter === "A") {
        return "advance"
      }
    })
  };
  this.place = function(obj) {
    this.coordinates = [obj.x, obj.y];
    this.bearing = obj.direction;
  };
  this.evaluate = function(instString) {
    instString.split("").forEach(letter => {
      if (letter === "R") {
        this.turnRight();
      } else if (letter === "L") {
        this.turnLeft();
      } else if (letter === "A") {
        this.advance();
      }
    })
  };
}
