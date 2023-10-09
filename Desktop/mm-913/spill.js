  // Generate a random power level between 1 and 9000
  const secretNumber = Math.floor(Math.random() * 9000) + 1;
  let attempts = 0;

  function checkGuess() {
      const guess = parseInt(document.getElementById("guess").value);
      attempts++;

      if (isNaN(guess) || guess < 1 || guess > 9000) {
          document.getElementById("message").textContent = "Please enter a valid number between 1 and 9000.";
      } else if (guess === secretNumber) {
          document.getElementById("message").textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts, u are the chosen one╰༼.◕ヮ ◕.༽つ¤=[]————      ♫ ┌ ༼ຈل͜ຈ༽┘ ♪`;
          document.getElementById("guess").disabled = true;
      } else if (guess < secretNumber) {
          document.getElementById("message").textContent = "Try a higher number ya knucklehead MORE POWER.";
      } else {
          document.getElementById("message").textContent = "Try a lower number ur going to crazy!.";
      }
  } 

  // Never ever ever put a punktum at the end of a repository name, the more u know :) :) :) 