package com.checklist.service.category;

import com.checklist.domain.Category;
import org.springframework.stereotype.Service;

@Service
public interface CategoryService {


    public Category findByName(String name);

    public Category save(Category category);
}