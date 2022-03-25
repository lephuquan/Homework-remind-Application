import { format } from "date-fns";
import { getCurrentDate } from '../librarys/CurrentTime.js'

export function formatTime(dataTime){
    var date = new Date(dataTime);
    var formattedDate = format(date, "MMMM do, yyyy");
    return formattedDate;
 }