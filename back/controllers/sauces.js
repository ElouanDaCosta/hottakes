const { response } = require('../app');
const { create } = require('../models/sauces');
const sauces = require('../models/sauces');

exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauces);
    delete sauceObject._id;
    const sauce = new sauces({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    sauce.save()
        .then(() => res.status(201).json({ message: 'Sauce créée !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllSauce = (req, res, next) => {
    sauces.find()
        .then(sauce => res.status(200).json({ sauce }))
        .catch(error => res.status(400).json({ error }));
}