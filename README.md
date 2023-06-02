# 2048 Game

A web-based implementation of the popular 2048 game. The game is built using React and follows the rules of the original 2048 game, where the player combines numbered tiles to reach the 2048 tile.

## Features

- Responsive design that adapts to different screen sizes
- Keyboard and swipe gesture support for tile movements
- Score tracking to keep track of the player's progress
- Restart functionality to start a new game

## Installation

1. Clone the repository: `git clone https://github.com/your-username/2048-game.git`
2. Navigate to the project directory: `cd 2048-game`
3. Install the dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn start`
5. Open the game in your browser at `http://localhost:3000`

## How to Play

- Use the arrow keys (or swipe gestures on touch devices) to move the tiles in the desired direction.
- Tiles with the same number will merge into a new tile with double the value.
- The goal is to reach the 2048 tile by merging tiles and achieving the highest score possible.

## Folder Structure

- `src`: Contains the source code files for the game.
  - `components`: React components used in the game.
  - `utils`: Utility functions used in the game logic.
  - `App.js`: The main component that renders the game.
  - `Dashboard.js`: Component for rendering the game dashboard.
- `public`: Contains the public assets and the `index.html` file.
- `package.json`: Lists the project dependencies and provides build scripts.

## Development

- The game uses React for the frontend UI and logic.
- Styling is done using CSS and the Bootstrap framework.
- Swipe gestures are enabled using a custom `swiped-events.js` library.
- ESLint is set up with the AirBnB style guide for code quality and consistency.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

The game rules is based on the original [2048 game](https://gabrielecirulli.github.io/2048/).
