const completeButtons = document.querySelectorAll(".complete-btn");

let taskAssigned = parseInt(getInnerText("task-assigned"));
let totalTask = parseInt(getInnerText("total-count"));

for (const btn of completeButtons) {
  btn.addEventListener("click", function (event) {
    alert("Board Updated Successfully!");
    btn.disabled = true;
    taskAssigned--;
    totalTask++;

    setInnerText("task-assigned", taskAssigned);
    setInnerText("total-count", totalTask);
    if (taskAssigned === 0) {
      alert("you have completed all task");
    }
    const cardTitle =
      btn.parentElement.previousElementSibling.previousElementSibling.innerText;
    const historyDiv = document.getElementById("history-div");
    historyDiv.append(showHistory(cardTitle));
  });
}

// const historyDiv = (document.createElement = "div");
// historyDiv.innerHtml = "hello";

function showHistory(title) {
  const div = document.createElement("div");
  div.innerHtml =
    div.innerHTML = `<div class="bg-[#F4F7FF] p-3 mb-7 rounded-lg">
  <p>You have Complete The Task ${title} at ${time}</p>
</div>`;
  return div;
}

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-div").innerHTML = "";
});
