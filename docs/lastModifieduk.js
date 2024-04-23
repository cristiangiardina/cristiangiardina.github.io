lm = new Date(document.lastModified);
var days = new Array("Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"); 
var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var year = lm.getYear();
if (year < 1900) year += 1900;
document.write(days[lm.getDay()]+"day "+months[lm.getMonth()]+" "+lm.getDate()+", "+year);
