import React, {Component} from 'react';
import Router from 'next/router';
import Link from "next/link";

class About extends Component {
    render() {
        return (
            <div>
                <Link href="/"><a>Home</a></Link>
                <button onClick={() => Router.push('/')}>Home</button>
            </div>
        );
    }
}

export default About;
