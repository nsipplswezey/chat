'use strict';

const Nodal = require('nodal');

class CreateMessages extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016101020411484;
  }

  up() {

    return [
      this.createTable("messages", [{"name":"user_id","type":"int"},{"name":"message","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("messages")
    ];

  }

}

module.exports = CreateMessages;
