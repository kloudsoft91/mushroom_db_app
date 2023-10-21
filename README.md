# Mushroom DB App

This project was the result of a Capstone Project run through Massey University. It is a webapp designed using NuxtJS to easily identify the different variety of mushrooms and fungi that grow in Aotearoa New Zealand.


## Authors

- [Adam Norman](https://github.com/AdamN2424)
- [Emily Ferguson](https://github.com/EmilyClare4)
- [Joel Yap](https://github.com/joel-yap)
- [Karan Nayak](https://github.com/kloudsoft91)
- [Rosie Hall](https://github.com/DiscountHomebrand)


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

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.