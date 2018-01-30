

npm install 
or
yarn
# npm install -g yarn

npm run dev 
# http://127.0.0.1:3008/

npm run build

npm run start 
# 服务启动

# 也可以
./start.sh
先要生成 npm run build

# npm run build or npm run test
pm2 start ./build/prod-server.js --name 'rync'
# stop
# pm2 stop rync
# pm2 delete rync
# pm2 restart rync
# pm2 show rync
