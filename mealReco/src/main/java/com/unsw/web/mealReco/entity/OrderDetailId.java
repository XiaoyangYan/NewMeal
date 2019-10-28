package com.unsw.web.mealReco.entity;
// Generated 2019-10-18 17:39:37 by Hibernate Tools 5.2.12.Final

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * OrderDetailId generated by hbm2java
 */
@Embeddable
public class OrderDetailId implements java.io.Serializable {

	private int orderId;
	private int quantity;
	private int recipeId;
	private float subtotal;

	public OrderDetailId() {
	}

	public OrderDetailId(int orderId, int quantity, int recipeId, float subtotal) {
		this.orderId = orderId;
		this.quantity = quantity;
		this.recipeId = recipeId;
		this.subtotal = subtotal;
	}

	@Column(name = "order_id", nullable = false)
	public int getOrderId() {
		return this.orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	@Column(name = "quantity", nullable = false)
	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Column(name = "recipe_id", nullable = false)
	public int getRecipeId() {
		return this.recipeId;
	}

	public void setRecipeId(int recipeId) {
		this.recipeId = recipeId;
	}

	@Column(name = "subtotal", nullable = false, precision = 12, scale = 0)
	public float getSubtotal() {
		return this.subtotal;
	}

	public void setSubtotal(float subtotal) {
		this.subtotal = subtotal;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof OrderDetailId))
			return false;
		OrderDetailId castOther = (OrderDetailId) other;

		return (this.getOrderId() == castOther.getOrderId()) && (this.getQuantity() == castOther.getQuantity())
				&& (this.getRecipeId() == castOther.getRecipeId()) && (this.getSubtotal() == castOther.getSubtotal());
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + this.getOrderId();
		result = 37 * result + this.getQuantity();
		result = 37 * result + this.getRecipeId();
		result = 37 * result + (int) this.getSubtotal();
		return result;
	}

}