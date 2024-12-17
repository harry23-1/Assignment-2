const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bookcart.azurewebsites.net",
    env: {
      username: process.env.USER_NAME, 
      password: process.env.PASSWORD, 
    },
  },
});
