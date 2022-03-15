let errorCountAmountOfTryies = 1;
//rooms
let roomP024 = document.getElementById("P024")
let roomSUs151 = document.getElementById("SUs151")
let roomN112b = document.getElementById("N112b")
let roomB102 = document.getElementById("B102")
let roomP025 = document.getElementById("P025")
let roomP0273 = document.getElementById("P027-3")
let roomE102S = document.getElementById("E102S")
let roomN120 = document.getElementById("N120")
let roomP026 = document.getElementById("P026")
let roomP0274 = document.getElementById("P027-4")

// TIME
const time = new Date();
  const year = time.getFullYear();
  let month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const monthFormat = month < 10 ? month = `0${month + 1}` : month + 1;

  let dateOfTime = `${year}-${monthFormat}-${date}`;
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Maj",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dec",
];


export async function getData() {

  const api = `https://json-server-rest-grud.herokuapp.com/value`
    try {
      const response = await fetch(api);
      const data = await response.json();
      return data
    } catch (error) {
      // RETRY FETCH
      if (errorCountAmountOfTryies < 3) {
        getData();
        errorCountAmountOfTryies++;
      }
      console.log("whoops, something went wrong!", error);
    }
  }



let data = await getData()

data.forEach(element => {

  let hold = element.Team
  let rum = element.Room
  if (element.StartDate.substring(0,10)===dateOfTime) {
    console.log(element.Room)
    switch (hold) {
      case "gmg010122":
        element.Color = "#54b9e7"
        break;
      case "gwe010122":
        element.Color = "#fa4bbc"
        break;
      case "ikp030422":
        element.Color = "green"
        break;
      case "ikp030522":
        element.Color = "red"
        break;
      case "h0mg010122f":
        element.Color = "blue"
        break;
      case "h0gr010122f":
        element.Color = "#f5a73a"
        break;
      case "h2gr020122": 
        element.Color = "yellow"
        break;
      case "imo030322":
        element.Color = "black"
        break;
      case "iiw030522": 
      element.Color = "lightcoral"
      break;
      case "h1we010122":
        element.Color = "lawngreen" 
      case "ild030422":
        element.Color = "brown" 
        break;
      case "ild030522":
      element.Color = "lightbrown"
      break;
      case "gel010322":
        element.Color = "pink"
        break;
      case "ggr010122":
      element.Color = "peru"
      break;
      case "gdt010322": 
      element.Color = "rebeccapurple"
      break;
      case "h1we080121":
        element.Color = "purple"
        break;
      case "gmg010122":
        element.Color = "lightblue"
        break;
      case "iiw030422": 
      element.Color = "grey";
      break;
      default:
        console.log("Error in Switch")
        break;
    }
    switch (rum) {
      case "P024":
       roomP024.style.display = "block"
       roomP024.style.backgroundColor = element.Color
        break;
      case "SUs151":
        roomSUs151.style.display = "block"
        roomSUs151.style.backgroundColor = element.Color
        break;
      case "N112b":
        roomN112b.style.display = "block"
       roomN112b.style.backgroundColor = element.Color
       break;
      case "B102":
        roomB102.style.display = "block"
       roomB102.style.backgroundColor = element.Color
       break;
      case "P025":
        roomP025.style.display = "block"
       roomP025.style.backgroundColor = element.Color
       break;
      case "P027-3":
        roomP0273.style.display = "block"
       roomP0273.style.backgroundColor = element.Color
       break;
      case "E102S":
        roomE102S.style.display = "block"
       roomE102S.style.backgroundColor = element.Color
       break;
      case "N120":
        roomN120.style.display = "block"
       roomN120.style.backgroundColor = element.Color
       break;
      case "P026": 
      roomP026.style.display = "block"
       roomP026.style.backgroundColor = element.Color
       break;
      case "P027-4":
        roomP0274.style.display = "block"
       roomP0274.style.backgroundColor = element.Color
       break;
      default:
        console.log("Error in Switch 2")
        break;
    }
}

  
});

console.log(data)



