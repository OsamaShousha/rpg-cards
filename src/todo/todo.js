
//input, addBtn, todoList
let input = document.querySelector(".input");
let addBtn= document.querySelector(".addBtn");
let todoList= document.querySelector(".todoList");

addBtn.addEventListener("click", ()=>{
    const text = input.value.trim();
    if(text === ""){
        return;
    }
    const li = document.createElement("li");
    li.textContent = text;
    todoList.append(li);
    input.value = "";


    const delet = document.createElement("button");
    li.appendChild(delet);
    delet.textContent = "Deleted";
    todoList.append(li);
    delet.addEventListener("click", ()=>{
        li.remove();
    });

    
});



