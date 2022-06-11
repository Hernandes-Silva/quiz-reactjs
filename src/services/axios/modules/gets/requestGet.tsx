import apiAxios from "../..";

export const getCategories= async () =>
    await apiAxios.get("category/")