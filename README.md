# String Sorter

## Description

The String Sorter is a web application designed to alphabetically sort the letters in a given string. Users can input any string of text, and optionally provide a custom alphabet for sorting. The application will then display the sorted string based on the standard or provided custom alphabet.

The application is available live for use at [this website]().

## Tech Stack

TypeScript, React, Chakra UI

## Assumptions + Error Handling

- **Assumptions**:
  - The application assumes that all input strings will consist of only alphabetical characters, without spaces.
  - The optional custom alphabet should contain every letter of the standard English alphabet, but can be in any order.

- **Error Handling**:
  - The application will throw and display an error if the input string contains any characters not found in the standard or provided custom alphabet.
  - The application will throw and display an error if the optional custom alphabet contains any special characters (i.e. #$%)
  
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### `yarn lint`

Launches the ESLint tool to automatically fix linting errors across the codebase. This ensures that the code follows the specified linting rules for a consistent code style and helps catch common errors.
