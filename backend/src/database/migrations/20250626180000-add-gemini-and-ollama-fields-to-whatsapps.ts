import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.addColumn("Whatsapps", "geminiApiKey", {
        type: DataTypes.TEXT,
        allowNull: true
      }),
      queryInterface.addColumn("Whatsapps", "ollamaUrl", {
        type: DataTypes.TEXT,
        allowNull: true
      }),
      queryInterface.addColumn("Whatsapps", "ollamaModel", {
        type: DataTypes.TEXT,
        allowNull: true
      }),
      queryInterface.addColumn("Whatsapps", "ollamaPrompt", {
        type: DataTypes.TEXT,
        allowNull: true
      })
    ]);
  },

  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn("Whatsapps", "geminiApiKey"),
      queryInterface.removeColumn("Whatsapps", "ollamaUrl"),
      queryInterface.removeColumn("Whatsapps", "ollamaModel"),
      queryInterface.removeColumn("Whatsapps", "ollamaPrompt")
    ]);
  }
};
