const completeButtons = document.querySelectorAll(".complete-btn");
let taskAssigned = parseInt(getInnerText("task-assigned"));
let totalTask = parseInt(getInnerText("total-count"));

for (const btn of completeButtons) {
  btn.addEventListener("click", function (event) {
    alert("Board Updated Successfully!");
    btn.disabled = true;
    taskAssigned--;
    totalTask++;

    console.log(taskAssigned, totalTask);
    setInnerText("task-assigned", taskAssigned);
    setInnerText("total-count", totalTask);
    if (taskAssigned === 0) {
      alert("you have completed all task");
    }
  });
}

const dateAndTime = new Date();
console.log(dateAndTime);
const date = dateAndTime.toDateString().slice(0, 15);
const day = date.slice(0, 3);
const month = date.slice(4, 15);
console.log(day);
const time = dateAndTime.toLocaleTimeString();
setInnerText("day", day);
setInnerText("month", month);
