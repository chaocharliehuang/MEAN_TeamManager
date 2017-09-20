var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Player = mongoose.model('Player');

module.exports = {
    showAll: function(req, res) {
        Player.find({}).sort('name').exec(function(err, players) {
            if (!err) {
                return res.json(players);
            }
        });
    },
    addPlayer: function(req, res) {
        var player = new Player({
            name: req.body.name,
            position: req.body.position,
            game1: null,
            game2: null,
            game3: null
        });
        player.save(function(err) {
            if (!err) {
                return res.json(player);
            }
        });
    },
    update: function(req, res) {
        Player.findOne({_id: req.params.id}, function(err, player) {
            if (!err) {
                for (var key in req.body) {
                    player[key] = req.body[key];
                }
                player.save(function(err) {
                    if (!err) {
                        Player.find({}).sort('name').exec(function(err, players) {
                            if (!err) {
                                return res.json(players);
                            }
                        });
                    }
                });
            }
        });
    },
    destroy: function(req, res) {
        Player.remove({_id: req.params.id}, function(err) {
            if (!err) {
                Player.find({}).sort('name').exec(function(err, players) {
                    if (!err) {
                        return res.json(players);
                    }
                });
            }
        });
    }
}