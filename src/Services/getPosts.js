import { api } from "./api"

export const getPosts = async () => {
  try {
    const response = await api.get('/posts')
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}