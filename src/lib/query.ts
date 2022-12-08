import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default queryClient;

// export const getSingleProduct = async () => {
//     try {
//         const title = router?.query?.title;

//         const respJSON = await fetch(`/api/products/${title}`);
//         const resp = await respJSON.json();
//         return resp;
//     } catch (error) {
//         throw error;
//     }
// };

// export const getAllCategories = async () => {
//     try {
//         const respJSON = await fetch("/api/categories");
//         const resp = await respJSON.json();
//         return resp;
//     } catch (error) {
//         throw error;
//     }
// };

// export const getSingleCategory = async ({ pageParam = null }) => {
//     try {
//         let url = `/api/categories/${router.query.id}`;
//         if (pageParam) {
//             url += `?cursorId=${pageParam}`;
//         }
//         const respJSON = await fetch(url);
//         const resp = await respJSON.json();
//         return resp;
//     } catch (error) {
//         throw error;
//     }
// };
