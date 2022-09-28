/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack){
console.log("jon snow has better attack than jamie lannister")

} else if (jamieLannisterAttack > jonSnowAttack){

    console.log("jamie lannister has a better attack")
}

else {
console.log("jamie lannister has the same attack than jon snow")

}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {

    console.log("Jon snow has been slain.")
} else {

    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    
    console.log(`John Snows health health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25 

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {

    console.log("Jon Snow has been slain")
}
else {

    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`John Snows health health is down to ${jonSnowHealth}`)
}

if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {

    jonSnowHealth += 50
}

console.log('Jon Snow health after the health kit is' + jonSnowHealth)

let coinLandsHeads = true

if (coinLandsHeads) {

    console.log("Fight continues")
} else {

    console.log("John is allowed to run")
}

for (let i = 0; i<5; i++){
jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
console.log("johns health is now " + jonSnowHealth)
}

//Post-lab assignment 1:
//Write logic in the for loop that detects if Jon's health gets 0 or less, in which case, you will print that Jon is dead
//   and you will stop futher loop iterations (see the "break" JS keyword for leaving a loop early)

//Post-lab assignment 2:
//Write the for loop (including the logic your wrote for the first assignement) as a while loop.
//   it should behave exactly the same


