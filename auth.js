// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    const fruit = prompt("What is your favourite fruit?");

    if (fruit === "kiwi") {
        alert("Access granted");
        // Change the HTML content
        document.body.innerHTML = `<img class="background-image" src="kiwi.jpg"/>
        <div class="center-text">Happy Mother's Day!</div>
        <button>Update</button> 
        <canvas></canvas>`;
        
        // Add the script element programmatically
        const script = document.createElement("script");
        script.src = "random_circle.js";
        document.body.appendChild(script);
    }
    else if (fruit === "banana") {
        alert("Access granted");
        // Change the HTML content
        document.body.innerHTML = `<img class="background-image" src="banana.jpg"/>
        <div class="center-text">Happy Mother's Day!</div>
        <button>Update</button> 
        <canvas></canvas>`;
        
        // Add the script element programmatically
        const script = document.createElement("script");
        script.src = "random_circle.js";
        document.body.appendChild(script);
    }
    else {
        document.body.innerHTML = "<h1>Access Denied</h1><p>You must enter the correct fruit to view this page.</p>";
        // Prevent further script execution
        throw new Error("Authentication failed");
    }
});

