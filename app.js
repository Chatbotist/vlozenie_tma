// Инициализация Telegram Web App API
if (window.Telegram && window.Telegram.WebApp) {
  Telegram.WebApp.ready();

  // Раскрываем окно на полный экран
  Telegram.WebApp.expand();

  // Включаем диалоговое окно подтверждения при закрытии
  Telegram.WebApp.enableClosingConfirmation();

  // Отключаем вертикальные свайпы
  Telegram.WebApp.isVerticalSwipesEnabled = false;

  // Устанавливаем черный цвет фона
  Telegram.WebApp.setBackgroundColor('#000000');

  // Устанавливаем цвет заголовка
  Telegram.WebApp.setHeaderColor('#000000');

  // Функция для открытия сайта во встроенном браузере Telegram
  function openWebsiteInTelegramBrowser(url) {
    if (url.startsWith('https://') || url.startsWith('http://')) {
      Telegram.WebApp.openInternalBrowser(url);
    } else {
      console.error('Invalid URL:', url);
    }
  }
}

// Пример использования: открытие сайта https://vk.com/market-212987249
openWebsiteInTelegramBrowser('https://vk.com/market-212987249');

// Дополнительные функции для взаимодействия с Telegram Web App API
Telegram.WebApp.onEvent('mainButtonClicked', () => {
  // Действия при нажатии на главную кнопку
  Telegram.WebApp.close();
});

Telegram.WebApp.onEvent('themeChanged', (theme) => {
  // Изменение темы приложения
  document.body.style.backgroundColor = theme.bg_color;
});
