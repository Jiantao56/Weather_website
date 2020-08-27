const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = '' 
    messageThree.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            }
            else {
                messageOne.textContent = data.location
                document.getElementById('weather-icon').src = 'http://openweathermap.org/img/wn/'+ data.forecastData.icon + '@2x.png'
                messageTwo.textContent = data.forecastData.temp + '°F'
                messageThree.textContent = 'Feels like ' + data.forecastData.feels_like +  '°F. ' + (data.forecastData.weather).charAt(0).toUpperCase() + data.forecastData.weather.slice(1)
            }
        })
    })
})



