//function start(username) {
//    document.getElementById("userID").innerHTML = "New text!";
//}

function setFirstPage(){
  setTime();
  setFirst();
  setButton1A();
  setButton1B();
  setButton1C();
}

function setSecondPage(){
  setTime();
  setSecond();
  setButton2A();
  setButton2B();
  setButton2C();
}

function setThirdPage(){
  setTime();
  setThird();
  setButton3A();
  setButton3B();
  setButton3C();
}

function setFourthPage(){
  setTime();
  setFourth();
  setButton4A();
  setButton4B();
  setButton4C();
}

function setFifthPage(){
  setTime();
  setFifth();
  setButton5A();
  setButton5B();
  setButton5C();
}

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

function setTime(){
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
  document.getElementById("publishTime").innerHTML = time;
}

function setFirst(){
  var randomWords = ["Hello!", "How are you today?", "Have you been working to the limit?", "What's kickin', little chicken?", "Peek-a-boo!",
"Ahoy!!!", "I have set my magnetic departure", "I have been restless", "Are we truly unique?", "I met a stranger on a train last night",
"This is the anthem!!", "Where does the Calabas Herb grow?", "Hi friend", "I do not believe we have met", "Where am I??",
"i think this will be fun!", "Ha ha ha is this real?", "Howsit going pardner?", "Whatsup", "bro",
"Do you believe in magick?", "My barber is CRAZY", "I've been feeling sick", "I'm oh so happy today!", "Just getting ready here"];

  var randomIndex = Math.floor(Math.random() * 25);//creates random No. from 1 - 25

  document.getElementById("f1").innerHTML = randomWords[randomIndex];
  //the problem
}

function setSecond(){
  var randomWords = ["Maybe I'm nothing but a shadow on the wall", "He bumped right into me", "I am going to the circus today!", "My mom is really cool, she just discovered a new isotope", "Oh cool!",
"Where do you live?", "How old are you?", "Have we met?", "Am I dreaming?", "I saw you last nite! I think so anyway...",
"Do you grow", "Do you know why that is?", "Thank you", "Yes and...", "I am attacking the darkness",
"I just moved away from my home", "I am a new student", "A half-century has passed...", "Are you newtype?", "I think that this is real",
"My grandfather was an antediluvian sage", "I've been seeing this man", "Kubrick had this idea - 2001", "Ooh that makes me angry", "True enough!"];

  var randomIndex = Math.floor(Math.random() * 25);//creates random No. from 1 - 25

  document.getElementById("f2").innerHTML = randomWords[randomIndex];
  //the problem
}

function setThird(){
  var randomWords = ["none of the faces fit a human form", "It must have been a DREAM", "Oh yes, that is wonderful!", "Oh my mistake", "The true Oneiroxchange begins here!",
"There is a warehouse on Front St. where certain surgical procedures are performed", "You seem different now", "Wow yeah", "Cool it pal", "That's amazing!",
"Thank you for being my friend", "Once this is mass-produced they will put an end to everything", "The wind is whipping against my face", "I saw a comet last night", "The moon is pretty",
"I am in the land where the shadows lie", "I don't believe you", "Where are you again?", "When will we truly know?", "It was just the other day y'know...",
"This man often visits me - in my dreams...", "They call him Django", "Abandon dead", "It was the electrical field of the 25th Dimension", "I knew it!"];

  var randomIndex = Math.floor(Math.random() * 25);//creates random No. from 1 - 25

  document.getElementById("f3").innerHTML = randomWords[randomIndex];
  //the problem
}

function setFourth(){
  var randomWords = ["I get so tired, it's like I'm another man", "When we cannot be face to face, this is enough", "I thought so", "Yes exactly!!", "Finally, I agree",
"I thought you would say that", "ahh yes I thought we met before and now I know we did", "heh who cares", "I was just dreaming about that on Thursday", "The sun is about to set here",
"It is raining very hard tonight", "There there...", "Oh haha that sure is something", "Take me to it", "Maybe it IS just a dream",
"A distant star...", "I live far away from you", "It is truly my dream", "When will we truly know?", "I swear I did not mean it!",
"Ever dream this man?", "His sword is his word", "On planet Jupiter", "Huzzah!", "Tell me more"];

  var randomIndex = Math.floor(Math.random() * 25);//creates random No. from 1 - 25

  document.getElementById("f4").innerHTML = randomWords[randomIndex];
  //the problem
}

function setFifth(){
  var randomWords = ["I'm looking into the heart of darkness", "We shake our heads", "Okay, goodbye!", "Good night!", "Have a wonderful day!",
"When you know, get back to me", "Thanks for chatting with me today", "I do not think you are real, but thank you for everything", "heh whatever", "You have convinced me",
"please believe me again", "Goodbye!", "Aha I knew this would work out", "Thanks for talking!", "Well it is getting late",
"I started to fall asleep, so I have to go", "Talk to you later", "When we meet again", "We can be together anytime - I'm sure you understand", "Off to the Sea of Stars",
"Are his motives pure?", "I believe in you!", "All I know, is I want to believe", "Off to sleep I go!", "Maybe next time..."];

  var randomIndex = Math.floor(Math.random() * 25);//creates random No. from 1 - 25

  document.getElementById("f5").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton1A(){
  var randomWords = ["Hello!", "Yo", "How are you?", "Let's talk", "Salutations",
  "Hoo brother", "Flag on the moon - how did it get there?", "Just getting set up", "Hooray!", "I'm so happy"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button1A").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton1B(){
  var randomWords = ["Good afternoon!", "Howdy", "Who are you?", "I don't know what this is", "Please take care of me",
"I think I heard about that", "I see ya", "Are you real?", "Some image of man", "Hello World!"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button1B").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton1C(){
  var randomWords = ["Huh?!", "Do I know you?", "You're it!", "I am afraid", "I am looking for someone with a focus and a temper",
  "Hey buddy", "Ya let's go!", "Having trouble?", "Hiya", "What day is it?"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button1C").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton2A(){
  var randomWords = ["Yes that's true", "When is that?", "I used to believe that", "It's a rainy day, sunshine girl", "Praise the Sun!",
"Hmm alright", "Oh for real?!", "I'm a human", "Tell me more", "Just common sense"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button2A").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton2B(){
  var randomWords = ["I don't believe you", "Why is that?", "Just tell me about it", "I'm trying to understand", "Do you read me?",
"Don't tell me that!", "Was it truly out there?", "No", "Majestic", "The most fantasic story"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button2B").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton2C(){
  var randomWords = ["So sayeth the wise Aluando", "That's not a real thing", "I dreamed I dream", "I don't think so", "A lot of people suffer",
"Yes", "Kinda", "He's a maniac", "Abandon it", "How's that?"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button2C").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton3A(){
  var randomWords = ["Yes", "There is a bad moon on the rise", "Automatic writing is the future", "The mind connection has been made", "We all have some dreams",
"What was it again?", "Yeah I just did too", "Abandon it", "Yeah same", "Sounds awful", "Approved"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button3A").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton3B(){
  var randomWords = ["No", "May all your dreams come true", "How did you know?", "Hmmm...", "Tell me about it",
"Are you one of them too?", "What is your sign?", "Holy mackeral", "Ever wanted to be someone else?", "I did too"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button3B").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton3C(){
  var randomWords = ["It had to be told", "We could meet up", "YEAH I love that!", "What?", "Who cares about that?",
"Does anyone know?", "With a bitter diet, it disappears", "Saw the movie", "Shout for all the people", "Oh wow"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button3C").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton4A(){
  var randomWords = ["I don't know about that", "Can you define that?", "Maybe", "I don't know", "I don't like it",
"haha", "Nothing bothers me", "I feel you", "Never heard that before", "Okay"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button4A").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton4B(){
  var randomWords = ["That's wonderful", "Get lost", "What is the truth", "No way", "It's high time",
"Hey", "Why?", "Huh", "What's the meaning of this?", "Got it"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button4B").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton4C(){
  var randomWords = ["It is the duty of the future to be dangerous", "Yay", "It's all around us", "The path you tread is narrow", "Heck no!",
"Oof", "Nah, don't even bother", "That must be nearly gone", "It's time", "Oh no"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button4C").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton5A(){
  var randomWords = ["Goodbye", "You are welcome", "I'm confused", "Is anyone so daring?", "Well, sure",
"The end", "Donut plains", "We'll have to see to it", "It's up to us", "Yep haha!"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button5A").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton5B(){
  var randomWords = ["That sure was something", "Thank you", "LOL", "Maybe it is", "That was weird",
"Don't know", "Fig newtons", "I'm only gone tomorrow and here today", "Forever - fornever", "I'm outta here!"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button5B").innerHTML = randomWords[randomIndex];
  //the problem
}

function setButton5C(){
  var randomWords = ["Thanks so much", "Good night", "I will come back", "...", "I am a shadow",
"That was cool", "Till the end of the night", "Screen fades", "Time for me to leave", "So long"];

  var randomIndex = Math.floor(Math.random() * 10);//creates random No. from 1 - 10

  document.getElementById("button5C").innerHTML = randomWords[randomIndex];
  //the problem
}

/*
function setCookie(cname,cinnerHTML,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cinnerHTML + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
//      alert("Welcome again " + user);
    } else {
//      user = prompt("Please enter your name:","");
        user =
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }
  */