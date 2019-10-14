package com.unsw.web.entity;
// Generated 2019-10-14 18:17:54 by Hibernate Tools 5.3.10.Final



/**
 * X.waitsGlobalByLatencyId generated by hbm2java
 */
public class X.waitsGlobalByLatencyId  implements java.io.Serializable {


     private String events;
     private long total;
     private long totalLatency;
     private long avgLatency;
     private long maxLatency;

    public X.waitsGlobalByLatencyId() {
    }

    public X.waitsGlobalByLatencyId(String events, long total, long totalLatency, long avgLatency, long maxLatency) {
       this.events = events;
       this.total = total;
       this.totalLatency = totalLatency;
       this.avgLatency = avgLatency;
       this.maxLatency = maxLatency;
    }
   
    public String getEvents() {
        return this.events;
    }
    
    public void setEvents(String events) {
        this.events = events;
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
    public long getMaxLatency() {
        return this.maxLatency;
    }
    
    public void setMaxLatency(long maxLatency) {
        this.maxLatency = maxLatency;
    }


   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof X.waitsGlobalByLatencyId) ) return false;
		 X.waitsGlobalByLatencyId castOther = ( X.waitsGlobalByLatencyId ) other; 
         
		 return ( (this.getEvents()==castOther.getEvents()) || ( this.getEvents()!=null && castOther.getEvents()!=null && this.getEvents().equals(castOther.getEvents()) ) )
 && (this.getTotal()==castOther.getTotal())
 && (this.getTotalLatency()==castOther.getTotalLatency())
 && (this.getAvgLatency()==castOther.getAvgLatency())
 && (this.getMaxLatency()==castOther.getMaxLatency());
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getEvents() == null ? 0 : this.getEvents().hashCode() );
         result = 37 * result + (int) this.getTotal();
         result = 37 * result + (int) this.getTotalLatency();
         result = 37 * result + (int) this.getAvgLatency();
         result = 37 * result + (int) this.getMaxLatency();
         return result;
   }   


}


