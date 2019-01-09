cp -r ./ "$1"
cd "$1"
yarn add -D gulp gulp-cli del @babel/core @babel/preset-env eslint-config-airbnb-base \
babel-eslint gulp-eslint webpack babel-loader webpack-node-externals webpack-cli \
eslint-plugin-import

rm bootstrap.sh
