# Trumpster

## Description
This is the client of the full stack application that we have created for the sole purpose of making fun of the former president of the United States, Mr Donald J. Trump. During his presidency he have made life hard for comedians whom makes political commentary. How do you make a joke about a living joke? The answer that we find to be the best is to show the original joke without context or commentary, let the man speak for himself.
The website is made by using an external API called [Tronald Dump](https://www.tronalddump.io/). this API is a collection of all the dumbest things that Donald Trump has ever said. We use our API to modify the data from the Tronald Dump API and then use Axios to to request in order to get relevant data.
Each functionality is based on user authorization. A visitor will get one random quote.
A registered user can search for quotes with a keyword from the Tronald Dump API. A subscriber can customize their own insult using quotes by Donald J. Trump.

## The code

- [Deployed App(Netlify)](https://trumpster-dumpster.netlify.app)
- [Github](https://github.com/KyunginNa/trumpster_client)
- [API](https://github.com/KyunginNa/trumpster_api)

## User stories
```
As a visitor
In order to enjoy some Trump quotes without registering
I would like to view a random Trump quote for free
```
```
As a visitor
In order to access the search function
I would like to be able to register myself
```
```
As a user
In order to use insult generator function
I would like to be able to subscribe
```

## Dependencies
- React
- Cypress for acceptance testing
- Semantic-ui-react for styling
- Axios
- React-route-dom for navigation on website
- Stripe as a payment provider

## Acknowledgements
- Course materials from [Craft Academy](https://www.craftacademy.se/english/)

## License
MIT License

## Authors
- Sanne Lindholm
- Kyungin Na
- Viktor Karlsson
- Paulo Swärdblad
- Paulina Sobczak
