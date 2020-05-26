const Conteudo = require('../models/Conteudo');
const Pauta = require('../models/Pauta');
const Avaliado = require('../models/Avaliado');
const Avaliador = require('../models/Avaliador');
const Fato = require('../models/Fato');
const Atividade = require('../models/Atividade');
const Providencia = require('../models/Providencia');
const FatoObservado = require('../models/FatoObservado');

module.exports = {
    async index(req,res){
        const conteudos = await Conteudo.findAll();

        return res.json(conteudos);
    },
    
    async store(req,res){
        const {avaliador_id} = req.params;
        const {data_fato, tipo_fato,conteudo_nome, pauta_nome,fato_desc,
        atividade_desc,providencia_desc} = req.body;

        const avaliador = await Avaliador.findByPk(avaliador_id);

        if(!avaliador){
            return res.status(400).json({error:'Perfil não encontrado'});
        }

        const fatoObservado = await FatoObservado.create({data_fato,tipo_fato});
    
        const [ conteudo ] = await Conteudo.findOne({
            where: { conteudo_nome }
        });
        await avaliador.addConteudo(conteudo);
    
        const [ pauta ] = await Pauta.findOne({
            where: { pauta_nome }
        });
        await avaliador.addPauta(pauta);

        const [ fato ] = await Fato.findOrCreate({
            where: { fato_desc }
        });
        await avaliador.addFato(fato);

        const [ atividade ] = await Atividade.findOrCreate({
            where: { atividade_desc }
        });
        await avaliador.addAtividade(atividade);
        
        const [ providencia ] = await Providencia.findOrCreate({
            where: { providencia_desc }
        });
        await avaliador.addProvidencia(providencia);

        return res.json(fatoObservado);
    },

    async delete(req,res){
        const {perfil_id} = req.params;
        const {nome_conteudo} = req.body;

        const perfil = await Perfil.findByPk(perfil_id);

        if(!perfil){
            return res.status(400).json({error:'Perfil não encontrado'});
        }

        const conteudo = await Conteudo.findOne({
            where: { nome_conteudo }
        });

        await perfil.removeConteudo(conteudo);
    
        return res.json();
    }

};