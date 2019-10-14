package com.unsw.web.entity;
// Generated 2019-10-14 18:17:54 by Hibernate Tools 5.3.10.Final



/**
 * X.schemaTableLockWaitsId generated by hbm2java
 */
public class X.schemaTableLockWaitsId  implements java.io.Serializable {


     private String objectSchema;
     private String objectName;
     private long waitingThreadId;
     private Long waitingPid;
     private String waitingAccount;
     private String waitingLockType;
     private String waitingLockDuration;
     private String waitingQuery;
     private Long waitingQuerySecs;
     private Long waitingQueryRowsAffected;
     private Long waitingQueryRowsExamined;
     private long blockingThreadId;
     private Long blockingPid;
     private String blockingAccount;
     private String blockingLockType;
     private String blockingLockDuration;
     private String sqlKillBlockingQuery;
     private String sqlKillBlockingConnection;

    public X.schemaTableLockWaitsId() {
    }

	
    public X.schemaTableLockWaitsId(long waitingThreadId, String waitingLockType, String waitingLockDuration, long blockingThreadId, String blockingLockType, String blockingLockDuration) {
        this.waitingThreadId = waitingThreadId;
        this.waitingLockType = waitingLockType;
        this.waitingLockDuration = waitingLockDuration;
        this.blockingThreadId = blockingThreadId;
        this.blockingLockType = blockingLockType;
        this.blockingLockDuration = blockingLockDuration;
    }
    public X.schemaTableLockWaitsId(String objectSchema, String objectName, long waitingThreadId, Long waitingPid, String waitingAccount, String waitingLockType, String waitingLockDuration, String waitingQuery, Long waitingQuerySecs, Long waitingQueryRowsAffected, Long waitingQueryRowsExamined, long blockingThreadId, Long blockingPid, String blockingAccount, String blockingLockType, String blockingLockDuration, String sqlKillBlockingQuery, String sqlKillBlockingConnection) {
       this.objectSchema = objectSchema;
       this.objectName = objectName;
       this.waitingThreadId = waitingThreadId;
       this.waitingPid = waitingPid;
       this.waitingAccount = waitingAccount;
       this.waitingLockType = waitingLockType;
       this.waitingLockDuration = waitingLockDuration;
       this.waitingQuery = waitingQuery;
       this.waitingQuerySecs = waitingQuerySecs;
       this.waitingQueryRowsAffected = waitingQueryRowsAffected;
       this.waitingQueryRowsExamined = waitingQueryRowsExamined;
       this.blockingThreadId = blockingThreadId;
       this.blockingPid = blockingPid;
       this.blockingAccount = blockingAccount;
       this.blockingLockType = blockingLockType;
       this.blockingLockDuration = blockingLockDuration;
       this.sqlKillBlockingQuery = sqlKillBlockingQuery;
       this.sqlKillBlockingConnection = sqlKillBlockingConnection;
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
    public long getWaitingThreadId() {
        return this.waitingThreadId;
    }
    
    public void setWaitingThreadId(long waitingThreadId) {
        this.waitingThreadId = waitingThreadId;
    }
    public Long getWaitingPid() {
        return this.waitingPid;
    }
    
    public void setWaitingPid(Long waitingPid) {
        this.waitingPid = waitingPid;
    }
    public String getWaitingAccount() {
        return this.waitingAccount;
    }
    
    public void setWaitingAccount(String waitingAccount) {
        this.waitingAccount = waitingAccount;
    }
    public String getWaitingLockType() {
        return this.waitingLockType;
    }
    
    public void setWaitingLockType(String waitingLockType) {
        this.waitingLockType = waitingLockType;
    }
    public String getWaitingLockDuration() {
        return this.waitingLockDuration;
    }
    
    public void setWaitingLockDuration(String waitingLockDuration) {
        this.waitingLockDuration = waitingLockDuration;
    }
    public String getWaitingQuery() {
        return this.waitingQuery;
    }
    
    public void setWaitingQuery(String waitingQuery) {
        this.waitingQuery = waitingQuery;
    }
    public Long getWaitingQuerySecs() {
        return this.waitingQuerySecs;
    }
    
    public void setWaitingQuerySecs(Long waitingQuerySecs) {
        this.waitingQuerySecs = waitingQuerySecs;
    }
    public Long getWaitingQueryRowsAffected() {
        return this.waitingQueryRowsAffected;
    }
    
    public void setWaitingQueryRowsAffected(Long waitingQueryRowsAffected) {
        this.waitingQueryRowsAffected = waitingQueryRowsAffected;
    }
    public Long getWaitingQueryRowsExamined() {
        return this.waitingQueryRowsExamined;
    }
    
    public void setWaitingQueryRowsExamined(Long waitingQueryRowsExamined) {
        this.waitingQueryRowsExamined = waitingQueryRowsExamined;
    }
    public long getBlockingThreadId() {
        return this.blockingThreadId;
    }
    
    public void setBlockingThreadId(long blockingThreadId) {
        this.blockingThreadId = blockingThreadId;
    }
    public Long getBlockingPid() {
        return this.blockingPid;
    }
    
    public void setBlockingPid(Long blockingPid) {
        this.blockingPid = blockingPid;
    }
    public String getBlockingAccount() {
        return this.blockingAccount;
    }
    
    public void setBlockingAccount(String blockingAccount) {
        this.blockingAccount = blockingAccount;
    }
    public String getBlockingLockType() {
        return this.blockingLockType;
    }
    
    public void setBlockingLockType(String blockingLockType) {
        this.blockingLockType = blockingLockType;
    }
    public String getBlockingLockDuration() {
        return this.blockingLockDuration;
    }
    
    public void setBlockingLockDuration(String blockingLockDuration) {
        this.blockingLockDuration = blockingLockDuration;
    }
    public String getSqlKillBlockingQuery() {
        return this.sqlKillBlockingQuery;
    }
    
    public void setSqlKillBlockingQuery(String sqlKillBlockingQuery) {
        this.sqlKillBlockingQuery = sqlKillBlockingQuery;
    }
    public String getSqlKillBlockingConnection() {
        return this.sqlKillBlockingConnection;
    }
    
    public void setSqlKillBlockingConnection(String sqlKillBlockingConnection) {
        this.sqlKillBlockingConnection = sqlKillBlockingConnection;
    }


   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof X.schemaTableLockWaitsId) ) return false;
		 X.schemaTableLockWaitsId castOther = ( X.schemaTableLockWaitsId ) other; 
         
		 return ( (this.getObjectSchema()==castOther.getObjectSchema()) || ( this.getObjectSchema()!=null && castOther.getObjectSchema()!=null && this.getObjectSchema().equals(castOther.getObjectSchema()) ) )
 && ( (this.getObjectName()==castOther.getObjectName()) || ( this.getObjectName()!=null && castOther.getObjectName()!=null && this.getObjectName().equals(castOther.getObjectName()) ) )
 && (this.getWaitingThreadId()==castOther.getWaitingThreadId())
 && ( (this.getWaitingPid()==castOther.getWaitingPid()) || ( this.getWaitingPid()!=null && castOther.getWaitingPid()!=null && this.getWaitingPid().equals(castOther.getWaitingPid()) ) )
 && ( (this.getWaitingAccount()==castOther.getWaitingAccount()) || ( this.getWaitingAccount()!=null && castOther.getWaitingAccount()!=null && this.getWaitingAccount().equals(castOther.getWaitingAccount()) ) )
 && ( (this.getWaitingLockType()==castOther.getWaitingLockType()) || ( this.getWaitingLockType()!=null && castOther.getWaitingLockType()!=null && this.getWaitingLockType().equals(castOther.getWaitingLockType()) ) )
 && ( (this.getWaitingLockDuration()==castOther.getWaitingLockDuration()) || ( this.getWaitingLockDuration()!=null && castOther.getWaitingLockDuration()!=null && this.getWaitingLockDuration().equals(castOther.getWaitingLockDuration()) ) )
 && ( (this.getWaitingQuery()==castOther.getWaitingQuery()) || ( this.getWaitingQuery()!=null && castOther.getWaitingQuery()!=null && this.getWaitingQuery().equals(castOther.getWaitingQuery()) ) )
 && ( (this.getWaitingQuerySecs()==castOther.getWaitingQuerySecs()) || ( this.getWaitingQuerySecs()!=null && castOther.getWaitingQuerySecs()!=null && this.getWaitingQuerySecs().equals(castOther.getWaitingQuerySecs()) ) )
 && ( (this.getWaitingQueryRowsAffected()==castOther.getWaitingQueryRowsAffected()) || ( this.getWaitingQueryRowsAffected()!=null && castOther.getWaitingQueryRowsAffected()!=null && this.getWaitingQueryRowsAffected().equals(castOther.getWaitingQueryRowsAffected()) ) )
 && ( (this.getWaitingQueryRowsExamined()==castOther.getWaitingQueryRowsExamined()) || ( this.getWaitingQueryRowsExamined()!=null && castOther.getWaitingQueryRowsExamined()!=null && this.getWaitingQueryRowsExamined().equals(castOther.getWaitingQueryRowsExamined()) ) )
 && (this.getBlockingThreadId()==castOther.getBlockingThreadId())
 && ( (this.getBlockingPid()==castOther.getBlockingPid()) || ( this.getBlockingPid()!=null && castOther.getBlockingPid()!=null && this.getBlockingPid().equals(castOther.getBlockingPid()) ) )
 && ( (this.getBlockingAccount()==castOther.getBlockingAccount()) || ( this.getBlockingAccount()!=null && castOther.getBlockingAccount()!=null && this.getBlockingAccount().equals(castOther.getBlockingAccount()) ) )
 && ( (this.getBlockingLockType()==castOther.getBlockingLockType()) || ( this.getBlockingLockType()!=null && castOther.getBlockingLockType()!=null && this.getBlockingLockType().equals(castOther.getBlockingLockType()) ) )
 && ( (this.getBlockingLockDuration()==castOther.getBlockingLockDuration()) || ( this.getBlockingLockDuration()!=null && castOther.getBlockingLockDuration()!=null && this.getBlockingLockDuration().equals(castOther.getBlockingLockDuration()) ) )
 && ( (this.getSqlKillBlockingQuery()==castOther.getSqlKillBlockingQuery()) || ( this.getSqlKillBlockingQuery()!=null && castOther.getSqlKillBlockingQuery()!=null && this.getSqlKillBlockingQuery().equals(castOther.getSqlKillBlockingQuery()) ) )
 && ( (this.getSqlKillBlockingConnection()==castOther.getSqlKillBlockingConnection()) || ( this.getSqlKillBlockingConnection()!=null && castOther.getSqlKillBlockingConnection()!=null && this.getSqlKillBlockingConnection().equals(castOther.getSqlKillBlockingConnection()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getObjectSchema() == null ? 0 : this.getObjectSchema().hashCode() );
         result = 37 * result + ( getObjectName() == null ? 0 : this.getObjectName().hashCode() );
         result = 37 * result + (int) this.getWaitingThreadId();
         result = 37 * result + ( getWaitingPid() == null ? 0 : this.getWaitingPid().hashCode() );
         result = 37 * result + ( getWaitingAccount() == null ? 0 : this.getWaitingAccount().hashCode() );
         result = 37 * result + ( getWaitingLockType() == null ? 0 : this.getWaitingLockType().hashCode() );
         result = 37 * result + ( getWaitingLockDuration() == null ? 0 : this.getWaitingLockDuration().hashCode() );
         result = 37 * result + ( getWaitingQuery() == null ? 0 : this.getWaitingQuery().hashCode() );
         result = 37 * result + ( getWaitingQuerySecs() == null ? 0 : this.getWaitingQuerySecs().hashCode() );
         result = 37 * result + ( getWaitingQueryRowsAffected() == null ? 0 : this.getWaitingQueryRowsAffected().hashCode() );
         result = 37 * result + ( getWaitingQueryRowsExamined() == null ? 0 : this.getWaitingQueryRowsExamined().hashCode() );
         result = 37 * result + (int) this.getBlockingThreadId();
         result = 37 * result + ( getBlockingPid() == null ? 0 : this.getBlockingPid().hashCode() );
         result = 37 * result + ( getBlockingAccount() == null ? 0 : this.getBlockingAccount().hashCode() );
         result = 37 * result + ( getBlockingLockType() == null ? 0 : this.getBlockingLockType().hashCode() );
         result = 37 * result + ( getBlockingLockDuration() == null ? 0 : this.getBlockingLockDuration().hashCode() );
         result = 37 * result + ( getSqlKillBlockingQuery() == null ? 0 : this.getSqlKillBlockingQuery().hashCode() );
         result = 37 * result + ( getSqlKillBlockingConnection() == null ? 0 : this.getSqlKillBlockingConnection().hashCode() );
         return result;
   }   


}


