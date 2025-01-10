const {createTeam,getTeamsByYear,updateTeam,deleteTeam}=require("../controllers/team_controller");
const express = require("express");
const teamRouter = express.Router();

teamRouter.post("/api/team", createTeam);
teamRouter.get("/api/team/:year", getTeamsByYear);
teamRouter.patch("/api/team/:id", updateTeam);
teamRouter.delete("/api/team/:id", deleteTeam);


module.exports = teamRouter;