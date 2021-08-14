function addDarkmodeWidget() {
    const options = {
      right: '16px',
      bottom: '24px',
      label: '🌓',
      time : '0'
    }
    new Darkmode(options).showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);