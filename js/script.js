
const teamMembers = ['Pippo', 'Pluto', 'Topolino', 'Paperino', 'Qui', 'Quo', 'Qua', 'Paperoga', 'Gastone'];

const imgMembers = ['https://upload.wikimedia.org/wikipedia/en/5/50/Goofy_Duckipedia.png', 'https://upload.wikimedia.org/wikipedia/en/b/b2/Pluto_%28Disney%29_transparent.png', 'https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png', 'https://it.wikifur.com/w/images/thumb/6/6f/Donald_Duck.png/362px-Donald_Duck.png', 'https://www.topolino.it/wp-content/uploads/2019/12/quiquoequaintera.png', 'https://www.topolino.it/wp-content/uploads/2019/12/quiquoequaintera.png', 'https://www.topolino.it/wp-content/uploads/2019/12/quiquoequaintera.png' ,'https://www.topolino.it/wp-content/uploads/2019/12/paperoga_intera.png', 'https://upload.wikimedia.org/wikipedia/en/2/22/GladstoneGander.jpg'];

const row = document.querySelector('.row');
const aggiungi = document.getElementById('aggiungi');

function creaCard(member, avatar){

    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');
    const p = document.createElement('p');
    div.style.width = "30%";
    img.style.height = "200px";
    img.style.opacity = "0.5";
    img.src = `${avatar}`;
    
    div.classList.add('card', 'd-flex', 'justify-content-center', 'align-items-center', 'gap-2', 'p-4', 'mb-4', 'bg-warning-subtle');
    
    div.append(img);
    div.append(h3);
    div.append(p);
    p.append(`Lorem ipsum dolor`);
    h3.append(`${member}`);
    
    row.append(div);
    
    div.addEventListener('click', function () {
    
        if(div.classList.contains('bg-warning-subtle')){
            div.classList.remove('bg-warning-subtle');
            img.style.opacity = "1";
    
        } else {
            div.classList.add('bg-warning-subtle');
            img.style.opacity = "0.5";
        }
        
    })
    
    }


for(let i = 0; i < teamMembers.length; i++){

    const member = teamMembers[i];
    const avatar = imgMembers[i];

    creaCard(member, avatar);

}


aggiungi.addEventListener('click', function () {

    const newMember = document.getElementById('newMember').value;
    const newImg = document.getElementById('newImg').value;

    if (newMember == '' || newImg == ''){

        console.log('I campi non sono stati riempiti correttamente');

    } else {

        teamMembers.push(newMember);
        imgMembers.push(newImg);

        creaCard(newMember, newImg);

    }

})


