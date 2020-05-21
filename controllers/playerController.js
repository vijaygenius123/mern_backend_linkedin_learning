import mongoose from 'mongoose'
import { PlayerSchema } from '../models/playerModel'

const Player = mongoose.model('Player', PlayerSchema)

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body)

    newPlayer.save((err, Player) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(Player)
        }
    });
}

export const getPlayers = (req, res) => {
    Player.find({}, (err, players) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(players)
        }
    })
}

export const getPlayerWithID = (req, res) => {
    console.log(req.params.playerID);
    Player.findById(req.params.playerID, (err, player) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(player)
        }
    })
}
