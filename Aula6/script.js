//EXERCICIO - 1
//function lerNumero(){
    //let valor = prompt('Digite um valor:')
    //if( valor < 0){
//        alert('Negativo')
 //   }
//    else{
 //       alert('positvo')
 //   }    

//}

//lerNumero()

//-----------------------------------------------------

//EXERCICIO - 2
//function lerValor(){
 //   let numero = prompt('Digite um numero')
 //   if(numero % 2 == 0){
 //       alert('Par')
 //   }
 //   else{
 //       alert('Impar')
 //   }
//}

//lerValor()

//------------------------------------------------------

//EXERCICIO - 3
//function lerVelocidade(){
//    let velocidae = prompt('Digite o velocidade do veiculo')
//    if(velocidae > 50){
//        alert('Acima da velocidade permitida')
//    }
//    else{
//        alert('Dentro do limite permitido')
//    }
//}
//
//lerVelocidade()

//---------------------------------------------------------

//EXERCICIO - 4
//function lerDistancia(){
//    let viagem = prompt('Digite o valor percorrido')
//    let combustivel = viagem /10
//    alert(`voce gastou ${combustivel} litros`)
//}

//lerDistancia()

//---------------------------------------------------------

//EXERCICIO - 5 (não fiz)
//function converterHoras() {
//    let horas = Number(prompt('Informe a quantidade de horas: '))
//    let minutos = horas * 60
//    let segundos = horas * 3600
//    alert(`Quantidade de minutos: ${minutos}`)
//    alert(`Quantidade de segundos: ${segundos}`)
//}
//
//converterHoras()
//-------------------------------------------------------------

//EXERCICIO(Parametro) - 1
//function verificarArea(base, altura){
//    let area = base * altura /2
//    alert(`A area do triangulo é ${area}`)
//}
//let base = prompt('Digite o valor da base')
//let altura = prompt ('Digite o valor da altura')

//verificarArea(base, altura)

//----------------------------------------------------------------

//EXERCICIO(Parametro) - 2
//function verificarPeso(peso, altura){
//    let imc = peso /(altura * 2)
//    alert(`Seu imc é de ${imc}`)
//}
//let peso = prompt('Digite o seu peso')
//let altura = prompt('Digite a sua altura')
//
//verificarPeso(peso, altura)

//---------------------------------------------------------------

//EXERCICIO(Parametro) - 3
//function verificarReal(real){
//    let cotação = 5.45
//    let valor = real * cotação
//    alert(`O valor convetido é de ${valor} dolares `)
//}
//let real = prompt('Digite o valor que quer converter')

//verificarReal(real)

//------------------------------------------------------------------

//EXERCICIO(Parametro) - 4 ( erro no resultado)
function verificarTrapezio(basemaior, basemenor, altura){
    let area = (basemaior + basemenor) * altura /2
    alert(`A area do trapezio é ${area}`)
}
let basemaior = prompt('Digite o valor da base maior')
let basemenor = prompt('Digite o valor da base menor')
let altura = prompt('Digite o valor da altura')

verificarTrapezio(basemaior, basemenor, altura)   


//------------------------------------------------------------------
//EXERCICIO(Parametro) - 5 (não fiz)
//function calcularGastos(consumo) {
//    let gasto = consumo * 6.45
//    alert(gasto)
//}

//calcularGastos(10)

//--------------------------------------------------------------------