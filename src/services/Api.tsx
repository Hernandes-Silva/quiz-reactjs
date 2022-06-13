import { getCategories, getQuestions, getRankingGlobal } from "./axios/modules/gets/requestGet"
import { postFinishiQuiz } from "./axios/modules/posts/requestPost";
import { PostFinishQuiz } from "./axios/modules/posts/types";

export const listCategories = async () => {
    return await getCategories();
}
export const listRankingGlobal = async () => 
    await getRankingGlobal()
export const questionsCategory = async (category_id:string | undefined) =>{
    return getQuestions(category_id)
}

export const finishQuiz = async (data:PostFinishQuiz)=>{
    return await postFinishiQuiz(data)
}
