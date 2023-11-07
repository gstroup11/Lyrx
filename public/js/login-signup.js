const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email_or_username").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Incorrect email or password. Please try again!");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    if (password.length !== 8) {
      alert("Password must be at least 8 characters long");
      return; // Stop further execution
    }

    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("duplicate email or username. Please try again!");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".unique-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", loginFormHandler);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector(".signup-form form");
  if (signupForm) {
    signupForm.addEventListener("submit", signupFormHandler);
  }
});
