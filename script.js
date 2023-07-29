// Get the elements from the DOM
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');

// Add an event listener to the Calculate button
calculateBtn.addEventListener('click', () => {
    // Get the input values
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Calculate BMI
    const bmi = calculateBMI(height, weight);

    // Display the result
    const resultText = `Your BMI is ${bmi.toFixed(2)}`;
    resultElement.textContent = resultText;

    // Display the BMI status (no need to update it again as it is always present)
});

// Function to calculate BMI
function calculateBMI(height, weight) {
    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
    const bmi = weight / (heightInMeters * heightInMeters);

    return bmi;
}
