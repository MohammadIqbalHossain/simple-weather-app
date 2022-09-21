// api.openweathermap.org/data/2.5/weather?q=${dhaka}&appid={0e9cd964cb5ae768143dd5433df21098}


const loadTemperature = () => {
    const API_KEY = `0e9cd964cb5ae768143dd5433df21098`;
    const inputValue = document.getElementById('input').value;
   
    url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTempareture(data))
}

const getTempInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTempareture = temp => {
    console.log(temp)
    getTempInnerText('city', temp.name);
    getTempInnerText('degree', temp.main.temp)
    getTempInnerText('weather',temp.weather[0].main)

    //seting the icon
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    const iconImage = document.getElementById('img-icon');
    iconImage.setAttribute('src', url);
}
