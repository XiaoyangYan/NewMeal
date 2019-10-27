package com.unsw.web.mealReco.entity;
// Generated 2019-10-18 17:39:37 by Hibernate Tools 5.2.12.Final

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * SaveDetail generated by hbm2java
 */
@Entity
@Table(name = "save_detail", catalog = "mymeal")
public class SaveDetail implements java.io.Serializable {

	private SaveDetailId id;

	public SaveDetail() {
	}

	public SaveDetail(SaveDetailId id) {
		this.id = id;
	}

	@EmbeddedId

	@AttributeOverrides({ @AttributeOverride(name = "recipeId", column = @Column(name = "recipe_id", nullable = false)),
			@AttributeOverride(name = "userId", column = @Column(name = "user_id", nullable = false)) })
	public SaveDetailId getId() {
		return this.id;
	}

	public void setId(SaveDetailId id) {
		this.id = id;
	}

}
