if (module.hot) {
  module.hot.accept();

  let once = false;
  global.addEventListener('message', () => {
    if (once) {
      console.clear();
    } else {
      once = true;
    }
  });
}

require('./app');
