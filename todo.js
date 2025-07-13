let todoList =  [
    { item: 'Buy Milk',
         duedate: '4/10/2023' },];
displayItem();

function addTodo() {
    let inputElement = document.querySelector(`#todo-input`);
    let dateElement = document.querySelector(`#todo-Date`);
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({ item: todoItem, duedate: todoDate });
    inputElement.value = '';
    dateElement.value = '';
    displayItem();
}

function displayItem() {
    let containerItem = document.querySelector('.todo-container');
    let newHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        let { item, duedate } = todoList[i];
        newHTML += `
       <span>${item}</span>
       <span>${duedate}</span>
       <button class="btn-delete" onclick="todoList.splice(${i},1); displayItem();">Delete</button>`;
    }
    containerItem.innerHTML = newHTML;
    localStorage.setItem('todoList', JSON.stringify(todoList));

}
