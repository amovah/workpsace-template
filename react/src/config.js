const config = {
  prodCDN: '',
  devCDN: 'http://localhost:8181/static',
  port: 8180,
};

if (process.env.NODE_ENV === 'development') {
  config.cdn = config.devCDN;
} else {
  config.cdn = config.prodCDN;
}

module.exports = config;
