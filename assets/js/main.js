
import { dateNTime } from "./componenter/dateNTime.js";
dateNTime();

import { weekly } from "./componenter/weekly.js";
import { showdata, getNews } from "./componenter/Fetch.js";


//bus
import { bus } from "./componenter/bus.js";
bus()


function refreshPage(){
    window.location.reload()

}
getNews()
showdata()
weekly()
setInterval(refreshPage, 3600000)