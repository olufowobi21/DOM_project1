// Get all the product cards
const productCards = document.querySelectorAll('.card-body');

// Initialize the total price
let totalPrice = 0;
document.querySelector('.total').textContent = `0 $`;

// Add event listeners to the quantity buttons
productCards.forEach((card) => {
  const plusButton = card.querySelector('.fa-plus-circle');
  const minusButton = card.querySelector('.fa-minus-circle');
  const quantitySpan = card.querySelector('.quantity');
  const unitPrice = parseFloat(card.querySelector('.unit-price').textContent);

  let quantity = 0;

  plusButton.addEventListener('click', () => {
    quantity++;
    quantitySpan.textContent = quantity;
    updateTotalPrice();
  });

  minusButton.addEventListener('click', () => {
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
      updateTotalPrice();
    }
  });
});

// Add event listeners to the delete buttons
productCards.forEach((card) => {
  const deleteButton = card.querySelector('.fa-trash-alt');
  deleteButton.addEventListener('click', () => {
    const unitPrice = parseFloat(card.querySelector('.unit-price').textContent);
    const quantity = parseInt(card.querySelector('.quantity').textContent);
    card.remove();
    updateTotalPrice();
  });
});

// Add event listeners to the like buttons
productCards.forEach((card) => {
  const likeButton = card.querySelector('.fa-heart');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('fas');
    likeButton.classList.toggle('far');
  });
});

// Update the total price
function updateTotalPrice() {
  totalPrice = 0;
  productCards.forEach((card) => {
    const unitPrice = parseFloat(card.querySelector('.unit-price').textContent);
    const quantity = parseInt(card.querySelector('.quantity').textContent);
    totalPrice += unitPrice * quantity;
  });
  document.querySelector('.total').textContent = `${totalPrice.toFixed(2)} $`;
}