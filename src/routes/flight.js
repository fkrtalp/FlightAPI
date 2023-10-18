"use strict";

const router = require("express").Router();

const {
  list,
  create,
  read,
  update,
  delete: _delete,
} = require("../controllers/flight");

router.route("/flights").get(list).post(create);
router.route("/flights/:id").get(read).put(update).delete(_delete);

module.exports = router;
