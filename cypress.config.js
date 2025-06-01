const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/",
    env: {
      apiUrl: "https://reqres.in/api",
    },
    excludeSpecPattern: [
      "**/1-getting-started/**",
      "**/2-advanced-examples/**",
    ],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {},
  },
  video: false,
  videosFolder: "cypress/videos",
});
