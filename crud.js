let postUrl = 'http://localhost:4001/users/register'
let getUrl = 'http://localhost:4001/users/view'
let updateUrl = 'http://localhost:5000/users/update'
let deleteUrl = 'http://localhost:5000/users/delete'


let fna = document.getElementById('name');
let ema = document.getElementById('email');
let pas = document.getElementById('password');
let btn = document.getElementById('butn');
let tbl = document.getElementById('tbl')
let msg=document.getElementById('msg')



// eye btn
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


let format=/^(([^<>()[\]\\.,;:\s@"]+(\[^<>()[.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// /^(([^<>()[\]\\.,;:\s@"]+(\[^<>()[.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/</>


btn.addEventListener("click", post)

// post
async function post(){
    let fname=fna.value.trim();
    let mail=ema.value.trim();
    let pass=pas.value.trim();
    if(fname==="" || mail==="" || pass===""){
        alert("Please enter the full form")
        // msg.text="please enter the full form"
        return 
    }

    if(fname.length<=3){
       alert("please enter thte name correct format")
    // msg.innerHTML="please enter the full form"
    
    }

    if(!(format.test(mail))){
        alert("enter valid email")
        // msg.innerHTML="please enter the full form"
        
    }

    if(pass.length!==8){
        alert("Password is required")
        // msg.innerHTML="please enter the full form"
        return
    }
   


    let userObj={name:fname,email:mail,password:pass};
    let userStr=JSON.stringify(userObj)

    try{
        let object={
            method:"POST",
            headers:{"content-type":"application/json"},
            body:userStr
        }
        let response=await fetch(postUrl,object);
        let res=await (response.json());
        // console.log("hai")
        if(res.ok){
            fname.value="";
            mail.value="";
            pass.value="";

            get()
        }
    }
    catch(err){
        console.log(err)
    }
}

// get
async function get(){
    try{
    let response=await fetch(getUrl);
    let resget=await response.json();
    console.log(response)
    if(response.ok){
        creatInterface(resget.data)
    }
}
catch(err){
    console.log(err)
}
}
get()
// create

function creatInterface(data){
    tbl.innerHTML="";

    for(let key of data){
        let id=key._id;
        let fn=key.name;
        let em=key.email;
        let ps=key.password;
        
        let ps1=""
        for(i=0;i<ps.length;i++){
            ps1+="*"
        }
        // console.log(id)
        let tr=document.createElement('tr')
        tr.innerHTML=
        `
        <td>${fn}</td>
        <td>${em}</td>
        <td>${ps1}</td>
        <td><button class="btn btn-primary btn-sm" onclick="upd('${id}','${fn}','${em}','${ps}')">edit</button></td>
        <td><button class="btn btn-danger btn-sm" onclick="del('${id}')">delete</button></td>
        `
    tbl.append(tr)
    }
}
get()
// del

async function del(id){
    try{
       let response=await fetch(`${deleteUrl}?_id=${id}`,{
       method:"DELETE"
    })
    if(response.ok){
        get()
    }
   }
   catch(err){
    console.log(err)
   }
}

// upp

let addupdate=document.getElementById('addupdate');
addupdate.style.display="none"

function upd(a,b,c,d){
    addupdate.style.display="inline-block"
    btn.style.display="none"
    fna.value=b;
    ema.value=c;
    pas.value=d;

    addupdate.addEventListener("click",function(){
        
        let userObj=JSON.stringify({name:fna.value,email:ema.value,password:pas.value})
        addup(a,userObj)
    })
}

async function addup(id,userObj){
    try{
           let response=await fetch(`${updateUrl}?_id=${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:userObj
           })
           if(response.ok){
            fna.value="";
            ema.value="";
            pas.value="";
           }
           get()
    }
    catch(err){
        console.log(err)
    }
}









