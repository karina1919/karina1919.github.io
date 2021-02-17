let toDoButton = document.getElementById('add-button');
let toDoContainer = document.getElementById('container-todo');
let inputField = document.getElementById('input-field');


toDoButton.addEventListener('click', function(){
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    let div = document.createElement('div');
    let trash = document.createElement('img');
    trash.src="trash.jpg";
    trash.style.width='15px';
    trash.style.float='right';
    checkbox.type = "checkbox";


    div.classList.add('div-styling');
    label.appendChild(document.createTextNode(inputField.value));
    let br = document.createElement('br');
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(trash);
    toDoContainer.appendChild(div);
    toDoContainer.appendChild(br);
    inputField.value="";

    trash.addEventListener('click', function(){
        toDoContainer.removeChild(div);
        toDoContainer.removeChild(br);
    });

    checkbox.addEventListener('change', function(){
        if(checkbox.checked){
            label.style.textDecoration = 'line-through';
        }
        else {
            label.style.textDecoration = 'none';
        }
    });
});
