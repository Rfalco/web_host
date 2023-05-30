let ul = document.querySelector('nav .ul');

function openMenu() {
    ul.classList.add('open');
}

function closeMenu() {

    ul.classList.remove('open');
}




function confEnv() {
    alert("Mensagem enviada com sucesso!");
}


$("#btn1").click(function () {
    swal({
        title: "Sucesso!",
        text: "Mensagem enviada!",
        icon: "success",
        button: "OK",
    })
});

$("#btn2").click(function () {
    swal("Mensagem!", "Corpo da Mensagem");
});

$("#btn3").click(function () {
    swal("Mensagem de Erro!", "Corpo da Mensagem", "error");
});

$("#btn3").click(function () {
    swal({
        title: "Atenção!",
        text: "Clique no botão para fechar!",
        icon: "warning",
        button: "Clique Aqui!",
    })
});

$("#btn4").click(function () {
    swal({
        title: "Atenção!",
        text: "Clique no botão para ser redirecionado!",
        icon: "warning",
        buttons: true,
    }).then(function (result) {
        if (result) {
            alert("Coloque aqui o window.location.href");
        } else {
            alert("Você não será redirecionado pois clicou em \"Cancel\"");
        }
    });
});


// https://www.youtube.com/watch?v=TLkds5BJ-vA&ab_channel=TigerCodes
/*
class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Enviando...";
    }

    async sendForm(event) {
        try {
            this.onSubmission(event);
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.getFormObject()),
            });
            this.displaySuccess();
        } catch (error) {
            this.displayError();
            throw new Error(error);
        }
    }

    init() {
        if (this.form) this.formButton.addEventListener("click", this.sendForm);
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});

formSubmit.init();
*/
