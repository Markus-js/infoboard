//Impotere vores getExample
import { getExample } from "./componenter/getExample.js";
//Kalder vores getExample function
getExample();


import { dateNTime } from "./componenter/dateNTime.js";
dateNTime();

import { weekly } from "./componenter/weekly.js";
weekly();

import { showdata } from "./componenter/Fetch.js";
setInterval(showdata(), 1800000)

//bus
import { bus } from "./componenter/bus.js";
bus();


