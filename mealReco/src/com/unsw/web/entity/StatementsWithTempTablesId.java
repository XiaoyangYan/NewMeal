package com.unsw.web.entity;
// Generated 2019-10-14 18:17:54 by Hibernate Tools 5.3.10.Final

import java.math.BigInteger;
import java.util.Date;

/**
 * StatementsWithTempTablesId generated by hbm2java
 */
public class StatementsWithTempTablesId implements java.io.Serializable {

	private String query;
	private String db;
	private long execCount;
	private String totalLatency;
	private long memoryTmpTables;
	private long diskTmpTables;
	private BigInteger avgTmpTablesPerQuery;
	private BigInteger tmpTablesToDiskPct;
	private Date firstSeen;
	private Date lastSeen;
	private String digest;

	public StatementsWithTempTablesId() {
	}

	public StatementsWithTempTablesId(long execCount, long memoryTmpTables, long diskTmpTables,
			BigInteger avgTmpTablesPerQuery, BigInteger tmpTablesToDiskPct, Date firstSeen, Date lastSeen) {
		this.execCount = execCount;
		this.memoryTmpTables = memoryTmpTables;
		this.diskTmpTables = diskTmpTables;
		this.avgTmpTablesPerQuery = avgTmpTablesPerQuery;
		this.tmpTablesToDiskPct = tmpTablesToDiskPct;
		this.firstSeen = firstSeen;
		this.lastSeen = lastSeen;
	}

	public StatementsWithTempTablesId(String query, String db, long execCount, String totalLatency,
			long memoryTmpTables, long diskTmpTables, BigInteger avgTmpTablesPerQuery, BigInteger tmpTablesToDiskPct,
			Date firstSeen, Date lastSeen, String digest) {
		this.query = query;
		this.db = db;
		this.execCount = execCount;
		this.totalLatency = totalLatency;
		this.memoryTmpTables = memoryTmpTables;
		this.diskTmpTables = diskTmpTables;
		this.avgTmpTablesPerQuery = avgTmpTablesPerQuery;
		this.tmpTablesToDiskPct = tmpTablesToDiskPct;
		this.firstSeen = firstSeen;
		this.lastSeen = lastSeen;
		this.digest = digest;
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

	public long getExecCount() {
		return this.execCount;
	}

	public void setExecCount(long execCount) {
		this.execCount = execCount;
	}

	public String getTotalLatency() {
		return this.totalLatency;
	}

	public void setTotalLatency(String totalLatency) {
		this.totalLatency = totalLatency;
	}

	public long getMemoryTmpTables() {
		return this.memoryTmpTables;
	}

	public void setMemoryTmpTables(long memoryTmpTables) {
		this.memoryTmpTables = memoryTmpTables;
	}

	public long getDiskTmpTables() {
		return this.diskTmpTables;
	}

	public void setDiskTmpTables(long diskTmpTables) {
		this.diskTmpTables = diskTmpTables;
	}

	public BigInteger getAvgTmpTablesPerQuery() {
		return this.avgTmpTablesPerQuery;
	}

	public void setAvgTmpTablesPerQuery(BigInteger avgTmpTablesPerQuery) {
		this.avgTmpTablesPerQuery = avgTmpTablesPerQuery;
	}

	public BigInteger getTmpTablesToDiskPct() {
		return this.tmpTablesToDiskPct;
	}

	public void setTmpTablesToDiskPct(BigInteger tmpTablesToDiskPct) {
		this.tmpTablesToDiskPct = tmpTablesToDiskPct;
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

	public String getDigest() {
		return this.digest;
	}

	public void setDigest(String digest) {
		this.digest = digest;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof StatementsWithTempTablesId))
			return false;
		StatementsWithTempTablesId castOther = (StatementsWithTempTablesId) other;

		return ((this.getQuery() == castOther.getQuery()) || (this.getQuery() != null && castOther.getQuery() != null
				&& this.getQuery().equals(castOther.getQuery())))
				&& ((this.getDb() == castOther.getDb()) || (this.getDb() != null
						&& castOther.getDb() != null && this.getDb().equals(castOther.getDb())))
				&& (this.getExecCount() == castOther.getExecCount())
				&& ((this.getTotalLatency() == castOther.getTotalLatency())
						|| (this.getTotalLatency() != null && castOther.getTotalLatency() != null
								&& this.getTotalLatency().equals(castOther.getTotalLatency())))
				&& (this.getMemoryTmpTables() == castOther.getMemoryTmpTables())
				&& (this.getDiskTmpTables() == castOther.getDiskTmpTables())
				&& ((this.getAvgTmpTablesPerQuery() == castOther.getAvgTmpTablesPerQuery())
						|| (this.getAvgTmpTablesPerQuery() != null && castOther.getAvgTmpTablesPerQuery() != null
								&& this.getAvgTmpTablesPerQuery().equals(castOther.getAvgTmpTablesPerQuery())))
				&& ((this.getTmpTablesToDiskPct() == castOther.getTmpTablesToDiskPct())
						|| (this.getTmpTablesToDiskPct() != null && castOther.getTmpTablesToDiskPct() != null
								&& this.getTmpTablesToDiskPct().equals(castOther.getTmpTablesToDiskPct())))
				&& ((this.getFirstSeen() == castOther.getFirstSeen()) || (this.getFirstSeen() != null
						&& castOther.getFirstSeen() != null && this.getFirstSeen().equals(castOther.getFirstSeen())))
				&& ((this.getLastSeen() == castOther.getLastSeen()) || (this.getLastSeen() != null
						&& castOther.getLastSeen() != null && this.getLastSeen().equals(castOther.getLastSeen())))
				&& ((this.getDigest() == castOther.getDigest()) || (this.getDigest() != null
						&& castOther.getDigest() != null && this.getDigest().equals(castOther.getDigest())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (getQuery() == null ? 0 : this.getQuery().hashCode());
		result = 37 * result + (getDb() == null ? 0 : this.getDb().hashCode());
		result = 37 * result + (int) this.getExecCount();
		result = 37 * result + (getTotalLatency() == null ? 0 : this.getTotalLatency().hashCode());
		result = 37 * result + (int) this.getMemoryTmpTables();
		result = 37 * result + (int) this.getDiskTmpTables();
		result = 37 * result + (getAvgTmpTablesPerQuery() == null ? 0 : this.getAvgTmpTablesPerQuery().hashCode());
		result = 37 * result + (getTmpTablesToDiskPct() == null ? 0 : this.getTmpTablesToDiskPct().hashCode());
		result = 37 * result + (getFirstSeen() == null ? 0 : this.getFirstSeen().hashCode());
		result = 37 * result + (getLastSeen() == null ? 0 : this.getLastSeen().hashCode());
		result = 37 * result + (getDigest() == null ? 0 : this.getDigest().hashCode());
		return result;
	}

}
