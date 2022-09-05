### Description

This project is a web application which uses the Pokémon TCG API (available [here](https://pokemontcg.io/)) to get and show Pokémons cards with its built in features.

### Features

As an user of this application, it is possible to handle four main features:

- Cards visualization: Given a specific search, it is possible to visualize all the Pokémon cards related to that search, right on the main page grid;
- Cards search: At the top of the page, it is always available a search option, where you can type the Pokémon card's name an search for it with the search button;
- Card's details: By clicking on a card, at the main page application, the Pokémon card's details page will show up, with a detailed visualization;
- Card's attacks: The Pokémon card's detail page has an 'Attacks' button which handle the card's attack visualization.

> The main page shows the Pokémon cards with simple information: name, LD card image, id, and types.
>
> The detail page, after the card selection, shows more detailed features: name, HD card image, id, types, weaknesses, and resistances.
>
> By clicking on the 'Attacks' button, the Pokémon card's attacks features are shown: name, damage, costs, description (if available).

### Usage

To run this project locally, follow the steps below:

1. Clone the repository to your computer (Node with some package manager like NPM is a must);
2. Creat a `.env` file with the API URL as one of its variables: `NEXT_PUBLIC_API_URL=https://api.pokemontcg.io/v2`;
3. It is highly recommended to create an enviroment variable with your API key, in the same `.env` file: `NEXT_PUBLIC_API_KEY=***`;
4. Run `npm install` to install the dependencies;
5. Run `npm run dev` to run the project in development mode or `npm run build` and `npm run start` to run the final build;
6. In your internet browser, access `http://localhost:3000/` to interact with the application.

### Deploy

This project is deployed with [Vercel](https://vercel.com/), available [here](https://pokemon-tcg-app-alpha.vercel.app/).
