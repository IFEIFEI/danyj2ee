package cn.edu.xmu.artworkauction.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.xmu.artworkauction.dao.AuctionDAO;
import cn.edu.xmu.artworkauction.entity.Artist;
import cn.edu.xmu.artworkauction.entity.Auction;
import cn.edu.xmu.artworkauction.service.AuctionService;

@Transactional
@Service("auctionService")
public class AuctionServiceImpl implements AuctionService
{
	@Resource(name="auctionDAO")
	AuctionDAO auctionDAO;

	@Override
	public boolean updateAuctionInfo(Auction auction) 
	{
		auctionDAO.updateAuction(auction);
		return true;
	}

	@Override
	public boolean addOneAuctionRecord(Auction auction) 
	{
		auctionDAO.addAuction(auction);
		return true;
	}

	@Override
	public List<Auction> getAllAuctionByArtist(Artist artist) 
	{
		
		return auctionDAO.getAuctionByArtist(artist);
	}
	
}
