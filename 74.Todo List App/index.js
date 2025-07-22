let form = document.querySelector('form');
let input = document.querySelector('input[type="text"]');
let output = document.querySelector('.output');
let message = document.querySelector('.message');

function addTodo(value){
  let todo = document.createElement('div');
  let text = document.createElement('span');
  text.innerHTML = value;
  todo.appendChild(text);
  message.classList.toggle('success')
  message.textContent = 'Todo added successfully!';

  setTimeout(() => {
    message.classList.remove('success');
    message.textContent = '';
  }, 2000);

  let closeButton = document.createElement('span');
  closeButton.innerHTML = '&times;';
  closeButton.classList.add('delete');
  closeButton.addEventListener('click', () => {
    output.removeChild(todo);
    message.classList.toggle('failure');
    message.textContent = 'Todo removed successfully!';

    setTimeout(() => {
      message.classList.remove('failure');
      message.textContent = '';
    }, 2000);
  });

  todo.appendChild(closeButton);

  todo.classList.add('todo');
  return todo;
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = input.value.trim();
  if (value) {
    let todo = addTodo(value);
    output.appendChild(todo);
    input.value = '';
  }
});