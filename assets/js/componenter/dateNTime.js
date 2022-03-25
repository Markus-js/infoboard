export const dateNTime = async () => {
    const currentTime = document.getElementById("currentTime");
    const d = new Date();
    const currentday = document.getElementById("currentday");

    //UR
    function time() {
        let d = new Date();
        let s = d.getSeconds();
        let m = d.getMinutes();
        let h = d.getHours();
        currentTime.textContent =
          ("0" + h).substr(-2) +
          ":" +
          ("0" + m).substr(-2) +
          ":" +
          ("0" + s).substr(-2); 
      }
         setInterval(time, 1000); 
     

    //DATO
    const month = ["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"];
    const date = document.getElementById("date");
    const weekday = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
    let weekdays = weekday[d.getDay()];
    let today = d.getDate();
    let months = month[d.getMonth()];
    let y = d.getFullYear();
    currentday.innerHTML = (weekdays);
    date.innerHTML = (today + ". " + months + " " + y);
 
};
