export const weekly = async () =>
     {

                  const apiUrl = `https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json`;
      
                  try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    console.log(data)
                    menu(data)
                  }
          
              catch(error){
              console.log("Ups- der skete en fejl");
              }

    function menu(data) {     
//Vha for-loop, tilføjer vi dagens ret til den specifikke dag
      for (let i = 0; i < data.Days.length; i++) {
                        
// Vi tilføjer et index til hver af vores class'es               
      const thisDay = document.querySelector(`.desc${i}`);
                        
// Vi henter dataene fra Api'en og tilføjer hver ret til det tilhørende Index.               
      thisDay.innerHTML = data.Days[i].Dish.replace('- kr. 28,00','') + "<br>";   
                        }
         
// Dagen i dag, skal fremhæves:
      if(currentday.innerHTML === "Mandag"){
        document.querySelector(".weekday0").style.fontWeight = "bold", document.querySelector(".weekday0").style.color = "#fff", document.querySelector(".desc0").style.color ="#fff";
      }     
      if(currentday.innerHTML === "Tirsdag"){
        document.querySelector(".weekday1").style.fontWeight = "bold", document.querySelector(".weekday1").style.color = "#fff", document.querySelector(".desc1").style.color ="#fff";
      }
      if(currentday.innerHTML === "Onsdag"){
        document.querySelector(".weekday2").style.fontWeight = "bold", document.querySelector(".weekday2").style.color = "#fff", document.querySelector(".desc2").style.color ="#fff";
      }
      if(currentday.innerHTML === "Torsdag"){
        document.querySelector(".weekday3").style.fontWeight = "bold", document.querySelector(".weekday3").style.color = "#fff", document.querySelector(".desc3").style.color ="#fff";
      }
      if(currentday.innerHTML === "Fredag"){
        document.querySelector(".weekday4").style.fontWeight = "bold", document.querySelector(".weekday4").style.color = "#fff", document.querySelector(".desc4").style.color ="#fff";
      }
        }
    }
  




