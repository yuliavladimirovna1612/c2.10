const progress_c = document.querySelector('.progress_c')

const progress_d = document.querySelector('.progress_d')

const progress_p = document.querySelector('.progress_p')

const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)

ES.onerror = error => {
    ES.readyState ? progress_c.textContent = "Some error" : null;
    ES.readyState ? progress_d.textContent = "Some error" : null;
    ES.readyState ? progress_p.textContent = "Some error" : null;
}

ES.onmessage = message => {
	obj = JSON.parse(message.data);
	cats = obj["cats"];
	dogs = obj["dogs"];
	parrots = obj["parrots"];
    progress_c.style.cssText = `width: ${cats/100}%;`
    progress_c.textContent = `${cats}`
    progress_d.style.cssText = `width: ${dogs/100}%;`
    progress_d.textContent = `${dogs}`
    progress_p.style.cssText = `width: ${parrots/100}%;`
    progress_p.textContent = `${parrots}`
	console.log("Votes for cats: ", cats);
	console.log("Votes for dogs: ", dogs);
	console.log("Votes for parrots: ", parrots);
}
