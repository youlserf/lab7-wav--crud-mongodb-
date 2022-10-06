import { Router } from "express";
import * as Controller from "./controller";

const testRouter = Router();

testRouter.route("/").get(Controller.findAll);
testRouter.route("/:id").get(Controller.read);
testRouter.route("/").post(Controller.create);
testRouter.route("/:id").put(Controller.update);
testRouter.route("/:id").delete(Controller.deleteStudent);

export default testRouter;
