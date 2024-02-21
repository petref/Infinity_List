import { defineConfig } from "cypress";

// export default defineConfig({
//   component: {
//     devServer: {
//       framework: "next",
//       bundler: "webpack",
//     },
//   },
// });
// import { defineConfig } from 'cypress'
 
// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {},
//   },
// })

// import { defineConfig } from 'cypress'
 
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5000',
    supportFile: false,
  },
  component: {
    setupNodeEvents(on, config) {},
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: ['**/**/*.comp-spec.{js,ts,jsx,tsx}', '**/**/*.cy.{js,ts,jsx,tsx}']
  },
})