let ul = document.querySelector('nav .ul');

function openMenu() {
    ul.classList.add('open');
}

function closeMenu() {

    ul.classList.remove('open');
}

$("#btnEnv").click(function () {
    swal({
        title: "Sucesso!",
        text: "Mensagem enviada!",
        icon: "success",
        button: "OK",
    })
});
