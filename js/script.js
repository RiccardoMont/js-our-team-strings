console.log('si può fare!');


const teamMembers = ['Pippo', 'Pluto', 'Topolino', 'Paperino', 'Qui', 'Quo', 'Qua', 'Paperoga', 'Gastone'];
const container = document.querySelector('.container');




for(let i = 0; i < teamMembers.length; i++){

    const member = teamMembers[i];

    //METODO INSERTADJACENT
    //const cardMember = `<div class="card d-flex justify-content-center align-items-center">${member}</div>`;
    //container.insertAdjacentHTML('beforeend', cardMember);
    //console.log(cardMember);

    //METODO CREATE-APPEND
    const div = document.createElement('div');
    div.classList.add('card', 'd-flex', 'justify-content-center', 'align-items-center');
    div.append(`${member}`);
    container.append(div);



    console.log(teamMembers[i]);

}


const card = document.querySelector('.card');



card.addEventListener('click', function () {

    console.log('hai cliccato');

})