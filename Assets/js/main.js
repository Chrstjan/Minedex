import HostileMobs from './mobs/hostileMobs.js';

//Creating the hostile mobs

//Adult Zombie
const AdultZombie = new HostileMobs(
"Zombie",
"AdultZombie.jpg",
20,
"Undead",
"Hostile",
"Light level of 0",
"Melee",
3,
[],
[2],
"Zombies are common undead hostile mobs that deal melee damage",
[],
["Iron Ingot", "Carrot", "baked potato"],
5);

AdultZombie.displayMobDetails(document.getElementById("main-section"));
  
  //Baby Zombie
  