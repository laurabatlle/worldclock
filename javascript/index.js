function showTime(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

function updateTime() {
  // Barcelona
  let barcelonaElement = document.querySelector("#barcelona");
  if (barcelonaElement) {
    let barcelonaDateElement = barcelonaElement.querySelector(".date");
    let barcelonaTimeElement = barcelonaElement.querySelector(".time");
    let barcelonaTime = moment().tz("Europe/Barcelona");

    barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM	Do YYYY");
    barcelonaTimeElement.innerHTML = barcelonaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM	Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

let selectCity = document.querySelector("#cities");
selectCity.addEventListener("change", showTime);
