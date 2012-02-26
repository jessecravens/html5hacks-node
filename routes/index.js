
// GET home page
  
  exports.index = function(req, res){
    res.render('index', { title: 'html5hacks-node' })
  };

// GET chapters
  exports.setup = function(req, res){
    res.render('setup', { title: 'Setting Up a Killer HTML5 Hacking Environment' })
  };

  exports.chapter1 = function(req, res){
    res.render('chapter1', { title: 'Chapter 1 Hacking the Semantical Way' })
  };

  exports.chapter2 = function(req, res){
    res.render('chapter2', { title: 'Chapter 2' })
  };

  exports.chapter3 = function(req, res){
    res.render('chapter3', { title: 'Chapter 3' })
  };

  exports.chapter4 = function(req, res){
    res.render('chapter4', { title: 'Chapter 4' })
  };

  exports.chapter5 = function(req, res){
    res.render('chapter5', { title: 'Chapter 5' })
  };

  exports.chapter6 = function(req, res){
    res.render('chapter6', { title: 'Chapter 6' })
  };

  exports.chapter7 = function(req, res){
    res.render('chapter7', { title: 'Chapter 7' })
  };

  exports.chapter8 = function(req, res){
    res.render('chapter8', { title: 'Chapter 8' })
  };

  exports.chapter9 = function(req, res){
    res.render('chapter9', { title: 'Chapter 9' })
  };