const db = require('../config/connection');
const { Inventory } = require('../models');
const inventorySeeds = require('./inventory.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Inventory', 'inventories');
    
    await Inventory.create(inventorySeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});