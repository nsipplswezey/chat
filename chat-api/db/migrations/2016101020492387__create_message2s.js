'use strict';

const Nodal = require('nodal');

class CreateMessage2s extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016101020492387;
  }

  up() {

    return [
      this.createTable("message2s", [])
    ];

  }

  down() {

    return [
      this.dropTable("message2s")
    ];

  }

}

module.exports = CreateMessage2s;
