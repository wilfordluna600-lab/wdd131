const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);
/* I have duplicated the code that is in line
and in line 9, I want to remember this, and if
it is necesary I'm going to delete it, for the
time being these lines stay here. */
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();}
});
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});
