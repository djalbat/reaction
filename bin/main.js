"use strict";

const express = require("express");

const { createLiveReloadHandler } = require("lively-cli");

const server = express(), ///
      staticRouter = express.static("."),
      liveReloadHandler = createLiveReloadHandler("./examples.js");

server.use(staticRouter);

server.get("/live-reload", liveReloadHandler);

server.listen(8888);
