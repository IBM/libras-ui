# Libras UI

User interface for the [Libras](https://github.com/IBM/libras) translation service between a spoken and a signed language.

## Prerequisites

- [Node.js](https://nodejs.org)

## Setup

Install project dependencies:

```console
npm install
```

Create an `.env` file to mock the [Libras](https://github.com/IBM/libras) service or specify the API URL:

```env
REACT_APP_API_MOCK=FALSE
REACT_APP_API_SERVICE_URL=http://localhost:3000
```

### Customize

Create an `.env` file to update the application running port. The variable name and default value is:

```env
PORT=3000
```

## Run

Start the application in the development mode:

```console
npm start
```

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
