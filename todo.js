// let button=document.getElementById('add')
// let todoList=document.getElementById('todolist')
// let input=document.getElementById('input');

// let todoStore=[];
// window.onload=()=>{
//   todoStore=JSON.parse(localStorage.getItem('todoStore')) || []
//   todoStore.forEach(todo=>todovalue(todo))
//   console.log(todoStore)
// }

// button.addEventListener('click',()=>{
//     todoStore.push(input.value)
//     localStorage.setItem('todoStore',JSON.stringify(todoStore))
//     todovalue(input.value)
//     input.value=''
// })

// function todovalue(todo){
//     let para=document.createElement('p');
//     para.innerText=todo;
//     todoList.appendChild(para)
//     para.addEventListener('click',()=>{
//         para.style.textDecoration='line-through'
//         remove(todo)
//     })
//     para.addEventListener('dblclick',()=>{
//         todoList.removeChild(para)
//         remove(todo)

//     }) 
// }
// // remove value
// function remove(todo){
//     let index=todoStore.indexOf(todo)
//     if(index>-1){
//     todoStore.splice(index,1)
//     }
//     localStorage.setItem('todoStore',JSON.stringify(todoStore))
// }







// password
console.log("hai")
let pas = document.getElementById('password');
let eye= document.getElementById("eye")
eye.addEventListener("click",function(e){
    console.log(e)
console.log(pas.type)
    if(pas.type==="password")
    {
        // eye.setAttribute("style","color:blue")
        pas.setAttribute("type","text")
        console.log(eye)
        eye.classList.add("fa-eye-slash")
        eye.classList.remove("fa-eye")
    }
    else{
        pas.setAttribute("type","password")
        eye.classList.remove("fa-eye-slash")
        eye.classList.add("fa-eye")
    }
} 
    
)









// btn.addEventListener("click", post)


// function createInterface(data) {
//     // console.log(data[0].name)
//     tbl.innerHTML = "";
  
//     for(let key of data){
//         // console.log(key)
//         let id=key._id;
//         let fn = key.name;
//         let em = key.email;
//         let pw = key.password;

     
//         let tr=document.createElement("tr")
//         tr.innerHTML=
//         `
//         <td>${fn}</td>
//          <td>${em}</td> 
//          <td>${pw}</td>
//          <td><button class="btn btn-primary" onclick="upd('${id}','${fn}','${em}','${pw}')">edit</button></td>
//          <td><button class="btn btn-danger" onclick="del('${id}')">Delete</button></td>
//         `
// tbl.append(tr)
//     }

// }


// async function del(id){
//       try{
//         let response=await fetch(`${deleteUrl}?_id=${id}`,{
//             method :"DELETE"
//         })
//         if(response.ok){
//             get()
//         }
//       }
//       catch(err){
//         console.log(err)
//       }  
//     }
// let addupdate=document.getElementById('addupdate')
//  async function upd(a,b,c,d){
//     console.log(a,b,c,d)
//    fna.value=b;
//    ema.value=c;
//    pas.value=d;

//    addupdate.addEventListener("click",function(){
//     let userObj  = JSON.stringify( { name:  inputName.value, email:  inputEmail.value, password: inputPassword.value });
//     addup(a,userObj)
// })
// }

// async function addup(id,userObj){
//   try{
    
//     let response= await fetch(`${updateUrl}?_id=${id}`,{
//         method:"PUT",
//         headers:{"content-type": "application/json"},
//         body:userObj,
        
//     })
    
//     if(response.ok){
//         fna.value="";
//         ema.value="";
//         pas.value="";
//     }
//     get()
//   }
//   catch(err){
//     console.log(err)
//   } 
// } 


// async function post() {
//     let fname = fna.value.trim();
//     let email = ema.value.trim();
//     let pass = pas.value.trim();

//     let userObj = { name: fname, email: email, password: pass };
//     let userStr = JSON.stringify(userObj);


//     try {
//         let option = {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: userStr,
//         }
//         let response = await fetch(postUrl, option);
//         let ret = await (response.json())
//         console.log(ret)
        
//         if (response.ok) {
//         fname.value = "";
//         email.value = "";
//         pass.value = "";

//         get()
          
//         }
        
//     }

//     catch (error) {
//         console.log(error)
//     }
// }

// async function get() {
//     try {
//         let response = await fetch(getUrl);
//         let getRes = await response.json();
 
//         createInterface(getRes.data)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// get()


 