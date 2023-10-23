# Contributing

## Components

Our pages are in the `/pages` folder and are constructed via re-usable components under the `/components` folder. The structure is easy to follow and uses Nuxt best practices to configure components.

If you add a new page, remember to add a route for the page in the `nuxt.config.ts` file.

## Styling and TailWind CSS

The Tailwind CSS module was set up using the instructions here: [TailWind Setup](https://tailwindcss.com/docs/guides/nuxtjs#3).

Components are styled with simple directives in the class. See TailWind CSS documentation here: [TailWind Styling Basics](https://tailwindcss.com/docs/utility-first).

## Scripts, JavaScript and TypeScript

### Admin UI

The Admin UI uses Session based App State variables to pass the mushroom metadata around components. See: [State Management](https://nuxt.com/docs/getting-started/state-management).

It also uses Watcher functions (part of the Composition API) to check the state variable and write back to the form fields (for when the end-user is editing existing metadata). See: [Watchers](https://vuejs.org/guide/essentials/watchers.html)

### Main UI

The Main UI uses the Options API which is more reminiscent of object oriented paradigms. It attaches to component instances and emits events that are then captured and consumed by other components to filter / search for mushrooms.

- applyAllFilters is the most important function in `index.vue`, this applies all current filter parameters to the mushroom meta data by calling all the other filter functions, then ResultCards displays the cards of all mushrooms that match all given filter parameters
- To add a new filter to the app
    - a template element must be added to `FilterBar.vue` in the components folder, with a `#slotname`, e.g. `<template #filterName>...</template>`
    - then a function should be added in the `<script>` with label, defaultOpen, multiple and slot parameters, slot being the most important as the slotname
    - then inner div buttons added to the template with tailwind classes similar to the others like flex, justify-around for the outer div and mush-slide for inner button divs, or input elements using v-model to define the variable the element will pass data to
    - div buttons will need `@click="emitField('filterValue')"`, which releases an event to send their contained filter data from the child component to the parent component when clicked
    - input elements using v-model will use code similar to `@input="emitField()"` to release an event with the v-model instance value to filter on

## Updating Mushroom MetaData JSON

This is rather simple, use the Admin UI page to generate metadata. Then copy the metadata into the `./data/sampledata.js`. See [Admin User Interface](#admin-user-interface)

## Routes, App, Hosting and other topics

New pages can be added to the routes section of `nuxt.config.ts` file. See existing routes for examples.

The app entry in `nuxt.config.ts` defines the first section of the app URL. This can be customised, as well as a custom domain can be used with GitHub Pages. See [Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

The app is deployed to GitHub Pages by the GitHub Actions pipeline, see the [Deployment](#deployment) section.