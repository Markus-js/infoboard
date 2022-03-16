export const bus = () => {};

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

const busWrapper = document.createElement('div');

    const busHeader = document.createElement('h2');
    busHeader.innerText="BUSTIDER";
    busWrapper.appendChild(busHeader);

    const busList = document.createElement('section');
    busWrapper.appendChild(busList);

    //poster det til index.html
    const post = document.getElementById('bus');
    post.appendChild(busWrapper);

function build(data) {
    

    for(let item of data.MultiDepartureBoard.Departure){
        console.log(item.direction );

        const busTap = document.createElement('artical');
        busTap.innerHTML += `
            <p>${item.line}</p>
            <p>${item.direction}</p>
            <p>${item.time}</p>
        `;
        busList.appendChild(busTap);
    }    
}

setInterval(() => {
    doRequest()
}, 10000)