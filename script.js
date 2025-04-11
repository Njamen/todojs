const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {

  const task = inputBox.value.trim();

  if (!task) {
    alert("Please write down a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <label>
      <span>${task}</span>
    </label>
      <button class="delete-button">delete</button>
    `;
  
  const deleteBtn = li.querySelector(".delete-button");
  
  deleteBtn.addEventListener("click", function () {
      li.remove();
  });

  listContainer.appendChild(li);

  inputBox.value = "";
}