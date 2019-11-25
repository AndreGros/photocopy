'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => {
      return queryInterface.createTable('teacher_disciplines', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
          allowNull: false,
        },
        teacher_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: { model: 'teachers', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        discipline_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: { model: 'disciplines', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        academic_year: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('teacher_disciplines');
  }
};