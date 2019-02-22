export const parseServerCategory = (jsonCategory) => {
    let output;

    output = {
        id: jsonCategory._links.self.href,
        name: jsonCategory.name
    }
    return output;
}