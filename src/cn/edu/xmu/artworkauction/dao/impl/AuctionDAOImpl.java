package cn.edu.xmu.artworkauction.dao.impl;

import java.util.List;
import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import cn.edu.xmu.artworkauction.utils.AuctionState;

import cn.edu.xmu.artworkauction.dao.AuctionDAO;
import cn.edu.xmu.artworkauction.entity.Artist;
import cn.edu.xmu.artworkauction.entity.Auction;
import cn.edu.xmu.artworkauction.entity.Message;
import cn.edu.xmu.artworkauction.entity.User;

/**
 * 
 * @author Yu
 *
 *
 */

@Repository("auctionDAO")
public class AuctionDAOImpl implements AuctionDAO
{
    private SessionFactory sessionFactory;
	
	@Resource(name="sessionFactory")
	public void setSessionFactory(SessionFactory sessionFactory) 
	{
		this.sessionFactory = sessionFactory;
	}


	@Override
	public List<Auction> getAuctionByUser(User user) {
		// TODO Auto-generated method stub
		Query query=sessionFactory.getCurrentSession().getNamedQuery("@HQL_GetAllAuctionByUser");
		query.setEntity(0, user);
		List<Auction> auctionList=(List<Auction>)query.list();
		return auctionList;
	}

	@Override
	public List<Auction> getAuctionByArtist(Artist artist) {
		// TODO Auto-generated method stub
		Query query=sessionFactory.getCurrentSession().getNamedQuery("@HQL_GetAllAuctionByArtist");
		query.setEntity(0, artist);
		List<Auction> auctionList=(List<Auction>)query.list();
		return auctionList;
	}

	@Override
	public List<Auction> getAuctionByUserAndState(User user) {
		// TODO Auto-generated method stub
		Query query=sessionFactory.getCurrentSession().getNamedQuery("@HQL_GetAllAuctionByUserAndState");
		query.setEntity(0, user);
		query.setInteger(1, AuctionState.approved);
		query.setInteger(2, AuctionState.approved);
		List<Auction> auctionList=(List<Auction>)query.list();
		return auctionList;
	}

	@Override
	public List<Auction> getAuctionByArtistAndState(Artist artist) {
		// TODO Auto-generated method stub
		Query query=sessionFactory.getCurrentSession().getNamedQuery("@HQL_GetAllAuctionByArtistAndState");
		query.setEntity(0, artist);
		query.setInteger(1, AuctionState.approved);
		query.setInteger(2, AuctionState.approved);
		List<Auction> auctionList=(List<Auction>)query.list();
		return auctionList;
	}

	@Override
	public void addAuction(Auction auction) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().save(auction);
	}

	@Override
	public void saveAuction(Auction auction) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().saveOrUpdate(auction);
	}

	@Override
	public void updateAuction(Auction auction) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().update(auction);
	}

	@Override
	public void deleteAuction(Auction auction) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().delete(auction);
	}


	@Override
	public Auction addNewAuction(User user, Artist artist, Double priceMax, Double priceMin, String type, String size,
			String description, String imageURL, Integer state) {
		Auction auction=new Auction(user,artist,priceMax,priceMin,type,size,description,imageURL,state);
		saveAuction(auction);
		return auction;
	}
	
}
