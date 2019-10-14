package com.unsw.web.entity;
// Generated 2019-10-14 18:17:54 by Hibernate Tools 5.3.10.Final

import java.math.BigDecimal;

/**
 * SchemaAutoIncrementColumnsId generated by hbm2java
 */
public class SchemaAutoIncrementColumnsId implements java.io.Serializable {

	private String tableSchema;
	private String tableName;
	private String columnName;
	private String dataType;
	private String columnType;
	private int isSigned;
	private int isUnsigned;
	private Long maxValue;
	private Long autoIncrement;
	private BigDecimal autoIncrementRatio;

	public SchemaAutoIncrementColumnsId() {
	}

	public SchemaAutoIncrementColumnsId(String tableSchema, String tableName, String columnName, String dataType,
			String columnType, int isSigned, int isUnsigned) {
		this.tableSchema = tableSchema;
		this.tableName = tableName;
		this.columnName = columnName;
		this.dataType = dataType;
		this.columnType = columnType;
		this.isSigned = isSigned;
		this.isUnsigned = isUnsigned;
	}

	public SchemaAutoIncrementColumnsId(String tableSchema, String tableName, String columnName, String dataType,
			String columnType, int isSigned, int isUnsigned, Long maxValue, Long autoIncrement,
			BigDecimal autoIncrementRatio) {
		this.tableSchema = tableSchema;
		this.tableName = tableName;
		this.columnName = columnName;
		this.dataType = dataType;
		this.columnType = columnType;
		this.isSigned = isSigned;
		this.isUnsigned = isUnsigned;
		this.maxValue = maxValue;
		this.autoIncrement = autoIncrement;
		this.autoIncrementRatio = autoIncrementRatio;
	}

	public String getTableSchema() {
		return this.tableSchema;
	}

	public void setTableSchema(String tableSchema) {
		this.tableSchema = tableSchema;
	}

	public String getTableName() {
		return this.tableName;
	}

	public void setTableName(String tableName) {
		this.tableName = tableName;
	}

	public String getColumnName() {
		return this.columnName;
	}

	public void setColumnName(String columnName) {
		this.columnName = columnName;
	}

	public String getDataType() {
		return this.dataType;
	}

	public void setDataType(String dataType) {
		this.dataType = dataType;
	}

	public String getColumnType() {
		return this.columnType;
	}

	public void setColumnType(String columnType) {
		this.columnType = columnType;
	}

	public int getIsSigned() {
		return this.isSigned;
	}

	public void setIsSigned(int isSigned) {
		this.isSigned = isSigned;
	}

	public int getIsUnsigned() {
		return this.isUnsigned;
	}

	public void setIsUnsigned(int isUnsigned) {
		this.isUnsigned = isUnsigned;
	}

	public Long getMaxValue() {
		return this.maxValue;
	}

	public void setMaxValue(Long maxValue) {
		this.maxValue = maxValue;
	}

	public Long getAutoIncrement() {
		return this.autoIncrement;
	}

	public void setAutoIncrement(Long autoIncrement) {
		this.autoIncrement = autoIncrement;
	}

	public BigDecimal getAutoIncrementRatio() {
		return this.autoIncrementRatio;
	}

	public void setAutoIncrementRatio(BigDecimal autoIncrementRatio) {
		this.autoIncrementRatio = autoIncrementRatio;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof SchemaAutoIncrementColumnsId))
			return false;
		SchemaAutoIncrementColumnsId castOther = (SchemaAutoIncrementColumnsId) other;

		return ((this.getTableSchema() == castOther.getTableSchema()) || (this.getTableSchema() != null
				&& castOther.getTableSchema() != null && this.getTableSchema().equals(castOther.getTableSchema())))
				&& ((this.getTableName() == castOther.getTableName()) || (this.getTableName() != null
						&& castOther.getTableName() != null && this.getTableName().equals(castOther.getTableName())))
				&& ((this.getColumnName() == castOther.getColumnName()) || (this.getColumnName() != null
						&& castOther.getColumnName() != null && this.getColumnName().equals(castOther.getColumnName())))
				&& ((this.getDataType() == castOther.getDataType()) || (this.getDataType() != null
						&& castOther.getDataType() != null && this.getDataType().equals(castOther.getDataType())))
				&& ((this.getColumnType() == castOther.getColumnType()) || (this.getColumnType() != null
						&& castOther.getColumnType() != null && this.getColumnType().equals(castOther.getColumnType())))
				&& (this.getIsSigned() == castOther.getIsSigned())
				&& (this.getIsUnsigned() == castOther.getIsUnsigned())
				&& ((this.getMaxValue() == castOther.getMaxValue()) || (this.getMaxValue() != null
						&& castOther.getMaxValue() != null && this.getMaxValue().equals(castOther.getMaxValue())))
				&& ((this.getAutoIncrement() == castOther.getAutoIncrement())
						|| (this.getAutoIncrement() != null && castOther.getAutoIncrement() != null
								&& this.getAutoIncrement().equals(castOther.getAutoIncrement())))
				&& ((this.getAutoIncrementRatio() == castOther.getAutoIncrementRatio())
						|| (this.getAutoIncrementRatio() != null && castOther.getAutoIncrementRatio() != null
								&& this.getAutoIncrementRatio().equals(castOther.getAutoIncrementRatio())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (getTableSchema() == null ? 0 : this.getTableSchema().hashCode());
		result = 37 * result + (getTableName() == null ? 0 : this.getTableName().hashCode());
		result = 37 * result + (getColumnName() == null ? 0 : this.getColumnName().hashCode());
		result = 37 * result + (getDataType() == null ? 0 : this.getDataType().hashCode());
		result = 37 * result + (getColumnType() == null ? 0 : this.getColumnType().hashCode());
		result = 37 * result + this.getIsSigned();
		result = 37 * result + this.getIsUnsigned();
		result = 37 * result + (getMaxValue() == null ? 0 : this.getMaxValue().hashCode());
		result = 37 * result + (getAutoIncrement() == null ? 0 : this.getAutoIncrement().hashCode());
		result = 37 * result + (getAutoIncrementRatio() == null ? 0 : this.getAutoIncrementRatio().hashCode());
		return result;
	}

}
