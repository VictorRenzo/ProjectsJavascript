function doneItem(){
}

function removeItem(taskContainer, title){
  taskContainer.remove();
  window.localStorage.removeItem(title);
  let totalElement = document.querySelector("#totalItems");
  totalElement.innerText--;
  let leftItems = document.querySelector("#leftItems");
  leftItems.innerText-- ;
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
   if (title == "" || description == ""){
    window.alert("Don't leave blank spaces");
    return;
  }

  createTaskHTML(title, description);
  window.localStorage.setItem(title, description);
  closeModal();
} 

function closeModal(){
  document.querySelector(".modal").remove();
  document.querySelector(".addItem").disabled = false;
}

function getStorage() {
  let keys = Object.keys(localStorage);
  keys.forEach( (key) => {
    createTaskHTML(key, window.localStorage.getItem(key));
  });
}

function createTaskHTML(title, description){
  let taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");

  let taskTitle = document.createElement("p");
  let taskDescription = document.createElement("p");
  taskTitle.classList.add("taskTitle");
  taskDescription.classList.add("taskDescription");

  let removeButton = document.createElement("button");
  removeButton.innerText = "X";
  removeButton.classList.add("removeButton");
  removeButton.addEventListener("click", function(){removeItem(taskContainer, title);});

  taskTitle.innerText = title;
  taskDescription.innerText = description;

  taskContainer.append(removeButton);

  let taskContainerText = document.createElement("div");
  taskContainerText.classList.add("taskContainerText");
  taskContainer.prepend(taskContainerText);
  taskContainerText.append(taskTitle);
  taskContainerText.append(taskDescription);

  let itemsList = document.querySelector(".itemsList");
  itemsList.prepend(taskContainer);
 
  let totalElement = document.querySelector("#totalItems");
  totalElement.innerText++;
  let leftItems = document.querySelector("#leftItems");
  leftItems.innerText++;
}

getStorage();