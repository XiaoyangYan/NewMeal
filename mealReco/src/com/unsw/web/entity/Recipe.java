package com.unsw.web.entity;
// Generated 2019-10-14 18:17:54 by Hibernate Tools 5.3.10.Final

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Recipe generated by hbm2java
 */
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
			int categoryId, Set orderDetails, Set reviews) {
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
	}

	public Integer getRecipeId() {
		return this.recipeId;
	}

	public void setRecipeId(Integer recipeId) {
		this.recipeId = recipeId;
	}

	public String getLabel() {
		return this.label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public BigDecimal getCalories() {
		return this.calories;
	}

	public void setCalories(BigDecimal calories) {
		this.calories = calories;
	}

	public BigDecimal getFat() {
		return this.fat;
	}

	public void setFat(BigDecimal fat) {
		this.fat = fat;
	}

	public String getMealType() {
		return this.mealType;
	}

	public void setMealType(String mealType) {
		this.mealType = mealType;
	}

	public String getDishType() {
		return this.dishType;
	}

	public void setDishType(String dishType) {
		this.dishType = dishType;
	}

	public BigDecimal getSugar() {
		return this.sugar;
	}

	public void setSugar(BigDecimal sugar) {
		this.sugar = sugar;
	}

	public BigDecimal getProtein() {
		return this.protein;
	}

	public void setProtein(BigDecimal protein) {
		this.protein = protein;
	}

	public String getCarbs() {
		return this.carbs;
	}

	public void setCarbs(String carbs) {
		this.carbs = carbs;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Date getPublishDate() {
		return this.publishDate;
	}

	public void setPublishDate(Date publishDate) {
		this.publishDate = publishDate;
	}

	public Date getLastUpdateTime() {
		return this.lastUpdateTime;
	}

	public void setLastUpdateTime(Date lastUpdateTime) {
		this.lastUpdateTime = lastUpdateTime;
	}

	public int getCategoryId() {
		return this.categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public Set getOrderDetails() {
		return this.orderDetails;
	}

	public void setOrderDetails(Set orderDetails) {
		this.orderDetails = orderDetails;
	}

	public Set getReviews() {
		return this.reviews;
	}

	public void setReviews(Set reviews) {
		this.reviews = reviews;
	}

}
