cp -r ./. "$1"
cd "$1"
npm i -D gulp babel-eslint gulp-eslint
npm remove eslint
npm i eslint -D

rm bootstrap.sh
