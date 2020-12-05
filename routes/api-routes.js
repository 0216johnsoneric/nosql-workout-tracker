const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
})

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbCreate => {
            res.json(dbCreate);
        })
})

router.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;
    let newData = req.body;

    db.Workout.findOneAndUpdate({_id: id}, {
        $push: {exercises: newData}
    }).then(dbUpdate => {
        res.send(dbUpdate);
    })
})
module.exports = router;