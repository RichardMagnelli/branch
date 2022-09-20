//function start(username) {
//    document.getElementById("userID").innerHTML = "New text!";
//}

function setFirst(){
  var randomWords = ["Hello!", "How are you today?", "Have you been working to the limit?", "What's kickin', little chicken?", "Peek-a-boo!",
  "Ahoy!!!", "I have set my magnetic departure", "I have been restless", "Are we truly unique?", "I met a stranger on a train last night",
"This is the anthem!!", "Where does the Calabas Herb grow?", "Hi friend", "I do not believe we have met", "Where am I??",
"i think this will be fun!", "Ha ha ha is this real?", "Howsit going pardner?", "Whatsup", "bro"];

  var randomIndex = Math.floor(Math.random() * 20);//creates random No. from 1 - 20

  document.getElementById("f1").innerHTML = randomWords[randomIndex];
  //the problem
}

function setSecond(){
  var randomWords = ["Maybe I'm nothing but a shadow on the wall", "He bumped right into me", "I am going to the circus today!", "My mom is really cool, she just discovered a new isotope", "Oh cool!",
"Where do you live?", "How old are you?", "Have we met?", "Am I dreaming?", "I saw you last nite! I think so anyway...",
"Do you grow", "Do you know why that is?", "Thank you", "Yes and...", "I am attacking the darkness",
"I just moved away from my home", "I am a new student", "A half-century has passed...", "Are you newtype?", "I think that this is real"];

  var randomIndex = Math.floor(Math.random() * 20);//creates random No. from 1 - 20

  document.getElementById("f2").innerHTML = randomWords[randomIndex];
  //the problem
}

function setThird(){
  var randomWords = ["none of the faces fit a human form", "It must have been a DREAM", "Oh yes, that is wonderful!", "Oh my mistake", "The true Oneiroxchange begins here!",
"There is a warehouse on Front St. where certain surgical procedures are performed", "You seem different now", "Wow yeah", "Cool it pal", "That's amazing!",
"Thank you for being my friend", "Once this is mass-produced they will put an end to everything", "The wind is whipping against my face", "I saw a comet last night", "The moon is pretty",
"I am in the land where the shadoww lie", "I don't believe you", "Where are you again?", "When will we truly know?", "It was just the other day y'know..."];

  var randomIndex = Math.floor(Math.random() * 20);//creates random No. from 1 - 20

  document.getElementById("f3").innerHTML = randomWords[randomIndex];
  //the problem
}

function setFourth(){
  var randomWords = ["I get so tired, it's like I'm another man", "When we cannot be face to face, this is enough", "I thought so", "Yes exactly!!", "Finally, I agree",
"I thought you would say that", "ahh yes I thought we met before and now I know we did", "heh who cares", "I was just dreaming about that on Thursday", "The sun is about to set here",
"It is raining very hard tonight", "There there...", "Oh haha that sure is something", "Take me to it", "Maybe it IS just a dream",
"A distant star...", "I live far away from you", "It is truly my dream", "When will we truly know?", "I swear I did not mean it!"];

  var randomIndex = Math.floor(Math.random() * 20);//creates random No. from 1 - 20

  document.getElementById("f4").innerHTML = randomWords[randomIndex];
  //the problem
}

function setFifth(){
  var randomWords = ["I'm looking into the heart of darkness", "We shake our heads", "Okay, goodbye!", "Good night!", "Have a wonderful day!",
"When you know, get back to me", "Thanks for chatting with me today", "I do not think you are real, but thank you for everything", "heh whatever", "You have convinced me",
"please believe me again", "Goodbye!", "Aha I knew this would work out", "Thanks for talking!", "Welll it is getting late",
"I started to fall asleep, so I have to go", "Talk to you later", "When we meet again", "We can be together anytime - I'm sure you understand", "Off to the Sea of Stars"];

  var randomIndex = Math.floor(Math.random() * 20);//creates random No. from 1 - 20

  document.getElementById("f5").innerHTML = randomWords[randomIndex];
  //the problem
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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