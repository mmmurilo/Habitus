const {Model, DataTypes} = require('sequelize');

class Pauta extends Model{
    static init(sequelize){
        super.init({
            desc_pauta: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Conteudo, {foreignKey: 'conteudo_id', as: 'conteudo'});
    }
}

module.exports = Pauta;