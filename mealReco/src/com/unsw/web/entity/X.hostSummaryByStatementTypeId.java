package com.unsw.web.entity;
// Generated 2019-10-14 18:17:54 by Hibernate Tools 5.3.10.Final



/**
 * X.hostSummaryByStatementTypeId generated by hbm2java
 */
public class X.hostSummaryByStatementTypeId  implements java.io.Serializable {


     private String host;
     private String statement;
     private long total;
     private long totalLatency;
     private long maxLatency;
     private long lockLatency;
     private long rowsSent;
     private long rowsExamined;
     private long rowsAffected;
     private long fullScans;

    public X.hostSummaryByStatementTypeId() {
    }

	
    public X.hostSummaryByStatementTypeId(long total, long totalLatency, long maxLatency, long lockLatency, long rowsSent, long rowsExamined, long rowsAffected, long fullScans) {
        this.total = total;
        this.totalLatency = totalLatency;
        this.maxLatency = maxLatency;
        this.lockLatency = lockLatency;
        this.rowsSent = rowsSent;
        this.rowsExamined = rowsExamined;
        this.rowsAffected = rowsAffected;
        this.fullScans = fullScans;
    }
    public X.hostSummaryByStatementTypeId(String host, String statement, long total, long totalLatency, long maxLatency, long lockLatency, long rowsSent, long rowsExamined, long rowsAffected, long fullScans) {
       this.host = host;
       this.statement = statement;
       this.total = total;
       this.totalLatency = totalLatency;
       this.maxLatency = maxLatency;
       this.lockLatency = lockLatency;
       this.rowsSent = rowsSent;
       this.rowsExamined = rowsExamined;
       this.rowsAffected = rowsAffected;
       this.fullScans = fullScans;
    }
   
    public String getHost() {
        return this.host;
    }
    
    public void setHost(String host) {
        this.host = host;
    }
    public String getStatement() {
        return this.statement;
    }
    
    public void setStatement(String statement) {
        this.statement = statement;
    }
    public long getTotal() {
        return this.total;
    }
    
    public void setTotal(long total) {
        this.total = total;
    }
    public long getTotalLatency() {
        return this.totalLatency;
    }
    
    public void setTotalLatency(long totalLatency) {
        this.totalLatency = totalLatency;
    }
    public long getMaxLatency() {
        return this.maxLatency;
    }
    
    public void setMaxLatency(long maxLatency) {
        this.maxLatency = maxLatency;
    }
    public long getLockLatency() {
        return this.lockLatency;
    }
    
    public void setLockLatency(long lockLatency) {
        this.lockLatency = lockLatency;
    }
    public long getRowsSent() {
        return this.rowsSent;
    }
    
    public void setRowsSent(long rowsSent) {
        this.rowsSent = rowsSent;
    }
    public long getRowsExamined() {
        return this.rowsExamined;
    }
    
    public void setRowsExamined(long rowsExamined) {
        this.rowsExamined = rowsExamined;
    }
    public long getRowsAffected() {
        return this.rowsAffected;
    }
    
    public void setRowsAffected(long rowsAffected) {
        this.rowsAffected = rowsAffected;
    }
    public long getFullScans() {
        return this.fullScans;
    }
    
    public void setFullScans(long fullScans) {
        this.fullScans = fullScans;
    }


   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof X.hostSummaryByStatementTypeId) ) return false;
		 X.hostSummaryByStatementTypeId castOther = ( X.hostSummaryByStatementTypeId ) other; 
         
		 return ( (this.getHost()==castOther.getHost()) || ( this.getHost()!=null && castOther.getHost()!=null && this.getHost().equals(castOther.getHost()) ) )
 && ( (this.getStatement()==castOther.getStatement()) || ( this.getStatement()!=null && castOther.getStatement()!=null && this.getStatement().equals(castOther.getStatement()) ) )
 && (this.getTotal()==castOther.getTotal())
 && (this.getTotalLatency()==castOther.getTotalLatency())
 && (this.getMaxLatency()==castOther.getMaxLatency())
 && (this.getLockLatency()==castOther.getLockLatency())
 && (this.getRowsSent()==castOther.getRowsSent())
 && (this.getRowsExamined()==castOther.getRowsExamined())
 && (this.getRowsAffected()==castOther.getRowsAffected())
 && (this.getFullScans()==castOther.getFullScans());
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getHost() == null ? 0 : this.getHost().hashCode() );
         result = 37 * result + ( getStatement() == null ? 0 : this.getStatement().hashCode() );
         result = 37 * result + (int) this.getTotal();
         result = 37 * result + (int) this.getTotalLatency();
         result = 37 * result + (int) this.getMaxLatency();
         result = 37 * result + (int) this.getLockLatency();
         result = 37 * result + (int) this.getRowsSent();
         result = 37 * result + (int) this.getRowsExamined();
         result = 37 * result + (int) this.getRowsAffected();
         result = 37 * result + (int) this.getFullScans();
         return result;
   }   


}


