"use strict";

const router = require("express").Router();

const {
  list,
  create,
  read,
  update,
  delete: _delete,
} = require("../controllers/passenger");

router.route("/passengers").get(list).post(create);
router.route("/passengers/:id").get(read).put(update).delete(_delete);

module.exports = router;
