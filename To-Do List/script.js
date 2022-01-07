function createItem(){
  let taskItem = document.createElement("div");
  taskItem.classList.add("item");

  let itemsList = document.querySelector(".itemsList");
  itemsList.prepend(taskItem);

  let totalElement = document.querySelector("#totalItems");
  totalElement.innerText++;

  let leftItems = document.querySelector("#leftItems");
  leftItems.innerText++;
}

function doneItem(){

}

function removeItem(){

}
