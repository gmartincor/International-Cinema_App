// DOM Elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const currencySelect = document.getElementById('currency');
const currencySymbol = document.getElementById('currency-symbol');

// Exchange Rates Variables
let exchangeRates = {};
const baseCurrency = 'USD';

// Function to Fetch Exchange Rates
async function getExchangeRates() {
  try {
    const response = await fetch(`https://open.exchangerate-api.com/v6/latest/${baseCurrency}`);
    if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    exchangeRates = data.rates;
    updatePrices();
  } catch (error) {
    console.error(error);
    alert('Error fetching exchange rates. Please try again later.');
  }
}

// Function to Get Currency Symbol
function getCurrencySymbol(currency) {
  const symbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    AUD: 'A$',
    CAD: 'C$',
    CHF: 'CHF',
    CNY: '¥',
    INR: '₹',
  };
  
  return symbols[currency] || currency + ' ';
}

// Function to Update Movie Prices Based on Selected Currency
function updatePrices() {
  const selectedCurrency = currencySelect.value;
  const rate = exchangeRates[selectedCurrency] || 1;

  // Update Movie Prices in Dropdown
  movieSelect.querySelectorAll('option').forEach(option => {
    const basePrice = parseFloat(option.getAttribute('data-price'));
    const convertedPrice = (basePrice * rate).toFixed(2);
    const movieName = option.getAttribute('data-name');
    option.textContent = `${movieName} (${getCurrencySymbol(selectedCurrency)}${convertedPrice})`;
    // Store Converted Price for Calculations
    option.setAttribute('data-current-price', convertedPrice);
  });

  // Update Currency Symbol in Total Display
  currencySymbol.textContent = getCurrencySymbol(selectedCurrency);

  // Update Total Price if Seats are Selected
  updateSelectedCount();
}

// Function to Save Selected Movie Index to localStorage
function setMovieData(movieIndex) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
}

// Function to Update Selected Seat Count and Total Price
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  // Get Current Price of Selected Movie
  const selectedOption = movieSelect.options[movieSelect.selectedIndex];
  const convertedPrice = parseFloat(selectedOption.getAttribute('data-current-price')) || 0;

  const totalPrice = (selectedSeatsCount * convertedPrice).toFixed(2);

  count.innerText = selectedSeatsCount;
  total.innerText = totalPrice;
}

// Function to Populate UI from localStorage
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  const selectedCurrency = localStorage.getItem('selectedCurrency');
  if (selectedCurrency) {
    currencySelect.value = selectedCurrency;
  }
}

// Event Listener for Currency Selection Change
currencySelect.addEventListener('change', () => {
  const selectedCurrency = currencySelect.value;
  localStorage.setItem('selectedCurrency', selectedCurrency);
  updatePrices();
});

// Event Listener for Movie Selection Change
movieSelect.addEventListener('change', e => {
  setMovieData(e.target.selectedIndex);
  updateSelectedCount();
});

// Event Listener for Seat Click
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});

// Initialize the Application
populateUI();
getExchangeRates().then(() => {
  updateSelectedCount();
});
