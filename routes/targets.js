var express = require('express'),
    router = express.Router();

router.get('/',function(req,res){
  res.render('targets', { title: 'Empire Fleet: Invasion of Richmond', subtitle: '' });
});

module.exports = router;
