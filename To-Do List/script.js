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

function createItemModal(){
  let modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.prepend(modal);

  document.querySelector(".addItem").disabled = true;

  let forms = document.createElement("div");
  forms.classList.add("formsModal");
  modal.appendChild(forms);

  let modalTitle = document.createElement("p");
  modalTitle.classList.add("modalTitle");
  modalTitle.innerText = "Add task";
  forms.appendChild(modalTitle);

  let inputContainer = document.createElement("div");
  inputContainer.classList.add("inputContainer");

  let inputTitle = document.createElement("input");
  inputTitle.type = "text";
  inputTitle.classList.add("inputItemTitle");
  inputTitle.placeholder = "Task Title";

  let inputDescription = document.createElement("input");
  inputDescription.type = "text";
  inputDescription.classList.add("inputItemDescription");
  inputDescription.placeholder = "Task Description";

  
  let buttonsModalContainer = document.createElement("div");
  buttonsModalContainer.classList.add("buttonsModalContainer");
  
  let buttonCancel = document.createElement("button");
  buttonCancel.classList.add("buttonCancelAdd");
  buttonCancel.innerText = "Cancel";
  buttonCancel.addEventListener("click", function(){ closeModal();} );
  let buttonConfirmAdd = document.createElement("button");
  buttonConfirmAdd.classList.add("buttonConfirmAdd");
  buttonConfirmAdd.innerText = "Add Task";
  buttonConfirmAdd.addEventListener("click", function(){ confirmAddItem (inputContainer);});

  forms.appendChild(inputContainer);
  forms.appendChild(buttonsModalContainer);
  inputContainer.appendChild(inputTitle);
  inputContainer.appendChild(inputDescription);
  buttonsModalContainer.appendChild(buttonCancel);
  buttonsModalContainer.appendChild(buttonConfirmAdd);

 }

function confirmAddItem(taskParent){
  let title = taskParent.childNodes[0].value;
  let description = taskParent.childNodes[1].value;
  let taskTitle = document.createElement("h3");
  let taskDescription = document.createElement("h4");
  taskTitle.classList.add("taskTitle");
  taskDescription.classList.add("taskDescription");

  taskTitle.innerText = title;
  taskDescription.innerText = description;

  let itemsList = document.querySelector(".itemsList");
  itemsList.prepend(taskTitle);
  itemsList.prepend(taskDescription);

  closeModal();
} 

function closeModal(){
  document.querySelector(".modal").remove();
  document.querySelector(".addItem").disabled = false;
}

function valorInput(e){
  let x = e.target.value;
  console.log(x);
}


