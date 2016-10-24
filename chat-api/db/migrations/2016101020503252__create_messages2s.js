'use strict';

const Nodal = require('nodal');

class CreateMessages2s extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016101020503252;
  }

  up() {

    return [
      this.createTable("messages2s", [{"name":"user_id","type":"int"},{"name":"user_name","type":"string"},{"name":"user_mail","type":"string"},{"name":"message","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("messages2s")
    ];

  }

}

module.exports = CreateMessages2s;
