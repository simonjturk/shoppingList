module.exports = {
  client: {
    service: {
      name: "dev",
      url: "https://oa-shopping-list.herokuapp.com/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "gobler69"
      }
    }
  },
  service: {
    endpoint: {
      url: 'https://oa-shopping-list.herokuapp.com/v1/graphql', // defaults to http://localhost:4000
      headers: {
        // optional
        "x-hasura-admin-secret": "gobler69",
        "": ""
      }

    }
  }
};
