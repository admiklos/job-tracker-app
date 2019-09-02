import React from 'react';
import Post from './Post';


class Postings extends React.Component {

  render() {
    return ( 
      this.props.posts.map( item => (

        <Post key={item.id} p={item} deletePost={this.props.deletePost} 
                                     filterPost={this.props.filterPost} 
                                     modifyPost={this.props.modifyPost}
                                     switchPostType={this.props.switchPostType}
                                     routeInfo={this.props.routeInfo}/>
      ) )
    )
  }

}


export default Postings;
