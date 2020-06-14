"use strict";

const express = require("express");

const server = express(), ///
      staticRouter = express.static(".");

server.use(staticRouter);

server.listen(8888);
