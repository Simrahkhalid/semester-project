const Team = require("../models/team");
const {uploadFileToCloudinary}=require("../utils/uploadToCloudnary");
const createTeam = async (req, res) => {
  try {
    const { name, designation, year } = req.body;
    const image = req.files.file;
    console.log(req.files.file2);
    const Uploadfile= await uploadFileToCloudinary(image, "auto");
    const picture=Uploadfile.secure_url;

    const newTeam = new Team({ picture, name, designation, year});
    await newTeam.save();
    res.status(201).send(newTeam);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


// Get teams by year
const getTeamsByYear = async (req, res) => {
  try {
    const { year } = req.params;
    const teams = await Team.find({ year: year });
    if (teams.length === 0) {
      res.status(404).send({
        message: "No teams found",
        status: false,
      })
    }
    res.status(200).send(teams);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Update a team
const updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTeam = await Team.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedTeam) {
      return res.status(404).send("Team not found");
    }
    res.status(200).send(updatedTeam);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Delete a team
const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeam = await Team.findByIdAndDelete(id);
    if (!deletedTeam) {
      return res.status(404).send("Team not found");
    }
    res.status(200).send(deletedTeam);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports= { createTeam, getTeamsByYear, updateTeam, deleteTeam };


