const btn = document.getElementById("btn-send"),
    email = document.getElementById("exampleFormControlInput1"),
    text = document.getElementById("exampleFormControlTextarea1")
    message = document.getElementById("message")

function clearInputs() {

    if(email.value === "" || text.value === "" ) {
        message.textContent = "Please, fill the contact form correctly"
        message.classList.remove("text-success")
        message.classList.add("text-danger")
    } else if(!email.value.includes("@")) {
        message.textContent = "Please, give us your real email"
        message.classList.remove("text-success")
        message.classList.add("text-danger")
    } else {
        message.textContent = "Thanks for sending this email"
        message.classList.remove("text-danger")
        message.classList.add("text-success")
    }

    setTimeout(() => {
        message.textContent = ""
    }, 3000)

    email.value =" "
    text.value =" "
}

btn.addEventListener("click", clearInputs)