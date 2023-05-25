//Cách 1
// import { validateEmail } from "./validateV1.js";
// import { validateNumber } from "./validateV1.js";
// import { validatePhoneNumberVn } from "./validateV1.js";
// import { validateText } from "./validateV1.js";

//Cách 2
//import { validateEmail, validateNumber, validateText, validatePhoneNumberVn } from "./validateV2.js";

//Cách 3
import validate from "./validateV3.js";
const { validateEmail, validateNumber, validatePhoneNumberVn, validateText} = validate(); 

const form = document.getElementById("form-1");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const name = document.getElementById('name');
const password = document.getElementById('password');
const repassword = document.getElementById("repassword");


const setError = (input, message) => {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".errorMessage");
    input.classList.add("errorMessage___error");
    errorMessage.innerHTML = message;
};

const setSuccess = (input) => {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".errorMessage");
    input.classList.remove("errorMessage___error");
    errorMessage.innerHTML = "";
};

name.addEventListener("input", () => {
    if (name.value === "") {
        setError(name, "Tên Đăng Nhập không được để trống");
    } else if (!validateText(name.value) || name.value.length < 8) {
        setError(name, "Tên Đăng nhập chỉ chứa chữ cái và từ 8 kí tự trở lên");
    } else {
        setSuccess(name);
    }
}); 

email.addEventListener("input", () => {
    if(email.value === "") {
        setError(email, "Email không được để trống");
    } else if (!validateEmail(email.value)) {
        setError(email, "Email không hợp lệ");
    } else {
        setSuccess(email);
    }
});

phone.addEventListener("input", () => {
    if (phone.value === "") {
        setError(phone, "số điện thoại không được để trống");
    } else if (!validatePhoneNumberVn(phone.value)) {
        setError(phone, "số điện thoại chưa đúng");
    } else {
        setSuccess(phone);
    }
});

password.addEventListener('input', () => {
    if(password.value === "") {
        setError(password, "Mật khẩu không được để trống");
    }else if (!validateNumber(password.value) || password.value.length < 8) {
        setError(password, "Mật khẩu chỉ chứa số và từ 8 kí tự trở lên");
    }else {
        setSuccess(password);
    }
});

repassword.addEventListener('input', () => {
    if (repassword.value != password.value) {
        setError(repassword, "Mật Khẩu nhập lại chưa đúng");
    } else {
        setSuccess(repassword);
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const error = document.querySelector(".errorMessage___error");
    if (name.value === "" || email.value === "" || phone.value === "" || password.value === "" || repassword.value === "") {
        alert("vui lòng điền tất cả thông tin bên dưới");
    } else if (error) {
        alert("vui lòng nhập thông tin đúng theo gợi ý");
    } else {
        localStorage.setItem("UserName", name.value);
        localStorage.setItem("Password", password.value);
        localStorage.setItem("Email", email.value);
        localStorage.setItem("Phone", phone.value);

        alert("bạn đã đăng kí thành công");
        location.reload();
    }
});
