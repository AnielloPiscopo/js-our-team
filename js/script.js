/*-----------------------------------------------------------------------
DICHIARAZIONI E INIZIALIZZAZIONI INIZIALI */
// * INIZIALIZZAZIONI

// ? ARRAY E OGGETTI
const teamMembers = [
    {
        fullname: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        fullname: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },

    {
        fullname: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },

    {
        fullname: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },

    {
        fullname:'Scott Estrada',
        role:'Developer',
        img: 'scott-estrada-developer.jpg'
    },

    {
        fullname:'Barbara Ramos',
        role:'Graphic Designer',
        img:'barbara-ramos-graphic-designer.jpg'
    },
]





/*-----------------------------------------------------------------------
CODICE PRINCIPALE*/

// * CODICE LINEARE

// ? PRELIEVO DAL DOM DELLA SEZIONE DELLE CARTE
const teamMemberCardsSection = document.querySelector('main .my-cards');


// ? VISUALIZZAZIONE IN CONSOLE DELL'ARRAY DI PARTENZA
console.log(teamMembers);


// ? CICLO FOR
for(let i=0 ; i< teamMembers.length ; i++){
    // * Console log del singolo membro del team
    const teamMember = teamMembers[i];
    console.log(teamMember);


    // * Creazione delle singole carte
    const teamMemberCard = putAnElementWithClassesInHtml('article' , 'my-card' , teamMemberCardsSection)


    for(let key in teamMember){
        console.log(teamMember[key]);
    }
}





/* ------------------------------------------------------------------------
FUNZIONI */

// * FUNZIONE PER CREARE UN ELEMENTO HTML SENZA CLASSI
function getAnElement(element){
    let htmlElement = document.createElement(element);
    return htmlElement;
}



// * FUNZIONE PER CREARE UN ELEMENTO HTML CON UNA O PIU' CLASSI
function getAnElementWithClasses(element , elementClasses){
    let htmlElement = getAnElement(element);

    htmlElement.className = elementClasses;

    return htmlElement;
}



// * FUNZIONE PER INSERIRE UN ELEMENTO NELL'HTML
function putAnElementInHtml(element , parent){
    let child = getAnElement(element);

    parent.append(child);
}



// * FUNZIONE PER INSERIRE UN ELEMENTO CON CLASSI NELL'HTML
function putAnElementWithClassesInHtml(element , elementClasses, parent , action){
    let child = getAnElementWithClasses(element , elementClasses);

    parent.append(child);
}