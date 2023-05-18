import React, { Component } from 'react';
import data from './data.json';
import Card from 'react-bootstrap/Card';

class Posts extends Component {

    render() {
        const postsToRender = data.map((post) => (
            <Card>
            <div key={post.id}>
                <h3>{post.caption}</h3>
                {/* Using a ternary operator for an if statement */}
                {post.type === "image" ? (
                    <img src={post.mediaURL} alt={post.caption} />
                ) : (
                    post.type === "video" ? (
                        <video width="320" height="240" controls>
                            <source src={post.mediaURL} type="video/mp4" />
                        </video>
                    ) : null
                )}
            </div>
            </Card>
        ))
        return <div>{postsToRender}</div>;
    }
}

export default Posts;
