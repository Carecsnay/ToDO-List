// Capturando os inputs e salvando em variáveis

const list = document.querySelector('ul');
const fieldEnterNewTask = document.querySelector('#task');
const buttonAddNewTask = document.querySelector('.form input[type=submit]');

const changeTheme = document.querySelector('.checkbox');

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
    //             <img class="finTask" src="./assets/square.svg" alt="Icone de concluir Tarefa">
    //         </button>
    //         <button>
    //             <img class="remTask" src="./assets/trash.svg" alt="Icone de remoção de Tarefa">
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
    // img.alt = 'Icone de concluir Tarefa';
    // img.classList.add('finTask');

    // // Adicionando imagem e classe de excluir tarefa
    // img2.src = './assets/trash.svg';
    // img2.alt = 'Icone de remoção de Tarefa';
    // img2.classList.add('remTask');

    // //Inserindo elementos aninhados

    // li.appendChild(h2); //h2 filho do li
    // li.appendChild(div); //div filha do li
    // div.appendChild(finTask); //botão concluir tarefa
    // div.appendChild(removeTask); //botão remover tarefa
    // finTask.appendChild(img); //img filha do botão finTask
    // removeTask.appendChild(img2); //img filha do botão remTask


    // 2º método para replicar a estrutura linha 79 até 
    const newTaskStructure = `
        <h2>${typedContent}</h2>
        <div>
            <button id="finTask">
                <img class="finTask" src="./assets/square.svg" alt="Icone de concluir Tarefa">
            </button>
            <button id=remTask>
                <img class="remTask" src="./assets/trash.svg" alt="Icone de remoção de Tarefa">
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
    const footPrintRemTask = document.querySelectorAll('#remTask');
    // const footPrintFinTask = document.querySelectorAll('#finTask');

    addEventHandler(footPrintRemTask);
    // addEventHandler(footPrintFinTask);

}

// function finishTask() {

// }

function addEventHandler(remBottonsList) {
    // Loop percorrendo todos os botões de excluir
    for (let i = 0; i < remBottonsList.length; i++){
        const buttonRemove = remBottonsList[i];

        buttonRemove.addEventListener('click', removeTask)
    }
}

function removeTask(event) {
    // Pegar evento clicado
    const buttonSelected = event.currentTarget;

    // Apaga a tarefa (LI) a partir do botão selecionado
    const taskSelected = buttonSelected.closest('li');

    taskSelected.remove();
}

// function changeTheme() {

// }