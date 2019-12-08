import React, {Component} from 'react';
import {getPosts} from "../actions";

class Posts extends Component {
    static async getInitialProps() {
        const posts = await getPosts();
        return {posts}
    }
    render() {
        const {posts} = this.props;
        return (
            <div className="container">
                <h1>I am the posts page</h1>
                <ul>
                    {
                        posts.map((p) => (
                            <li>
                                <span>{p.id}: </span><span>{p.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Posts;
