function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const destroy = document.querySelector("button[data-destroy]");
const create = document.querySelector("button[data-create]");
const inputNumber = document.querySelector("input");

function createBoxes(amount) {
  amount = inputNumber.value;
  if (inputNumber.value >= 1 && inputNumber.value < 100) {
    let size = 30;
    for (let i = 0; i < amount; i += 1) {
      const elemBox = document.createElement("div");

      boxes.prepend(elemBox);
      size += 10 * i;
      elemBox.classList = "item";
      elemBox.style.width = `${size}px`;
      elemBox.style.height = `${size}px`;
      elemBox.style.marginRight = "30px";
      elemBox.style.marginBottom = "30px";
      elemBox.style.backgroundColor = getRandomHexColor();
    }
  } else {
    alert("Введіть число в діапазоні від 1 до 100");
  }
  inputNumber.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
destroy.addEventListener("click", destroyBoxes);
create.addEventListener("click", createBoxes);

//     Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається

// Після кліку на кнопку Create в div#boxes додається така кількість різнокольорових квадратів, яка вказана в input.
// Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові
//у кількості, що вказана в input. Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися
