const mongodb = require('mongodb');  // 映入 mongodb 官方依赖模块   npm install mongodb --save
const MongoClient = mongodb.MongoClient;  // 返回 mongodb 客户端对象
const ObjectId = mongodb.ObjectId;

const DB_URL = 'mongodb://localhost:27017';   // mongodb 数据库连接字符串

let cacheClient;  // 设置一个 客户端连接 缓存对象
function getClient() {
    return new Promise(function (resolve, reject) {
        if (cacheClient) { // 如果缓存对象 有效 直接返回
            resolve(cacheClient);
            return;
        }
        MongoClient.connect(DB_URL, { useNewUrlParser: true,  useUnifiedTopology: true }, function (err, client) {  // client 表示连接成功后的客户端对象
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            console.log('一个连接客户端建立');
            cacheClient = client;  // 将 客户端对象 赋值给缓存对象
            resolve(cacheClient);
        });
    });
}

async function getUsers() {
    const client = await getClient();
    const testDB = client.db('xtb');
    return new Promise(function (resolve, reject) {
        testDB.collection('user')
            .toArray(function (err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
    })
}

async function existUser(phone) {
    const client = await getClient();
    const testDB = client.db('xtb');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').find({user_phone: phone}).toArray(function (err, result) {
            if (err) {
                return reject(err)
            }
            // console.log(result.length)
            resolve(result.length > 0);
        }); 
    });
}

async function getUserByPhone(phone) {
    const client = await getClient();
    const testDB = client.db('xtb');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').find({user_phone: phone}).toArray(function (err, result) {
            if (err) {
                return reject(err)
            }
            resolve(result[0]);
        });
    });
}

async function createUser(user) {
    const client = await getClient();
    const testDB = client.db('xtb');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').insertOne(user, function (err, cmdResult) {
            if (err) {
                return reject(err)
            }
            resolve({
                ok: true,
                id: cmdResult.insertedId
            })
        });
    });
}

async function registerUser(user) {
    const client = await getClient();
    const testDB = client.db('xtb');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').insertOne(user, function (err, cmdResult) {
            if (err) {
                return reject(err)
            }
            resolve({
                ok: true,
                id: cmdResult.insertedId
            })
        });
    });
}




module.exports = {
    createUser,
    existUser,
    getUserByPhone,
    registerUser
};
