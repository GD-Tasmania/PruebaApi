const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    let Usuario = document.getElementById("usuario").value
    let Contraseña = document.getElementById("contraseña").value
    let saveUser = { Usuario, Contraseña }
    let saveUserJson = JSON.stringify(saveUser)

    //Mandar los datos al backend y guardarlos ahi
    fetch("http://localhost:3000/transaction", {
    method: "Post",
    body: saveUserJson
    })
})

fetch("http://localhost:3000/transaction").then(x=>x.json()).then(console.log)