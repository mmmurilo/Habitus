const {Model, DataTypes} = require('sequelize');

class Avaliador extends Model{
    static init(sequelize){
        super.init({
            
        }, {
            sequelize,
            tableName: 'avaliadores'
        })
    }
    static associate(models){
        this.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as:'usuarioAvaliador'});
        this.belongsTo(models.Curso, {foreignKey: 'curso_id', as:'cursoAvaliador'});
    }
}

module.exports = Avaliador;