var express = require('express'),
    path = require('path'),
    jade = require('jade'),
    empire = require('./routes/empire'),
    targets = require('./routes/targets');

var app = new express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/empire', empire);
app.use('/targets', targets);

app.get('/',function(req,res){
  res.render('layout', { title: 'Empire Over Richmond', subtitle: '' });
});

app.listen(3000)
