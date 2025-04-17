const textOptions = [
    "Hello, welcome to the JavaScript typing test.",
    "Practice makes perfect, so keep typing every day.",
    "JavaScript is a powerful language for web development.",
    "Typing speed improves with focus and consistency.",
    "The quick brown fox jumps over the lazy dog.",
    "Coding is fun when you keep learning new things.",
    "Debugging is like being a detective in a crime movie.",
    "Every great developer was once a beginner like you."
  ];

  let timerInterval;
  let seconds = 0;
  let timerStarted = false;

  function getRandomText() {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    return textOptions[randomIndex];
  }

  function setRandomText() {
    document.getElementById("text-to-type").innerText = getRandomText();
  }

  function startTimer() {
    if (!timerStarted) {
      timerStarted = true;
      timerInterval = setInterval(() => {
        seconds++;
        document.getElementById("timer").innerText = `🕒 टाइम: ${seconds} सेकंड`;
      }, 1000);
    }
  }

  function checkTyping() {
    const originalText = document.getElementById("text-to-type").innerText.trim();
    const userInput = document.getElementById("user-input").value.trim();
    const resultBox = document.getElementById("result");
    const testSection = document.getElementById("test-section");

    clearInterval(timerInterval);

    resultBox.classList.remove("show");
    testSection.classList.remove("pass", "fail");

    if (userInput === originalText) {
      resultBox.innerText = `✅ Pass!  TIme: ${seconds}seconds `;
      resultBox.style.color = "green";
      testSection.classList.add("pass");
    } else {
      resultBox.innerText = `❌ Fail!  Time: ${seconds} seconds`;
      resultBox.style.color = "red";
      testSection.classList.add("fail");
    }

    setTimeout(() => {
      resultBox.classList.add("show");
    }, 50);
  }

  function refreshTest() {
    clearInterval(timerInterval);
    seconds = 0;
    timerStarted = false;
    document.getElementById("user-input").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("result").classList.remove("show");
    document.getElementById("test-section").classList.remove("pass", "fail");
    document.getElementById("timer").innerText = "🕒 Time: 0 seconds";
    setRandomText();
  }

  // Initialize text on first load
  window.onload = setRandomText;