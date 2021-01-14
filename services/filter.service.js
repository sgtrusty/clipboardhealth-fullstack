export const FilterService = {
    filters: async () => {
        return fetch('/api/filters').then(res => res.json());
    }
};
