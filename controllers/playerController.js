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
    Player.findById(req.params.playerID, (err, player) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(player)
        }
    })
}

export const updatePlayerById = (req, res) => {
    Player.findByIdAndUpdate(req.params.playerID, req.body, { new: true }, (err, player) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(player)
        }
    })
}


export const deletePlayerById = (req, res) => {
    Player.remove({ _id: req.params.playerID }, (err, player) => {
        if (err) {
            res.send(err)
        }
        else {
            res.json({ 'message': 'Player deleted successfully' })
        }
    })
}