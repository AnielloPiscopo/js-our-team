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
    const teamMemberCard = getAnElementWithClasses('article' , 'my-card');
    appendAnElementInHtml(teamMemberCard , teamMemberCardsSection);

    // * Ciclo for per determinare i valori delle chiavi dei vari oggetti presenti nell'array di partenza
    for(let key in teamMember){
        // ? Console log dei valori delle chiavi dei vari oggetti
        console.log(teamMember[key]);

        // ? Creazione e messa nel DOM delle immagini relativi ai compagni di squadra
        if(teamMember[key].includes('jpg')){
            const teamMemberImg = getAnElementWithClasses('img' , 'my-img');
            teamMemberImg.alt = 'team member photo';
            teamMemberImg.src = `assets/img/${teamMember[key]}`;
            appendAnElementInHtml(teamMemberImg , teamMemberCard);
        }
    }

    // * Creazione dell'array di chiavi
    const teamMemberKeys = Object.keys(teamMember);
    
    // * Ciclo for
    for(let i=0; i<teamMemberKeys.length ; i++){
        teamMemberKey = teamMemberKeys[i];
        
        let teamMemberInfo = getAnElementWithClasses('span' , 'my-info d-block ');
        
        teamMemberInfo.innerHTML = `${teamMemberKey}: ${teamMember[teamMemberKey]}`; 
        appendAnElementInHtml(teamMemberInfo,teamMemberCard)
        
        
        if(teamMemberKey == 'img'){
            teamMemberInfo.remove();
        }
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



// * FUNZIONE PER INSERIRE UN ELEMENTO ALLA FINE DEL CONTENITORE
function appendAnElementInHtml(child , parent){
    parent.append(child);
}



// * FUNZIONE PER INSERIRE UN ELEMENTO ALL'INIZIO DEL CONTENITORE
function prependAnElementInHtml(child , parent){
    parent.prepend(child);
}