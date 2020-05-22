import { addNewPlayer, getPlayers, getPlayerWithID, updatePlayerById, deletePlayerById } from '../controllers/playerController'

const routes = app => {
    app.route('/players')
        .get(getPlayers)
        .post(addNewPlayer)
    app.route('/player/:playerID')
        .get(getPlayerWithID)
        .put(updatePlayerById)
        .delete(deletePlayerById)

}

export default routes