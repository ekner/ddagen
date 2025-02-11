// Skrivet på formatet [Namn, länk till bild från "static/img/", mail, Svensk titel, Engelsk titel]
// Scriptet körs när contact.html laddas in.

dda = [
    ["Erik Nordlöf", "projektgruppen/erik-n.jpg", "projectmanager@ddagen.se", "D-Dagenansvarig", "Project Leader"], 
    ["Adam Sjöberg", "projektgruppen/adam-s.jpg", "projectmanager@ddagen.se", "D-Dagenansvarig", "Project Leader"]
];

fin = [
    ["Ekonomiansvarig", "maskot-bilder/alpa02-ekonomi.png", "ekonomi@ddagen.se", "Ekonomiansvarig", "Head of Finance"]
];

sales = [
    ["Emmy Yin", "projektgruppen/emmy.jpg", "emmy@ddagen.se", "Säljansvarig", "Head of Sales"],
    ["Markus Videfors", "projektgruppen/markus-v.jpg", "markus@ddagen.se", "Säljare", "Sales Associate"],
    ["Ludvig Siljeholm", "projektgruppen/ludvig-s.jpg", "ludvig@ddagen.se", "Säljare", "Sales Associate"]
];

fair = [
    ["Marcus Erlandsson", "projektgruppen/marcus.jpg", "fair@ddagen.se", "Mässansvarig", "Head of Staff"],
    ["Hanna Peters", "projektgruppen/hanna-p.jpg", "venue@ddagen.se", "Lokalansvarig", "Head of Venue"],
    ["David Puustinen", "projektgruppen/david-p.jpg", "logistics@ddagen.se", "Logistikansvarig", "Head of Logistics"],
    ["Tim Jonsson", "projektgruppen/tim-j.jpg", "lounge@ddagen.se", "Loungeansvarig", "Head of Lounge"]
];

events = [
    ["Douglas Fischer", "projektgruppen/douglas-f.jpg", "fest@ddagen.se", "Festansvarig", "Head of Events"],
    ["Ebba Bråtman", "maskot-bilder/alpa02-fest.png", "fest@ddagen.se", "Festansvarig", "Head of Events"]
];

pr = [
    ["Sara Strandberg", "projektgruppen/sara-s.jpg", "pr@ddagen.se", "PR-ansvarig", "Head of PR"],
    ["Pontus Söderlund", "maskot-bilder/alpa02-webansvarig.png", "web@ddagen.se", "Webbansvarig", "Head of Web Development"],
    ["Amanda Hedlund", "projektgruppen/amanda-h.jpg", "graphics@ddagen.se", "Art Director", "Art Director"],
    ["Michael Morales Sundstedt", "projektgruppen/michael-ms.jpg", "socialmedia@ddagen.se", "Socialamedieansvarig", "Head of Social Media"],
    ["Ann Abeysekera", "projektgruppen/ann-a.jpg", "socialmedia@ddagen.se", "Spons- och Tryckansvarig", "Head of Sponsorship and Print"]
];

/**
 * Lägger till personerna definerade i listorna ovan till "Kontakta oss" sidan.
 * 
 * @param lang "swe" eller "eng" beroende på språk 
 */
function addContactInfo(lang) {
    try {        
        appendElem("dda", lang, dda[0]);
        appendElem("dda", lang, dda[1]);
        
        appendElem("fin", lang, fin[0]);
        
        appendElem("sales", lang, sales[0]);
        appendElem("sales", lang, sales[1]);
        appendElem("sales", lang, sales[2]);
        
        appendElem("fair", lang, fair[0]);
        appendElem("fair", lang, fair[1]);
        appendElem("fair", lang, fair[2]);
        appendElem("fair", lang, fair[3]);
        
        appendElem("event", lang, events[0]);
        appendElem("event", lang, events[1]);
        
        appendElem("pr", lang, pr[0]);
        appendElem("pr", lang, pr[1]);
        appendElem("pr", lang, pr[2]);
        appendElem("pr", lang, pr[3]);
        appendElem("pr", lang, pr[4]);
    } catch (error) {}
}

/**
 * Creates a html element of a person
 * 
 * @param person is a list with info about the person
 * @param titleLang is the language of the title, "swe" or "eng"
 * 
 * @returns a html element of a person
 */
function getElement(person, titleLang) {
    const elem = document.createElement("div");
    elem.className = "portrait-photo";
    
    var img = document.createElement("img");
    img.src = "static/img/" + person[1];

    const name = ctxtelem("h3", person[0]); 
    let titleID = 4;
    if (titleLang === "swe") {
        titleID = 3;
    } 
    const title = ctxtelem("h5", person[titleID]);         
    var mail = ctxtelem("a", person[2]);
    mail.href = "mailto:" +  person[2];

    elem.append(img);
    elem.append(name);
    elem.append(title);
    elem.append(mail);
    return elem;
}

/**
 * Creates a text element. e.g. <type>text</type>, <h1>title</h1>
 * 
 * @param type is the type of html element to create.
 * @param text is the text to put inside.
 * 
 * @returns a html element with text inside 
 */
function ctxtelem(type, text) {
    const elem = document.createElement(type);
    elem.append(document.createTextNode(text));
    return elem;
}

/**
 * Appends a person to specified div.
 * 
 * @param id is the id of the div to append the person to.
 * @param lang is the language to use
 * @param person is a list with the details
 */
function appendElem(id, lang, person) {
    document.getElementById(id).append(getElement(person, lang));
}