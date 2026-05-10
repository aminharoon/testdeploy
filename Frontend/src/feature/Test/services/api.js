import axios from "axios";

const api = axios.create({
    baseURL: "/api",
    withCredentials: true
})

export const getData = async () => {
    try {
        const response = await api.get("/")

        return response.data


    } catch (e) {
        throw new Error(e, "API FAILED")

    }
}