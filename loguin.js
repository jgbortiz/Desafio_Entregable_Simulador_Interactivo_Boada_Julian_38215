
//Loguin

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", (e)=>{
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value

    }
   let mensaje = document.createElement("h2")

   mensaje.innerHTML = `<h2>Bienvenido ${username.value}</h2>`
   contenedor.appendChild(mensaje)
})
