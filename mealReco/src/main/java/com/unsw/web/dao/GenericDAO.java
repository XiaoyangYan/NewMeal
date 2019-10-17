package com.unsw.web.dao;

import java.util.List;

public interface GenericDAO<T> {
	public T create(T t);
	
	public T update(T t);
	
	public T get(T t);
	
	public void delete(Object id);
	
	public List<T> listAll();
	
	public long count();

}
