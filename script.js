console.log("Script loaded");

document.getElementById("myForm").addEventListener("submit", function(e){
  console.log("Form submitted");
  e.preventDefault(); // Page reload nahi hoga

  fetch("https://fullstack-backend-1-qpgi.onrender.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value
    })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("message").innerText = data.message;
    document.getElementById("myForm").reset();
  })
  .catch(error => {
    document.getElementById("message").innerText = "congratulations!";
    console.error(error);
  });
});