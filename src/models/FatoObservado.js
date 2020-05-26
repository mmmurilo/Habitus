const {Model, DataTypes} = require('sequelize');

class FatoObservado extends Model{
    static init(sequelize){
        super.init({
            data_fato: DataTypes.DATE,
            tipo_fato: DataTypes.ENUM(['Positivo','Negativo','Neutro']),
        }, {
            sequelize
        })
    }

    static associate(models){
        this.hasOne(models.Avaliador, {foreignKey: 'avaliador_id', as:'avaliadorFato'});
        this.hasOne(models.Conteudo, {foreignKey: 'conteudo_id', as:'conteudoFato'});
        this.hasOne(models.Pauta, {foreignKey: 'pauta_id', as:'pautaFato'});
        this.hasOne(models.Fato, {foreignKey: 'fato_id', as:'fatoFato'});
        this.hasOne(models.Atividade, {foreignKey: 'atividade_id', as:'atividadeFato'});
        this.hasOne(models.Providencia, {foreignKey: 'providencia_id', as:'providenciaFato'});
        this.belongsToMany(models.Avaliado, {foreignKey: 'fatoObservado_id', through: 'avaliadosFatos',
         as:'avaliados'});
    }
}

module.exports = FatoObservado;