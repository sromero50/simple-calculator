const result = document.querySelector("#resultado");

sumar = () =>{
    let valor1 = parseInt(document.querySelector("#valor1").value);
    let valor2 = parseInt(document.querySelector("#valor2").value);
    var total = valor1+valor2;
    console.log(valor1, valor2);
    result.value = total;
    }

restar = () =>{
    let valor1 = parseInt(document.querySelector("#valor1").value);
    let valor2 = parseInt(document.querySelector("#valor2").value);
    var total = valor1-valor2;
    console.log(valor1, valor2);
    result.value = total;
    }

multiplicar = () =>{
    let valor1 = parseInt(document.querySelector("#valor1").value);
    let valor2 = parseInt(document.querySelector("#valor2").value);
    var total = valor1*valor2;
    console.log(valor1, valor2);
    result.value = total;
    }

dividir = () =>{
    let valor1 = parseInt(document.querySelector("#valor1").value);
    let valor2 = parseInt(document.querySelector("#valor2").value);
    var total = valor1/valor2;
    console.log(valor1, valor2);
    result.value = total;
    }

