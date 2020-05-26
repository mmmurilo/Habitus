const {Model, DataTypes} = require('sequelize');

class Providencia extends Model{
    static init(sequelize){
        super.init({
            desc_providencia: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsToMany(models.FatoObservado, {foreignKey: 'providencia_id', through: 'fatosObservados', as: 'providencia'});
    }
}

module.exports = Providencia;