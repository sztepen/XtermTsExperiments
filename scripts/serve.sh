start_dir=$PWD
rm dist/*.*

cd $start_dir

npm run build

mkdir dist/ui_assets
cp ui_assets/*.* dist/ui_assets/
killall node
http-server ./dist -p 4546
