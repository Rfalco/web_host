
// * VERIFICANDO SE LOCAL STORAGE ESTÁ CRIADO, CASO CONTRÁRIO CRIA E INICIA COM DADOS BÁSICOS
window.addEventListener('load', () => {

     // * RESGATAR UM ITEM DA localStorage
    const sUsuBdd = localStorage.getItem("bd_usuarios");
    const sPrdBdd = localStorage.getItem("bd_produtos");
    const sCliBdd = localStorage.getItem("bd_clientes");

    // * REMOVER VALOR DO LOCALSTORAGE
    if (!sUsuBdd) {

        localStorage.setItem('bd_usuarios', '[{"usuidd": "1","usunam": "RAFAEL FALCO","usuema": "rfalcox@gmail.com","ususen": "q1W@zaXS","dtanas": "19730817"},{"usuidd": "2","usunam": "LUIS HENRIQUE FALCO","usuema": "lfalcox@gmail.com","ususen": "XXas#@56","dtanas": "20070414"},{"usuidd": "3","usunam": "YASMIN FALCO","usuema": "yfalcox@gmail.com","ususen": "23@!qwXZ","dtanas": "20070414"},{"usuidd": "4","usunam": "ZORAMI FALCO","usuema": "zfalcox@gmail.com","ususen": "AZsx@!21","dtanas": "19730207"}]');

        console.log(bd_usuarios);
    }

    if (!sPrdBdd) {

        localStorage.setItem('bd_produtos', '[{"prdidd": "1","prddsc": "PRODUTO 00001","prdqtd": "1000","prdval": "50,00"},{"prdidd": "2","prddsc": "PRODUTO 00002","prdqtd": "200","prdval": "10,00"},{"prdidd": "3","prddsc": "PRODUTO 00003","prdqtd": "3000","prdval": "30,00"},{"prdidd": "4","prddsc": "PRODUTO 00004","prdqtd": "40","prdval": "1,00"}]');

        console.log(bd_produtos);
    }

    if (!sCliBdd) {

        localStorage.setItem('bd_clientes', '[{"cliidd": "1","clinam": "RAFAEL FALCO","cliema": "rfalcox@gmail.com","cliend": "Rua Primitiva Vianco, 446","cliest": "SP"},{"cliidd": "2","clinam": "LUIS HENRIQUE FALCO","cliema": "lfalcox@gmail.com","cliend": "Rua Antonio Agú, 556","cliest": "SP"},{"cliidd": "3","clinam": "YASMIN FALCO","cliema": "yfalcox@gmail.com","cliend": "Avenida dos Autonomistas, 885","cliest": "SP"},{"cliidd": "4","clinam": "ZORAMI FALCO","cliema": "zfalcox@gmail.com","cliend": "Avenida Santo Antonio, 987","cliest": "SP"}]');

        console.log(bd_clientes);
    }

});



const form = document.querySelector('#form');
const nomusu = document.querySelector('#nomusu');
const dtanas = document.querySelector('#dtanas');
const emausu = document.querySelector('#emausu');
const senusu = document.querySelector('#senusu');
// const sArqNom = 'bd_usuarios.json'

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let aRet = ""
    let nRet1 = 0
    let nCont = 0
    let sNewC = ""
    let sVar1 = emausu.value
    let sVar2 = senusu.value
    let sVar3 = nomusu.value
    let sVar4 = dtanas.value




    // function listar() {
    //se nao possuir nenhum local storage, nao fazer nada
    if (localStorage.getItem('value') === null)
        return;

    //captura os objetos de volta
    var pessoas = JSON.parse(localStorage.getItem('value'));
    var tbody = document.getElementById("tbodyResultados");

    //limpar o body toda vez que atualizar
    tbody.innerHTML = '';

    for (var i = 0; i < pessoas.length; i++) {
        var id = pessoas[i].Id,
            nome = pessoas[i].Nome,
            nasc = pessoas[i].DataNascimento,
            sexo = pessoas[i].Sexo,
            data = pessoas[i].DataCadastro

        tbody.innerHTML += '<tr id="rowTable' + i + '">' +
            '<td>' + id + '</td>' +
            '<td>' + nome + '</td>' +
            '<td>' + nasc + '</td>' +
            '<td>' + sexo + '</td>' +
            '<td>' + data + '</td>' +
            '<td><button onclick="excluir(\'' + id + '\')">Excluir</button></td>' +
            '<td><button onclick="prepararAlterar(\'' + id + '\')">Alterar</button></td>' +
            '</tr>';
    }
    // }




    //! ABERTURA DO ARQUIVO LOCAL
    fetch(sArqNom).then((response) => {
        response.json().then((jsonLst) => {
            jsonLst.usuarios.map((usuario) => {
                nCont++
                /// LOCALIZA O USUÁRIO DIGITADO (email)
                aRet = jsonLst.usuarios.find(usus => usus.usuema === sVar1)

            })

            nCont++
            console.log(nCont)
            console.log(aRet)

            // VERIFICA SE ARRAY RETORNOU PREENCHIDO
            if (aRet) {
                nRet1 = sVar3.localeCompare(aRet.usunam)    // VERIFICA SE (NOME) DIGITADO JÁ ESTÁ CADASTRADO
                if (nRet1 == 0) {
                    alert("1-Nome e E-mail já possui cadastro! Verificar.")
                    window.location.href = "./cadusuarios.html";
                } else {
                    alert("2-Este E-mail já possui cadastro! Verificar.")
                    window.location.href = "./cadusuarios.html";
                }
            } else {    // ARRAY VÁZIO, LIBERADO PARA CADASTRAR (MONTAGEM DO JSON)

                sNewC = `{"usuidd": "${nCont}", "usunam": "${sVar3}", "usuema": "${sVar1}", "ususen": "${sVar2}", "dtanas": "${sVar4}"}`
                console.log(sNewC)
                alert("3-Novo Usuário. Gravando Usuário!")
                window.location.href = "./cadusuarios.html";
            }


        })
    })
})



















// *FUNÇÃO PARA LIMPAR LOCAL STORAGE E RE-INICIAR
function limpaDados() {
    localStorage.removeItem("bd_clientes");
    localStorage.removeItem("bd_produtos");
    localStorage.removeItem("bd_usuarios");
}




/*
console.log(sUsuBdd);
console.log(sPrdBdd);
console.log(sCliBdd);

// * REMOVER VALOR DO LOCALSTORAGE
if (!sUsuBdd) {
    localStorage.removeItem("bd_usuarios");

    localStorage.setItem('bd_usuarios', '[{"usuidd": "1","usunam": "RAFAEL FALCO","usuema": "rfalcox@gmail.com","ususen": "q1W@zaXS","dtanas": "19730817"},{"usuidd": "2","usunam": "LUIS HENRIQUE FALCO","usuema": "lfalcox@gmail.com","ususen": "XXas#@56","dtanas": "20070414"},{"usuidd": "3","usunam": "YASMIN FALCO","usuema": "yfalcox@gmail.com","ususen": "23@!qwXZ","dtanas": "20070414"},{"usuidd": "4","usunam": "ZORAMI FALCO","usuema": "zfalcox@gmail.com","ususen": "AZsx@!21","dtanas": "19730207"}]');

    console.log(bd_usuarios);
}
if (!sPrdBdd) {
    localStorage.removeItem("bd_produtos");

    localStorage.setItem('bd_produtos', '[{"prdidd": "1","prddsc": "PRODUTO 00001","prdqtd": "1000","prdval": "50,00"},{"prdidd": "2","prddsc": "PRODUTO 00002","prdqtd": "200","prdval": "10,00"},{"prdidd": "3","prddsc": "PRODUTO 00003","prdqtd": "3000","prdval": "30,00"},{"prdidd": "4","prddsc": "PRODUTO 00004","prdqtd": "40","prdval": "1,00"}]');

    console.log(bd_produtos);
}
if (!sCliBdd) {
    localStorage.removeItem("bd_clientes");

    localStorage.setItem('bd_clientes', '[{"cliidd": "1","clinam": "RAFAEL FALCO","cliema": "rfalcox@gmail.com","cliend": "Rua Primitiva Vianco, 446","cliest": "SP"},{"cliidd": "2","clinam": "LUIS HENRIQUE FALCO","cliema": "lfalcox@gmail.com","cliend": "Rua Antonio Agú, 556","cliest": "SP"},{"cliidd": "3","clinam": "YASMIN FALCO","cliema": "yfalcox@gmail.com","cliend": "Avenida dos Autonomistas, 885","cliest": "SP"},{"cliidd": "4","clinam": "ZORAMI FALCO","cliema": "zfalcox@gmail.com","cliend": "Avenida Santo Antonio, 987","cliest": "SP"}]');

    console.log(bd_clientes);
}





    <!-- <script>
        window.addEventListener('load', () => {
            if (localStorage.getItem('name')) {
                sayMyName()
            } else {
                whatsYourName()
            }
        });

        function whatsYourName() {
            document.body.innerHTML = '';
            // criando um input para cadastrar o nome;
            const inputName = document.createElement('input');
            inputName.type = 'text';
            inputName.placeholder = 'Digite seu nome';
            inputName.id = 'nome';
            document.body.appendChild(inputName);

            // criando saveButton
            const saveButton = document.createElement('button');
            saveButton.innerHTML = 'Salvar';
            document.body.appendChild(saveButton);

            // adicionando listener para salvar a informação
            saveButton.addEventListener('click', saveName);
        }


        function sayMyName() {
            document.body.innerHTML = '';
            // criando mensagem
            const welcomeMessage = document.createElement('h1');
            welcomeMessage.innerText = 'Olá' + localStorage.getItem("name");

            // criando removeButton
            const removeButton = document.createElement('button');
            removeButton.innerHTML = 'Excluir';
            document.body.appendChild(removeButton);

            // adicionando o listener para remover informação
            removeButton.addEventListener('click', removeName);
        }

        function removeName() {
            if (localStorage.getItem('name')) {
                localStorage.removeItem('name');
                whatsYourName()
            }
        }

        function saveName() {
            var nome = document.getElementById('nome').value;
            localStorage.setItem('name', nome)
            sayMyName();
        }
        
    </script> -->
*/

