const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  var uuid = Date.now().toString(36);
  var date = new Date().toISOString();
  var retv = { 'status':200, 'id':uuid, 'msg':'Hello Node js! This is Node JS rest api!', 'time':date };

  res.json(retv);
});

module.exports = router