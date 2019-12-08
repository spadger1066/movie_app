import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const MOVIE_DATA = [];

const CATEGORY_DATA = [
    {id: 'c-1', 'name': 'drama'},
    {id: 'c-2', 'name': 'action'},
    {id: 'c-3', 'name': 'crime'},
    {id: 'c-4', 'name': 'adventure'},
    {id: 'c-55', 'name': 'fantasy'}
];

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA);
            reject('Cannot fetch data')
        }, 50)
    })
};

export const getMovies = () => {
    return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(MOVIE_DATA);
    //         reject('Cannot fetch data')
    //     }, 50)
    // })
};

export const createMovie = (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5);
    return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data);
    // return new Promise((resolve, reject) => {
    //     movie.id = Math.random().toString(36).substr(2, 7);
    //     MOVIE_DATA.push(movie);
    //     setTimeout(() => {
    //         resolve(MOVIE_DATA);
    //         reject('Cannot fetch data')
    //     }, 50)
    // })
};

export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
    // return new Promise((resolve, reject) => {
    //     const movieIndex = MOVIE_DATA.findIndex(m => m.id === id);
    //     const movie = MOVIE_DATA[movieIndex];
    //     setTimeout(() => resolve(movie), 50)
    // })
};

export const updateMovie = (movie) => {
    return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie).then(res => res.data);
};

export const deleteMovie = (id) => {
    return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
};
