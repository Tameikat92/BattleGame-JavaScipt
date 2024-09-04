document.write("BattleShip Functions")

// arrow function
const randomDamage = () => {
    return Math.floor(Math.random() * 10 + 1);
};

// arrow function with parameters
const chooseOption = (opt1,opt2) => {
let randNum = Math.floor(Math.random() * 2);

return randNum === 0 ? opt1:opt2;

};
// funtion expression
const attackPlayer = function(health)  {
    return  health - randomDamage();

};

const logHealth = (player,health) => {
console.log(`${player} health: ${health}`);
}


console.log("test")

const logDeath = (winner,loser) => {
    console.log(`${winner} defeat ${loser}`);
}

const isDead = (health) => {
   if (health<=0) {
    return true;
    } else {
        return false;
    }
}
 function fight(player1,player2,player1Health,player2Health){
    

while(true){
    const attacker = chooseOption(player1,player2); // moved inside of the loop

   if (attacker === player1){
   player2Health = attackPlayer(player2Health);
   logHealth(player2,player2Health);
   
if (isDead(player2Health)) {
    logDeath(player1,player2);
    break;
    }
} else {
    player1Health = attackPlayer(player1Health);
    logHealth(player1,player1Health);  

if (isDead(player1Health)){
    logDeath(player2,player1);
    break;
}
}   
}
 }
 fight( "Mitch",  "Adam",  100, 100);


//  const player1 = prompt("Enter a famous heavy weight boxer");
//  const player2 = prompt("Enter a famous light weight boxer ");
//  const player1Health = parseInt(prompt("Enter the number 100 for boxer 1's health "),10);
//  const player2Health = parseInt(prompt("Enter the number 100 for boxer 2's health "),10);

//  fight(player1,player2,player1Health,player2Health);


const fullNmae = "Mitch Cuckovich";
const age = 25;
const pineApplePizza = true;
const birthday = "January 24";

const lifeEvents = ["I was born in Troy, Michigan","I went to Hope College.","I participated in junior olympics when I was 10 years old.","I love to be in nature."]

if (pineApplePizza){
    console.log(`My name is ${fullNmae} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`)
} else {
    console.log(`My name is ${fullNmae} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`)

}
let i = 0;

while(i < lifeEvents.length) {
    console.log(lifeEvents[i]);
    i = i + 1;

}

let counter = 0;
 while(true){
   let randomNumber = Math.floor(Math.random()* 10)+1;
   if(randomNumber !== 5) {
    console.log(`${randomNumber} !== 5.`)
    counter ++;
   } else {
    counter++;
    console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
    break;
   }
 }

