# Dev Discord Bot

<!-- Badges -->
<p align="center">
  <!-- Example badges. Replace with your own. -->
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/discord.js.svg?style=flat-square" alt="Node.js Version"></a>
  <a href="https://discord.js.org/"><img src="https://img.shields.io/badge/discord.js-v14-blue.svg?style=flat-square" alt="discord.js Version"></a>
</p>

> This project uses the most complete Discord bot base you've ever seen! Developed by [@rinckodev](https://github.com/rinckodev), this project uses TypeScript in an incredible way to provide complete structures and facilitate the development of your Discord bot.

> [!NOTE]
> This project **base** can be generated using the [Constant CLI](https://github.com/rinckodev/constatic).
> See the full documentation for this base by accessing: https://constatic-docs.vercel.app/docs/discord/start

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Available Commands](#available-commands)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- A robust command handler for slash commands, context menus, and buttons.
- Event handler for easy management of Discord events.
- Built with TypeScript for type safety and better developer experience.
- Includes several utility and moderation commands.

## Prerequisites

> [!WARNING]
> [Node.js](https://nodejs.org/en) version **20.12.0 or higher** is required.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1.  Clone the repository (replace `your-username` with the actual owner):
    ```sh
    git clone https://github.com/Flipedds/dev-discord-bot.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd dev-discord-bot
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Configuration

1.  Create a `.env` file in the root of the project. You can copy the example file if it exists:
    ```sh
    cp .env.example .env
    ```
    > If `.env.example` does not exist, create the `.env` file manually.

2.  Open the `.env` file and add your Discord bot token and other necessary environment variables:
    ```env
    DISCORD_TOKEN=your_bot_token_here
    GUILD_ID=your_server_id_for_testing
    WEBHOOK_LOGS_URL=your_discord_webhook_url_for_logs
    ```

## Usage

This project includes several npm scripts to streamline development:

-   **Development:** Run the bot in development mode with hot-reloading.
    ```sh
    npm run dev
    ```

-   **Watch Mode:** Run the bot in watch mode, which will restart on file changes.
    ```sh
    npm run watch
    ```

-   **Build:** Compile the TypeScript code to JavaScript for production.
    ```sh
    npm run build
    ```

-   **Production:** Start the compiled bot.
    ```sh
    npm run start
    ```

## Available Commands

Here is a list of the available commands and features:

### Slash Commands
- `/clean`: Deletes a specified number of messages from a channel.
- `/roulette`: Starts a game of Russian roulette.
- `/game`: Play a game (e.g., rock-paper-scissors).
- `/github`: Fetches information about a GitHub repository or user.
- `/list_members`: Lists all members of the server with two options of actions.

### User Context Menu
- `Gerenciar`: Opens a management menu for the selected user with options like kick, ban, or warn.

### Buttons & Select Menus
- **Game Buttons**: Used for making choices in the `/game` command.
- **Roulette Button**: Allows users to play the `/roulette` game.
- **Member & Type Selects**: Used for interactions within the `/list_members` and `Gerenciar` commands.
- **Manage User Buttons**: Perform actions like kick, ban, or warn a user via the management menu.

### Events
- **Voice State Tracking**: The bot tracks when users connect to or disconnect from voice channels.

## Project Structure

- Commands
- Responder
- Events

This project follows a structure provided by the **Constatic** framework. For more details on how Commands, Responders, and Events are organized, please refer to the official documentation.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request