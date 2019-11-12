module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5433',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // serve para adicionar a coluna created/updated at
    underscored: true, // garante a padronizacao do nome das tabelas
    underscoredAll: true, // garante a padronizacao do nome das colunas e relacionamento
  },
};
