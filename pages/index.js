import React, {useState, useEffect} from "react";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";

import { getMovies, getCategories } from '../actions'

const Home = (props) => {
    const { images, categories, movies } = props;
    return (
        <div>
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMenu
                                categories={categories}
                                appName={"Movie DB"} />
                        </div>
                        <div className="col-lg-9">
                            <Carousel images={images}/>
                            <div className="row">
                                <MovieList movies={movies || []}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Home.getInitialProps = async () => {
    const movies = await getMovies();
    const categories = await getCategories();
    const images = movies.map(movie=>({
        id: `image-${movie.id}`,
        url: movie.cover,
        name: movie.name
    }));
    return {
        movies,
        images,
        categories
    }
};

// class Home extends React.Component {
//     static async getInitialProps() {
//         const movies = await getMovies();
//         return {movies}
//     }

    // Used for Client
    // state = {
    //     movies: [],
    //     errorMessage: ''
    // };

    // Called only once when component is mounted
    // async componentDidMount() {
    //     const movies = await getMovies();
    //     this.setState({movies})
    // }

    // Called only on Client browser...
    // componentDidMount() {
    //     getMovies()
    //         .then((movies) => {
    //             this.setState({movies});
    //         })
    //         .catch((error) => {
    //             this.setState({errorMessage: error})
    //         });
    // }

    // Class base
    // render() {
    //     const {movies, errorMessage} = this.props;
    //     return (
    //         <div>
    //
    //             <div className="home-page">
    //                 <div className="container">
    //                     <div className="row">
    //                         <div className="col-lg-3">
    //                             <SideMenu
    //                                 appName={"Movie DB"}
    //                             />
    //                         </div>
    //                         <div className="col-lg-9">
    //                             <Carousel/>
    //                             <div className="row">
    //                                 {errorMessage &&
    //                                 <div className="alert alert-danger" role="alert">{errorMessage}</div>
    //                                 }
    //                                 <MovieList movies={movies}/>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <Footer/>
    //             <style jsx>{`
    //             .home-page {
    //               padding-top: 80px;
    //             }
    //         `}
    //             </style>
    //         </div>
    //     );
    // }
// }

export default Home;
