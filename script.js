document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("message").innerText =
    "Registration Successful 🎉";

    document.getElementById("form").reset();
});
