import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.github.com',
})


export const gitAPI = {
    getUser(user: string) {
        return instance.get<UserResponseType>(`/users/${user}`);
    },
    getUserRepos(user: string) {
        return instance.get(`/users/${user}/repos`)
    }
}

export type UserResponseType = {
    avatar_url: string
    company: null
    email: null
    followers: number
    following: number
    html_url: string
    id: number
    location: null
    login: string
    name: null
    node_id: string
    public_gists: number
    public_repos: number
}