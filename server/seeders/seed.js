const db = require('../config/connection');
const { Inventory , Formulas} = require('../models');
const inventorySeeds = require('./inventory.json');
const formulas = require('./formulas.js')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Inventory', 'inventories');
    await cleanDB('Formulas','formulas');

    await Inventory.create(inventorySeeds);
    await Formulas.create(formulas);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});