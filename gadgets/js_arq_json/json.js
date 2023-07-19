
// https://medium.com/@jmartinez729/full-crud-with-javascript-1c3fb77f81f


// !Para começar, precisamos ter certeza de que o DOM foi totalmente carregado antes que qualquer outra coisa ocorra. Para fazer isso, vamos adicionar um event listener ao DOM. Em index.jsvocê pode escrever o seguinte:

// !O que isso está fazendo é pegar todo o document, que é toda a página HTML em que estamos trabalhando, e ouvir o evento que 'DOMContentLoaded'é basicamente quando todo o DOM terminou de carregar. coloque dentro das chaves {}que eu comentei para você.

document.addEventListener('DOMContentLoaded', function () {

    // !tudo o mais que digitarmos ficará dentro disso!!
    // *Primeiro vamos criar uma constante para onde nossos livros vão aparecer.
    const bookContainer = document.querySelector('#book-container')
    const bookURL = `http://127.0.0.1:5500/gadgets/js_arq_json/data/book.json`

    fetch(`${bookURL}`)
        .then(response => response.json())
        .then(bookData => bookData.forEach(function (book) {
            bookContainer.innerHTML += `
            <div id=${book.id}> 
                <h2>${book.title}</h2> 
                <h4>Author: ${book.author}</h4> 
                <img src="${book.coverImage}" width="333" height="500"> 
                <p>${book.description}</p> 
                <button data-id="${book.id}" id="edit-${book.id}" data-action="edit">Edit</button> 
                <button data-id="${book.id}" id="delete-${book.id}" data-action="delete">Delete</button> 
            </div>`
        })) // end of book fetch
})


