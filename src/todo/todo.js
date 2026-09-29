
//input, addBtn, todoList
let input = document.querySelector(".input");
let addBtn= document.querySelector(".addBtn");
let todoList= document.querySelector(".todoList");

addBtn.addEventListener("click", ()=>{
  const text = input.value;
  let li = document.createElement("li");
  li.textContent = text;
  todoList.appendChild(li);
  input.value="";
});

