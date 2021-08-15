function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }





    // Simple responses
  /*   if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
} */

    if (input == "hello") {
        return "Hello there!";
    } else if  (input =="Hello"){
        return "I am Great !";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if  (input =="how are you?"){
        return "I am Great !";
    } else if  (input == "Do you love me?"){
        return "Maybe !";
    } else if  (input == "do you love me?"){
        return "Maybe !";
    }else if  (input == "What time is it"){
        return "Check your clock lazy bum!";
    } else if (input == "hi"){
        return "What's Up?"; 
    } else if (input == "good"){
        return "Any plans for tonight?"; 
    } else if (input == "I love ice cream"){
        return "Nice! Me too 😋"; 
       
}else {
    return "Try asking something else!";
}
}