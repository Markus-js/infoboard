let errorCountAmountOfTryies = 1;

const dotSection = document.querySelector("#dot-section");

// TIME
const time = new Date();
  const year = time.getFullYear();
  let month = time.getMonth();
  const date = time.getDate();
  let hour = time.getHours()
  
  const monthFormat = month < 10 ? month = `0${month + 1}` : month + 1;
  const hourFormat = hour < 10 ? hour = `0${hour}` : hour;
  let dateOfTime = `${year}-${monthFormat}-${date}T${hourFormat}`;
  console.log(dateOfTime)

 
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

export function showdata() {


data.forEach(element => {
  let hold = element.Team
  if (element.StartDate.substring(0,13)===dateOfTime) {
    switch (hold) {
      case "gmg010122":
        if (element.Room !== ""){
          element.Color = "#54b9e7";
          createElementDiv(element.Room, element.Color)
        }
        break;
      case "gwe010122":
        if (element.Room !== ""){
          element.Color = "#fa4bbc"
          createElementDiv(element.Room, element.Color)
        }
        break;
      case "ikp030422":
        if (element.Room !== ""){
          element.Color = "black"
          createElementDiv(element.Room, element.Color)
        }
        break;
      case "h0mg010122f":
        if (element.Room !== ""){
          element.Color = "orange"
          createElementDiv(element.Room, element.Color)
        }
        break;
      case "h0gr010122f":
        if (element.Room !== ""){
          element.Color = "#f5a73a"
          createElementDiv(element.Room, element.Color)
        }
        break;
      case "h2gr020122":
        if (element.Room !== ""){
          element.Color = "yellow"
          createElementDiv(element.Room, element.Color)
          
        }
        break;
      case "iiw030522":
        
        if (element.Room !== ""){
          element.Color = "green"
          createElementDiv(element.Room, element.Color)
        }
        break;
      case "ild030422":
        if (element.Room !== ""){
          element.Color = "brown"
          createElementDiv(element.Room, element.Color)
        } 
        break;
      case "ild030522":
        if (element.Room !== ""){
          element.Color = "red"
          createElementDiv(element.Room, element.Color)
        }
        break;
      case "ggr010122":
        if (element.Room !== ""){
          element.Color = "peru"
          createElementDiv(element.Room, element.Color)
        }
      break;
      case "h1we080121":
        if (element.Room !== ""){
          element.Color = "purple"
          createElementDiv(element.Room, element.Color)
        }
        break;
      case "gmg010122":
        if (element.Room !== ""){
          element.Color = "lightblue"
          createElementDiv(element.Room, element.Color)
        }
        break;
      case "iiw030422": 
      if (element.Room !== ""){
        element.Color = "grey"
        createElementDiv(element.Room, element.Color)
      }
      break;
      default:
        console.log("Hold er ikke på Skolen")
        break;
    }
}

  
});
}
function createElementDiv(room,color){
  let div = document.createElement("div");
  div.classList.add("dot");
  div.setAttribute("id", `${room}`);
  div.style.backgroundColor = `${color}`
  div.style.boxShadow = `0px 0px 10px 0.2px ${color}`
  dotSection.appendChild(div);
}

