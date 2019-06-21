export default (state = [], { type, payload }) => {
	// console.log(type, "payload", payload);

	if (type === "FETCH_USER") {
		// console.log("FETCH_USER", state, state.length == 0);
		return [...state, payload];
	}

	return state;
};
