
let input=document.querySelector("input");
let addBtn=document.querySelector(".add");
let updateBtn=document.querySelector(".update")
let error=document.querySelector(".error")
let ul=document.querySelector("ul")
let array=[]
let arrayIndex=""

addBtn.addEventListener("click",()=>{
    let inputValue=input.value ;
    let inputArray= Array.from(inputValue);
    let inputValueSplit = inputValue.split(" ");
    if(!input.value){
        error.innerHTML = "please inter your text "
    }
    else if(inputArray[0]-22){
        error.innerHTML = "please inter your text "
    }
    else if(inputValueSplit.length>100){
        error.innerHTML = "inter your text 100  over"
    }
    else{
        error.innerHTML = "";
        array.push(input.value);
        input.value = ""
        todoFun()
    }
});

const todoFun=()=>{
    ul.innerHTML="";
    array.map((todo)=>{
        ul.innerHTML += `<li>${todo}\t <button class="delete">Delete</button>\t <button class="edit">Edit</button></li>`;
        
        //delet button
        let deletBtn = document.querySelectorAll(".delete");
        let delet  = Array.from(deletBtn);
        delet.map((deletItem,deletIndex)=>{
            deletItem.addEventListener("click",()=>{
                array.splice(deletIndex,1);
                todoFun()
            })
        });

        //edit button
        let editBtn = document.querySelectorAll(".edit");
        let edit  = Array.from(editBtn);
        edit.map((editItem,editIndex)=>{
            editItem.addEventListener("click",()=>{
                input.value = array[editIndex]
                input.focus();
                addBtn.style.display="none"
                updateBtn.style.display="inline-block";
                arrayIndex=editIndex
            })
        })
    })
}

//updet button 
updateBtn.addEventListener("click",()=>{
    let inputValue=input.value ;
    let inputArray= Array.from(inputValue);
    let inputValueSplit = inputValue.split(" ");
    if(!input.value){
        error.innerHTML = "please inter your text "
    }
    else if(inputArray[0]-22){
        error.innerHTML = "please inter your text "
    }
    else if(inputValueSplit.length>100){
        error.innerHTML = "inter your text 100  over"
    }
    else{
        error.innerHTML = "";
        array[arrayIndex] = input.value;
        input.value = "";
        updateBtn.style.display="none"
        addBtn.style.display="inline-block";
        todoFun();
    }
})























// addBtn.addEventListener("click",()=>{
//     if(!Boolean(input.value)){
//         error.innerHTML="please inter your message"
//     }else{
//         error.innerHTML="";
//         array.push(input.value);
//         input.value=""
//         newFun()
//     }
// });

// const newFun=()=>{
//     ul.innerHTML=""
//     array.map((inputItem)=>{
//         ul.innerHTML+=`<li>${inputItem} <button class="edit">Edit</button> <button class="delet">Delet</button></li>`
//     });
//     //delet button
//     const delet=document.querySelectorAll(".delet");
//     const deletBtn=Array.from(delet);
//     deletBtn.map((delItem,index)=>{
//         delItem.addEventListener("click",()=>{
//             array.splice(index,1);
//             newFun()
//         })
//     });

//     //edit button
//     const edit=document.querySelectorAll(".edit");
//     const editBtn=Array.from(edit);
//     editBtn.map((editItem,idx)=>{
//         editItem.addEventListener("click",()=>{
//             input.focus();
//             input.value=array[idx];
//             arrayIndex=idx
//             updateBtn.style.display="inline-block"
//             newFun()
            
//         })
//     });
//     //update button

// }
// updateBtn.addEventListener("click",()=>{
//     if(!Boolean(input.value)){
//         error.innerHTML="please select something"
//     }else{
//     error.innerHTML=""
//     array[arrayIndex]=input.value;
//     input.value=""
//     newFun()
//     }
// })