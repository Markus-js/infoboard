
import { dateNTime } from "./componenter/dateNTime.js";
dateNTime();

import { weekly } from "./componenter/weekly.js";
setInterval(weekly(), 1800000)

import { showdata } from "./componenter/Fetch.js";
setInterval(showdata(), 1800000)

//bus
import { bus } from "./componenter/bus.js";
bus()


