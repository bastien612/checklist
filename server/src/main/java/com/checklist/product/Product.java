package com.checklist.product;

import com.checklist.model.AuditModel;

import javax.persistence.*;

@Entity
@Table(name="product")
public class Product extends AuditModel {

    @Id
    @GeneratedValue(generator = "product_generator")
    @SequenceGenerator(
            name="product_generator",
            sequenceName="product_sequence",
            initialValue=1
    )
    private Long id;

    @Column(columnDefinition = "name")
    private String name;

    public Product(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
