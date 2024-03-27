const express = require("express");
const cors = require("cors");
const apiRouter = require("../routes/v1/api");

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 2,
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports.initExpress = () => {
    const app = express();

    app.use(cors());  // only limit browser

    // app.use((err, req, res) => {
    //     console.error("Cannot create server");
    // });

    app.use(express.json());

    // app.use(limiter);  // check limit before router

    app.use("/api/v1", apiRouter);  // control the middleware only be triggered on the path "api/v1"

    

    app
    .listen(8000, () => {
        console.log("Server is running");
    })
    .on("error", (e) => {
        console.error(e);
    });

    return app;
}

// export default & export named exports
// for example, export default foo; export const foo = ...;
// both are named exports -- 
// in CommonJS
// const foo = require("./foo");  // not work
// const foo = require("./foo").default;  // work, or
// const expDefault = require("foo"); expDefault.foo;  // work, because default is also a named export, which is just a reserved name
// in ES6 / ES module
// import foo from "./foo";  // work perfectly, because in ES6, Babel helps convert ES6 code into compatible old version. Here we can access foo without default, because Babel extracts obj in "default" for us

// module.exports = foo;//CommonJS    export default foo;//ES6    // they have similar purpose - change the "default" obj and access exports from "default"
// exports.foo = ...;//CommonJS    export const foo = ...;//ES6    // they have similar purpose - export named exports
