cp -r ./ "$1"
cd "$1"
yarn add -D autoprefixer @babel/core babel-eslint babel-loader \
@babel/preset-env @babel/preset-react \
css-loader del eslint eslint-plugin-react gulp gulp-eslint \
uglifyjs-webpack-plugin url-loader webpack gulp-cli prop-types \
eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y

yarn add prop-types react react-dom react-redux react-router-dom redux

rm "$1/bootstrap.sh"
