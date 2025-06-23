// Step 2: Quiz Logic
function checkAnswer(answer) {
  const result = document.getElementById("quiz-result");
  if (answer === 'A') {
    result.textContent = "✅ Correct! Paris is the capital of France.";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Incorrect. Try again!";
    result.style.color = "red";
  }
}

// Step 3: Fetch Joke from Joke API
function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      const joke = `${data.setup} - ${data.punchline}`;
      document.getElementById("joke").textContent = joke;
    })
    .catch((error) => {
      document.getElementById("joke").textContent = "⚠️ Failed to fetch a joke.";
    });
}
