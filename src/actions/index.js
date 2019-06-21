import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch,getState) =>{
	await dispatch(fetchPosts())

	_.chain(getState().posts)
		.map('userId')
		.uniq()
		.forEach(id=>dispatch(fetchUser(id)))
		.value();
}

export const fetchPosts = () => async dispatch => {
	// console.log("action", "fetchPosts", 'gone');
	const response = await jsonPlaceholder.get("/posts?userId=1");
	// console.log("action", "fetchPosts", 'return');
	dispatch({
		type: "FETCH_POSTS",
		payload: response.data
	});
};

export const fetchUser = id => async dispatch => {
	// console.log("action", "fetchUser", "/users/" + id,'gone');
	const response = await jsonPlaceholder.get("/users/" + id);
	// console.log("action", "fetchUser", "/users/" + id,'return');
	dispatch({
		type: "FETCH_USER",
		payload: response.data
	});
};
