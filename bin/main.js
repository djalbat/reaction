"use strict";

const lively = require("lively-cli"), ///
      express = require("express");

const { createReloadHandler } = lively;

const server = express(), ///
      staticRouter = express.static("."),
      reloadHandler = createReloadHandler("./examples.js");

server.use(staticRouter);

server.get("/reload", reloadHandler);

server.listen(8888);
