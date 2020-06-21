const Perfil = require('../models/Perfil');
const Curso = require('../models/Curso');

module.exports = {
    async index(req,res){
        const perfis = await Perfil.findAll();

        return res.json(perfis);
    },
    
    async store(req,res){
        const {curso_id} = req.params;
        const {titulo_perfil} = req.body;

        const [perfil] = await Perfil.findOrCreate({
            where: {titulo_perfil}
        });
    
        return res.json(perfil);
    }
};