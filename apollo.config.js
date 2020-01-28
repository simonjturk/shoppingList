module.exports = {
  client: {
    service: {
      name: "your-service-name",
      url: "https://oa-shopping-list.herokuapp.com/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "<your-admin-secret>"
      }
    }
  }
};
