# Hypercare

A React Typescript project displaying cards containing information about users within an organization.

### Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Additional Requirements](#additional-requirements)
- [Contact Information](#contact)
- [License](#license)

## Introduction

This is David Ezeakudolu's solution to the hypercare coding challenge, it is a React(Vite) and Typescript application that displays cards containing information (username, role, avatar) of users in a giving organization. There are over 2000 users in total, on load the first 16 users are displayed on each click on the `Load More` button 10 additional user cards are displayed. this solution also includes integrational and functional unit tests.

## Usage

To run this project on your local machine, follow these steps:

1. **Clone the repository**

   ```
   git clone https://github.com/chinemeremeze/hypercare.git
   ```

2. **Install dependencies**

   ```
   cd hypercare
   npm install
   ```

3. **Run the development**

   ```
   npm run dev
   ```

4. **Run the tests**

   ```
   npm test
   ```

## Dependencies

This project utilizes the following packages/dependencies:

- **Frontend**: react, react-modal, react-dom, react-router-dom
- **Styling**: @mui/material, @emotion/styled, styled-components
- **Testing**: vitest, @vitest/ui, @vitejs/plugin-react

## Additional Requirements

The following additional project requirements should be considered before publishing or pushing code to production.

- **Efficient Data Fetching**: Implementing pagination to fetch users in smaller chunks (e.g., 16 users at a time) to improve performance and reduce initial load time. Ensure your backend API supports pagination by implementing parameters like `limit` and `offset` or `page` and `size`
- **Implemnt Sorting, Filtering and Searching**: Enhancing interface usability through the implementation of sorting, filtering, and search functionalities for improved user navigation
- **Lazy Loading**: Implementing lazy loading for user images to reduce initial load time and improve performance.
- **Code Splitting**: Ensure code splitting is implemented to load only the necessary components initially and dynamically load other components as needed.

  .

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
