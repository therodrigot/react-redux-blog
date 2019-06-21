export default (state = [], { type, payload }) => {
	if (type === "FETCH_POSTS") {
		return payload;
	}
	return state;
};
