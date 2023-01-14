const list = document.querySelector('ul');
const fieldEnterNewTask = document.querySelector('#task');
const buttonAddNewTask = document.querySelector('.form input[type=submit]');

buttonAddNewTask.addEventListener('click', addNewTask);

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addNewTask() {
    const typedContent = fieldEnterNewTask.value;

    if (typedContent != '') {
        tasks.push(typedContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
              
        const newTaskStructure = `

        <h2>${retrieveList()}</h2>
        <div>
            <button id="finTaskButton">
                <img class="finTaskButton" src="./assets/square.svg" alt="Ícone de concluir Tarefa">
            </button>
            <button id=remTaskButton>
                <img class="remTaskButton" src="./assets/trash.svg" alt="Ícone de remoção de Tarefa">
            </button>
        </div>                              
    `;

    const taskToBeCreated = document.createElement('li');

    taskToBeCreated.innerHTML = newTaskStructure;

    list.appendChild(taskToBeCreated);

    const footPrintRemTask = document.querySelectorAll('#remTaskButton');
    const footPrintFinTask = document.querySelectorAll('#finTaskButton');

    addEventHandlerRemTask(footPrintRemTask);
    addEventHandlerFinTask(footPrintFinTask);

    fieldEnterNewTask.value = '';
        
    }
}

function retrieveList () {
    const storedList = localStorage.getItem('tasks');
    if (storedList) {
        return JSON.parse(storedList);
    }
    else {
        return [];
    }
}

retrieveList();

function addEventHandlerFinTask(finButtonsList) {
    for (let i = 0; i < finButtonsList.length; i++) {
        const buttonFinishTask = finButtonsList[i];

        buttonFinishTask.addEventListener('click', finishTask)
    }
}

function finishTask(event) {
    const buttonSelected = event.currentTarget;

    const taskSelected = buttonSelected.closest('li');

    taskSelected.classList.toggle('finTask');

}

function addEventHandlerRemTask(remButtonsList) {
    for (let i = 0; i < remButtonsList.length; i++) {
        const buttonRemoveTask = remButtonsList[i];

        buttonRemoveTask.addEventListener('click', removeTask)
    }
}

function removeTask(event) {
    const buttonSelected = event.currentTarget;

    const taskSelected = buttonSelected.closest('li');

    taskSelected.remove();
}

const buttonDarkMode = document.querySelector('.checkbox')
buttonDarkMode.addEventListener('click', changeTheme);

function changeTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('darkMode');
}
 
fieldEnterNewTask.addEventListener('keypress' ,addNewTaskWithKeyboard)

function addNewTaskWithKeyboard () {
    const typedContentListener = document.querySelector('#task');
    typedContentListener.addEventListener('keypress', (event) => {
        if (event.code === "Enter") addNewTask();
    });
}