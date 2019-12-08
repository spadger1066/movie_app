import axios from 'axios';

export default async (req, res) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    // const posts = [
    //     {id: '1', name: 'Some Post', description: 'Some Post Desc'},
    //     {id: '2', name: 'Some Post 2', description: 'Some Post Desc 2'}
    // ];

    return res.json(posts.slice(0, 20))
}
