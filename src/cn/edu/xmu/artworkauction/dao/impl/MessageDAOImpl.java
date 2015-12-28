package cn.edu.xmu.artworkauction.dao.impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import cn.edu.xmu.artworkauction.dao.MessageDAO;
import cn.edu.xmu.artworkauction.entity.Artist;
import cn.edu.xmu.artworkauction.entity.Message;
import cn.edu.xmu.artworkauction.entity.User;

/**
 * 
 * @author Yu
 * 
 *
 */

@Repository("messageDAO")
public class MessageDAOImpl implements MessageDAO
{
    private SessionFactory sessionFactory;
	
	@Resource(name="sessionFactory")
	public void setSessionFactory(SessionFactory sessionFactory) 
	{
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List<Message> getAllMessageByUserTo(User userTo) {
		// TODO Auto-generated method stub
		Query query=sessionFactory.getCurrentSession().getNamedQuery("@HQL_GetAllMessageByUserTo");
		query.setEntity(0, userTo);
		List<Message> messageList=(List<Message>)query.list();
		return messageList;
	}

	@Override
	public List<Message> getAllMessageByUserToAndState(User userTo, Integer state) {
		// TODO Auto-generated method stub
		Query query=sessionFactory.getCurrentSession().getNamedQuery("@HQL_GetAllMessageByUserToAndState");
		query.setEntity(0, userTo);
		query.setInteger(1, state);
		List<Message> messageList=(List<Message>)query.list();
		return messageList;
	}

	@Override
	public void addMessage(Message message) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().save(message);
	}

	@Override
	public void updateMessage(Message message) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().update(message);
		
	}

	@Override
	public void deleteMessage(Message message) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().delete(message);
	}

	@Override
	public void saveMessage(Message message) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().saveOrUpdate(message);
	}

	
}
