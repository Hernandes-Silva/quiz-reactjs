import apiAxios from "../..";

export const getCategories= async () =>
    await apiAxios.get("category/")

export const getQuestions = async (category_id:string | undefined) => 
    await apiAxios.get(`generate-quiz/${category_id}/`)

export const getRankingGlobal= async () =>
    await apiAxios.get(`ranking-global/`)
