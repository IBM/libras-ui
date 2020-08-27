# Libras UI

User interface for the translation service between a spoken and a signed language.

## Prerequisites

- [Node.js](https://nodejs.org)

## Setup

Install project dependencies:

```console
npm install
```

Create an `.env` file to mock the API or specify API URL and access token:

```console
REACT_APP_API_MOCK=TRUE
REACT_APP_API_SERVICE_URL=
REACT_APP_LIBRAS_API_TOKEN=
```

## Run

Start the application in the development mode:

```console
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Test

Launch the test runner in the interactive watch mode:

```console
npm test
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Build

Build the app for production to the `build` folder:

```console
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
