function carregar() {
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('imagem')
	var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
	msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas. <br>`
	

	if (hora >= 0 && hora < 12) {
		//bomdia
		img.src = 'manha.jpg'
		document.body.style.background = '#e2cf50'
		msg.innerHTML += `Bom dia!`
	} else if (hora >= 12 && hora < 18) {
		//boatarde
		img.src = 'tarde.jpg'
		document.body.style.background = '#b9846f'
		msg.innerHTML += `Boa tarde!`
	}else{
		//boanoite
		img.src = 'noite.jpg'
		document.body.style.background = '#515154'
		msg.innerHTML += `Boa noite!`
	}

}
