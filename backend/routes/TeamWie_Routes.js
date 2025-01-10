const express = require("express");
const teamRouter = express.Router();

const {createTeam,getAllTeams,getTeamsByYear,updateTeam,deleteTeam}=require("../controllers/teamWIE_controller");

teamRouter.post("/api/teamwie", createTeam);
teamRouter.get("/api/teamwie", getAllTeams);
teamRouter.get("/api/teamwie/:year", getTeamsByYear);
teamRouter.patch("/api/teamwie/:id", updateTeam);
teamRouter.delete("/api/teamwie/:id", deleteTeam);

module.exports = teamRouter;