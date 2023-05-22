
// https://www.youtube.com/watch?v=SWTJxnms_YA&ab_channel=DouglasHorstmann
// https://www.youtube.com/watch?v=3t-jZ2V_Kt4&ab_channel=MaykBrito

/*
const input = document.querySelector('#arquivo');
const preview = document.querySelector('#preview');
const btnDown = document.querySelector('#download');

input.addEventListener('change', function () {
    const arquivo = this.files[0];
    const leitor = new FileReader();

    if (arquivo) {
        leitor.readAsText(arquivo);
        leitor.addEventListener('load', function () {
            // console.log(leitor.result);
            preview.value = leitor.result;
        })
    }


})
*/




/*
input.addEventListener('change', function () {
    const arquivo = this.files[0];
    const leitor = new FileReader();


    leitor.addEventListener('load', function () {
        console.log(leitor.result);
        preview.value = leitor.result;
        const json = JSON.parse(preview.value);
        console.log('Conteúdo do arquivo JSON:');
        console.log(json);
        const registro = json[2].value;

    });

    if (arquivo) {
        leitor.readAsText(arquivo);
    }
})

const download = function () {
    const a = document.createElement('a');
    a.style = 'display: none';
    document.body.appendChild(a);
    return function (conteudo, nomeArquivo) {
        const blob = new Blob([conteudo], { type: 'octet/streamer' });
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = nomeArquivo;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}

btnDown.addEventListener('click', function () {
    download()(preview.value, 'arq_usu.json');
})

*/