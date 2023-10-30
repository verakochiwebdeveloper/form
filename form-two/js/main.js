
// Получаем все радио кнопки
const radios = document.querySelectorAll('input[type="radio"][name="radio__btn"]');

// Добавляем обработчик события "change" к каждой радио кнопке
radios.forEach(function(radio) {
  radio.addEventListener('change', function() {
    // Получаем значение выбранной радио кнопки
    let color = this.value;
    
    // Изменяем фон страницы в соответствии с выбранным цветом
    document.body.style.backgroundColor = color;
  });
});
