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
    this._img = HostileMobs.hostileMobSBaseUrl + imgPath;
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

  static hostileMobSBaseUrl = "./Assets/images/Mobs/HostileMobs/";
  static miscBaseUrl = "./Assets/images/misc/Icons/";

  _createHeader = (variants, targetElement) => {
    const mobHeaderElement = document.createElement("header");

    const mobNameElement = document.createElement("h2");
    mobNameElement.textContent = this._name;
    mobHeaderElement.appendChild(mobNameElement);

    const variantsList = document.createElement("ul");
    variantsList.classList.add("variants-list");

    if (Array.isArray(variants) && variants.length > 0) {

      variants.forEach((variant) => {
        const variantsListElement = document.createElement("li");

        const variantElement = document.createElement("a");
        variantElement.textContent = variant;

        variantElement.addEventListener("click", () => {
          const formattedVariant = variant.replace(/\s+/g, '').toLowerCase();
          this._img = HostileMobs.hostileMobSBaseUrl + formattedVariant + ".jpg";

          while (targetElement.firstChild) {
            targetElement.removeChild(targetElement.firstChild);
          }

          this.displayMobDetails(targetElement);
        })

        variantsListElement.appendChild(variantElement);
        variantsList.appendChild(variantsListElement);
      });
    }

    if (variantsList) {
      mobHeaderElement.appendChild(variantsList);
    }

    return mobHeaderElement;
  }

  _createParagraph = (property, value, iconTypes) => {
    const pElement = document.createElement("p");
    pElement.textContent = `${property}: ${value}`;
    
    if (Array.isArray(iconTypes) && iconTypes.length > 0) {
      const imgSpanElement = document.createElement("span");
      imgSpanElement.classList.add("image-icon");

      iconTypes.forEach((iconType) => {
        const iconImg = document.createElement("img");
        iconImg.src = HostileMobs.miscBaseUrl + iconType;
        iconImg.alt = property;
        imgSpanElement.appendChild(iconImg);

        pElement.classList.add("iconText");
        pElement.appendChild(imgSpanElement);
      });
    }

    return pElement;
  };

  displayMobDetails(targetElement) {
    const mobFigureElement = document.createElement("figure");
    mobFigureElement.classList.add("hostile-mob");

    mobFigureElement.appendChild(this._createHeader(["Adult Zombie ", "Baby Zombie"], targetElement));

    const mobImageElement = document.createElement("img");
    mobImageElement.src = this._img;
    mobImageElement.alt = this._name;
    mobImageElement.classList.add("mob-image");

    mobImageElement.addEventListener("click", () => {
      targetElement.classList.add("modal-blur");
      const mobModalFigure = document.createElement("figure");
      mobModalFigure.classList.add("mob-modal");

      const mobModalImage = document.createElement("img");
      mobModalImage.src = this._img;

      mobModalFigure.appendChild(mobModalImage);
      document.body.appendChild(mobModalFigure);

      mobModalFigure.addEventListener("click", () => {
        targetElement.classList.remove("modal-blur");
        mobModalFigure.remove();
      });
    });

    const mobFigcaptionElement = document.createElement("figcaption");

    //Paragraph helper function
    mobFigcaptionElement.appendChild(this._createParagraph("Health", this._hp, ["Heart.png"]));
    mobFigcaptionElement.appendChild(this._createParagraph("Classification", this._type));
    mobFigcaptionElement.appendChild(this._createParagraph("Behavior", this._behavior));
    mobFigcaptionElement.appendChild(this._createParagraph("Spawn", this._spawn));
    mobFigcaptionElement.appendChild(this._createParagraph("attack type", this._attackType));
    mobFigcaptionElement.appendChild(this._createParagraph("damage", this._dmg, ["Heart.png"]));
    mobFigcaptionElement.appendChild(this._createParagraph("Natural equipment", this._equipment, ["Iron_Sword.png", "Iron_Shovel.png", "Iron_Chestplate.png"]));
    mobFigcaptionElement.appendChild(this._createParagraph("Armor", this._armor, ["Armor-icon.png"]));
    mobFigcaptionElement.appendChild(this._createParagraph("Description", this._desc));
    mobFigcaptionElement.appendChild(this._createParagraph("Common Drops", this._drops, ["Rotten_Flesh.png"]));
    mobFigcaptionElement.appendChild(this._createParagraph("Rare Drops", this._rareDrops, ["Iron_Ingot.png", "Potato.png", "Carrot.png"]));
    mobFigcaptionElement.appendChild(this._createParagraph("Experience", this._xp, ["Exp_Orb.png"]));

    mobFigureElement.appendChild(mobImageElement);
    mobFigureElement.appendChild(mobFigcaptionElement);

    targetElement.appendChild(mobFigureElement);
  }
};

export default HostileMobs;