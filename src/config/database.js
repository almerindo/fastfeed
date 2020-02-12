module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  // username: 'gympoint',
  username: 'docker',
  password: 'docker',
  database: 'fastfeed',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
