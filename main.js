// select the dom nodes
const fullnameEl = document.getElementById("fullname")
const kmEl = document.getElementById("km")
const ageEl = document.getElementById("age")
const ticketpriceEL = document.querySelector(".right_ticket>div:last-child")

// save the form values

const formEl = document.getElementById('ticket_form')

formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(ticket_pricing(kmEl.value, ageEl.value));
  ticketpriceEL.innerText = (`${ticket_pricing(kmEl.value, ageEl.value)}€`) // prints the ticket pricing on the ticket card
})


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
    return minor_price.toFixed(2)
  }
  else if (user_age == 2) {
    console.log((`Il prezzo del tuo biglietto è ${base_price}€`));
    return base_price
  }
  else {
    console.log((`Il prezzo del tuo biglietto è ${over65_price.toFixed(2)}€`));
    return over65_price.toFixed(2)
  }

}

