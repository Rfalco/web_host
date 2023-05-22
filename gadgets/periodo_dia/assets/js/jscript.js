/// FUNÇÃO PARA AJUSTAR QUANTIDADE DE CARACTERES (12:05:09) hh:mm:ss CASO SEJAM MENOR QUE 10 
function fQtdeChar(sValRec) {
    if (sValRec < 10) {
        sValRec = "0" + sValRec
    }
    return sValRec
}

/// FUNÇÃO PARA MONTAR hh:mm:ss ATUAIS PARA EXIBIR NO HTML
function fHoraAtual() {

    /// INICIALIZANDO VARIÁVEIS
    let dDatAtu = new Date()
    let sHraAtu = dDatAtu.getHours()
    let sMinAtu = dDatAtu.getMinutes()
    let sSegAtu = dDatAtu.getSeconds()
    let oHraAtu = document.querySelector('span#sHraAtu')
    let oImgAtu = document.querySelector('span#sImgImg')
    let oBody = document.querySelector('body')
    let oHeader = document.querySelector('header')
    let oMain = document.querySelector('main')
    let oFooter = document.querySelector('footer')
    let oH1 = document.querySelector('h1')
    let oH6 = document.querySelector('h6')

    // ADICIONA 0 QUANDO MINUTO E SEGUNDO FOREM MENORES QUE 10
    sHraAtu = fQtdeChar(sHraAtu)
    sMinAtu = fQtdeChar(sMinAtu)
    sSegAtu = fQtdeChar(sSegAtu)

    if (Number(sHraAtu) < 12) {
        // APRESENTA HH:MM:SS NO ELEMENTO HTML
        oHraAtu.innerHTML = 'BOM DIA!<br> são ' + sHraAtu + ':' + sMinAtu + ':' + sSegAtu + '<br>'
        oImgAtu.innerHTML = `<img src="./assets/x_images/pequeno/amanhecer.png" alt="Amanhecer">`

        // oBody.style.backgroundColor = '#08c1fa'
        // oHeader.style.backgroundColor = '#0682d4'
        // oMain.style.backgroundColor = '#0682d4'
        // oFooter.style.backgroundColor = '#0682d4'

        oBody.style.color = '#00ffff'
        oHeader.style.color = '#00ffff'
        oFooter.style.color = '#00ffff'
        oMain.style.color = '#00ffff'
        oH1.style.color = '#00ffff'
        oH6.style.color = '#00ffff'

        // oMain.style.boxShadow = '10px 10px 10px #00ffff'

    } else if (Number(sHraAtu) < 18) {
        oHraAtu.innerHTML = 'BOA TARDE!<br> são ' + sHraAtu + ':' + sMinAtu + ':' + sSegAtu + '<br>'
        oImgAtu.innerHTML = `<img src="./assets/x_images/pequeno/entardecer.png" alt="Entardecer">`

        // oBody.style.backgroundColor = '#d15a38'
        // oHeader.style.backgroundColor = '#d10292'
        // oMain.style.backgroundColor = '#d10292'
        // oFooter.style.backgroundColor = '#d10292'

        oBody.style.color = '#5e412f'
        oHeader.style.color = '#5e412f'
        oMain.style.color = '#ffe41e'
        oFooter.style.color = '#5e412f'
        oH1.style.color = '#ffe41e'
        oH6.style.color = '#ffe41e'

        // oMain.style.boxShadow = '10px 10px 10px #d2092d'

    } else {
        oHraAtu.innerHTML = ' BOA NOITE!<br> são ' + sHraAtu + ':' + sMinAtu + ':' + sSegAtu + '<br>'
        oImgAtu.innerHTML = `<img src="./assets/x_images/pequeno/anoitecer.png" alt="Anoitecer">`

        // oBody.style.backgroundColor = '#534D46';
        // oHeader.style.backgroundColor = '#997453'
        // oMain.style.backgroundColor = '#997453'
        // oFooter.style.backgroundColor = '#997453'

        oBody.style.color = '#f585bd'
        oHeader.style.color = '#f585bd'
        oMain.style.color = '#f585bd'
        oFooter.style.color = '#f585bd'
        oH1.style.color = '#f585bd'
        oH6.style.color = '#f585bd'

        // oMain.style.boxShadow = '10px 10px 10px #e38814'

    }

    /// EXECUTA UM LOOP PARA ATUALIZAR A HORAf
    sLoop = setTimeout(function () {
        fHoraAtual()
    }, 500)

}