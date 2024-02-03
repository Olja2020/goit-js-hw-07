function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  // <div id="controls">
  //     <input type="number" min="1" max="100" step="1" />
  //     <button type="button" data-create>Create</button>
  //     <button type="button" data-destroy>Destroy</button>
  //   </div>

  //   <div id="boxes"></div>

    const boxes = document.querySelector("#boxes");
    const destroy = document.querySelector(".controls[data-destroy]");
    const create = document.querySelector(".controls[data-create]");
    const inputNumber = document.querySelector("input");

    function createBoxes(amount){
     // if(inputNumber.value >1 && inputNumber.value<100){
      const elemBox = boxes.createElement("div"); //* amount;
      boxes.prepend(elemBox);
    //}
  };
create.addEventListener("click", createBoxes);


//     Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися