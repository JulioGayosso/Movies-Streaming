const Movies = require('../models/movies.models')
const MovieGenres = require('../models/movie_genres.models')
const uuid = require('uuid')
const Genres = require('../models/genres.models')
const {Op} = require('sequelize')

const FindAllmovies = async(limit,offset,search) =>{
  // limit -> cuantos quiero mostrar
 //  offset -> donde empiezo a mostrar
  
    const queryOptions = {
       limit: limit,
       offset: offset ,
       where:{}
    }

    if(search){
      queryOptions.where = {
        title:{
          
          [Op.iLike]: `%${search}%`
        }
      }
    }
 
    const data = await Movies.findAndCountAll(queryOptions)
    return data
}

// controlador

const createMovie = async (movieObj) => {
  const newMovie = {
    id: uuid.v4(),
    title: movieObj.title,
    synopsis: movieObj.synopsis,
    releaseYear: movieObj.releaseYear,
    director: movieObj.director,
    duration: movieObj.duration,
    traillerUrl: movieObj.traillerUrl,  // Asegúrate de que la ortografía sea la misma que en el modelo
    coverUrl: movieObj.coverUrl,
    movieUrl: movieObj.movieUrl,
    clasification: movieObj.clasification,  // También aquí, asegúrate de que la ortografía sea la misma que en el modelo
    rating: movieObj.rating
  };

  const data = await Movies.create(newMovie);
  return data;
};

const addGenreToMovie = async (dataObj) =>{
  const data = await  MovieGenres.create({
    id:uuid.v4(),
    movieId:dataObj.movieObj,
    genreId:genreId.movieObj
  })
  return data
}

const findAllMoviesByGenre = async(genreId) => {
  const data = await Movies.findAll({
     include:{
       model:Genres,
       where:{
         id:genreId
       }
     }
  })
  return data
}


module.exports = {
  FindAllmovies,
  createMovie,
  addGenreToMovie,
  findAllMoviesByGenre
};


