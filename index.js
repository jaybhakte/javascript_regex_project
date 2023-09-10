console.log("project 2")

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let phone = document.getElementById("phone")

//for username

username.addEventListener("blur",function(){
    let str = username.value;
   let reg = /^[_a-zA-Z]([0-9a-zA-Z@_-]){2,10}$/;
   if(reg.test(str)){
    username.classList.remove("is-invalid");
    console.log("success");
   }else{
    username.classList.add("is-invalid")
    console.log("failure")
   }
})

email.addEventListener("blur",function(){
    let str = email.value;

    let reg = /^[a-z0-9]+@([a-z])+\.([a-z])+$/;

    if(reg.test(str)){
        email.classList.remove("is-invalid")
    }else{
        email.classList.add("is-invalid");
       
    }
})

password.addEventListener("blur",function(){
    let str = password.value;
    console.log(str);
    let reg = /^[0-9A-Za-z@_]{8,12}$/
    if(reg.test(str)){
        password.classList.remove("is-invalid");
    }else{
        password.classList.add("is-invalid");
        console.log(reg)
    }
})

phone.addEventListener("blur",function(){
    let str = phone.value;
    console.log(str);
    let reg = /^\+[0-9]{2}([0-9]){10}$/;
    if(reg.test(str)){
        phone.classList.remove("is-invalid");
    }else{
        phone.classList.add("is-invalid");
        console.log(reg)
    }
})