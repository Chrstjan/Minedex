class HostileMobs {
  constructor(
    name,
    imgPath,
    health,
    classType,
    behavior,
    spawn,
    attack,
    damage,
    equipment,
    details,
    drops
  ) {
    this._name = name;
    this._img = imgPath;
    this._hp = health;
    this._type = classType;
    this._behavior = behavior;
    this._spawn = spawn;
    this._attackType = attack;
    this._dmg = damage;
    this._equipment = equipment;
    this._desc = details;
    this._drops = drops;
  }

  getDescription() {
    return `The ${this._name} is a ${this._type} mob that has ${this._behavior} behavior. It has ${this._hp} health and deals ${this._dmg} damage`;
  }

  displayMobDetails(targetElement) {
    const mobFigureElement = document.createElement("figure");

    const mobHeaderElement = document.createElement("header");
    const mobNameElement = document.createElement("h2");
    mobNameElement.textContent = this._name;
    mobHeaderElement.appendChild(mobNameElement);

    const mobImageElement = document.createElement("img");
    mobImageElement.src = this._img;
    mobImageElement.alt = this._name;

    const mobFigcaptionElement = document.createElement("figcaption");
  }
}
