const header = document.querySelector("header");
document.body.appendChild(header);

const h1 = document.createElement("h1");
h1.textContent = "Countries";
header.appendChild(h1);

const headerButtonsDiv = document.createElement("div");
header.appendChild(headerButtonsDiv);

function createButton(className, borderColor, imgSrc, text = "0") {
  const button = document.createElement("button");
  button.classList.add(className);
  button.style.borderRadius = "50%";
  button.style.backgroundColor = "transparent";
  button.style.width = "46px";
  button.style.height = "46px";
  button.style.display = "flex";
  button.style.justifyContent = "center";
  button.style.alignItems = "center";
  button.style.border = `2px solid ${borderColor}`;

  const buttonText = document.createTextNode(`${text} `);
  button.appendChild(buttonText);

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "img";
  button.appendChild(img);

  return button;
}

const heartButton = createButton("heart_button", "red", "/heart.png");
headerButtonsDiv.appendChild(heartButton);

const saveButton = createButton("save_button", "green", "/save.png");
headerButtonsDiv.appendChild(saveButton);

const moonButton = createButton(
  "moon_button",
  "rgb(64, 62, 62)",
  "/moon.png",
  ""
);
headerButtonsDiv.appendChild(moonButton);

headerButtonsDiv.style.display = "flex";
headerButtonsDiv.style.alignItems = "center";
headerButtonsDiv.style.gap = "16px";

const section = document.querySelector("section");
document.body.appendChild(section);

const input = document.createElement("input");
input.id = "search-input";
input.placeholder = "Searching...";
input.type = "text";
section.appendChild(input);

const select = document.createElement("select");
section.appendChild(select);

const option = document.createElement("option");
option.value = "";
option.textContent = "All";
select.appendChild(option);

section.style.display = "flex";
section.style.alignItems = "center";
section.style.justifyContent = "space-between";
section.style.padding = "16px 68px";

input.style.fontSize = "18px";
input.style.padding = "6px 14px";
input.style.border = "1px solid gray";
input.style.borderRadius = "6px";

select.style.fontSize = "18px";
select.style.padding = "6px 14px";
select.style.border = "1px solid gray";
select.style.borderRadius = "6px";

const countries = [
  {
    id: 1,
    name: "Wallis and Futuna",
    capital: "Mata-Utu",
    population: 11750,
    flag: "https://flagcdn.com/wf.svg",
  },
  {
    id: 2,
    name: "Iceland",
    capital: "Reykjavik",
    population: 366425,
    flag: "https://flagcdn.com/is.svg",
  },
  {
    id: 3,
    name: "Luxembourg",
    capital: "Luxembourg",
    population: 632275,
    flag: "https://flagcdn.com/lu.svg",
  },
  {
    id: 4,
    name: "Mali",
    capital: "Bamako",
    population: 20250834,
    flag: "https://flagcdn.com/ml.svg",
  },
  {
    id: 5,
    name: "Comoros",
    capital: "Moroni",
    population: 869595,
    flag: "https://flagcdn.com/km.svg",
  },
  {
    id: 6,
    name: "Australia",
    capital: "Canberra",
    population: 25687041,
    flag: "https://flagcdn.com/au.svg",
  },
  {
    id: 7,
    name: "Estonia",
    capital: "Tallinn",
    population: 1331057,
    flag: "https://flagcdn.com/ee.svg",
  },
  {
    id: 8,
    name: "Canada",
    capital: "Ottawa",
    population: 38005238,
    flag: "https://flagcdn.com/ca.svg",
  },
  {
    id: 9,
    name: "Belarus",
    capital: "Minsk",
    population: 9398861,
    flag: "https://flagcdn.com/by.svg",
  },
  {
    id: 10,
    name: "Guyana",
    capital: "Georgetown",
    population: 786559,
    flag: "https://flagcdn.com/gy.svg",
  },
];
console.log(countries);

const main = document.createElement("main");
document.body.appendChild(main);

main.style.padding = "26px 68px";
main.style.display = "grid";
main.style.gridTemplateColumns = "repeat(4, auto)";
main.style.gap = "12px";
function displayCountries(filteredCountries) {
  filteredCountries.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.className = "country-card";
    countryCard.style.backgroundColor = "#9cb0cb";
    countryCard.style.borderRadius = "5px";
    countryCard.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    countryCard.style.padding = "4px";
    countryCard.style.display = "flex";
    countryCard.style.flexDirection = "column";
    countryCard.style.alignItems = "center";

    const flagImg = document.createElement("img");
    flagImg.src = country.flag;
    flagImg.alt = `${country.name} Flag`;
    flagImg.style.width = "100%";
    flagImg.style.height = "200px";
    flagImg.style.borderRadius = "5px";

    const countryInfo = document.createElement("div");
    countryInfo.className = "country-info";
    countryInfo.style.display = "flex";
    countryInfo.style.flexDirection = "column";

    const countryName = document.createElement("h2");
    countryName.textContent = country.name;

    const capital = document.createElement("p");
    capital.textContent = `Capital: ${country.capital}`;

    const population = document.createElement("p");
    population.textContent = `Population: ${country.population.toLocaleString()}`;

    countryInfo.appendChild(countryName);
    countryInfo.appendChild(capital);
    countryInfo.appendChild(population);
    countryCard.appendChild(flagImg);
    countryCard.appendChild(countryInfo);
    main.appendChild(countryCard);
  });
}

displayCountries(countries);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(query) ||
      country.capital.toLowerCase().includes(query)
  );
  displayCountries(filteredCountries);
});
