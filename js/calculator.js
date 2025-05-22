
const btnSuma = document.getElementById("suma")
const btnResta = document.getElementById("resta")
const btnMultiplicacion = document.getElementById("multiplicacion")
const btnDivision = document.getElementById("division")

const setError = (id1, msg) => {
    document.getElementById(id1).className = "input-error";
    document.getElementById(`${id1}-error`).className = "helper-error";
    document.getElementById(`${id1}-error`).innerText = msg;
    }


const cleanError = (id1) => {
    document.getElementById(id1).className =  "input"
    document.getElementById(`${id1}-error`).className = "helper"
    document.getElementById(`${id1}-error`).innerText = ""
}

const getNro = (nro) => {
    return document.getElementById(nro).value;
}

const botones = document.querySelectorAll("button")

 const validateInt = (number) => number && parseInt(number) >= 0;

 botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        nro1 = getNro("nro1")
        nro2 = getNro("nro2")
        operacion = boton.innerText
        ejecutar(nro1, nro2, operacion)

    })
})

const ejecutar = (nro1, nro2, operacion) => {

    valida  = true
    if (!validateInt(nro1))
        {
            setError("nro1", "nro invalido")
            valida = false
        }
        else
            cleanError("nro1")

    if (!validateInt(nro2))
        {
            setError("nro2", "nro invalido")
            valida = false
        }
        else
            cleanError("nro2")

    if (!valida)
        return 0

    let resultado = 0
    switch(operacion)
    {
        case "+":
        case "-":
        case "*":
            resultado = eval(nro1 + operacion + nro2)
            break
        case "/":
            if (nro2 != 0)
                resultado = eval(nro1 + operacion + nro2)
            else
            {
                resultado = "Error! Div / 0"
                setError("nro2", "nro invalido")
            }
            //alert("division")
    }
    mostrarResultado(resultado)
}

const mostrarResultado = (resultado) => {
    //document.getElementById("result").innerHTML = resultado
    document.getElementById("result").value = resultado
}