// //rendu 1
// let personnage = {
//   name:'John',
//   health: 10,
// }

// const musics = ['Anissa','Musique1','Musique2','Musique3','Musique4']

// let journey = {
//   changes : 0,
//   redlights : 30,
// }

// function playMusic(){
//   return Math.floor(Math.random(5) * (5 - 0)) + 0;
// } 

// function takeTaxi(){
//   while(journey.redlights > 0){
//     if (playMusic() == 0){
//       personnage.health --, 
//       journey.changes ++, 
//       console.log ('Anissa à la radio. John perd 1 pv et change de taxi. Sa santé mentale est à '+ personnage.health + ' , il a pris ' + journey.changes + ' taxis à ce stade et il lui reste ' + journey.redlights + 'feux rouges. ')
//     } else{
//       console.log (musics[playMusic()] + ' est joué à la radio')
//     }
//     journey.redlights--
//     if(journey.redlights == 0){
//       console.log(' John est safe ')
//       break
//     }
    
//     else if(personnage.health == 0){
//       console.log('Explosion')
//       break
//     }
   
//   }
  
// }

// takeTaxi();


//Rendu 2

let killer = {
  name : 'Jason',
  hp : 100,
}

class Personnages{
  constructor(name,carac,probadeath){
    this.name = name
    this.carac = carac
    this.probadeath = probadeath
  }
}

  const names = ['Olivia', 'MC', 'Chad', 'Quentin', 'Victor']
  let carac = ['ringard', 'sportif','drôle','brune','tapette']
  let fate = ['death','dodge','deathDmg']

  function randomName(){
    return Math.floor(Math.random()*5)
  }
  function randomCarac(){
    return Math.floor(Math.random()*5) 
  }
  function randomFate(){
    return Math.floor(Math.random()*3)
  }
  let Fighter1 = new Personnages(names[randomName()], carac[randomCarac()], fate[randomFate()])
  let Fighter2 = new Personnages(names[randomName()], carac[randomCarac()], fate[randomFate()])
  let Fighter3 = new Personnages(names[randomName()], carac[randomCarac()], fate[randomFate()])
  let Fighter4 = new Personnages(names[randomName()], carac[randomCarac()], fate[randomFate()])
  let Fighter5 = new Personnages(names[randomName()], carac[randomCarac()], fate[randomFate()])

  let Fighters = [Fighter1, Fighter2, Fighter3, Fighter4, Fighter5]

  console.log(Fighter1)

  

  