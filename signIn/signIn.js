let title = document.getElementById("title");
let nameField = document.getElementById("nameField");
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let anchor = document.getElementById("anchor");
let para = document.getElementById("para");
let para1 = document.getElementById("para1");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    para.style.visibility = "hidden";
    para1.style.visibility = "visible";
}

anchor.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    para.style.visibility = "hidden";
    para1.style.visibility = "visible";
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
    para.style.visibility = "visible";
    para1.style.visibility = "hidden";
}