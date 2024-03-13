/*
Crea una función que calcule el índice de masa corporal (IMC) de una persona 
a partir de su altura en metros y peso en kilogramos,
 que se recibirán como parámetros.
*/

function imc(altura,peso) {
    
    let al = parseFloat(document.getElementById('altura').value);
    let pess = parseFloat(document.getElementById('peso').value);

    console.log(al);
    console.log(pess);
    console.log(typeof(al));
    console.log(typeof(pess));
    
    let res = Math.round(parseFloat((pess / (al*al))));

    asignarTextoElemento('#resultado',`Su IMC es ${res}`);
    return res;
}

function asignarTextoElemento(elemento,texto){
    let selectorHTML = document.querySelector(elemento);
    selectorHTML.innerHTML = texto;

}

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function nfactorial(){
        let numero = parseFloat(document.getElementById('factorial').value);
        
        contador = numero -1; 
        console.log(contador);
        let resultado = contador*numero;
        contador = contador -1;    
        while(contador!= 1){
            resultado *=  contador;
            contador--;
        }
        asignarTextoElemento('#resultado',`El resultado del factorial es: ${resultado}`);
}

/*
Crea una función que convierta un valor en dólares, pasado como parámetro,
y devuelva el valor equivalente en reales(moneda brasileña,
si deseas puedes hacerlo con el valor del dólar en tu país).
Para esto, considera la cotización del dólar igual a R$4,80.
*/

function conversionMoneda(){
    let dolar = 0.041;
    let lempiras = document.getElementById('lps').value;
    let resultado = Math.round(lempiras * dolar);
    asignarTextoElemento('#resultado',`Son $${resultado}`);
}

/*
Crea una función que muestre en pantalla el área
 y el perímetro de una sala rectangular,
  utilizando la altura y la anchura que se proporcionarán como parámetros.
*/

function rectangulo(){
    let altura = document.getElementById('altura').value;
    console.log(altura);
    let anchura = document.getElementById('anchura').value;
    console.log(anchura);

    let area = Math.round(altura * anchura);
    let perimetro = Math.round((altura*2)+(anchura*2));
    asignarTextoElemento('#resultados',`El area del rectangulo es ${area} y su perimetro es ${perimetro}`);
    
}


asignarTextoElemento('h1','Area y perimetro de un rectangulo');
asignarTextoElemento('p','Ingrese los datos necesarios');