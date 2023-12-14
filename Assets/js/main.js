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
1.5,
[],
[2],
"Zombies are common undead hostile mobs that deal melee damage",
[],
[],
5);

AdultZombie.displayMobDetails(document.getElementById("main-section"));
  
//Skeleton
  