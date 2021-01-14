# fullstack-candidate-testing

## Live Website

[Visit Website - https://clipboardhealth-001.herokuapp.com/](https://clipboardhealth-001.herokuapp.com/)

## Instructions

### First and foremost:***
- Open a terminal/console for a cloned directory with the files from the repository
  - i.e `git clone --single-branch --branch santiago-gonzalez-2021-01-10 https://github.com/ClipboardHealth/fullstack-candidate-testing.git`
  - then change directory into downloaded files `cd fullstack-candidate-testing`

## NPM Commands

### `npm install`

Install all the project dependencies.<br />
This way, you can proceed with the necessary work.

Optionally: use `npm install -g next react react-dom`.<br />
This will allow for smoother development work in the future.

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### with docker

- Make sure you've installed docker and all its dependencies
- Run the following commands in shell:
  - ```bash
    docker build --tag clipboardhealth/frontend .
    docker run -ti -p 80:80 -e PORT=80 clipboardhealth/frontend
    ```
  - TIP: you can use shared volume and use this image as development environment as well

### docker-compose (TBA)

### ansible (TBA)

## Credits

### Inspiration
- [figaro27](https://github.com/figaro27/ClipboardHealth_test) -- for structure and partial logic
- [haakh](https://github.com/Haakh/clipboard-health/tree/master/server/src) -- for server side skeleton
- [HON9LIN](https://github.com/HON9LIN/clipboard-health-fullstack-test) -- for initial logic and components

### Developed by
- [netrules](https://github.com/netrules) -- me!

## Efforts

### Changelog

```sh
☑️ v1.0.4
- factoring pt 3
- sorting: support for multiple choice
- changed dockerfile for staging
- support for heroku

✅ v1.0.3
- factoring pt 2
- fixed sorting

✅ v1.0.2
- reorganized components
- routing
- refactoring modules part one
	- petite tweak to how modules use directory index

✅ v1.0.1
- added absolute import
- proper css with tailwindcss 

✅ v1.0.0
- added hot reload
- installed tailwindcss

[ ] v?.??
- service worker
- sass defaults
- backend w/ mongodb+mongoose
- serverless cfg properties & env
	- impl. offline/online first based on connection(?) variable
	- eval. when running new fetch from server is appropriate
	- also, cache-first can really lower performance costs
- filter & search <-> client <-> store <-> fetcher service <-> server api
- mocha tests
	- stress testing
	- deeper unit tests
- job list pagination
- confirm dom elements are ui/ux friendly (mobile and aria-accessibility)
- TODO: left panel filtering
- TODO: search box should allow for more elasticity
- TODO: default sorting by job_id or date
```

### Goals

[x] Clone this repo. Then clone the main branch and use the following naming convention for the new branch: **firstname-lastname-YYYY-MM-DD**. If your name is John Doe, and today's date is 2020-11-17, then the new branch should be called **john-doe-2020-11-17**.
[x] The repo has 2 folders. **/data** and **/screenshots**.
[x] In the **/data** folder you will find 2 .json files. This is the data you will use to build the React app. You have to build a simple REST API to consume the data in the React app.
[x] In the **/screenshots** folder you will find what you are required to build for this test. 
[x] We strongly recommend you use Next.js and TailwindCSS for this test, since these are the frameworks we are using to build our own apps, but if you're not familiar with them, then create-react-app or Bootstrap 4 or 5 are fine. 
[x] The search input on top of the page should work. The search index should be built using the **/data/jobs.json** file.
[x] Sort by options on top of the page should sort in 3 states per each filter: ascending, descending or remove the sorting operation.
[x] Sort by options should work simultaneously with other sort by options and with the search input if the user is searching for something. This means that the user could sort for example by Location:asc, Department:asc while searching for a Nurse in California.
[ ] Ensure your code can work with unstable internet connection (see in pages/api/jobs.js)
[x] Implement unit tests for API at the server-sidePush you branch
[x] Deploy your branch to a public url. We recommend you use Vercel, Netlify or AWS S3, but you're free to use any other service as long as the url is publicly accessible.
[x] Include a README with the installation instructions and with the publicly accessible url.
[ ] Don't forget to let us know you're done to review your test.
