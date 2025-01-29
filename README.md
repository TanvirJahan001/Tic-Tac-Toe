# Tic-Tac-Toe Game with React and Vite

This project is a simple implementation of the classic Tic-Tac-Toe game using React and Vite. It includes hot module replacement (HMR) and some ESLint rules to help maintain code quality.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/tic-tac-toe.git
cd tic-tac-toe
```

2. Install the dependencies:

```sh
npm install
# or
yarn install
```

### Running the Development Server

To start the development server with hot module replacement:

```sh
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the project for production:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist` directory.

### Linting

To run ESLint:

```sh
npm run lint
# or
yarn lint
```

## Available Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
