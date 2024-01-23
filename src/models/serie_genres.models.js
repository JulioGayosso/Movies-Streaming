const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Genres = require('./genres.models')
const Series = require('./series.models')

const SeriesGenres = db.define('series_genres',{

    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },

    seriesId:{
        type: DataTypes.UUID,
        allowNull:false,
        references:{
            model:Series,
            key:'id'
        }
    },
    genreId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
           model:Genres,
           key:'id'

        }
    },



})

module.exports = SeriesGenres
