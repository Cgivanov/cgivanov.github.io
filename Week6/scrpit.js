// Interaction 1: Greeting on load
function setGreeting() {
  let greeting = document.getElementById("greeting");
  let hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "Good Morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
  } else {
    greeting.textContent = "Good Evening!";
  }
}

window.addEventListener("load", setGreeting);

// Interaction 2: Theme button
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Interaction 3: Input focus
let input = document.getElementById("nameInput");
let message = document.getElementById("inputMessage");

input.addEventListener("focus", function () {
  input.classList.add("highlight");
  message.textContent = "You clicked the input!";
});

input.addEventListener("blur", function () {
  input.classList.remove("highlight");
  message.textContent = "Input is waiting...";
});

// Interaction 4: Hover card
let card = document.getElementById("hoverCard");

card.addEventListener("mouseover", function () {
  card.classList.add("hovered");
});

card.addEventListener("mouseout", function () {
  card.classList.remove("hovered");
});

// Interaction 5: Message button
let msgBtn = document.getElementById("messageBtn");
let msgText = document.getElementById("messageText");

msgBtn.addEventListener("click", function () {
  msgText.textContent = "Stay consistent and you’ll succeed!";
});

// Interaction 6: To-do list
let addBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  let value = taskInput.value.trim();

  if (value !== "") {
    let li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
    taskInput.value = "";
  }
});
