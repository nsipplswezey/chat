'use strict';

const Nodal = require('nodal');
const Messages2 = Nodal.require('app/models/messages2.js');

class V1Messages2Controller extends Nodal.Controller {

  index() {

    Messages2.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Messages2.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {
    console.log('PARAMS BODY');
    console.log(this.params.body);
    console.log('PARAMS BODY');
    Messages2.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Messages2.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Messages2.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1Messages2Controller;
