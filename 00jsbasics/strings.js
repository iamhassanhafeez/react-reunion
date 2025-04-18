const name = "Hassan"
const repoCount = 40
//new and modern method: strig interpolation
//console.log(`Hi this is ${name}. I have ${repoCount} repos on my Github.`);
const myName = new String ("Hassan Hafeez")
//console.log(myName[3]);
const newName = myName.substring(0,4)
//console.log(newName);
const anotherName = myName.slice(4,10)
//console.log(anotherName);
const anothernewName = myName.slice(-10,14)
// we can pass -ve values in substring
//console.log(anothernewName);

//========== Trim 
const myMessage = "         This is my complete message. I'll play with it.             "
const newMessage = myMessage.trim()
// trim removes all spaces from beginning and end
//console.log(newMessage);
console.log(newMessage.replace('\'ll', '-'));

