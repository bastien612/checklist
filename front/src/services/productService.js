import * as categoryService from 'services/categoryService';

export const parseServerProduct = (json) => {
    let output;

    output = {
        id: json._links.self.href,
        name: json.name,
        categories: json.categories.map(
            category => categoryService.parseServerCategory(category)
        )
    }
    return output;
}