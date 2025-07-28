document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskList = document.getElementById("taskList");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const subject = document.getElementById("subject").value.trim();
    const time = document.getElementById("time").value;
    const priority = document.getElementById("priority").value;

    if (subject === "" || time === "") return;

    const taskItem = document.createElement("li");
    taskItem.className = "flex justify-between items-center border p-3 rounded shadow";

    const taskContent = document.createElement("div");
    taskContent.innerHTML = `
      <strong>${subject}</strong> <span class="text-sm text-gray-500">at ${time}</span>
      <span class="ml-2 px-2 py-1 text-xs rounded bg-${getPriorityColor(priority)}-200 text-${getPriorityColor(priority)}-800">${priority}</span>
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.className = "ml-4 text-red-500 hover:text-red-700";
    deleteBtn.onclick = () => taskItem.remove();

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskForm.reset();
  });

  function getPriorityColor(priority) {
    switch (priority) {
      case "High": return "red";
      case "Medium": return "yellow";
      case "Low": return "green";
    }
  }
});