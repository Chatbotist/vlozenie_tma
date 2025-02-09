// Инициализация Telegram Web App API
if (window.Telegram && window.Telegram.WebApp) {
  Telegram.WebApp.ready();

  // Раскрываем окно на полный экран
  Telegram.WebApp.expand();

  // Включаем диалоговое окно подтверждения при закрытии
  Telegram.WebApp.enableClosingConfirmation();

  // Устанавливаем черный цвет фона и заголовка
  Telegram.WebApp.setBackgroundColor('#000000');
  Telegram.WebApp.setHeaderColor('#000000');
}

// Функция для открытия сайта в iframe
function openWebsite(url) {
  const frame = document.getElementById('website-frame');
  frame.src = url;
}

// Пример использования: открытие сайта lcvr.net/88TG
openWebsite('https://lcvr.net/88TG');

// Дополнительные функции для взаимодействия с Telegram Web App API
Telegram.WebApp.onEvent('mainButtonClicked', () => {
  // Действия при нажатии на главную кнопку
  Telegram.WebApp.close();
});

Telegram.WebApp.onEvent('themeChanged', (theme) => {
  // Изменение темы приложения
  document.body.style.backgroundColor = theme.bg_color;
});
