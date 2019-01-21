cp -r ./ "$1"

cd "$1"

yarn add -D gulp del gulp-babel @babel/core @babel/preset-env \
babel-eslint gulp-eslint eslint-config-airbnb-base eslint-plugin-import gulp-cli

rm "$1/bootstrap.sh"
