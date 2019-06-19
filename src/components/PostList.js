import React, { Component } from 'react'
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostList extends Component {

	componentDidMount(){
		this.props.fetchPosts();
		// console.log(response);
	}

	render() {
		return (
			<div>
				PostList
			</div>
		)
	}
}

export default connect(null, {fetchPosts})(PostList)
