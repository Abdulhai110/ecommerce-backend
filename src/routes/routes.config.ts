import express from "express";

export abstract class RoutesConfig {
    app: express.Application;
    name: string;

    /* -----------------------------------
     * Define Controllers
     * ----------------------------------- */
   

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    getName() {
        return this.name;
    }

    abstract configureRoutes(): express.Application;
}
