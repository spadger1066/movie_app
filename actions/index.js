const MOVIE_DATA = [
    {
        id: '1',
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate excepturi incidunt maxime molestiae nobis tempora, veritatis. Amet beatae blanditiis commodi eligendi enim expedita ipsa, ipsum iste obcaecati odio possimus praesentium quas rerum sit veniam veritatis vero? Corporis dolore hic iste laboriosam obcaecati! Accusantium ad aliquam deserunt distinctio doloremque ea error esse eum hic id illum labore nemo nesciunt, nobis non optio praesentium provident sed, tempora tempore totam vero voluptates. Accusamus alias aliquam autem corporis cumque eligendi et hic impedit incidunt laudantium necessitatibus neque officia possimus quo quos reiciendis sapiente temporibus voluptatem, voluptatibus voluptatum? Magni perspiciatis quas sed sequi ut.',
        rating: 4.8,
        genre: 'drama',
        image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg',
        cover: 'https://m.media-amazon.com/images/M/MV5BODliYWY1MjktOTUwNi00YTI4LWI0ZjEtZjg4YmIyNzAxOWQwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg'
    },
    {
        id: '2',
        name: 'The Dark Knight',
        releaseYear: 2008,
        description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur assumenda doloribus eaque eos esse fugiat inventore ipsa libero magni maiores natus nostrum, odio perferendis quae quia quidem rerum similique tenetur vel. Adipisci illum nemo possimus veniam voluptatum. Assumenda consectetur corporis cum cumque dicta dignissimos distinctio dolor eaque eos eveniet excepturi, illum in ipsa itaque iusto labore magnam minus mollitia neque nesciunt nobis, non, pariatur perferendis placeat provident quas quidem quod quos recusandae reiciendis rerum sunt tenetur vitae voluptate voluptatem voluptates voluptatum? Alias beatae culpa cum dicta ea eligendi eum facere fugiat in magnam, necessitatibus, neque nisi, omnis rerum sint?',
        rating: 4.7,
        genre: 'action, crime, drama',
        image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600',
        cover: 'https://m.media-amazon.com/images/M/MV5BNjc3MzU0MDQzMV5BMl5BanBnXkFtZTcwNjAyMTk2Mw@@._V1_SY1000_CR0,0,1297,1000_AL_.jpg'
    },
    {
        id: '3',
        name: 'Lord of the Rings',
        releaseYear: 2004,
        description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus id molestiae nemo repellendus ullam. Cupiditate dolorum facere molestiae praesentium quas quis repellat suscipit ut voluptas. A accusamus adipisci aliquid asperiores atque aut commodi, corporis cumque dignissimos dolorum enim esse excepturi illum impedit modi, molestias mollitia nesciunt nobis, nostrum nulla omnis provident qui quo sint sit soluta sunt tenetur ullam voluptas voluptatem! Cumque dicta dolor et incidunt molestias quae quaerat, recusandae totam. Ab alias animi architecto consequuntur debitis dicta dignissimos dolore ducimus illo, illum impedit iusto laborum nemo placeat porro possimus quibusdam veniam voluptatem. Alias commodi ea itaque maiores sint voluptas?',
        rating: 4.9,
        genre: 'adventure, drama, fantasy',
        image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600',
        cover: 'https://m.media-amazon.com/images/M/MV5BMTI4NzA1ODc0OF5BMl5BanBnXkFtZTcwMDExMjk2Mw@@._V1_SY1000_CR0,0,1498,1000_AL_.jpg'
    }
];

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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOVIE_DATA);
            reject('Cannot fetch data')
        }, 50)
    })
};

export const createMovie = (movie) => {
    return new Promise((resolve, reject) => {
        movie.id = Math.random().toString(36).substr(2, 7);
        MOVIE_DATA.push(movie);
        setTimeout(() => {
            resolve(MOVIE_DATA);
            reject('Cannot fetch data')
        }, 50)
    })
};

export const getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        const movieIndex = MOVIE_DATA.findIndex(m => m.id === id);
        const movie = MOVIE_DATA[movieIndex];
        setTimeout(() => resolve(movie), 50)
    })
};
