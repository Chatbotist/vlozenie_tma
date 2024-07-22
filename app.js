// Инициализация Telegram Web App API
if (window.Telegram && window.Telegram.WebApp) {
  Telegram.WebApp.ready();

  // Раскрываем окно на полный экран
  Telegram.WebApp.expand();

  // Включаем диалоговое окно подтверждения при закрытии
  Telegram.WebApp.enableClosingConfirmation();

  // Обработчик клика на кнопку "Open Website"
  document.getElementById('open-website').addEventListener('click', () => {
    Telegram.WebApp.openInternalBrowser('https://vk.com/market-212987249');
  });

  // Обработчик изменения темы приложения
  Telegram.WebApp.onEvent('themeChanged', (theme) => {
    document.body.style.backgroundColor = theme.bg_color;
  });
}
