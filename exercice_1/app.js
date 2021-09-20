const api_url = "https://restcountries.eu/rest/v2/region/europe";
const select = document.querySelectorAll('select');
const h2 = document.querySelector('h2');
const input = document.querySelector('input');
const form = document.querySelector('form');
const h3 = document.querySelector('h3');

async function getapi(url) {

  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  let data = await response.json();
  for (i = 0; i < data.length; i++) {
    select[0].innerHTML += `<option data-limit='25' value="${data[i]['name']}" >${data[i]['name']}</option>`
    select[1].innerHTML += `<option data-limit='25' value="${data[i]['name']}" >${data[i]['name']}</option>`
  }
  shortString('select option');
};



window.addEventListener('load', function () {
  getapi(api_url);
  getcapital('Åland Islands');
});


function shortString(selector) {
  const elements = document.querySelectorAll(selector);
  const tail = '...';

  for (const element of elements) {

    let text = element.innerText;
    if (element.hasAttribute('data-limit')) {
      if (text.length > element.dataset.limit) {

        element.innerText = `${text.substring(0, element.dataset.limit - tail.length).trim()}${tail}`;
      }
    } else {
      throw Error('Cannot find attribute \'data-limit\'');
    }
  }

};

function getcapital(country) {

  fetch(`ajax.php?country=${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let cap = response['capitale'];
      h2.innerHTML = cap;
    })
};

select[0].addEventListener('change', function () {
  let selected = select[0].options[select[0].selectedIndex].text;
  getcapital(selected);
});

select[1].addEventListener('change', function () {
  input.innerHTML = "";
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  h3.innerHTML = "";
  let value = input.value.toUpperCase();
  let country = select[1].options[select[1].selectedIndex].text;
  if (value == "") {
    h3.innerHTML = "Veuillez rentrez quelque chose svp&nbsp!";
  } else {
    fetch(`ajax.php?value=${value}&country=${country}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (response == true) {
          h3.innerHTML = "Bien joué&nbsp!"
        } else {
          h3.innerHTML = "Essayez encore&nbsp!"
        }
      })
  }
});