//Class constructor to create the hostile mobs objects
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
    armor,
    details,
    drops,
    rareDrops,
    exp
  ) {
    this._name = name;
    this._img = HostileMobs.baseUrl + imgPath;
    this._hp = health;
    this._type = classType;
    this._behavior = behavior;
    this._spawn = spawn;
    this._attackType = attack;
    this._dmg = damage;
    this._equipment = equipment;
    this._armor = armor;
    this._desc = details;
    this._drops = drops;
    this._rareDrops = rareDrops;
    this._xp = exp;
  }

  static baseUrl = "../Assets/images/hostileMobs/"

  _createParagraph = (property, value) => {
    const pElement = document.createElement("p");
    pElement.textContent = `${property}, ${value}`;
    return pElement;
  };

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

    //Using the helper function
    mobFigcaptionElement.appendChild(this._createParagraph("Health", this._hp));
    mobFigcaptionElement.appendChild(this._createParagraph("Type", this._type));
    mobFigcaptionElement.appendChild(this._createParagraph("Behavior", this._behavior));
    mobFigcaptionElement.appendChild(this._createParagraph("Spawn", this._spawn));
    mobFigcaptionElement.appendChild(this._createParagraph("attack type", this._attackType));
    mobFigcaptionElement.appendChild(this._createParagraph("damage", this._dmg));
    mobFigcaptionElement.appendChild(this._createParagraph("equipment", this._equipment));
    mobFigcaptionElement.appendChild(this._createParagraph("Armor", this._armor));
    mobFigcaptionElement.appendChild(this._createParagraph("Description", this._desc));
    mobFigcaptionElement.appendChild(this._createParagraph("Drops", this._drops));
    mobFigcaptionElement.appendChild(this._createParagraph("Rare Drops", this._rareDrops));
    mobFigcaptionElement.appendChild(this._createParagraph("Experience", this._xp));

    mobFigureElement.appendChild(mobHeaderElement);
    mobFigureElement.appendChild(mobImageElement);
    mobFigureElement.appendChild(mobFigcaptionElement);

    targetElement.appendChild(mobFigureElement);
  }
};

export default HostileMobs;