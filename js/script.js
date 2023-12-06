console.log('si può fare!');


const teamMembers = ['Pippo', 'Pluto', 'Topolino', 'Paperino', 'Qui', 'Quo', 'Qua', 'Paperoga', 'Gastone'];

const imgMembers = ['https://upload.wikimedia.org/wikipedia/en/5/50/Goofy_Duckipedia.png', 'https://upload.wikimedia.org/wikipedia/en/b/b2/Pluto_%28Disney%29_transparent.png', 'https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png', 'https://it.wikifur.com/w/images/thumb/6/6f/Donald_Duck.png/362px-Donald_Duck.png', 'https://www.topolino.it/wp-content/uploads/2019/12/quiquoequaintera.png', 'https://www.topolino.it/wp-content/uploads/2019/12/quiquoequaintera.png', 'https://www.topolino.it/wp-content/uploads/2019/12/quiquoequaintera.png' ,'https://www.topolino.it/wp-content/uploads/2019/12/paperoga_intera.png', 'https://upload.wikimedia.org/wikipedia/en/2/22/GladstoneGander.jpg'];

const container = document.querySelector('.container');




for(let i = 0; i < teamMembers.length; i++){

    const member = teamMembers[i];
    const avatar = imgMembers[i];

    //METODO INSERTADJACENT
    //const cardMember = `<div class="card d-flex justify-content-center align-items-center">${member}</div>`;
    //container.insertAdjacentHTML('beforeend', cardMember);
    //console.log(cardMember);

    //METODO CREATE-APPEND
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const p = document.createElement('p');
    //img.src = "https://picsum.photos/300/200";
    div.style.width = "30%";
    img.style.height = "200px";
    img.src = `${avatar}`;


    div.classList.add('card', 'd-flex', 'justify-content-center', 'align-items-center', 'p-4', 'mb-4');
    //img.classList.add('h-200px');

    div.append(img);
    div.append(h3);
    div.append(p);
    p.append(`Lorem ipsum dolor`)
    h3.append(`${member}`);
    
    container.append(div);



    console.log(teamMembers[i]);

}


const card = document.querySelectorAll('.card');

for(let i = 0; i < card.length; i++){
    
    card[i].addEventListener('click', function () {

        //const div = document.querySelector('.card');
        console.log('hai cliccato');



        if(card[i].classList.contains('bg-primary')){
            console.log('dentro if');
            card[i].classList.remove('bg-primary');

        } else {
            console.log('dentro else');
            card[i].classList.add('bg-primary');

        }
        
    })
}



