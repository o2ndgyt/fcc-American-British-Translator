const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();
let trans = [{
    text: 'Mangoes are my favorite fruit.',
    translatedText: 'Mangoes are my <span class="highlight">favourite</span> fruit.',
    locale: 'american-to-british'
  },
  {
    text: 'I ate yogurt for breakfast.',
    translatedText: 'I ate <span class="highlight">yoghurt</span> for breakfast.',
    locale: 'american-to-british'
  },
  {
    text: 'We had a party at my friend\'s condo.',
    translatedText: 'We had a party at my friend\'s <span class="highlight">flat</span>.',
    locale: 'american-to-british'
  },
  {
    text: 'Can you toss this in the trashcan for me?',
    translatedText: 'Can you toss this in the <span class="highlight">bin</span> for me?',
    locale: 'american-to-british'
  },
  {
    text: 'The parking lot was full.',
    translatedText: 'The <span class="highlight">car park</span> was full.',
    locale: 'american-to-british'
  },
  {
    text: 'Like a high tech Rube Goldberg machine.',
    translatedText: 'Like a high tech <span class="highlight">Heath Robinson device</span>.',
    locale: 'american-to-british'
  },
  {
    text: 'To play hooky means to skip class or work.',
    translatedText: 'To <span class="highlight">bunk off</span> means to skip class or work.',
    locale: 'american-to-british'
  },
  {
    text: 'No Mr. Bond, I expect you to die.',
    translatedText: 'No <span class="highlight">Mr</span> Bond, I expect you to die.',
    locale: 'american-to-british'
  },
  {
    text: 'Dr. Grosh will see you now.',
    translatedText: '<span class="highlight">Dr</span> Grosh will see you now.',
    locale: 'american-to-british'
  },
  {
    text: 'Lunch is at 12:15 today.',
    translatedText: 'Lunch is at <span class="highlight">12.15</span> today.',
    locale: 'american-to-british'
  },
  {
    text: 'We watched the footie match for a while.',
    translatedText: 'We watched the <span class="highlight">soccer</span> match for a while.',
    locale: 'british-to-american'
  },
  {
    text: 'Paracetamol takes up to an hour to work.',
    translatedText: '<span class="highlight">Tylenol</span> takes up to an hour to work.',
    locale: 'british-to-american'
  },
  {
    text: 'First, caramelise the onions.',
    translatedText: 'First, <span class="highlight">caramelize</span> the onions.',
    locale: 'british-to-american'
  },
  {
    text: 'I spent the bank holiday at the funfair.',
    translatedText: 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.',
    locale: 'british-to-american'
  },
  {
    text: 'I had a bicky then went to the chippy.',
    translatedText: 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.',
    locale: 'british-to-american'
  },
  {
    text: 'I\'ve just got bits and bobs in my bum bag.',
    translatedText: 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.',
    locale: 'british-to-american'
  },
  {
    text: 'The car boot sale at Boxted Airfield was called off.',
    translatedText: 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.',
    locale: 'british-to-american'
  },
  {
    text: 'Have you met Mrs Kalyani?',
    translatedText: 'Have you met <span class="highlight">Mrs.</span> Kalyani?',
    locale: 'british-to-american'
  },
  {
    text: 'Prof Joyner of King\'s College, London.',
    translatedText: '<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
    locale: 'british-to-american'
  },
  {
    text: 'Tea time is usually around 4 or 4.30.',
    translatedText: 'Tea time is usually around 4 or <span class="highlight">4:30</span>.',
    locale: 'british-to-american'
  },
  {
    text: 'Mangoes are my favorite fruit.',
    translatedText: 'Mangoes are my <span class="highlight">favourite</span> fruit.',
    locale: 'american-to-british'
  },
  {
    text: 'I ate yogurt for breakfast.',
    translatedText: 'I ate <span class="highlight">yoghurt</span> for breakfast.',
    locale: 'american-to-british'
  },
  {
    text: 'We watched the footie match for a while.',
    translatedText: 'We watched the <span class="highlight">soccer</span> match for a while.',
    locale: 'british-to-american'
  },
  {
    text: 'Paracetamol takes up to an hour to work.',
    translatedText: '<span class="highlight">Tylenol</span> takes up to an hour to work.',
    locale: 'british-to-american'
  }

];

suite('Unit Tests ->', function () {

  trans.forEach((item) => {

    test(`Translate ${item.text} to ${item.locale}`, function (done) {
      assert.equal(item.translatedText, translator.translate(item.text, item.locale));

      done();
    });
  });

});