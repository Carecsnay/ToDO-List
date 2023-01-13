// Capturando os inputs e salvando em variáveis

const list = document.querySelector('ul');
const fieldEnterNewTask = document.querySelector('#task');
const buttonAddNewTask = document.querySelector('.form input[type=submit]');

// Testando os elementos selecionados

// fieldEnterNewTask.addEventListener('click', teste);
// buttonAddNewTask.addEventListener('click', teste);
// buttonRemovesTask.addEventListener('click', teste);
// buttonFinishTask.addEventListener('click', teste);
// changeTheme.addEventListener('click', teste);

// function teste(){
//     alert('clicou');
// }

// Funcionalidades da aplicação

buttonAddNewTask.addEventListener('click', addNewTask);

function addNewTask() {
    const typedContent = fieldEnterNewTask.value;

    // Criando os elementos

    // Replicando essa estrutura aqui
    // <li>
    //     <h2>Tarefa 02</h2>
    //     <div>
    //         <button>
    //             <img class="finTask" src="./assets/square.svg" alt="Ícone de concluir Tarefa">
    //         </button>
    //         <button>
    //             <img class="remTask" src="./assets/trash.svg" alt="Ícone de remoção de Tarefa">
    //         </button>
    //     </div>                              
    // </li>


    // 1º método para replicar a estrutura linha 45 até 75
    // const li = document.createElement('li');
    // const h2 = document.createElement('h2');
    // const div = document.createElement('div');
    // const finTask = document.createElement('button');
    // const removeTask = document.createElement('button');
    // const img = document.createElement('img');
    // const img2 = document.createElement('img');

    // // Montando os elementos na página

    // // Inserindo valor dentro da tag
    // h2.innerText = typedContent;

    // // Adicionando imagem e classe de concluir tarefa
    // img.src = './assets/square.svg';
    // img.alt = 'Ícone de concluir Tarefa';
    // img.classList.add('finTask');

    // // Adicionando imagem e classe de excluir tarefa
    // img2.src = './assets/trash.svg';
    // img2.alt = 'Ícone de remoção de Tarefa';
    // img2.classList.add('remTask');

    // //Inserindo elementos aninhados

    // li.appendChild(h2); //h2 filho do li
    // li.appendChild(div); //div filha do li
    // div.appendChild(finTask); //botão concluir tarefa
    // div.appendChild(removeTask); //botão remover tarefa
    // finTask.appendChild(img); //img filha do botão finTask
    // removeTask.appendChild(img2); //img filha do botão remTask


    // 2º método para replicar a estrutura linha 79 até 
    if (typedContent != '') {
        const newTaskStructure = `
        <h2>${typedContent}</h2>
        <div>
            <button id="finTaskButton">
                <img class="finTaskButton" src="./assets/square.svg" alt="Ícone de concluir Tarefa">
            </button>
            <button id=remTaskButton>
                <img class="remTaskButton" src="./assets/trash.svg" alt="Ícone de remoção de Tarefa">
            </button>
        </div>                              
    `;

    // Cria o elemento LI
    const taskToBeCreated = document.createElement('li');

    // Interpreta a constante "newTaskStructure" como HTML
    taskToBeCreated.innerHTML = newTaskStructure;

    // Joga a estrutura interpretada dentro do LI
    list.appendChild(taskToBeCreated);

    // Adicionando rastro em cada tarefa criada, no caso selecionando os botões para definir as funções excluir e finalizar
    const footPrintRemTask = document.querySelectorAll('#remTaskButton');
    const footPrintFinTask = document.querySelectorAll('#finTaskButton');

    addEventHandlerRemTask(footPrintRemTask);
    addEventHandlerFinTask(footPrintFinTask);

    fieldEnterNewTask.value = '';
    }
}

function addEventHandlerFinTask(remButtonsList) {
    // Loop percorrendo todos os botões de excluir
    for (let i = 0; i < remButtonsList.length; i++) {
        const buttonFinishTask = remButtonsList[i];

        buttonFinishTask.addEventListener('click', finishTask)
    }
}

function finishTask() {
    // Pegar evento clicado
    const buttonSelected = event.currentTarget;

    // Retorna o ancestral
    const taskSelected = buttonSelected.closest('li');

    // Adiciona a classe que faz o efeito da tarefa concluída
    taskSelected.classList.toggle('finTask');


}

function addEventHandlerRemTask(remButtonsList) {
    // Loop percorrendo todos os botões de excluir
    for (let i = 0; i < remButtonsList.length; i++) {
        const buttonRemoveTask = remButtonsList[i];

        buttonRemoveTask.addEventListener('click', removeTask)
    }
}

function removeTask(event) {
    // Pegar evento clicado
    const buttonSelected = event.currentTarget;

    // Retorna o ancestral
    const taskSelected = buttonSelected.closest('li');

    // Apaga a tarefa (LI) a partir do botão selecionado
    taskSelected.remove();
}

// Modo Noturno


function changeTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('darkMode');
}