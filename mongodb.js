const pkg = require('@steedos/mongodb-memory-server-core');
const { MongoMemoryReplSet } = pkg;
const path = require('path');

exports.startDB = async function startDB() {
  if (process.env.MONGO_URL) {
    return;
  }

  let dbPath = path.join(process.cwd(), 'db');
  let downloadDir = path.join(process.cwd(), 'bin/mongodb');
  const opts = {
    autoStart: true,
    binary: {
      version: '4.2.11',
      downloadDir: downloadDir,
    },
    instanceOpts: [
      {
        port: 27018,
        dbPath: dbPath,
      },
    ],
    replSet: {
      name: 'rsSteedos',
      auth: false,
      args: ['--bind_ip_all'],
      count: 1,
      dbName: 'steedos',
      ip: '127.0.0.1',
      oplogSize: 1,
      spawn: {},
      storageEngine: 'wiredTiger'
    }
  };
  const replSet = await MongoMemoryReplSet.create(opts);
  process.env.MONGO_URL = replSet.getUri();
  return replSet;
};