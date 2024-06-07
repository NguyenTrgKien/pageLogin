var getInput = document.querySelector("input[type = password]");
var getIcon = document.querySelector(".login__icon-eye");

getIcon.addEventListener("click", () =>{
    if(getInput.type === "password"){
        getInput.type = "text";
        getIcon.classList.add('fa-eye');
        getIcon.classList.remove('fa-eye-slash');
    }else{
        getInput.type = "password";
        getIcon.classList.remove('fa-eye');
        getIcon.classList.add('fa-eye-slash');
    }               
})

var getBtn = document.querySelector(".login__btn");
var getInputEnnail = document.querySelector("input[type = email]");
var getDivErrorEmail = document.querySelector(".login__error-email");
var getDivErrorPass = document.querySelector(".login__error-password");
getBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(getInput.value == ""){
        getDivErrorPass.style.display = "block";
    }else{
        getDivErrorPass.style.display = "none";
    }

    if(getInputEnnail.value == ""){
        getDivErrorEmail.style.display = "block";
    }else{
        getDivErrorEmail.style.display = "none";
    }
})
const login = document.querySelector(".login__btn");
login.onclick = (e) => {
    if(getInputEnnail.value === "" || getInput.value === ""){
        alert("Vui lòng nhập thông tin!")
    }else{
        alert("Bạn đã đăng nhập thành công.");
    }
}
