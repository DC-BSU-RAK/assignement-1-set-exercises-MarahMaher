// Function to calculate the total petrol cost
function calculate() {
    // Get the input values for petrol price and liters
    const petrolPrice = parseFloat(document.getElementById('Petrol_Price').value);
    const liters = parseFloat(document.getElementById('liters').value);

    // Ensure the values are valid numbers
    if (isNaN(petrolPrice) || isNaN(liters) || petrolPrice <= 0 || liters <= 0) {
        document.getElementById('totalAmount').innerText = 'Please enter valid values.';
        return;
    }

    // Calculate the total amount
    const totalAmount = petrolPrice * liters;

    // Display the total amount
    document.getElementById('totalAmount').innerText = `$${totalAmount.toFixed(2)}`;
}
