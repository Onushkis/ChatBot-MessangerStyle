function talk() {
  var know = {
    Hello: "Hi am  A ChatBot",
    Hi: "What's Up?",
    "How are you?": "I am Great !",
    "What time is it" : "Check your clock lazy bum!",
    "What is the time": "Check your clock lazy bum!",
    "Do you love me?" : "Maybe",
    
    Bye: "Bye, Have A Great Day ! ! !",
    "What is your favourite color": "Well, I Think Blue Is.",
  };
  var user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML  +=user+ "<br>";
  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user]+ "<br>";
  } else {
    document.getElementById("chatLog").innerHTML ="I do not understand";
  }
}
