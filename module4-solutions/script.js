(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
    var name = names[i].toLowerCase();
    var firstLetter = name.charAt(0);
    // console.log(helloSpeaker);
    if (firstLetter === 'j') {
      console.log(byeSpeaker.speak(names[i]));
    } else {
      console.log(helloSpeaker.speak(names[i]));
    }

  }
  return;
})();

