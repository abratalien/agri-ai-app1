// Wait for the HTML document to fully load
document.addEventListener("DOMContentLoaded", () => {
    
    // Grab references to elements in the HTML
    const analyzeBtn = document.getElementById("analyze-btn");
    const resultBox = document.getElementById("result-box");
    const resultText = document.getElementById("result-text");

    // Add click event listener to the button
    if (analyzeBtn) {
        analyzeBtn.addEventListener("click", () => {
            
            // Show loading message
            resultBox.style.display = "block";
            resultText.innerText = "Analyzing soil health and weather data...";

            // Simulate a delay (e.g., waiting for AI backend response)
            setTimeout(() => {
                resultText.innerHTML = `
                    <strong>Analysis Complete!</strong><br>
                    • Soil Moisture: Optimal (65%)<br>
                    • Recommendation: Scheduled irrigation recommended for tomorrow morning.<br>
                    • Pest Risk: Low
                `;
            }, 1500); // 1.5 second delay
        });
    }
});
