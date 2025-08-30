

const keys = ["a", "s", "d", "f", "j", "k", "l", ";", "q", "w"];

let currentKeyIndex = 0;

const keyElement = document.getElementById("key");

function setNewKey() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyElement.textContent = keys[currentKeyIndex];
  }

  function newGame() {
    setNewKey();
    PNotify.success({
      text: "Нова гра почалась! Натисни правильну клавішу."
    });
  }



  document.addEventListener("keydown", (event) => {
    const pressedKey = event.key.toLowerCase();

    if (pressedKey === keys[currentKeyIndex]) {
      PNotify.success({
        text: `Правильно! Ти натиснув "${pressedKey}".`
      });
      setNewKey();
    } else {
      PNotify.error({
        text: `Помилка! Ти натиснув "${pressedKey}". Правильна клавіша: "${keys[currentKeyIndex]}".`
      });
    }
  });

  document.addEventListener("keypress", (event) => {
    event.preventDefault();
  });

  // Кнопка "Нова гра"
  document.getElementById("newGame").addEventListener("click", () => {
    newGame();
  });

  // Початкова ініціалізація
  newGame();


  const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
             "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", 
             "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 
               420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 
               900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
        backgroundColor: "rgba(33, 150, 243, 0.5)",
        borderColor: "#2196f3",
        borderWidth: 2,
        fill: true,
        tension: 0.3
      },
    ],
  };

  
  const ctx = document.getElementById("sales-chart").getContext("2d");

  const salesChart = new Chart(ctx, {
    type: "line", // Можна змінити на "bar" для стовпчикової діаграми
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#333",
            font: {
              size: 14
            }
          }
        },
        title: {
          display: true,
          text: "Динаміка продажів за останні 30 днів",
          font: {
            size: 18
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Дні місяця"
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Продажі (одиниць)"
          }
        }
      }
    }
  });