const FORM = document.querySelector('#form')
const implementar_resultado = document.querySelector('#implementacao_resultado')
let PESO_INPUT = document.querySelector("#peso_input").value
let ALTURA_INPUT = document.querySelector("#altura_input").value
let NOME_INPUT = document.querySelector('#nome_input').value


FORM.addEventListener('submit', (e) => {
    e.preventDefault()

PESO_INPUT = document.querySelector("#peso_input").value
ALTURA_INPUT = document.querySelector("#altura_input").value
  
    
    const calcularIMC = (peso, altura)  => {
        let IMC = peso / (altura * altura)
        return IMC.toFixed(2);
    }

    
    function verificarIMC (peso) {

        var definirValor = [
            "abaixo do peso", //0
            "peso Normal", //1
            "sobrepeso", //2
            "obesidade GRAU 1 ", //3
            "obesidade GRAU 2", //4
            "obesidade Grau 3" //5
        ]
        if(peso > 0 && peso < 18.5 ) return definirValor[0]
        if(peso > 18.5 && peso < 24.9) return definirValor[1]
        if(peso > 25 && peso < 29.9) return definirValor[2]
        if(peso > 30 && peso < 34.9) return definirValor[3]
        if ( peso > 35 && peso < 39.9) return definirValor[4]
        if(peso > 40) return definirValor[5]

    }
    
    function limpar() {
        document.querySelector("#peso_input").value = ''
        document.querySelector("#altura_input").value = ''

    }

    function addResultado() {
       
       
        const add = calcularIMC(PESO_INPUT, ALTURA_INPUT)
        const verificação = verificarIMC(add)
        const valoresIsNull = PESO_INPUT && ALTURA_INPUT ? true : false
        
        if(!valoresIsNull) {
            implementar_resultado.textContent = `Contem campos a serem preenchidos`
        } else {
            implementar_resultado.textContent = `O seu IMC é de ${add}, ${verificação}`
        }
    }
addResultado()
limpar()

})