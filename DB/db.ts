const chalk = require('chalk')
const { Sequelize } = require('sequelize');

export default new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
  }
);
// sequelize.authenticate()
//   .then(() => {
//     console.log(chalk.bgGreen('   connected to PostgerSQL!   '))})
//   .catch((err:any) => {
//     console.log(chalk.bgRed(' Not connected to PostgerSQL!  '))
// });
