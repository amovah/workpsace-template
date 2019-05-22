cp -r ./ "$1"

cd "$1"

yarn add -D gulp del gulp-babel @babel/core @babel/preset-env supervisor \
babel-eslint gulp-eslint eslint-config-airbnb-base eslint-plugin-import gulp-cli \
gulp-replace

rm "$1/bootstrap.sh"
