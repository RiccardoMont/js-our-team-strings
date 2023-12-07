console.log('si può fare!');


const teamMembers = ['Pippo', 'Pluto', 'Topolino', 'Paperino', 'Qui', 'Quo', 'Qua', 'Paperoga', 'Gastone'];

const imgMembers = ['https://upload.wikimedia.org/wikipedia/en/5/50/Goofy_Duckipedia.png', 'https://upload.wikimedia.org/wikipedia/en/b/b2/Pluto_%28Disney%29_transparent.png', 'https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png', 'https://it.wikifur.com/w/images/thumb/6/6f/Donald_Duck.png/362px-Donald_Duck.png', 'https://www.topolino.it/wp-content/uploads/2019/12/quiquoequaintera.png', 'https://www.topolino.it/wp-content/uploads/2019/12/quiquoequaintera.png', 'https://www.topolino.it/wp-content/uploads/2019/12/quiquoequaintera.png' ,'https://www.topolino.it/wp-content/uploads/2019/12/paperoga_intera.png', 'https://upload.wikimedia.org/wikipedia/en/2/22/GladstoneGander.jpg'];

const row = document.querySelector('.row');
const aggiungi = document.getElementById('aggiungi');




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
    // Non mi adotta le classi se le aggiungo con classlist ed ho quindi scelto questo metodo
    img.style.height = "200px";
    img.style.opacity = "0.5";
    img.src = `${avatar}`;


    div.classList.add('card', 'd-flex', 'justify-content-center', 'align-items-center', 'gap-2', 'p-4', 'mb-4', 'bg-warning-subtle');
    

    div.append(img);
    div.append(h3);
    div.append(p);
    p.append(`Lorem ipsum dolor`)
    h3.append(`${member}`);
    
    row.append(div);



    console.log(teamMembers[i]);

}






const card = document.querySelectorAll('.card');
const img = document.querySelectorAll('img');

for(let i = 0; i < card.length; i++){
    
    card[i].addEventListener('click', function () {

        console.log('hai cliccato');
        console.log(card.length);


        if(card[i].classList.contains('bg-warning-subtle')){
            console.log('dentro if');
            card[i].classList.remove('bg-warning-subtle');
            img[i].style.opacity = "1";

        } else {
            console.log('dentro else');
            card[i].classList.add('bg-warning-subtle');
            img[i].style.opacity = "0.5";

        }
        
    })
}


aggiungi.addEventListener('click', function () {

    const newMember = document.getElementById('newMember').value;
    const newImg = document.getElementById('newImg').value;

    
    console.log(newMember);
    console.log(newImg);

    if (newMember == '' || newImg == ''){

        console.log('I campi non sono stati riempiti correttamente');

    } else {

        teamMembers.push(newMember);
        imgMembers.push(newImg);
        console.log('sei in else-add');
        console.log(teamMembers);
        console.log(imgMembers);
        console.log(card.length);

        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const p = document.createElement('p');

        div.style.width = "30%";
        img.style.height = "200px";
        img.style.opacity = "0.5";
        img.src = `${newImg}`;

        div.classList.add('card', 'd-flex', 'justify-content-center', 'align-items-center', 'gap-2', 'p-4', 'mb-4', 'bg-warning-subtle');

        div.append(img);
        div.append(h3);
        div.append(p);
        p.append(`Lorem ipsum dolor`)
        h3.append(`${newMember}`);
    
        row.append(div);



    }

})



