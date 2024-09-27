const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('error-message');

async function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  const amount_one = parseFloat(amountEl_one.value);

  // Validate that the amount is not negative
  if (amount_one < 0) {
    errorMessage.textContent = "Amount cannot be negative.";
    errorMessage.classList.remove('hidden');
    amountEl_one.value = Math.abs(amount_one);
    return;
  } else {
    errorMessage.classList.add('hidden');
  }

  // Show the loading indicator before making the API call
  loader.classList.remove('hidden');
  errorMessage.classList.add('hidden');

  try {
    // Make the API call to fetch exchange rates
    const response = await fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Check if the desired currency exists in the response
    if (!data.rates || !data.rates[currency_two]) {
      throw new Error("Currency not found in the received data.");
    }

    const rate = data.rates[currency_two];
    rateEl.innerText = `1 ${currency_one} = ${rate.toFixed(4)} ${currency_two}`;
    amountEl_two.value = (amount_one * rate).toFixed(2);

  } catch (error) {
    // Handle errors: Show error message to the user
    console.error(error);
    errorMessage.textContent = `Error fetching exchange rates: ${error.message}`;
    errorMessage.classList.remove('hidden');
    amountEl_two.value = ''; 
  } finally {
    // Hide the loading indicator after the API call is complete
    loader.classList.add('hidden');
  }
}

// Function to prevent negative numbers in input fields
function preventNegative(event) {
  if (event.target.value < 0) {
    event.target.value = Math.abs(event.target.value);
  }
}

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', (e) => {
  preventNegative(e);
  calculate();
});
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', (e) => {
  preventNegative(e);
  calculate();
});

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});


calculate();
