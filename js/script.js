/*-----------------------------------------------------------------------
DICHIARAZIONI E INIZIALIZZAZIONI INIZIALI */
// * INIZIALIZZAZIONI

// ? ARRAY E OGGETTI
const teamMembers = [
    {
        fullname: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
        description: 'asdkasdlnalsdnaslkmaskdmlasdmlaksdkdsasdlasd'
    },

    {
        fullname: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
        description : 'asdsdfkalsdmacnifweif',
    },

    {
        fullname: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
        description:'askfjaskjasflanfsc ',
    },

    {
        fullname: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
        description:'asdasdcvd',
    },

    {
        fullname:'Scott Estrada',
        role:'Developer',
        img: 'scott-estrada-developer.jpg',
        description:'bla bla vla',
    },

    {
        fullname:'Barbara Ramos',
        role:'Graphic Designer',
        img:'barbara-ramos-graphic-designer.jpg',
        description:'uculele',
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
    
    // * Creazione dell'intestazione di ogni singola card che deve contenere un titolo e una descrizione generale
    
    const teamMemberCardBody = getAnElement('div');
    const teamMemberCardTitle = getAnElementWithClasses('h3','my-card-title fw-bold text-uppercase');
    const teamMemberCardText = getAnElement('p');

    teamMemberCardTitle.innerHTML = teamMember['fullname'];
    teamMemberCardText.innerHTML = teamMember['description'];

    appendAnElementInHtml(teamMemberCardTitle,teamMemberCardBody);
    appendAnElementInHtml(teamMemberCardText,teamMemberCardBody);
    putAnElementAfterAnotherElement(teamMemberCardBody,teamMemberCard.firstElementChild);



    // * Creazione e messa nel dom dei vari ul contenenti le informazioni del personale
    const teamMemberInfoList = getAnElementWithClasses('ul' , 'my-info-list m-0 p-0');
    appendAnElementInHtml(teamMemberInfoList , teamMemberCard);
    
    // * Ciclo for
    for(let i=0; i<teamMemberKeys.length ; i++){
        teamMemberKey = teamMemberKeys[i];
        
        let teamMemberInfoListElement = getAnElementWithClasses('span' , 'my-info-li d-block ');
        
        teamMemberInfoListElement.innerHTML = `${teamMemberKey.toUpperCase()}: ${teamMember[teamMemberKey]}`; 
        appendAnElementInHtml(teamMemberInfoListElement,teamMemberInfoList);
        
        
        if(teamMemberKey == 'img' || teamMemberKey == 'description'){
            teamMemberInfoListElement.remove();
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



// * FUNZIONE PER INSERIRE UN ELEMENTO DOPO UN ALTRO ELEMENTO
function putAnElementAfterAnotherElement(element , simblingElement){
    simblingElement.after(element);
}