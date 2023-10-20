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



### End User

The main app is hosted at: `https://kloudsoft91.github.io/mushroom_db_app/`
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.