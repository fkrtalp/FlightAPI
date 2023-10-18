"use strict";

const router = require("express").Router();

const {
  list,
  create,
  read,
  update,
  delete: _delete,
} = require("../controllers/reservation");

router.route("/reservations").get(list).post(create);
router.route("/reservations/:id").get(read).put(update).delete(_delete);

module.exports = router;
