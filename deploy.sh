# pm2 根据 proxy.json 中的配置进行启动
git reset --hard origin/master
git pull origin main
yarn
pm2 start appServers.json
