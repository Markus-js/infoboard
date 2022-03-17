export const bus = () => {};

const busWrapper = document.createElement('div');

    const busHeader = document.createElement('h2');
    busHeader.innerText="BUSTIDER";
    busWrapper.appendChild(busHeader);

    const busList = document.createElement('section');
    busWrapper.appendChild(busList);

    //poster det til index.html
    const post = document.getElementById('bus');
    post.appendChild(busWrapper);

    


    
doRequest();

async function doRequest(){
    const url = "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=8519734&format=json";
    let res = await fetch(url);

    if (res.ok) {
        let json = await res.json();
        
         build(json);
    } else {
        return `HTTP error: ${res.status}`;
    }
}

function build(data) {
    

    for(let item of data.MultiDepartureBoard.Departure){
        const dateSplit = item.date.split(".");
        const dateRestructure = dateSplit[1] + "-" + dateSplit[0] + "-" + dateSplit[2];

        const busArriving  = Date.parse(`${dateRestructure} ${item.time}:00`);

        const difference = busArriving - Date.now();
    
        const daysDifference = Math.ceil(difference/1000/60);

        console.log(daysDifference);

        let timeToBus = "";
        
        if(daysDifference < 60){
            timeToBus = `${daysDifference} Min`;
        }else{
            let timeToBusHours = Math.trunc(daysDifference / 60);
            let timeToBusMin = daysDifference % 60;
            timeToBus = `${timeToBusHours}:${timeToBusMin} Timer`;
        }

        const busTap = document.createElement('artical');
        busTap.innerHTML += `
            <p>${item.line}</p>
            <p>${item.direction}</p>
            <p>${timeToBus}</p>
        `;
        busList.appendChild(busTap);
    }    
}

setInterval(() => {
    doRequest()
}, 10000)