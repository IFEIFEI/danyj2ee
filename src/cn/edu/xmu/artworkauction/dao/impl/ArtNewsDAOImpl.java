package cn.edu.xmu.artworkauction.dao.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import cn.edu.xmu.artworkauction.dao.ArtNewsDAO;
import cn.edu.xmu.artworkauction.entity.ArtNews;
import cn.edu.xmu.artworkauction.entity.ChiefEditor;
import cn.edu.xmu.artworkauction.entity.Editor;
import cn.edu.xmu.artworkauction.entity.User;
import cn.edu.xmu.artworkauction.utils.Constants;
import sun.misc.CEFormatException;

/**
 * ArtNewsDaoimpl
 * @author Dany ifeifei@stu.xmu.edu.cn
 * Modified By XiaWenSheng 12/12
 */

@Repository("artNewsDAO")
public class ArtNewsDAOImpl implements ArtNewsDAO
{
	private SessionFactory sessionFactory;
	
	@Resource(name="sessionFactory")
	public void setSessionFactory(SessionFactory sessionFactory) 
	{
		this.sessionFactory = sessionFactory;
	}
	@Override
	public List<ArtNews> getAllArtNews() throws Exception
	{
		Session session=sessionFactory.getCurrentSession();
		List<ArtNews> aList=session.getNamedQuery("@HQL_GetAllArtNews").list();
		return aList;
		
	}
	@Override
	public void addArtNews(ArtNews artNews)
	{
		sessionFactory.getCurrentSession().save(artNews);
	}
	@Override
	public void saveArtNews(ArtNews artNews)
	{
		sessionFactory.getCurrentSession().save(artNews);
	}
	@Override
	public void deleteArtNews(ArtNews artNews)
	{
		sessionFactory.getCurrentSession().delete(artNews);
	}
	@Override
	public ArtNews getArtNewsById(Integer id)
	{
		return (ArtNews)sessionFactory
				.getCurrentSession()
				.getNamedQuery("@HQL_GetArtNewsById")
				.setString(0, id.toString())
				.uniqueResult();
	}
	@Override
	public ArtNews getArtNewsByTitle(String title)
	{
		return (ArtNews)sessionFactory.getCurrentSession().
				getNamedQuery("@HQL_GetArtNewsByTitle").setString(0, title).uniqueResult();
	}
	@Override
	public List<ArtNews> getArtNewsByType(String type)
	{
		return (List<ArtNews>)sessionFactory.getCurrentSession().
				getNamedQuery("@HQL_GetArtNewsByType").setString(0, type).list();
	}
	
	@Override
	public List<ArtNews> getCheckedArtNews()
	{
		return (List<ArtNews>)sessionFactory
				.getCurrentSession()
				.getNamedQuery("@HQL_GetArtNewsByState")
				.setString(0, Constants.APPROVED)
				.list();
	}
	@Override
	public List<ArtNews> getUnCheckedArtNews()
	{
		return (List<ArtNews>)sessionFactory
				.getCurrentSession()
				.getNamedQuery("@HQL_GetArtNewsByState")
				.setString(0,Constants.UNDERAPPROVAL)
				.list();
	}
	@Override
	public List<ArtNews> getCheckedoutArtNews()
	{
		return (List<ArtNews>)sessionFactory
				.getCurrentSession()
				.getNamedQuery("@HQL_GetArtNewsByState")
				.setString(0, Constants.APPROVED)
				.list();
	}
	@Override
	public List<ArtNews> getUnCheckedoutArtNews()
	{
		return (List<ArtNews>)sessionFactory
				.getCurrentSession()
				.getNamedQuery("@HQL_GetArtNewsByState")
				.setString(0, Constants.DISAPPROVED)
				.list();
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<ArtNews> getArtNewsByData(Date data)
	{
		String hql="form ArtNews a where a.launchTime=?";
		return (List<ArtNews>)sessionFactory
				.getCurrentSession()
				.createQuery(hql)
				.setString(0, data.toString())
				.list();
	}
	@Override
	public boolean isExistByTitle(String title)
	{
		String hql="from ArtNews a where a.title=?";
		return 	sessionFactory.getCurrentSession().createQuery(hql).setString(0, title).uniqueResult()!=null;
	}
	@Override
	public List<ArtNews> getTodayArtNews(String columnID) {
		// TODO Auto-generated method stub
		Date startDate=new Date();
		Date endDate=new Date();
		startDate.setHours(0);
		startDate.setMinutes(0);
		startDate.setSeconds(0);
		endDate.setHours(23);
		endDate.setMinutes(59);
		endDate.setSeconds(59);
		return (List<ArtNews>)sessionFactory.getCurrentSession().
				getNamedQuery("@HQL_GetTodayArtNews").list();
	}
	@Override
	public List<ArtNews> getTodayAdvertisement(String columnID) {
		// TODO Auto-generated method stub
		return null;
	}
	public List<ArtNews> getHistoryArtNewsByEditor(Editor editor)
	{
		return (List<ArtNews>) sessionFactory
				.getCurrentSession()
				.getNamedQuery("@HQL_GetArtNewsByEditor")
				.setEntity(0, editor)
				.list();
	}
	public List<ArtNews> getHistoryArtNewsByChiefEditor(ChiefEditor chiefEditor)
	{
		return (List<ArtNews>) sessionFactory
				.getCurrentSession()
				.getNamedQuery("@HQL_GetArtNewsByChiefEditor")
				.setEntity(0, chiefEditor)
				.list();
	}
	@Override
	public void test() 
	{
		System.out.println("Hello");
		String hql="from ArtNews a where a.chiefEditor=?";
		ChiefEditor chiefEditor=(ChiefEditor)sessionFactory.getCurrentSession().createQuery("from ChiefEditor c where c.id=2" ).uniqueResult();
		System.out.println(chiefEditor.getId());
		List<ArtNews> aList=sessionFactory
				.getCurrentSession()
				//.getNamedQuery("@HQL_GetArtNewsByChiefEditor")
				.createQuery(hql)
				//.setString(0, "2")
				.setEntity(0, chiefEditor)
				.list();
		System.out.println(aList.get(0).getState());
	}
	@Override
	public void updateArtNews(ArtNews artNews) 
	{
		sessionFactory.getCurrentSession()
			.update(artNews);
	}
}
