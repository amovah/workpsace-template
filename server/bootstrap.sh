cp -r ./ "$1"
cd "$1"
yarn add -D gulp del gulp-babel babel-core \
babel-plugin-add-module-exports babel-plugin-transform-class-properties \
babel-plugin-transform-decorators-legacy \
babel-plugin-transform-object-rest-spread babel-preset-env \
babel-eslint gulp-eslint

rm bootstrap.sh
