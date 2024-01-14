const apiKey="3a403325a4c6b4bd5da1a0e3dee5fa8b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".btn");
const weatherIcon=document.querySelector(".weather-icon");
async function check(city){
    const response =await fetch(apiUrl+ city +`&appid=${apiKey}`);
    var data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".hum").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
if(data.weather[0].main=="Clouds"){
    weatherIcon.src="cloudy-day.png";
    
document.querySelector(".card").style.backgroundColor="#0b7dda";

}
else if(data.weather[0].main =="Clear"){
    weatherIcon.src="cloudy-day.png";
    
document.querySelector(".card").style.backgroundColor="#0b7dda";

}
else if(data.weather[0].main =="Rain"){
    weatherIcon.src="rainy-day.png";
    
document.querySelector(".card").style.backgroundColor="grey";

}
else if(data.weather[0].main =="Drizzle"){
    weatherIcon.src="rainy-day.png";
    
document.querySelector(".card").style.backgroundColor="grey";

}
else if(data.weather[0].main =="Mist"){
    weatherIcon.src="sunny-day.png";
    
document.querySelector(".card").style.backgroundColor="orange";

}
else if(data.weather[0].main =="Haze"){
    weatherIcon.src="sunny-day.png";
    
document.querySelector(".card").style.backgroundColor="orange";

}
}


searchBtn.addEventListener("click",()=>{
    check(searchBox.value);
});
