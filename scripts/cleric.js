import DnDaApi from "./dndApi.js";
import createClassElement from "./createClassElement.js";

const api = new DnDaApi();
const classinfo = await api.getClass("cleric");

const className = classinfo.name.toLowerCase();
const sectionEl = document.querySelector(".features");
const taglineEl = createClassElement("p", "features__tagline", sectionEl);
taglineEl.innerText = "As a " + className + " you get these features:";
const hitPointsDivEl = createClassElement(
  "div",
  "features__hitpoints",
  sectionEl
);
const hitPointsTitleEl = createClassElement(
  "h3",
  "features__subtitle",
  hitPointsDivEl
);
hitPointsTitleEl.innerText = "Hit Points";
const hitPointsDiceEl = createClassElement(
  "p",
  "features__text",
  hitPointsDivEl
);
hitPointsDiceEl.innerText =
  "Hit Dice: 1d" +
  classinfo.hit_die +
  " per " +
  classinfo.name.toLowerCase() +
  " level.";

  
