const dateAndTime = new Date();
const date = dateAndTime.toDateString().slice(0, 15);
const day = date.slice(0, 3);
const month = date.slice(4, 15);

const time = dateAndTime.toLocaleTimeString();
setInnerText("day", day);
setInnerText("month", month);
