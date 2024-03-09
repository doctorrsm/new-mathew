import { getCollection } from "astro:content";


export const getTags = async () => {
    const tags = await getCollection("commentary");
const tagsArr = [...new Set(tags.map((tag) => tag.data.tags))];
let flatArray = tagsArr.flat().filter(Boolean);
flatArray = flatArray.map((tag) => tag.toLowerCase());

let uniqueWords = [...new Set(flatArray)].sort();
}

export default getTags;