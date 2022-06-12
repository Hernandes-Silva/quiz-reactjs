import apiAxios from "../..";
import { PostFinishQuiz } from "./types";

export const postFinishiQuiz = async (data:PostFinishQuiz) =>
    await apiAxios.post("finish-quiz/", data)