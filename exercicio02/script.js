function verificar() {
	var data = new Date()
	var ano = data.getFullYear()
	var fano = window.document.getElementById('txtano')
	var res = window.document.getElementById('res')

	if (fano.value.length == 0 || Number(fano.value) > ano) {
		window.alert('[ERRO] Verifique os dados e tente novamente.')

	} else {
		var fsex = window.document.getElementsByName('radsex')
		var idade = ano - Number(fano.value)
		var genero = ''
		var img = window.document.createElement('img')
		if (fsex[0].checked) {
			genero = 'Homem'
			if (idade >= 0 && idade < 12) {
				//criança
				img.setAttribute('src', 'menino.jpg')


			} else if (idade < 25) {
				//jovem
				img.setAttribute('src', 'homemjovem.jpg')
				
			} else if (idade < 50) {
				//adulto
				img.setAttribute('src', 'homem.jpg')
				
			} else {
				//idoso
				img.setAttribute('src', 'idoso.jpg')
			}
		} else if (fsex[1].checked) {
			genero = 'Mulher'
			if (idade >= 0 && idade < 12) {
				//criança
				img.setAttribute('src', 'manina.jpg')

			} else if (idade < 25) {
				//jovem
				img.setAttribute('src', 'mulherjovem.jpg')
				
			} else if (idade < 50) {
				//adulta
				img.setAttribute('src', 'mulher.jpg')
				
			} else {
				//idosa
				img.setAttribute('src', 'idosa.jpg')
			}
			
		}

		res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
		res.appendChild(img)

	}
}