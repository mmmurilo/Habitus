const {Model, DataTypes} = require('sequelize');

class Fato extends Model{
    static init(sequelize){
        super.init({
            desc_fato: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsToMany(models.FatoObservado, {foreignKey: 'fato_id', through: 'fatosObservados',as: 'fato'});
    }
}

module.exports = Fato;