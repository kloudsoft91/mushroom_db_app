# Mushroom DB App

This project was the result of a Capstone Project run through Massey University. It is a webapp designed using NuxtJS to easily identify the different variety of mushrooms and fungi that grow in Aotearoa New Zealand.


## Authors

- [Adam Norman](https://github.com/AdamN2424)
- [Emily Ferguson](https://github.com/EmilyClare4)
- [Joel Yap](https://github.com/joel-yap)
- [Karan Nayak](https://github.com/kloudsoft91)
- [Rosie Hall](https://github.com/DiscountHomebrand)


## Tech Stack

**Client:** [TailwindCSS](https://tailwindcss.com/)

**Server:** [NuxtJS](https://nuxt.com/), [Jest Unit Testing](https://jestjs.io/), [Cypress End-to-End Testing](https://www.cypress.io/)

**APIs:** [Cloudinary Image Hosting](https://cloudinary.com/), [Google Vertex VQA AI](https://cloud.google.com/vertex-ai/docs/generative-ai/image/visual-question-answering)


## Installation

This project uses npm as the package manager. Follow this process to install the project locally:

Clone the project
```bash
  git clone https://github.com/kloudsoft91/mushroom_db_app.git
```

Go to the project directory
```bash
  cd mushroom_db_app
```

Install the dependencies
```bash
  npm install
```


## Run Locally

Start the development server (`http://localhost:3000`)
```bash
  npm run dev
```


## Running Tests

To run tests, run the following command
```bash
  npm run test
```


## Deployment

This project is deployed automatically via GitHub Actions on a pull request to the main branch.

The deployment step in the GitHub Action is:
```bash
  steps:
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v2
```


## Documentation

### Admin User Interface

The admin interface can be found on: `https://kloudsoft91.github.io/mushroom_db_app/admin`

![Screenshot of the Admin UI](assets/images/adminui_main.png?raw=true "Admin UI")

The Admin UI is to be used by admins of the app to create meta data to add to the app's storage. The admin page is a simple form that allows admins to generate JSON data for mushrooms that are to be added to the app.

Note: The ID must be updated before pushing the data into the app's storage. All other fields are initialised to either null or empty strings / arrays.

### End User

The main app is hosted at: `https://kloudsoft91.github.io/mushroom_db_app/`

#### Searching for Mushrooms

![Screenshot of the Main UI search controls](assets/images/ui_main_search.png?raw=true "Main Search UI - Search")

- The top searchbox allows users to enter in names of known mushrooms, either common or latin names. Typing in data will dynamically filter the mushroom cards below, with a temporary red error message above if invalid user inputs are entered.
- The length searchboxes below can also be used to find mushrooms based on the measured size of mushrooms found.
- The Tag bar below the searchboxes can be used to find Edible, Gourmet, Poisonous, Psychoactive mushrooms as well as mushrooms with lookalikes.

#### Filtering Mushrooms

![Screenshot of the Main UI filter controls](assets/images/ui_main_filters.png?raw=true "Main Search UI - Filters")

At the bottom left corner of the screen, the bottom green Filters button will expand out an accordion of filter bars.

- Buttons can be clicked to apply filters or toggle them off
- The filter accordion bars can be closed by clicking outside the filter window


## Contributing

### Components

Our pages are in the `/pages` folder and are constructed via re-usable components under the `/components` folder. The structure is easy to follow and uses Nuxt best practices to configure components.

If you add a new page, remember to add a route for the page in the `nuxt.config.ts` file.

### Styling and TailWind CSS

The Tailwind CSS module was set up using the instructions here: [TailWind Setup](https://tailwindcss.com/docs/guides/nuxtjs#3).

Components are styled with simple directives in the class. See TailWind CSS documentation here: [TailWind Styling Basics](https://tailwindcss.com/docs/utility-first).

### Scripts, JavaScript and TypeScript

#### Admin UI

The Admin UI uses Session based App State variables to pass the mushroom metadata around components. See: [State Management](https://nuxt.com/docs/getting-started/state-management).

It also uses Watcher functions (part of the Composition API) to check the state variable and write back to the form fields (for when the end-user is editing existing metadata). See: [Watchers](https://vuejs.org/guide/essentials/watchers.html)

#### Main UI

The Main UI uses the Options API which is more reminiscent of object oriented paradigms. It attaches to component instances and emits events that are then captured and consumed by other components to filter / search for mushrooms.

- applyAllFilters is the most important function in `index.vue`, this applies all current filter parameters to the mushroom meta data by calling all the other filter functions, then ResultCards displays the cards of all mushrooms that match all given filter parameters
- To add a new filter to the app
    - a template element must be added to `FilterBar.vue` in the components folder, with a `#slotname`, e.g. `<template #filterName>...</template>`
    - then a function should be added in the `<script>` with label, defaultOpen, multiple and slot parameters, slot being the most important as the slotname
    - then inner div buttons added to the template with tailwind classes similar to the others like flex, justify-around for the outer div and mush-slide for inner button divs, or input elements using v-model to define the variable the element will pass data to
    - div buttons will need `@click="emitField('filterValue')"`, which releases an event to send their contained filter data from the child component to the parent component when clicked
    - input elements using v-model will use code similar to `@input="emitField()"` to release an event with the v-model instance value to filter on

### Updating Mushroom MetaData JSON

This is rather simple, use the Admin UI page to generate metadata. Then copy the metadata into the `./data/sampledata.js`. See [Admin User Interface](#admin-user-interface)

### Routes, App, Hosting and other topics

New pages can be added to the routes section of `nuxt.config.ts` file. See existing routes for examples.

The app entry in `nuxt.config.ts` defines the first section of the app URL. This can be customised, as well as a custom domain can be used with GitHub Pages. See [Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

The app is deployed to GitHub Pages by the GitHub Actions pipeline, see the [Deployment](#deployment) section.


## Acknowledgements

 - [Manawa Technologies](https://www.manawa.tech/) for sponsoring this project
 - [Massey University](https://www.massey.ac.nz/) for setting up the capstone project
 - [Steve Pavarno](https://github.com/pavarnos) from Manawa Technologies for mentoring the team during the project
 - [Amjed Tahir](https://github.com/amjedtahir) from Massey University for mentoring the team and being our supervisor during the project