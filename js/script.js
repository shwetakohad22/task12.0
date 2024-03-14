function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("advice").innerText = data.slip.advice;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}
