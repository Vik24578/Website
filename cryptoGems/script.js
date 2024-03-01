// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})





function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        document.getElementById("login-message").innerText = "Login successful!";
    } else {
        document.getElementById("login-message").innerText = "Invalid username or password!";
    }
}

function signup() {
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;

    document.getElementById("signup-message").innerText = "Sign up successful!";
}



// Getting API using JQuery
let settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

let bitcoin = document.getElementById("bitcoin")
let ethereum = document.getElementById("ethereum")
let dogecoin = document.getElementById("dogecoin")


$.ajax(settings).done(function(response){

    bitcoin.innerHTML = response.bitcoin.usd
    ethereum.innerHTML = response.ethereum.usd
    dogecoin.innerHTML = response.dogecoin.usd
})




// Getting API with fetch method and showing all the crypto


document.addEventListener("DOMContentLoaded", () => {
    const cryptoList = document.getElementById("crypto-list");

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        .then(response => response.json())
        .then(data => {
            console.log(data[0])
            data.forEach(crypto => {
                const cryptoItem = document.createElement("div");
                cryptoItem.classList.add("crypto-item");
                cryptoItem.innerHTML = `
                <img src="${crypto.image}" alt="${crypto.name}">
                <h3>${crypto.name}</h3>
                <p class="price">Price: $${crypto.current_price}</p>
                <p class="market-cap">Market Cap: $${crypto.market_cap.toLocaleString()}</p>
                <p class=${crypto.price_change_percentage_24h.toFixed(2) > 0 ? "price-change-up" : "price-change-down"}>Price Change (24h): ${crypto.price_change_percentage_24h.toFixed(2)}%</p>
                <p class="volume">Volume (24h): $${crypto.total_volume.toLocaleString()}</p>
                <h3> <a class="buttonn" href="https://www.coingecko.com/pl/waluty/${crypto.name.toLowerCase()}">more info</a></h3>
            `;
                cryptoList.appendChild(cryptoItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});






