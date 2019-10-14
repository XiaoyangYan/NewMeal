package com.unsw.web.entity;
// Generated 2019-10-14 18:17:54 by Hibernate Tools 5.3.10.Final



/**
 * X.userSummaryByStagesId generated by hbm2java
 */
public class X.userSummaryByStagesId  implements java.io.Serializable {


     private String user;
     private String eventName;
     private long total;
     private long totalLatency;
     private long avgLatency;

    public X.userSummaryByStagesId() {
    }

	
    public X.userSummaryByStagesId(String eventName, long total, long totalLatency, long avgLatency) {
        this.eventName = eventName;
        this.total = total;
        this.totalLatency = totalLatency;
        this.avgLatency = avgLatency;
    }
    public X.userSummaryByStagesId(String user, String eventName, long total, long totalLatency, long avgLatency) {
       this.user = user;
       this.eventName = eventName;
       this.total = total;
       this.totalLatency = totalLatency;
       this.avgLatency = avgLatency;
    }
   
    public String getUser() {
        return this.user;
    }
    
    public void setUser(String user) {
        this.user = user;
    }
    public String getEventName() {
        return this.eventName;
    }
    
    public void setEventName(String eventName) {
        this.eventName = eventName;
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
    public long getAvgLatency() {
        return this.avgLatency;
    }
    
    public void setAvgLatency(long avgLatency) {
        this.avgLatency = avgLatency;
    }


   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof X.userSummaryByStagesId) ) return false;
		 X.userSummaryByStagesId castOther = ( X.userSummaryByStagesId ) other; 
         
		 return ( (this.getUser()==castOther.getUser()) || ( this.getUser()!=null && castOther.getUser()!=null && this.getUser().equals(castOther.getUser()) ) )
 && ( (this.getEventName()==castOther.getEventName()) || ( this.getEventName()!=null && castOther.getEventName()!=null && this.getEventName().equals(castOther.getEventName()) ) )
 && (this.getTotal()==castOther.getTotal())
 && (this.getTotalLatency()==castOther.getTotalLatency())
 && (this.getAvgLatency()==castOther.getAvgLatency());
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getUser() == null ? 0 : this.getUser().hashCode() );
         result = 37 * result + ( getEventName() == null ? 0 : this.getEventName().hashCode() );
         result = 37 * result + (int) this.getTotal();
         result = 37 * result + (int) this.getTotalLatency();
         result = 37 * result + (int) this.getAvgLatency();
         return result;
   }   


}


