const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

const cityDisplay = document.querySelector("#city");
const tempDisplay = document.querySelector("#temperature");
const descDisplay = document.querySelector("#description");
const humidityDisplay = document.querySelector("#humidity");
const windDisplay = document.querySelector("#wind");
const iconDisplay = document.querySelector("#weather-icon");

const API_KEY = "8df93404b08da61bbe1ad6aff23ff297"; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeatherData(cityName) {
    try {
        const response = await fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric&lang=tr`);
        const data = await response.json();

        if (data.cod !== 200 && data.cod !== "200") {
            if (data.cod === 401 || data.cod === "401") {
                alert("API anahtarınız henüz sistemde aktif olmamış veya hatalı. Yeni hesaplarda aktivasyon 1-2 saat sürebilir, lütfen bekleyin.");
            } else if (data.cod === 404 || data.cod === "404") {
                alert("Şehir bulunamadı! Lütfen yazımı kontrol edip tekrar deneyin.");
            } else {
                alert(`Bir hata oluştu: ${data.message}`);
            }
            return; 
        }

        updateUI(data);

    } catch (error) {
        console.error("Hata oluştu:", error);
        alert("İnternet bağlantınızı kontrol edin veya daha sonra tekrar deneyin.");
    }
}

function updateUI(data) {
    const { name, main, weather, wind } = data;
    
    cityDisplay.textContent = `${name}, ${data.sys.country}`;
    tempDisplay.textContent = `${Math.round(main.temp)}°C`;
    descDisplay.textContent = weather[0].description.toUpperCase();
    humidityDisplay.textContent = `%${main.humidity}`;
    windDisplay.textContent = `${wind.speed} m/s`;
    
    iconDisplay.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    iconDisplay.alt = weather[0].description;
    iconDisplay.style.display = "inline-block"; 
}


searchBtn.addEventListener("click", () => {
    const cityName = searchInput.value.trim();
    if (cityName) {
        getWeatherData(cityName);
    } else {
        alert("Lütfen bir şehir adı girin!");
    }
});

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const cityName = searchInput.value.trim();
        if (cityName) {
            getWeatherData(cityName);
        } else {
            alert("Lütfen bir şehir adı girin!");
        }
    }
});