const results = document.querySelector('.j-btn-results')

const buttonVote = document.querySelector('.btn_vote')

const buttonCats = document.querySelector('.btn-cat')

buttonCats.addEventListener('click', async _ => {

    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/cats', {

        method: 'post'

    });
    
    console.log("You voted for cats");
    results.setAttribute("style", "visibility: visible");
    buttonVote.setAttribute("style", "visibility: hidden");
});


const buttonDogs = document.querySelector('.btn-dog')

buttonDogs.addEventListener('click', async _ => {

    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/dogs', {

        method: 'post'

    });

    console.log("You voted for dogs");
    results.setAttribute("style", "visibility: visible");
    buttonVote.setAttribute("style", "visibility: hidden");
});


const buttonParrots = document.querySelector('.btn-parrot')

buttonParrots.addEventListener('click', async _ => {

    const response = await fetch('https://sf-pyw.mosyag.in/sse/vote/parrots', {

        method: 'post'

    });

    console.log("You voted for parrots");
    results.setAttribute("style", "visibility: visible");
    buttonVote.setAttribute("style", "visibility: hidden");
});

