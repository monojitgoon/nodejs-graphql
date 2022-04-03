**NODEJS GRAPHQL**
Sample Nodejs GraphQL API for searching list of Rick&Morty characters by name
https://rickandmortyapi.com/documentation  

#### Run application
1. npm i    
2. npm start

**URL**
http://localhost:8000

**Sample Payload**

query {
  characters(name: "ri") {
    name
    status
    species
    type
    gender
    origin {
      name
      url
    }
    location {
      name
      url
    }
    image
    episode {
      url
    }
    url
    created
  }
}