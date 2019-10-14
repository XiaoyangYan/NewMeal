package com.unsw.web.entity;
// Generated 2019-10-14 18:17:54 by Hibernate Tools 5.3.10.Final


import java.math.BigInteger;

/**
 * X.innodbBufferStatsByTableId generated by hbm2java
 */
public class X.innodbBufferStatsByTableId  implements java.io.Serializable {


     private String objectSchema;
     private String objectName;
     private BigInteger allocated;
     private BigInteger data;
     private long pages;
     private long pagesHashed;
     private long pagesOld;
     private BigInteger rowsCached;

    public X.innodbBufferStatsByTableId() {
    }

	
    public X.innodbBufferStatsByTableId(long pages, long pagesHashed, long pagesOld, BigInteger rowsCached) {
        this.pages = pages;
        this.pagesHashed = pagesHashed;
        this.pagesOld = pagesOld;
        this.rowsCached = rowsCached;
    }
    public X.innodbBufferStatsByTableId(String objectSchema, String objectName, BigInteger allocated, BigInteger data, long pages, long pagesHashed, long pagesOld, BigInteger rowsCached) {
       this.objectSchema = objectSchema;
       this.objectName = objectName;
       this.allocated = allocated;
       this.data = data;
       this.pages = pages;
       this.pagesHashed = pagesHashed;
       this.pagesOld = pagesOld;
       this.rowsCached = rowsCached;
    }
   
    public String getObjectSchema() {
        return this.objectSchema;
    }
    
    public void setObjectSchema(String objectSchema) {
        this.objectSchema = objectSchema;
    }
    public String getObjectName() {
        return this.objectName;
    }
    
    public void setObjectName(String objectName) {
        this.objectName = objectName;
    }
    public BigInteger getAllocated() {
        return this.allocated;
    }
    
    public void setAllocated(BigInteger allocated) {
        this.allocated = allocated;
    }
    public BigInteger getData() {
        return this.data;
    }
    
    public void setData(BigInteger data) {
        this.data = data;
    }
    public long getPages() {
        return this.pages;
    }
    
    public void setPages(long pages) {
        this.pages = pages;
    }
    public long getPagesHashed() {
        return this.pagesHashed;
    }
    
    public void setPagesHashed(long pagesHashed) {
        this.pagesHashed = pagesHashed;
    }
    public long getPagesOld() {
        return this.pagesOld;
    }
    
    public void setPagesOld(long pagesOld) {
        this.pagesOld = pagesOld;
    }
    public BigInteger getRowsCached() {
        return this.rowsCached;
    }
    
    public void setRowsCached(BigInteger rowsCached) {
        this.rowsCached = rowsCached;
    }


   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof X.innodbBufferStatsByTableId) ) return false;
		 X.innodbBufferStatsByTableId castOther = ( X.innodbBufferStatsByTableId ) other; 
         
		 return ( (this.getObjectSchema()==castOther.getObjectSchema()) || ( this.getObjectSchema()!=null && castOther.getObjectSchema()!=null && this.getObjectSchema().equals(castOther.getObjectSchema()) ) )
 && ( (this.getObjectName()==castOther.getObjectName()) || ( this.getObjectName()!=null && castOther.getObjectName()!=null && this.getObjectName().equals(castOther.getObjectName()) ) )
 && ( (this.getAllocated()==castOther.getAllocated()) || ( this.getAllocated()!=null && castOther.getAllocated()!=null && this.getAllocated().equals(castOther.getAllocated()) ) )
 && ( (this.getData()==castOther.getData()) || ( this.getData()!=null && castOther.getData()!=null && this.getData().equals(castOther.getData()) ) )
 && (this.getPages()==castOther.getPages())
 && (this.getPagesHashed()==castOther.getPagesHashed())
 && (this.getPagesOld()==castOther.getPagesOld())
 && ( (this.getRowsCached()==castOther.getRowsCached()) || ( this.getRowsCached()!=null && castOther.getRowsCached()!=null && this.getRowsCached().equals(castOther.getRowsCached()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getObjectSchema() == null ? 0 : this.getObjectSchema().hashCode() );
         result = 37 * result + ( getObjectName() == null ? 0 : this.getObjectName().hashCode() );
         result = 37 * result + ( getAllocated() == null ? 0 : this.getAllocated().hashCode() );
         result = 37 * result + ( getData() == null ? 0 : this.getData().hashCode() );
         result = 37 * result + (int) this.getPages();
         result = 37 * result + (int) this.getPagesHashed();
         result = 37 * result + (int) this.getPagesOld();
         result = 37 * result + ( getRowsCached() == null ? 0 : this.getRowsCached().hashCode() );
         return result;
   }   


}


