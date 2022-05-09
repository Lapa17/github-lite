import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.github.com',
})


export const gitAPI = {
    getUser(userName: string) {
        return instance.get<UserResponseType>(`/users/${userName}`);
    },
    getUserRepos(userName: string, page:number) {
        return instance.get<UserReposResponseType[]>(`/users/${userName}/repos?page=${page}&per_page=4`)
    }
}

export type UserResponseType = {
    avatar_url: string
    company: string
    email: string
    followers: number
    following: number
    html_url: string
    id: number
    location: string
    login: string
    name: string
    node_id: string
    public_gists: number
    public_repos: number
}

export type UserReposResponseType = {
    description: string
    html_url:string
    id: number
    name: string
}

