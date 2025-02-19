// ticket pricing function

function ticket_pricing(user_distance, user_age) {
  // Define base price
  const base_price = user_distance * 0.21
  // Define price if minor
  const minor_discount = (base_price / 100) * 20
  const minor_price = base_price - minor_discount
  // Define price if over 65
  const over65_discount = (base_price / 100) * 40
  const over65_price = base_price - over65_discount


  // Final price calculation

  if (user_age == 1) {
    console.log((`Il prezzo del tuo biglietto è ${minor_price.toFixed(2)}€`));

  }
  else if (user_age == 2) {
    console.log((`Il prezzo del tuo biglietto è ${base_price}€`));
  }
  else {
    console.log((`Il prezzo del tuo biglietto è ${over65_price.toFixed(2)}€`));

  }
}


// select the dom nodes
const fullnameEl = document.getElementById("fullname")
const kmEl = document.getElementById("km")
const ageEl = document.getElementById("age")


// save the form values

const formEl = document.getElementById('ticket_form')

formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  ticket_pricing(kmEl.value, ageEl.value)
  console.log(ageEl.value);

})


