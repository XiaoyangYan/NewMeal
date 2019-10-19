package com.unsw.web.mealReco.dao;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
public class JpaDAO<T> {
	@PersistenceContext
	protected EntityManager entityManager;
	
	public JpaDAO(EntityManager entityManager) {
		super();
		this.entityManager = entityManager;
	}
	@Transactional
	public T create(T t) {
		entityManager.persist(t);
		entityManager.flush();
		entityManager.refresh(t);
		entityManager.close();
		return t;
	}
	 @Transactional
	public T update(T entity) {
		entityManager.getTransaction().begin();
		entity = entityManager.merge(entity);
		entityManager.getTransaction().commit();
		entityManager.close();
		return entity;
	}
	 @Transactional
	 @PersistenceContext
	public T find(Class<T> type, Object id) {
		T entity = entityManager.find(type, id);
		if (entity != null) {
			entityManager.refresh(entity);
		}
		return entity;
	}
	 @Transactional
	 @PersistenceContext
	public void delete(Class<T> type, Object id) {
		Object reference = entityManager.getReference(type, id);
		entityManager.remove(reference);
		entityManager.close();
	}
	 @Transactional
	 @PersistenceContext
	public List<T> findWithNamedQuery(String queryName){
		Query query = entityManager.createNamedQuery(queryName);
		return query.getResultList();
	}
	 @Transactional
	 @PersistenceContext
	public long countWithNamedQuery(String queryName) {
		Query query = entityManager.createNamedQuery(queryName);
		return (long)query.getSingleResult();
	}
	 @Transactional
	public List<T> findWithNamedQuery(String queryName, Map<String, Object> parameters){
		Query query = entityManager.createNamedQuery(queryName);
		Set<Entry<String, Object>> rawParameters = parameters.entrySet();
		for (Entry<String, Object> entry: rawParameters) {
			System.out.println(entry.getKey()+" "+entry.getValue());
			query.setParameter(entry.getKey(), entry.getValue());
		}
		return query.getResultList();
	}
	 @Transactional
	public List<T> findWithNamedQuery(String queryName, String paramName, Object paramValue){
		Query query = entityManager.createNamedQuery(queryName);
		query.setParameter(paramName, paramValue);
		return query.getResultList();
	}
}
