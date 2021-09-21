const express = require("express");

const jsonServer = require("json-server"); //rest api server

const chokidar = require("chokidar"); //monitor changes in a file

const cors = require("cors");

//graphQl
const fs = require("fs");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const queryResolvers = require("./src/Api/graphql/SchemaQueriesResolver");
const mutationResolvers = require("./src/Api/graphql/MutationsResolver");
const history = require("connect-history-api-fallback");

//data file
const fileName = process.argv[2] || "./data.js";

//port
const port = process.env.PORT || process.argv[3] || 80;

//setup json-server router
let router = undefined;
let graph = undefined;

//create app
const app = express();

//json-server
const createServer = () => {
  delete require.cache[require.resolve(fileName)]; //reload the require of the module
  setTimeout(() => {
    router = jsonServer.router(
      fileName.endsWith(".js") ? require(fileName) : fileName
    );
    //tell json-server if the file ends with js use it as the endpoint of your rest api, if not take the filee that i will pass it to you in the argv[3]
    let schema =
      fs.readFileSync("./src/Api/graphql/Schema.graphql", "utf-8") +
      fs.readFileSync("./src/Api/graphql/Mutations.graphql", "utf-8");
    let resolvers = { ...queryResolvers, ...mutationResolvers };
    graph = graphqlHTTP({
      schema: buildSchema(schema),
      rootValue: resolvers,
      graphiql: true,
      context: { db: router.db },
    });
  }, 100);
};
createServer();

//middleWare

//production
app.use(history());
app.use("/", express.static("./build"));
//---------------------------------------
app.use(cors());
app.use(jsonServer.bodyParser);
app.use("/api", (req, resp, next) => router(req, resp, next));
app.use("/graphql", (req, resp, next) => graph(req, resp, next));
chokidar.watch(fileName).on("change", () => {
  console.log("reloading web service data...");
  createServer(); //invoke this again to take the new data
  console.log("reloading web service data...");
});

app.listen(port, () => console.log(`web srvice running on the port ${port}`));
