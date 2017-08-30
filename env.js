const fs = require('fs');

const file = "env.json";
const appEnv = "app_";

var env = {};

Object.keys(process.env).forEach(function(key) {
    if (key.startsWith(appEnv)) {
        k = key.replace(appEnv, '');
        env[k] = process.env[key];
    }
});

fs.writeFile(file, JSON.stringify(env), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("ENV file has been created");
});