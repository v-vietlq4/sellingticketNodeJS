/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  const showtimes = sequelize.define(
    "showtimes",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      movie_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
            model: "movies",
            key: "id"
          }
      },
      room_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
            model: "rooms",
            key: "id"
          }
      },
      timestart: {
        type: DataTypes.DATE,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: "showtimes"
    }
  );
  
  return showtimes;
};