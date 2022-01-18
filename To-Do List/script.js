function doneItem(){
}

function removeItem(){
}

function createItem(){
  let taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("taskItemContainer");
  taskItemContainer.classList.add("undone");

  let taskItemTitle = document.createElement("textarea");
  taskItemTitle.placeholder = "Título da tarefa";
  taskItemTitle.classList.add("itemTitle");
  taskItemContainer.appendChild(taskItemTitle);
  
  let taskItemDescription = document.createElement("textarea");
  taskItemDescription.placeholder = "Descrição da tarefa";
  taskItemDescription.classList.add("itemDescription");
  taskItemContainer.appendChild(taskItemDescription);

  let totalElement = document.querySelector("#totalItems");
  totalElement.innerText++;

  let taskItemAdd = document.createElement("button");
  taskItemAdd.innerText = "Confirmar";
  taskItemAdd.classList.add("buttonConfirm");
  taskItemContainer.appendChild(taskItemAdd);
  
  taskItemAdd.addEventListener("click", function(){confirmAddItem(taskItemContainer)});

  let leftItems = document.querySelector("#leftItems");
  leftItems.innerText++;

  let itemsList = document.querySelector(".itemsList");
  itemsList.prepend(taskItemContainer);
}

function confirmAddItem(taskParent){
  let title = taskParent.childNodes[0].value;
  let description = taskParent.childNodes[1].value;
  console.log(title);
  taskParent.childNodes[1].addEventListener("input", valorInput);

  let taskTitle = document.createElement("h3");
  let taskDescription = document.createElement("h4");
  taskTitle.classList.add("taskTitle");
  taskDescription.classList.add("taskDescription");

  taskTitle.innerText = title;
  taskDescription.innerText = description;
}

function valorInput(e){
  let x = e.target.value;
  console.log(x);
}


