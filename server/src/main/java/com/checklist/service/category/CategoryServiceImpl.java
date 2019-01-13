package com.checklist.service.category;

import com.checklist.domain.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category findByName(String name) {

        return categoryRepository.findByName(name);
    }

    @Override
    public Category save(Category category) {
        return categoryRepository.save(category);
    }
}
