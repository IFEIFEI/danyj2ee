package cn.edu.xmu.artworkauction.dao;

import java.util.List;

import cn.edu.xmu.artworkauction.entity.Artist;
import cn.edu.xmu.artworkauction.entity.User;
import cn.edu.xmu.artworkauction.entity.Auction;
import cn.edu.xmu.artworkauction.entity.AuctionItem;



/**
 * 
 * @author Yu
 * 
 *
 */

public interface AuctionDAO 
{
	public List<Auction> getAuctionByUser(User user);
	public List<Auction> getAuctionByArtist(Artist artist);
	//主要用于查询双方同意的定制
	public List<Auction> getAuctionByUserAndState(User user);
	//主要用于查询双方同意的定制
	public List<Auction> getAuctionByArtistAndState(Artist artist);
	
	//发起一个新的定制
	public Auction addNewAuction(User user,Artist artist,Double priceMax,Double priceMin,String type,String size, String description,String imageURL,Integer state);
	
	public void addAuction(Auction auction);
	public void saveAuction(Auction auction);
	public void updateAuction(Auction auction);
	public void deleteAuction(Auction auction);
}

