const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const UsuarioAvaliadoController = require('./controllers/UsuarioAvaliadoController');
const UsuarioAvaliadorController = require('./controllers/UsuarioAvaliadorController');
const PerfilController = require('./controllers/PerfilController');
const ConteudoController = require('./controllers/ConteudoController');
const ConteudoPerfilController = require('./controllers/ConteudoPerfilController');
const PautaController = require('./controllers/PautaController');
const CursoController = require('./controllers/CursoController');
const CursoPerfilController = require('./controllers/CursoPerfilController');
const AvaliadoController = require('./controllers/AvaliadoController');
const IdAvaliadoController = require('./controllers/IdAvaliadoController');
const AvaliadorController = require('./controllers/AvaliadorController');
const IdAvaliadorController = require('./controllers/IdAvaliadorController');
const CoordenadorController = require('./controllers/CoordenadorController');
const FatoObservadoAvaliadorController = require('./controllers/FatoObservadoAvaliadorController');

const routes = express.Router();

routes.get('/usuarios',UsuarioController.index); //busca todos usuarios
routes.post('/usuarios',UsuarioController.store); //cria usuario
routes.get('/:avaliado_id/usuario/avaliado',UsuarioAvaliadoController.index); //busca info do usuario pelo id avaliado
routes.get('/:avaliador_id/usuario/avaliador',UsuarioAvaliadorController.index); //busca info do usuario pelo id avaliador

routes.get('/perfil',PerfilController.index); //busca todos os perfils 
routes.post('/perfil',PerfilController.store); //cria um perfil

routes.get('/conteudos',ConteudoController.index); //quando quiser buscar todos conteudos
routes.post('/conteudos',ConteudoController.store); //a principio deletar

routes.get('/conteudos/:conteudo_id/pautas',PautaController.index); //busca todas as pautas de um conteudo
routes.post('/conteudos/:conteudo_id/pautas',PautaController.store); //cria uma pauta em um conteudo

routes.get('/perfil/:perfil_id/conteudos',ConteudoPerfilController.index); //busca todos conteudos no perfil
routes.post('/perfil/:perfil_id/conteudos',ConteudoController.store); //cria conteudo no perfil (e no banco, se nao existir) 
routes.delete('/perfil/:perfil_id/conteudos',ConteudoController.delete); //deleta conteudo do perfil (nao do banco)

routes.get('/cursos',CursoController.index); //busca todos os cursos 
routes.get('/perfil/:perfil_id/cursos',CursoPerfilController.index); //busca o curso com determinado perfil
routes.post('/perfil/:perfil_id/cursos',CursoController.store); //cria curso com perfil

routes.get('/curso/:curso_id/avaliado',AvaliadoController.index); //busca todos avaliados no curso
routes.post('/curso/:curso_id/avaliado',AvaliadoController.store); //cria avaliado no curso (e no banco, se nao existir) 
routes.delete('/curso/:curso_id/avaliado',AvaliadoController.delete); //deleta avaliado do curso (nao do banco)
routes.get('/curso/:curso_id/:usuario_id',IdAvaliadoController.index); //id do avaliado pelo id usuario e curso

routes.get('/curso/:curso_id/avaliador',AvaliadorController.index); //busca todos avaliadores no curso
routes.post('/curso/:curso_id/avaliador',AvaliadorController.store); //cria avaliador no curso (e no banco, se nao existir) 
routes.delete('/curso/:curso_id/avaliador',AvaliadorController.delete); //deleta avaliador do curso (nao do banco)
routes.get('/curso/:curso_id/:usuario_id',IdAvaliadorController.index); //id do avaliador pelo id usuario e curso

routes.get('/curso/:curso_id/coordenador',CoordenadorController.index); //busca todos coordenadores no curso
routes.post('/curso/:curso_id/coordenador',CoordenadorController.store); //cria coordenador no curso (e no banco, se nao existir) 
routes.delete('/curso/:curso_id/coordenador',CoordenadorController.delete); //deleta coordenador do curso (nao do banco)

routes.post('/curso/:avaliador_id/fo',FatoObservadoAvaliadorController.store);

module.exports = routes;