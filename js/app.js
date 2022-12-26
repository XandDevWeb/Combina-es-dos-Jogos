
const getDozensForm = document.querySelector('[name="get-dozens-form"]')
const dozensInput = document.querySelector('[id="dozens-input"]')

const showBets = bets => {
  const ulElement = document.querySelector('[id="htmlBets"]')

  const lis = bets.reduce(
    (marcation, bet) => marcation += `<li>${bet.join(" . ")}</li>`,
    "<li>Principais combinações possíveis</li>"
  )

  ulElement.innerHTML = lis
}

getDozensForm.addEventListener("submit", event => {
  // Evento de submissão do formulário interrompido para
  // que a página não recarregue.
  event.preventDefault()

  //Obter o array de dezenas
  const dozensArrayInput = dozensInput.value
    .split(",")
    .map(item => Number(item))

  // Se foi digitado 0 ou não foi separado por vírgula
  // pelo menos um valor será nulo e, portanto, o programa
  // deve notificar e parar.

  // O programa deve substituir os dois excedentes pelo ultimo número.
  //Número de dezenas usadas na aposta
  const betLength = Number(document.querySelector('[id="bet-length"]').value)
  console.log(betLength)

  const dozensArrayInputLength = dozensArrayInput.length        //Número de dezenas fornecidas 
  const overrunDozens = dozensArrayInput.slice(betLength)       //Dezenas excedentes
  const dozensArray = dozensArrayInput.slice(0, betLength)      //Dezenas usadas na aposta

  const bets = new Array()

  bets.push(dozensArray)

  //Contagem regressiva das posições a mudar 1 a 1.
  for (let p = betLength - 1; p >= 0; p--) {

    //Muda a dezena existente com as excedentes.
    for (let i = 0; i < overrunDozens.length; i++) {
      //A aposta original tem as dezenas trocadas por as excedentes aqui.
      const bet = Array.from(dozensArray)
      bet[p] = overrunDozens[i]

      //A alteração é posta no Array de apostas.
      bets.push(bet)
    }
  }
  showBets(bets)
})