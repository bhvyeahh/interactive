function greetUser() {
  const nameInput = document.getElementById("username");
  const greeting = document.getElementById("greetingMessage");
  const error = document.getElementById("errorMessage");

  const name = nameInput.value.trim();

  if (name === "") {
    greeting.textContent = "";
    error.textContent = "Please enter your name!";
    error.style.color = "red";
    return;
  }

  error.textContent = "";
  greeting.textContent = `Hello, ${name}! Nice to meet you.`;
  greeting.style.opacity = 0;
  
  // Animate greeting fade-in
  let opacity = 0;
  const interval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.05;
      greeting.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 30);
}
