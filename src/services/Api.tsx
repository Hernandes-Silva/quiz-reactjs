import { getCategories } from "./axios/modules/gets/requestGet"

export const listCategories = async () => {
    return await getCategories();
}
