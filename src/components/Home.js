import React from 'react';

class Home extends React.Component {

    state = {
        posts: []
    }

    componentDidMount(){
        fetch('http://localhost:5000/posts')
        .then(response => response.json())
        .then(data => this.setState({
            posts: data
        }))
    }
    postsToRender = () => {
        return this.state.posts.map((post) => {
            return <p>{post.title}</p>
        })
    }

render(){
    return (
        <>
            <h1>Hello</h1>
            {this.postsToRender()}
        </>
    )

}

}

export default Home;