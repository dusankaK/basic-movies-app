import axios from 'axios'

export default  class MovieService {
    constructor(){
        axios.defaults.baseURL = 'http://localhost:1000/api/'
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    }

    getAll() {
        return axios.get('movies')
    }

    addContact(movies) {
        return axios.post('movies', movies)
    }

    get(id) {
        return axios.get(`movies/${id}`)
    }

    delete(id) {
        return axios.delete(`movies/${id}`)
    }

    edit(movies) {
        return axios.put(`movies/${movies.id}`, movies)
    }
    
    login(credentials) {
        return axios.post('login', credentials)
    }
}

export const movieservice = new MovieService(); 
