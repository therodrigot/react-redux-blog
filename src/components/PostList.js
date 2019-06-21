import React, { Component } from "react";
import { fetchPostsAndUsers } from "../actions";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";
class PostList extends Component {
	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<div className="content">
						<h3 className="header">{post.title}</h3>
						<div className="description">
							<p>{post.body}</p>
						</div>
						<UserHeader userId={post.userId} />
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h1>PostList</h1>
				<div className="ui divided items">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ fetchPostsAndUsers }
)(PostList);
