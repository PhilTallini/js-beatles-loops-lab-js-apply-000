
function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArr.push(musician + ' plays ' + instrument);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var newArr = [];
  var i = 0;
  while (i < facts.length) {
    var fact = facts[i];
    newArr.push(fact + '!!!');
    i++;
  }

  return newArr;
}

function iLoveBeatles(num) {
  var text = "";
  var i = 0;
  do {
    text += "The number is " + i;
    i++;
  }
  while (i < 5);

}



