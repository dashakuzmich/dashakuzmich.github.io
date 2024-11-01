document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault(); // предотвращаем стандартное поведение формы

  const formData = new FormData(this); // собираем данные формы
  console.log(formData);
  fetch("contacts.php", {
    method: "POST",
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert("Ошибка: " + data.error);
      } else {
        alert("Ваша заявка принята"); // Изменяем сообщение на "Ваша заявка принята"
        this.reset(); // очищаем поля формы
      }
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке данных.");
    });
});
