// select the dom nodes
const fullnameEl = document.getElementById("fullname")
const kmEl = document.getElementById("km")
const ageEl = document.getElementById("age")

const ticketpriceEl = document.querySelector(".right_ticket>div:last-child")
const passengerNameEl = document.querySelector(".left_ticket>div:last-child")
const offerEl = document.querySelector(".right_ticket>div:nth-child(5)")
const carriageEl = document.querySelector(".right_ticket>div:nth-child(6)")
const cpEl = document.querySelector(".right_ticket>div:nth-child(7)")

// save the form values

const formEl = document.getElementById('ticket_form')

formEl.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(ticket_pricing(kmEl.value, ageEl.value));
  ticketpriceEl.innerText = (`${ticket_pricing(kmEl.value, ageEl.value)}€`) // prints the ticket pricing on the ticket card
  passengerNameEl.innerHTML = (`<h4>${fullnameEl.value}</h4>`) // prints the fullname input into the passenger name h4 element
  if (ageEl.value == 1) {
    offerEl.innerText = ("Ridotto")
  }
  else if (ageEl.value == 2) {
    offerEl.innerText = ("Prezzo base")
  }
  else {
    offerEl.innerText = ("Ridotto Senior")
  }
  // prints the offer based on the age of the passenger
  carriageEl.innerText = Math.floor(Math.random() * 10) + 1 // prints a random number between 1 and 10 onto the carriage element
  cpEl.innerText = Math.floor(Math.random() * 999) + 1000 // prints a random number between 1000 and 1999 onto the cpELement
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

