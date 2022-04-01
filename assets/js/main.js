
import { dateNTime } from "./componenter/dateNTime.js";
dateNTime();

import { weekly } from "./componenter/weekly.js";
setInterval(weekly, 1800000)

import { showdata, getNews } from "./componenter/Fetch.js";
setInterval(showdata, 1800000)
setInterval(getNews, 1800000)

//bus
import { bus } from "./componenter/bus.js";
bus()


function refreshPage(){
    window.location.reload()
}

setInterval(refreshPage, 3600000)