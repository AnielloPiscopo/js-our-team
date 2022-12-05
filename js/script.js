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
console.log(teamMembers);


for(let i=0 ; i< teamMembers.length ; i++){
    const teamMember = teamMembers[i];
    
    console.log(teamMember);


    for(let key in teamMember){
        console.log(teamMember[key]);
    }
}