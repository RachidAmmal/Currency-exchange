let currencyEl_one = document.getElementById('currency-one')
let currencyEl_two = document.getElementById('currency-two')
let amountEl_one = document.getElementById('amount-one')
let amountEl_two = document.getElementById('amount-two')

let rateEl = document.getElementById('rate');
let swap = document.getElementById('swap');

currencyEl_one.addEventListener('change', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
amountEl_two.addEventListener('input', calculate)

function calculate() {
   let currency_one = currencyEl_one.value
   let currency_two = currencyEl_two.value
   fetch("latest.json")
      .then(result => result.json())
      .then(data => {
         let m = +data.rates[`${currency_one}`]
         let e = +data.rates[`${currency_two}`]
         rateEl.innerHTML = `${m.toFixed(5)} ${currency_one} = ${e.toFixed(5)} ${currency_two}`
         amountEl_two.value = ((amountEl_one.value * e) / m).toFixed(5)
      })
}
swap.addEventListener('click', () => {
   let temp = currencyEl_one.value
   currencyEl_one.value = currencyEl_two.value
   currencyEl_two.value = temp
   calculate()
})
calculate()