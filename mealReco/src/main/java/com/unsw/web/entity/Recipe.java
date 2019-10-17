package com.unsw.web.entity;
// Generated 2019-10-17 16:45:33 by Hibernate Tools 5.2.12.Final

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

/**
 * Recipe generated by hbm2java
 */
@Entity
@Table(name = "recipe", catalog = "mymeal", uniqueConstraints = @UniqueConstraint(columnNames = "label"))
public class Recipe implements java.io.Serializable {

	private Integer recipeId;
	private String label;
	private BigDecimal calories;
	private BigDecimal fat;
	private String mealType;
	private String dishType;
	private BigDecimal sugar;
	private BigDecimal protein;
	private String carbs;
	private String description;
	private String image;
	private Date publishDate;
	private Date lastUpdateTime;
	private int categoryId;
	private Set orderDetails = new HashSet(0);
	private Set reviews = new HashSet(0);
	private Set saveDetails = new HashSet(0);

	public Recipe() {
	}

	public Recipe(String label, BigDecimal calories, BigDecimal fat, String mealType, String dishType, BigDecimal sugar,
			BigDecimal protein, String carbs, String description, String image, Date publishDate, Date lastUpdateTime,
			int categoryId) {
		this.label = label;
		this.calories = calories;
		this.fat = fat;
		this.mealType = mealType;
		this.dishType = dishType;
		this.sugar = sugar;
		this.protein = protein;
		this.carbs = carbs;
		this.description = description;
		this.image = image;
		this.publishDate = publishDate;
		this.lastUpdateTime = lastUpdateTime;
		this.categoryId = categoryId;
	}

	public Recipe(String label, BigDecimal calories, BigDecimal fat, String mealType, String dishType, BigDecimal sugar,
			BigDecimal protein, String carbs, String description, String image, Date publishDate, Date lastUpdateTime,
			int categoryId, Set orderDetails, Set reviews, Set saveDetails) {
		this.label = label;
		this.calories = calories;
		this.fat = fat;
		this.mealType = mealType;
		this.dishType = dishType;
		this.sugar = sugar;
		this.protein = protein;
		this.carbs = carbs;
		this.description = description;
		this.image = image;
		this.publishDate = publishDate;
		this.lastUpdateTime = lastUpdateTime;
		this.categoryId = categoryId;
		this.orderDetails = orderDetails;
		this.reviews = reviews;
		this.saveDetails = saveDetails;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "recipe_id", unique = true, nullable = false)
	public Integer getRecipeId() {
		return this.recipeId;
	}

	public void setRecipeId(Integer recipeId) {
		this.recipeId = recipeId;
	}

	@Column(name = "label", unique = true, nullable = false, length = 128)
	public String getLabel() {
		return this.label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	@Column(name = "calories", nullable = false, precision = 10)
	public BigDecimal getCalories() {
		return this.calories;
	}

	public void setCalories(BigDecimal calories) {
		this.calories = calories;
	}

	@Column(name = "fat", nullable = false, precision = 10)
	public BigDecimal getFat() {
		return this.fat;
	}

	public void setFat(BigDecimal fat) {
		this.fat = fat;
	}

	@Column(name = "mealType", nullable = false, length = 100)
	public String getMealType() {
		return this.mealType;
	}

	public void setMealType(String mealType) {
		this.mealType = mealType;
	}

	@Column(name = "dishType", nullable = false, length = 100)
	public String getDishType() {
		return this.dishType;
	}

	public void setDishType(String dishType) {
		this.dishType = dishType;
	}

	@Column(name = "sugar", nullable = false, precision = 10)
	public BigDecimal getSugar() {
		return this.sugar;
	}

	public void setSugar(BigDecimal sugar) {
		this.sugar = sugar;
	}

	@Column(name = "protein", nullable = false, precision = 10)
	public BigDecimal getProtein() {
		return this.protein;
	}

	public void setProtein(BigDecimal protein) {
		this.protein = protein;
	}

	@Column(name = "carbs", nullable = false, length = 10)
	public String getCarbs() {
		return this.carbs;
	}

	public void setCarbs(String carbs) {
		this.carbs = carbs;
	}

	@Column(name = "description", nullable = false, length = 16777215)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "image", nullable = false, length = 1000)
	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "publish_date", nullable = false, length = 10)
	public Date getPublishDate() {
		return this.publishDate;
	}

	public void setPublishDate(Date publishDate) {
		this.publishDate = publishDate;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "last_update_time", nullable = false, length = 19)
	public Date getLastUpdateTime() {
		return this.lastUpdateTime;
	}

	public void setLastUpdateTime(Date lastUpdateTime) {
		this.lastUpdateTime = lastUpdateTime;
	}

	@Column(name = "category_id", nullable = false)
	public int getCategoryId() {
		return this.categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "recipe")
	public Set getOrderDetails() {
		return this.orderDetails;
	}

	public void setOrderDetails(Set orderDetails) {
		this.orderDetails = orderDetails;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "recipe")
	public Set getReviews() {
		return this.reviews;
	}

	public void setReviews(Set reviews) {
		this.reviews = reviews;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "recipe")
	public Set getSaveDetails() {
		return this.saveDetails;
	}

	public void setSaveDetails(Set saveDetails) {
		this.saveDetails = saveDetails;
	}

}
