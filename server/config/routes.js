var players = require('../controllers/players.js');

module.exports = function(app) {
    app.get('/players', function(req, res) {
        players.showAll(req, res);
    });

    app.post('/players', function(req, res) {
        players.addPlayer(req, res);
    });

    app.put('/players/:id', function(req, res) {
        players.update(req, res);
    });

    app.delete('/players/:id', function(req, res) {
        players.destroy(req, res);
    });
}