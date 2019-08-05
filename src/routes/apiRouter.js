import express from "express";
import routes from "../routes";
import {
    search
} from "../controllers/mainSearchController";

const apiRouter = express.Router();

apiRouter.get(routes.api, search);
apiRouter.get(routes.getMainSearch, search);

export default apiRouter;