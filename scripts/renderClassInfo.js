import createClassElement from "./createClassElement.js";

export function renderClassInfo(classinfo) {
    const className = classinfo.name;

    const sectionEl = document.querySelector(".features");

    const imgHandlerEl = document.querySelector(".features__imgHandler");

    const textHandler = createClassElement("div", "features__textHandler", imgHandlerEl);

    const titleEL = createClassElement("h1", "features__title", textHandler);
    titleEL.innerText = className + " Class Features";
    const taglineEl = createClassElement("p", "features__tagline", textHandler);

    taglineEl.innerText = "As a " + className + " you get these features:";

    //HITPOINTS
    const hitPointsDivEl = createClassElement(
        "div",
        "features__hitpoints",
        textHandler
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
        " level";

    const hitPoints1El = createClassElement(
        "p",
        "features__text",
        hitPointsDivEl
    );
    hitPoints1El.innerText =
        "Hitpoints at 1st level: " +
        classinfo.hit_die +
        " + your constitution modifier";

    const hitPoints2El = createClassElement(
        "p",
        "features__text",
        hitPointsDivEl
    );
    hitPoints2El.innerText =
        "Hitpoints after 1st level: are 1d" +
        classinfo.hit_die +
        "  (or " +
        (Math.ceil(classinfo.hit_die / 2) + 1) +
        ") + your constitution modifier";

    //PROFICIENCIES
    const profDivEl = createClassElement("div", "featured__prof", textHandler);

    const profTitleEl = createClassElement("h3", "features__subtitle", profDivEl);
    profTitleEl.innerText = "Proficiencies";

    const skillsEl = createClassElement("p", "features__text", profDivEl);
    skillsEl.innerText = "Skills: " + classinfo.proficiency_choices[0].desc;

    const profEl = createClassElement("p", "features__text", profDivEl);
    profEl.innerText = className + " proficiencies are:";

    const ulEl = createClassElement("ul", "features__list", profDivEl);
    const saving = [];
    for (const porfElement of classinfo.proficiencies) {
        const name = porfElement.name;

        if (name.startsWith("Saving")) {
            const shortSavingName = name.slice(-3);
            let longSavingName = "";
            switch (shortSavingName.toLowerCase()) {
                case "wis":
                    longSavingName = "Wisdom";
                    break;
                case "cha":
                    longSavingName = "Charisma";
                    break;
                case "con":
                    longSavingName = "Constitution";
                    break;
                case "dex":
                    longSavingName = "Dexterity";
                    break;
                case "str":
                    longSavingName = "Strength";
                    break;
                case "int":
                    longSavingName = "Intelligence";
                    break;

            }

            saving.push(longSavingName);
        } else {
            const El = createClassElement("li", "features__listEl", ulEl);
            El.innerText = name;
        }
    }

    const savingEl = createClassElement("p", "features__text", profDivEl);
    savingEl.innerText = className + "'s are proficient in " + saving[0] + " and " + saving[1] + " saving throws";

}
