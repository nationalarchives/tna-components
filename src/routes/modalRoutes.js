const express = require('express'),
  modalRouter = express.Router();

modalRouter.route('/')
.get((req,res) => {
    res.render('wteg-modal', {});
});

module.exports = modalRouter;
