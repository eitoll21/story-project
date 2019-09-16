
function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="The Three Little Pigs"; // title

  document.getElementById('author').innerHTML="Eric and AJ"; // author


  
  // All of your code goes under here
  

  var story = 'Once upon a time, there were three little pigs. Each pig had to '+ build() +' their own house. Then one day a big bad wolf came along and askede ach pig if he could come in. '+ asked() +'  If the pig said no the wolf would attempt to blow their houses down. ' + blow() + 'The wolf is going to attempt to blow the next house down' + blow() + ' The wolf is going to attempt to blow the last house down. ' + blow() + 'The pig would '+ run() +' to the other pigs house if his house was blown down.'

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function build() {
  let strength1 = Math.floor(random(1, 6)); // Random number rounded down
  let strength2 = Math.floor(random(1, 6)) 
  let strength3 = Math.floor(random(1, 6))
  return "build"
}

//Wolf asks the pigs to come in
function asked() {
  if(random(1, 6) == true) {
    return "The little pig let the wolf inside and got eaten."
  } else {
    return "The pig knew the wolf wanted to eat him, so he didn't let him in.";
  }
}

//Wolf blows down houses
function blow() {
  let insp = random(1, 6);
  if(insp > 3) {
    return "The wolf blows down the house!"
  } else {
    return "The wolf moves on to the next house."
  }
}
//Pig runs to the next house
function run() {
  let insp = random(1, 6);
  if(insp > 3){
    return "The pig escapes from the wolf"
  }
  else{
 return "The wolf eats the pig"
  }
}
//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    