package cn.edu.xmu.artworkauction.service;

import java.util.List;

import cn.edu.xmu.artworkauction.entity.Artist;
import cn.edu.xmu.artworkauction.entity.Auction;

public interface AuctionService
{
	public boolean updateAuctionInfo(Auction auction);
	public boolean addOneAuctionRecord(Auction auction);
	public List<Auction> getAllAuctionByArtist(Artist artist);
}