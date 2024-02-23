async function find() {
    var user = document.getElementById("username").value;
    if (!user) {
        // Display error message if username field is empty
        var info = document.getElementById("finalInfo");
        info.innerHTML = `<p>Please enter a GitHub username</p>`;
        var informationDiv = document.querySelector(".infrmtn");
        informationDiv.classList.remove("hidden");
        return; // Exit the function
    }
    var url = `https://api.github.com/users/${user}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        

        var info = document.getElementById("finalInfo");
        info.innerHTML = `
            <h2>User Information</h2>
            <div>
                <img src="${data.avatar_url}" alt="Profile Picture" width="100">
            </div>
            <p><strong>Name:</strong> ${data.login}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <p><strong>Following:</strong> ${data.following}</p>
            <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
            <p><strong>Profile URL:</strong> <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
        `;
        var informationDiv = document.querySelector(".infrmtn");
        informationDiv.classList.remove("hidden");
    } catch (error) {
        console.error('Error:', error);
        var finalInfoDiv = document.getElementById("finalInfo");
        finalInfoDiv.innerHTML = `<p>Error: Unable to fetch data for user ${username}</p>`;
    }
}
