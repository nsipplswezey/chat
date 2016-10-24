'use strict';

const Nodal = require('nodal');

class Messages2 extends Nodal.Model {} //syntax of an extend

Messages2.setDatabase(Nodal.require('db/main.js'));
Messages2.setSchema(Nodal.my.Schema.models.Messages2);

module.exports = Messages2;
