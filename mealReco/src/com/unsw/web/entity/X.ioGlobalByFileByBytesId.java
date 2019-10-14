package com.unsw.web.entity;
// Generated 2019-10-14 18:17:54 by Hibernate Tools 5.3.10.Final


import java.math.BigDecimal;

/**
 * X.ioGlobalByFileByBytesId generated by hbm2java
 */
public class X.ioGlobalByFileByBytesId  implements java.io.Serializable {


     private String file;
     private long countRead;
     private long totalRead;
     private BigDecimal avgRead;
     private long countWrite;
     private long totalWritten;
     private BigDecimal avgWrite;
     private long total;
     private BigDecimal writePct;

    public X.ioGlobalByFileByBytesId() {
    }

    public X.ioGlobalByFileByBytesId(String file, long countRead, long totalRead, BigDecimal avgRead, long countWrite, long totalWritten, BigDecimal avgWrite, long total, BigDecimal writePct) {
       this.file = file;
       this.countRead = countRead;
       this.totalRead = totalRead;
       this.avgRead = avgRead;
       this.countWrite = countWrite;
       this.totalWritten = totalWritten;
       this.avgWrite = avgWrite;
       this.total = total;
       this.writePct = writePct;
    }
   
    public String getFile() {
        return this.file;
    }
    
    public void setFile(String file) {
        this.file = file;
    }
    public long getCountRead() {
        return this.countRead;
    }
    
    public void setCountRead(long countRead) {
        this.countRead = countRead;
    }
    public long getTotalRead() {
        return this.totalRead;
    }
    
    public void setTotalRead(long totalRead) {
        this.totalRead = totalRead;
    }
    public BigDecimal getAvgRead() {
        return this.avgRead;
    }
    
    public void setAvgRead(BigDecimal avgRead) {
        this.avgRead = avgRead;
    }
    public long getCountWrite() {
        return this.countWrite;
    }
    
    public void setCountWrite(long countWrite) {
        this.countWrite = countWrite;
    }
    public long getTotalWritten() {
        return this.totalWritten;
    }
    
    public void setTotalWritten(long totalWritten) {
        this.totalWritten = totalWritten;
    }
    public BigDecimal getAvgWrite() {
        return this.avgWrite;
    }
    
    public void setAvgWrite(BigDecimal avgWrite) {
        this.avgWrite = avgWrite;
    }
    public long getTotal() {
        return this.total;
    }
    
    public void setTotal(long total) {
        this.total = total;
    }
    public BigDecimal getWritePct() {
        return this.writePct;
    }
    
    public void setWritePct(BigDecimal writePct) {
        this.writePct = writePct;
    }


   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof X.ioGlobalByFileByBytesId) ) return false;
		 X.ioGlobalByFileByBytesId castOther = ( X.ioGlobalByFileByBytesId ) other; 
         
		 return ( (this.getFile()==castOther.getFile()) || ( this.getFile()!=null && castOther.getFile()!=null && this.getFile().equals(castOther.getFile()) ) )
 && (this.getCountRead()==castOther.getCountRead())
 && (this.getTotalRead()==castOther.getTotalRead())
 && ( (this.getAvgRead()==castOther.getAvgRead()) || ( this.getAvgRead()!=null && castOther.getAvgRead()!=null && this.getAvgRead().equals(castOther.getAvgRead()) ) )
 && (this.getCountWrite()==castOther.getCountWrite())
 && (this.getTotalWritten()==castOther.getTotalWritten())
 && ( (this.getAvgWrite()==castOther.getAvgWrite()) || ( this.getAvgWrite()!=null && castOther.getAvgWrite()!=null && this.getAvgWrite().equals(castOther.getAvgWrite()) ) )
 && (this.getTotal()==castOther.getTotal())
 && ( (this.getWritePct()==castOther.getWritePct()) || ( this.getWritePct()!=null && castOther.getWritePct()!=null && this.getWritePct().equals(castOther.getWritePct()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getFile() == null ? 0 : this.getFile().hashCode() );
         result = 37 * result + (int) this.getCountRead();
         result = 37 * result + (int) this.getTotalRead();
         result = 37 * result + ( getAvgRead() == null ? 0 : this.getAvgRead().hashCode() );
         result = 37 * result + (int) this.getCountWrite();
         result = 37 * result + (int) this.getTotalWritten();
         result = 37 * result + ( getAvgWrite() == null ? 0 : this.getAvgWrite().hashCode() );
         result = 37 * result + (int) this.getTotal();
         result = 37 * result + ( getWritePct() == null ? 0 : this.getWritePct().hashCode() );
         return result;
   }   


}


