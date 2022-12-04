const todoDate = document.getElementById("todoname");

function todayDay() {
  const day = new Date();

  const Year = day.getFullYear();
  const Month = day.getMonth() + 1;
  const Day = day.getDay() + 4;

  const Hours = day.getHours();
  const Minutes = String(day.getMinutes()).padStart(2, "0");
  const Second = String(day.getSeconds()).padStart(2, "0");

  todoDate.innerText = `${Year}. ${Month}. ${Day}. ${Hours}:${Minutes}:${Second}`;
}

todayDay();
setInterval(todayDay, 1000);
