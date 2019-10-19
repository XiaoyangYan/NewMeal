package com.unsw.web.mealReco.dao;

import java.util.List;

import javax.transaction.Transactional;

public interface GenericDAO<T> {
	@Transactional
	public T create(T t);
	
	public T update(T t);
	
	public T get(Object id);
	
	public void delete(Object id);
	
	public List<T> listAll();
	
	public long count();

}
