package com.unsw.web.mealReco.entity;
// Generated 2019-10-18 17:39:37 by Hibernate Tools 5.2.12.Final

import static javax.persistence.GenerationType.IDENTITY;

import java.util.Comparator;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
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
@NamedQueries({
	@NamedQuery(name="Recipe.findAll",query="SELECT r FROM Recipe r"),
	@NamedQuery(name="Recipe.countAll", query="SELECT COUNT(r) FROM Recipe r"),
	@NamedQuery(name="Recipe.findByLabel", query="SELECT r FROM Recipe r WHERE r.label=:label")
})
public class Recipe implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer recipeId;
	private String image;
	private String label;
	private Date lastUpdateTime;
	private Date publishDate;
	private float ratings;
	
	private Set<SaveDetail> savedDetails = new HashSet<SaveDetail>(0);
	private Set<Review> reviews = new HashSet<Review>(0);
	
	public Recipe() {
	}

	public Recipe(
			String image, String label, Date lastUpdateTime, Date publishDate) {
		this.image = image;
		this.label = label;
		this.lastUpdateTime = lastUpdateTime;
		this.publishDate = publishDate;
	}
	public Recipe(
			String image, String label, Date lastUpdateTime, Date publishDate, float ratings) {
		this.image = image;
		this.label = label;
		this.lastUpdateTime = lastUpdateTime;
		this.publishDate = publishDate;
		this.ratings = ratings;
	}
	
	public Recipe(
			String image, String label, Date lastUpdateTime, Date publishDate,float ratings, Set<Review> reviews, Set<SaveDetail> saveDetails) {
		this.image = image;
		this.label = label;
		this.lastUpdateTime = lastUpdateTime;
		this.publishDate = publishDate;
		this.ratings = ratings;
		this.reviews = reviews;
		this.savedDetails = saveDetails;
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

	@Column(name = "image", nullable = false, length = 1000)
	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Column(name = "label", unique = true, nullable = false, length = 128)
	public String getLabel() {
		return this.label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "last_update_time", nullable = false, length = 19)
	public Date getLastUpdateTime() {
		return this.lastUpdateTime;
	}

	public void setLastUpdateTime(Date lastUpdateTime) {
		this.lastUpdateTime = lastUpdateTime;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "publish_date", nullable = false, length = 10)
	public Date getPublishDate() {
		return this.publishDate;
	}

	public void setPublishDate(Date publishDate) {
		this.publishDate = publishDate;
	}
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "recipe")
	public Set<Review> getReviews() {
		TreeSet<Review> sortedReviews = new TreeSet<>(new Comparator<Review>() {
			@Override
			public int compare(Review review1, Review review2) {
				return review2.getReviewTime().compareTo(review1.getReviewTime());
			}
		});
		sortedReviews.addAll(reviews);
		return sortedReviews;
	}
	public void setReviews(Set<Review> reviews) {
		this.reviews = reviews;
	}
	@OneToMany(fetch=FetchType.LAZY, mappedBy="recipe")
	public Set<SaveDetail> getSavedDetails(){
		return this.savedDetails;
	}
	
	public void setSavedDetails(Set<SaveDetail> saveDetails) {
		this.savedDetails = saveDetails;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((image == null) ? 0 : image.hashCode());
		result = prime * result + ((label == null) ? 0 : label.hashCode());
		result = prime * result + ((lastUpdateTime == null) ? 0 : lastUpdateTime.hashCode());
		result = prime * result + ((publishDate == null) ? 0 : publishDate.hashCode());
		result = prime * result + ((recipeId == null) ? 0 : recipeId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Recipe other = (Recipe) obj;
		if (image == null) {
			if (other.image != null)
				return false;
		} else if (!image.equals(other.image))
			return false;
		if (label == null) {
			if (other.label != null)
				return false;
		} else if (!label.equals(other.label))
			return false;
		if (lastUpdateTime == null) {
			if (other.lastUpdateTime != null)
				return false;
		} else if (!lastUpdateTime.equals(other.lastUpdateTime))
			return false;
		if (publishDate == null) {
			if (other.publishDate != null)
				return false;
		} else if (!publishDate.equals(other.publishDate))
			return false;
		if (recipeId == null) {
			if (other.recipeId != null)
				return false;
		} else if (!recipeId.equals(other.recipeId))
			return false;
		return true;
	}
	
	@Column(name = "ratings", nullable = false, precision = 12, scale = 0)
	public float getRatings() {
		return this.ratings;
	}

	public void setRatings(float ratings) {
		this.ratings = ratings;
	}
}
