document.getElementById("myForm").addEventListener("submit", function(e){
  e.preventDefault(); // Page reload na ho

  fetch("http://127.0.0.1:5000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value
    })
  })
  .then(response => response.json())
  .then(data => {
    // Alert hata ke div me show karenge
    document.getElementById("message").innerText = data.message;
    
    // Form clear karna (optional)
    document.getElementById("myForm").reset();
  });
});