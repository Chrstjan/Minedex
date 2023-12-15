import HostileMobs from './hostileMobs.js';

//Adult Zombie\Baby Zombie
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
    5
    );

//Skeleton
const Skeleton = new HostileMobs(
    "Skeleton",
    "Skeleton.jpg",
    20,
    "Undead",
    "Hostile",
    "Light level of 0",
    "Ranged",
    `1.5 - 2`,
    [],
    [0],
    "Skeletons are common undead hostile mobs that deal ranged damage with bow & arrows",
    [],
    [],
    5
  );

  export {AdultZombie, Skeleton};