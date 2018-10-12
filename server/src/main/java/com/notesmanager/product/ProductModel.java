package com.notesmanager.product;

import com.notesmanager.model.AuditModel;

import javax.persistence.*;

@Entity
@Table(name="product")
public class ProductModel extends AuditModel {

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

    public ProductModel(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
