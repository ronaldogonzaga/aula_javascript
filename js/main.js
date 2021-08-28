var nome = "Ronaldo Gonzaga";
var idade = 33;
var idade2 = 43;
var frase = "Japão é o melhor time do mundo";
//alert("Meu primeiro js") /* alert gera popup*/
//alert("Bem vindo "+nome)
//alert(idade + idade2)
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());

// LISTA
//var lista = ["abacate","pera","goiaba","laranja"]
//lista.push("pera")
//console.log(lista)
//console.log(lista.length)
//console.log(lista.reverse) // imprime em ordem reversa
//console.log(lista.join(" - ")) // coloca o - como separador

// PROMPT
/*var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

// CONTADOR
/*var count = 0;
while (count <=7) {
    console.log(count);
    count++;
};
*/

// FOR
/*var count;
for (count=0; count <= 7; count++) {
    console.log(count);
};
*/

// COM DATAS
/*var d = new Date();
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getFullYear());
*/

// FUNCION
/*function soma(n1, n2){
    return n1+n2;
}
alert(soma(5,10));
*/

/*
function validaIdade(idade){
    var validar;
    if (validar >= 18){
        validar = true
    }else{
        validar = false
    }
}
*/

function clicou(){
    //alert("Clique capturado");
    document.getElementById("agradecimento").innerHTML = "<h2>Clique capturado</b>";
}

function redirecionar(){
    //window.open("https://globallabs.academy/");
    window.location.href="https://globallabs.academy/";
}