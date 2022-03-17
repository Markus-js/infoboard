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
          let mediegrafikerGF = document.createElement("div");
          mediegrafikerGF.classList.add("dot");
          mediegrafikerGF.setAttribute("id", `${element.Room}`);
          mediegrafikerGF.style.backgroundColor = `${element.Color}`
          mediegrafikerGF.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(mediegrafikerGF);
        }
        break;
      case "gwe010122":
        if (element.Room !== ""){
          element.Color = "#fa4bbc"
          let webudviklerGF = document.createElement("div");
          webudviklerGF.classList.add("dot");
          webudviklerGF.setAttribute("id", `${element.Room}`);
          webudviklerGF.style.backgroundColor = `${element.Color}`
          webudviklerGF.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(webudviklerGF);
        }
        break;
      case "ikp030422":
        if (element.Room !== ""){
          element.Color = "green"
          let introKurs1 = document.createElement("div");          
          introKurs1.classList.add("dot");
          introKurs1.setAttribute("id", `${element.Room}`);
          introKurs1.style.backgroundColor = `${element.Color}`
          introKurs1.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(introKurs1);
        }
        break;
      case "h0mg010122f":
        if (element.Room !== ""){
          let mediegrafikerHF1 = document.createElement("div");
          element.Color = "blue"
          mediegrafikerHF1.classList.add("dot");
          mediegrafikerHF1.setAttribute("id", `${element.Room}`);
          mediegrafikerHF1.style.backgroundColor = `${element.Color}`
          mediegrafikerHF1.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(mediegrafikerHF1);
        }
        break;
      case "h0gr010122f":
        if (element.Room !== ""){
          let grafiskteknikH1 = document.createElement("div");
          element.Color = "#f5a73a"
          grafiskteknikH1.classList.add("dot");
          grafiskteknikH1.setAttribute("id", `${element.Room}`);
          grafiskteknikH1.style.backgroundColor = `${element.Color}`
          grafiskteknikH1.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(grafiskteknikH1);
        }
        break;
      case "h2gr020122":
        if (element.Room !== ""){
          let grafiskteknikH2 = document.createElement("div");
          element.Color = "yellow"
          grafiskteknikH2.classList.add("dot");
          grafiskteknikH2.setAttribute("id", `${element.Room}`);
          grafiskteknikH2.style.backgroundColor = `${element.Color}`
          grafiskteknikH2.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(grafiskteknikH2);
          
        }
        break;
      case "iiw030522":
        
        if (element.Room !== ""){
          let grafiskteknikH2 = document.createElement("div");
          element.Color = "green"
          grafiskteknikH2.classList.add("dot");
          grafiskteknikH2.setAttribute("id", `${element.Room}`);
          grafiskteknikH2.style.backgroundColor = `${element.Color}`
          grafiskteknikH2.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(grafiskteknikH2);
          console.log(1)
        }
        break;
      case "ild030422":
        if (element.Room !== ""){
          element.Color = "brown"
          let introKurs5 = document.createElement("div");
          introKurs5.classList.add("dot");
          introKurs5.setAttribute("id", `${element.Room}`);
          introKurs5.style.backgroundColor = `${element.Color}`
          introKurs5.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(introKurs5);
        } 
        break;
      case "ild030522":
        if (element.Room !== ""){
          element.Color = "red"
          let brobyg = document.createElement("div");
          brobyg.classList.add("dot");
          brobyg.setAttribute("id", `${element.Room}`);
          brobyg.style.backgroundColor = `${element.Color}`
          brobyg.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(brobyg);
        }
        break;
      case "ggr010122":
        if (element.Room !== ""){
          let grafiskteknikG1 = document.createElement("div");
          element.Color = "peru"
          grafiskteknikG1.classList.add("dot");
          grafiskteknikG1.setAttribute("id", `${element.Room}`);
          grafiskteknikG1.style.backgroundColor = `${element.Color}`
          grafiskteknikG1.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(grafiskteknikG1);
        }
      break;
      case "h1we080121":
        if (element.Room !== ""){
          element.Color = "purple"
          let webudviklerHF1 = document.createElement("div");
          webudviklerHF1.classList.add("dot");
          webudviklerHF1.setAttribute("id", `${element.Room}`);
          webudviklerHF1.style.backgroundColor = `${element.Color}`
          webudviklerHF1.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(webudviklerHF1);
        }
        break;
      case "gmg010122":
        if (element.Room !== ""){
          let mediegrafikerHF2 = document.createElement("div");
          element.Color = "lightblue"

          mediegrafikerHF2.classList.add("dot");
          mediegrafikerHF2.setAttribute("id", `${element.Room}`);
          mediegrafikerHF2.style.backgroundColor = `${element.Color}`
          mediegrafikerHF2.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
          dotSection.appendChild(mediegrafikerHF2);
        }
        break;
      case "iiw030422": 
      if (element.Room !== ""){
        element.Color = "grey"
        let brobyg2 = document.createElement("div");
        brobyg2.classList.add("dot");
        brobyg2.setAttribute("id", `${element.Room}`);
        brobyg2.style.backgroundColor = `${element.Color}`
        brobyg2.style.boxShadow = `0px 0px 10px 0.2px ${element.Color}`
        dotSection.appendChild(brobyg2);
      }
      break;
      default:
        console.log("Hold er ikke på Skolen")
        break;
    }
}

  
});
}


