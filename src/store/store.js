import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isLoading: false
        }
    },
    getters: {
        isLoading(state) {
            return state.isLoading;
        }
    },
    mutations: {
        isLoading(state, isLoading) {
            state.isLoading = isLoading;
        }
    }
});

export default store;