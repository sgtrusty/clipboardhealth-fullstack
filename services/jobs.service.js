export const JobService = {
    query: async (keyword, sortKey = "", sortDirection = "") => {
		// FIXME: default state params fix later
        return fetch(`/api/jobs?keyword=${keyword}&sortKey=${sortKey}&sortDirection=${sortDirection}`).then(res => res.json());
    }
};
