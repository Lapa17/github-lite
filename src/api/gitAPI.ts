import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.github.com',
    withCredentials: true,
})


export const gitAPI = {
    getUser(user:string) {
        return instance.get(`/users/${user}`);
    },
    getUserRepos(user:string){
        return instance.get(`/users/${user}/repos`)
    }
}

