const fs = require('fs');
const path = require('path');

module.exports = {
    key: fs.readFileSync(
        path.resolve(__dirname, './watchapp.cn.key'),
    ),
    cert: fs.readFileSync(
        path.resolve(__dirname, './watchapp.cn.pem'),
    ),
};
