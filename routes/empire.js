var express = require('express'),
    router = express.Router();

router.get('/',function(req,res){
  res.render('empire', { title: 'Imperial Starfleet: Invaders of Richmond', subtitle: '' });
});

module.exports = router;
