# Pokedex

## Setup

This application is built from create-react-app!

- `npm install`
- `npm start`
- Pull down the api https://github.com/turingschool-examples/poke-api

Both repositories should be cloned down to your machine, and should sit next to
each other. You'll need to create a repo on github to push your frontend
repository to, and then you'll need to change the remote of the frontend app to
match the repo on github.

Note: You'll find some 'FAKE' things in the boilerplate, that are there to help
you get started. You should delete these.

![](./app.gif)
## Itteration: 0

Make an http request to `localhost:3001/types`. Once you've received the pokemon type data from the api you'll want to store it in the redux store.

## Itteration 1

Lets work on the visual layer!

Once you've populated the redux store with all the type data you are going to want to display them as Cards. While we wait for the data please give your app a loading gif.
![](./loading.gif)

## Itteration 2

If you look at the `type` data you'll notice there is a `pokemon` array that contains pokemon id's. You'll have to make a `get` request to `http://localhost:3001/pokemon/:id` to retrieve the corresponding pokemon.

This data should not be fetched until the user clicks on the card. You can implement this however you like. Also, you shouldn't need to make extra fetch calls, so once you've fetched the pokemon for a type once, you shouldn't need to do that again.

Display the following for each pokemon:
`name`, `type`(type name), `weight`, and display one of the pokemon `sprites`  

## Extensions

* Middleware (thunks or sagas)
