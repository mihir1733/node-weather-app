const weatherForm = document.querySelector("form");
const inputData = document.querySelector("input");
const messageOne =  document.querySelector("#m1")
const messageTwo =  document.querySelector("#m2")


weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = inputData.value;
    messageOne.textContent="loading.."
    messageTwo.textContent=""
  fetch(`/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageOne.textContent=data.error
      } else {
        messageOne.textContent=data.location
        messageTwo.textContent=data.forcast
      }
    });
  });
});


document.querySelector("#current-location").addEventListener("click" , () => {
  if (!navigator.geolocation) {
    alert("Your browser not supports geolocation :(")
  }
  navigator.geolocation.getCurrentPosition((position) => {
    const location = {
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    }
    messageOne.textContent="loading.."
    messageTwo.textContent=""
  fetch(`/curentLocationWeather?latitude=${location.latitude}&longitude=${location.longitude}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageOne.textContent=data.error
      } else {
        messageOne.textContent=data.forcast
      }
    });
  });
  })
})