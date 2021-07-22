import axios from 'axios'
import store from '../store/store'

export default {
    addElement(element) {

        store.commit('isLoading', true);

        return axios.post(process.env.API_ENDPOINT + "/timeline/add", element)
            .then(result => {
                return result.data;
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => store.commit('isLoading', false));
    },
    editElement(element) {

        store.commit('isLoading', true);

        return axios.post(process.env.VUE_APP_API_ENDPOINT + "/timeline/edit", element)
            .then(result => {
                return result.data;
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => store.commit('isLoading', false));
    }
}