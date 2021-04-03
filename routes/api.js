'use strict';

const Translator = require('../components/translator.js');
let translator = new Translator();
module.exports = function (app) {
  
  let validLocales = ['american-to-british','british-to-american']

  app.post('/api/translate',(req, res) => {
      if(!req.body.text || !req.body.locale){
          res.send({error: req.body.text==="" ?  'No text to translate':'Required field(s) missing'})
       
      }
      else if(!validLocales.includes(req.body.locale)){
        res.send({error: 'Invalid value for locale field'})
      }
      else {
        res.send({text:req.body.text,translation:translator.translate(req.body.text,req.body.locale)});
      }
    });
};