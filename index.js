function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return "This one is on me!";
  }else if (distance < 2000){
    return "That will be twenty bucks.";
  }else if (distance < 2500){
    return "I will gladly take your thirty bucks.";
  }else return "No can do.";
}

function ternaryCheckCity(destination){
  // Write your code here!
  let tripPossible;
  destination == "NYC" ? tripPossible = ("Ok, sounds good.") : tripPossible = ("No go.");
  return tripPossible;
}

function switchOnCharmFromTip(amount){
  // Write your code here!
  switch(amount){
    case "generous" :
      return "Thank you so much.";
      break;
    case "not as generous" :
      return "Thank you.";
      break;
    default :
      return "Bye.";
  }
}