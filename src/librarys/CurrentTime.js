export function getCurrentDate( ){

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;  
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    var currentDate = year + "/" + month + "/" + day;
    return  currentDate;
 }