package com.unsw.web.entity;
// Generated 2019-10-14 18:17:54 by Hibernate Tools 5.3.10.Final


import java.math.BigInteger;
import java.util.Date;

/**
 * X.statementAnalysisId generated by hbm2java
 */
public class X.statementAnalysisId  implements java.io.Serializable {


     private String query;
     private String db;
     private String fullScan;
     private long execCount;
     private long errCount;
     private long warnCount;
     private long totalLatency;
     private long maxLatency;
     private long avgLatency;
     private long lockLatency;
     private long rowsSent;
     private BigInteger rowsSentAvg;
     private long rowsExamined;
     private BigInteger rowsExaminedAvg;
     private long rowsAffected;
     private BigInteger rowsAffectedAvg;
     private long tmpTables;
     private long tmpDiskTables;
     private long rowsSorted;
     private long sortMergePasses;
     private String digest;
     private Date firstSeen;
     private Date lastSeen;

    public X.statementAnalysisId() {
    }

	
    public X.statementAnalysisId(String fullScan, long execCount, long errCount, long warnCount, long totalLatency, long maxLatency, long avgLatency, long lockLatency, long rowsSent, BigInteger rowsSentAvg, long rowsExamined, BigInteger rowsExaminedAvg, long rowsAffected, BigInteger rowsAffectedAvg, long tmpTables, long tmpDiskTables, long rowsSorted, long sortMergePasses, Date firstSeen, Date lastSeen) {
        this.fullScan = fullScan;
        this.execCount = execCount;
        this.errCount = errCount;
        this.warnCount = warnCount;
        this.totalLatency = totalLatency;
        this.maxLatency = maxLatency;
        this.avgLatency = avgLatency;
        this.lockLatency = lockLatency;
        this.rowsSent = rowsSent;
        this.rowsSentAvg = rowsSentAvg;
        this.rowsExamined = rowsExamined;
        this.rowsExaminedAvg = rowsExaminedAvg;
        this.rowsAffected = rowsAffected;
        this.rowsAffectedAvg = rowsAffectedAvg;
        this.tmpTables = tmpTables;
        this.tmpDiskTables = tmpDiskTables;
        this.rowsSorted = rowsSorted;
        this.sortMergePasses = sortMergePasses;
        this.firstSeen = firstSeen;
        this.lastSeen = lastSeen;
    }
    public X.statementAnalysisId(String query, String db, String fullScan, long execCount, long errCount, long warnCount, long totalLatency, long maxLatency, long avgLatency, long lockLatency, long rowsSent, BigInteger rowsSentAvg, long rowsExamined, BigInteger rowsExaminedAvg, long rowsAffected, BigInteger rowsAffectedAvg, long tmpTables, long tmpDiskTables, long rowsSorted, long sortMergePasses, String digest, Date firstSeen, Date lastSeen) {
       this.query = query;
       this.db = db;
       this.fullScan = fullScan;
       this.execCount = execCount;
       this.errCount = errCount;
       this.warnCount = warnCount;
       this.totalLatency = totalLatency;
       this.maxLatency = maxLatency;
       this.avgLatency = avgLatency;
       this.lockLatency = lockLatency;
       this.rowsSent = rowsSent;
       this.rowsSentAvg = rowsSentAvg;
       this.rowsExamined = rowsExamined;
       this.rowsExaminedAvg = rowsExaminedAvg;
       this.rowsAffected = rowsAffected;
       this.rowsAffectedAvg = rowsAffectedAvg;
       this.tmpTables = tmpTables;
       this.tmpDiskTables = tmpDiskTables;
       this.rowsSorted = rowsSorted;
       this.sortMergePasses = sortMergePasses;
       this.digest = digest;
       this.firstSeen = firstSeen;
       this.lastSeen = lastSeen;
    }
   
    public String getQuery() {
        return this.query;
    }
    
    public void setQuery(String query) {
        this.query = query;
    }
    public String getDb() {
        return this.db;
    }
    
    public void setDb(String db) {
        this.db = db;
    }
    public String getFullScan() {
        return this.fullScan;
    }
    
    public void setFullScan(String fullScan) {
        this.fullScan = fullScan;
    }
    public long getExecCount() {
        return this.execCount;
    }
    
    public void setExecCount(long execCount) {
        this.execCount = execCount;
    }
    public long getErrCount() {
        return this.errCount;
    }
    
    public void setErrCount(long errCount) {
        this.errCount = errCount;
    }
    public long getWarnCount() {
        return this.warnCount;
    }
    
    public void setWarnCount(long warnCount) {
        this.warnCount = warnCount;
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
    public long getAvgLatency() {
        return this.avgLatency;
    }
    
    public void setAvgLatency(long avgLatency) {
        this.avgLatency = avgLatency;
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
    public BigInteger getRowsSentAvg() {
        return this.rowsSentAvg;
    }
    
    public void setRowsSentAvg(BigInteger rowsSentAvg) {
        this.rowsSentAvg = rowsSentAvg;
    }
    public long getRowsExamined() {
        return this.rowsExamined;
    }
    
    public void setRowsExamined(long rowsExamined) {
        this.rowsExamined = rowsExamined;
    }
    public BigInteger getRowsExaminedAvg() {
        return this.rowsExaminedAvg;
    }
    
    public void setRowsExaminedAvg(BigInteger rowsExaminedAvg) {
        this.rowsExaminedAvg = rowsExaminedAvg;
    }
    public long getRowsAffected() {
        return this.rowsAffected;
    }
    
    public void setRowsAffected(long rowsAffected) {
        this.rowsAffected = rowsAffected;
    }
    public BigInteger getRowsAffectedAvg() {
        return this.rowsAffectedAvg;
    }
    
    public void setRowsAffectedAvg(BigInteger rowsAffectedAvg) {
        this.rowsAffectedAvg = rowsAffectedAvg;
    }
    public long getTmpTables() {
        return this.tmpTables;
    }
    
    public void setTmpTables(long tmpTables) {
        this.tmpTables = tmpTables;
    }
    public long getTmpDiskTables() {
        return this.tmpDiskTables;
    }
    
    public void setTmpDiskTables(long tmpDiskTables) {
        this.tmpDiskTables = tmpDiskTables;
    }
    public long getRowsSorted() {
        return this.rowsSorted;
    }
    
    public void setRowsSorted(long rowsSorted) {
        this.rowsSorted = rowsSorted;
    }
    public long getSortMergePasses() {
        return this.sortMergePasses;
    }
    
    public void setSortMergePasses(long sortMergePasses) {
        this.sortMergePasses = sortMergePasses;
    }
    public String getDigest() {
        return this.digest;
    }
    
    public void setDigest(String digest) {
        this.digest = digest;
    }
    public Date getFirstSeen() {
        return this.firstSeen;
    }
    
    public void setFirstSeen(Date firstSeen) {
        this.firstSeen = firstSeen;
    }
    public Date getLastSeen() {
        return this.lastSeen;
    }
    
    public void setLastSeen(Date lastSeen) {
        this.lastSeen = lastSeen;
    }


   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof X.statementAnalysisId) ) return false;
		 X.statementAnalysisId castOther = ( X.statementAnalysisId ) other; 
         
		 return ( (this.getQuery()==castOther.getQuery()) || ( this.getQuery()!=null && castOther.getQuery()!=null && this.getQuery().equals(castOther.getQuery()) ) )
 && ( (this.getDb()==castOther.getDb()) || ( this.getDb()!=null && castOther.getDb()!=null && this.getDb().equals(castOther.getDb()) ) )
 && ( (this.getFullScan()==castOther.getFullScan()) || ( this.getFullScan()!=null && castOther.getFullScan()!=null && this.getFullScan().equals(castOther.getFullScan()) ) )
 && (this.getExecCount()==castOther.getExecCount())
 && (this.getErrCount()==castOther.getErrCount())
 && (this.getWarnCount()==castOther.getWarnCount())
 && (this.getTotalLatency()==castOther.getTotalLatency())
 && (this.getMaxLatency()==castOther.getMaxLatency())
 && (this.getAvgLatency()==castOther.getAvgLatency())
 && (this.getLockLatency()==castOther.getLockLatency())
 && (this.getRowsSent()==castOther.getRowsSent())
 && ( (this.getRowsSentAvg()==castOther.getRowsSentAvg()) || ( this.getRowsSentAvg()!=null && castOther.getRowsSentAvg()!=null && this.getRowsSentAvg().equals(castOther.getRowsSentAvg()) ) )
 && (this.getRowsExamined()==castOther.getRowsExamined())
 && ( (this.getRowsExaminedAvg()==castOther.getRowsExaminedAvg()) || ( this.getRowsExaminedAvg()!=null && castOther.getRowsExaminedAvg()!=null && this.getRowsExaminedAvg().equals(castOther.getRowsExaminedAvg()) ) )
 && (this.getRowsAffected()==castOther.getRowsAffected())
 && ( (this.getRowsAffectedAvg()==castOther.getRowsAffectedAvg()) || ( this.getRowsAffectedAvg()!=null && castOther.getRowsAffectedAvg()!=null && this.getRowsAffectedAvg().equals(castOther.getRowsAffectedAvg()) ) )
 && (this.getTmpTables()==castOther.getTmpTables())
 && (this.getTmpDiskTables()==castOther.getTmpDiskTables())
 && (this.getRowsSorted()==castOther.getRowsSorted())
 && (this.getSortMergePasses()==castOther.getSortMergePasses())
 && ( (this.getDigest()==castOther.getDigest()) || ( this.getDigest()!=null && castOther.getDigest()!=null && this.getDigest().equals(castOther.getDigest()) ) )
 && ( (this.getFirstSeen()==castOther.getFirstSeen()) || ( this.getFirstSeen()!=null && castOther.getFirstSeen()!=null && this.getFirstSeen().equals(castOther.getFirstSeen()) ) )
 && ( (this.getLastSeen()==castOther.getLastSeen()) || ( this.getLastSeen()!=null && castOther.getLastSeen()!=null && this.getLastSeen().equals(castOther.getLastSeen()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getQuery() == null ? 0 : this.getQuery().hashCode() );
         result = 37 * result + ( getDb() == null ? 0 : this.getDb().hashCode() );
         result = 37 * result + ( getFullScan() == null ? 0 : this.getFullScan().hashCode() );
         result = 37 * result + (int) this.getExecCount();
         result = 37 * result + (int) this.getErrCount();
         result = 37 * result + (int) this.getWarnCount();
         result = 37 * result + (int) this.getTotalLatency();
         result = 37 * result + (int) this.getMaxLatency();
         result = 37 * result + (int) this.getAvgLatency();
         result = 37 * result + (int) this.getLockLatency();
         result = 37 * result + (int) this.getRowsSent();
         result = 37 * result + ( getRowsSentAvg() == null ? 0 : this.getRowsSentAvg().hashCode() );
         result = 37 * result + (int) this.getRowsExamined();
         result = 37 * result + ( getRowsExaminedAvg() == null ? 0 : this.getRowsExaminedAvg().hashCode() );
         result = 37 * result + (int) this.getRowsAffected();
         result = 37 * result + ( getRowsAffectedAvg() == null ? 0 : this.getRowsAffectedAvg().hashCode() );
         result = 37 * result + (int) this.getTmpTables();
         result = 37 * result + (int) this.getTmpDiskTables();
         result = 37 * result + (int) this.getRowsSorted();
         result = 37 * result + (int) this.getSortMergePasses();
         result = 37 * result + ( getDigest() == null ? 0 : this.getDigest().hashCode() );
         result = 37 * result + ( getFirstSeen() == null ? 0 : this.getFirstSeen().hashCode() );
         result = 37 * result + ( getLastSeen() == null ? 0 : this.getLastSeen().hashCode() );
         return result;
   }   


}


