let contaner = document.querySelector(".contaner") 
let minusBtn  = document.querySelector(".minusBtn");
let holder = document.querySelector(".holder");
let plusBtn = document.querySelector(".plusBtn");
let count = 0;
plusBtn.addEventListener("click", ()=>
    holder.textContent= ++count);

minusBtn.addEventListener("click", ()=>
   count>0? holder.textContent = --count:  count );
    






// let contaner = document.querySelector(".contaner");
// let plus = document.querySelector(".plusBtn");
// let minus = document.querySelector(".minusBtn");
// let holder = document.querySelector(".holder");
// let count = 0;
// plus.addEventListener("click", ()=>{
//       count++;
//       holder.textContent = count;
// });

// minus.addEventListener("click", ()=>{
//     if(count>0){
//        count--;
//         holder.textContent = count;
        
//     }
//     holder.textContent=count;
// })

// contaner.addEventListener("click", (e)=>{
//     console.log("you have clicked", e.target)
// });


