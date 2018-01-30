# npm run build or npm run test
pm2 start ./build/prod-server.js --name 'rync'
# stop
# pm2 stop rync
# pm2 delete rync
# pm2 restart rync
# pm2 show rync