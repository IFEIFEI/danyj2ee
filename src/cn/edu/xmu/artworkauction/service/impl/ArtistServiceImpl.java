/**
 * 
 */
package cn.edu.xmu.artworkauction.service.impl;

import javax.annotation.Resource;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.edu.xmu.artworkauction.dao.ArtistDAO;
import cn.edu.xmu.artworkauction.entity.Address;
import cn.edu.xmu.artworkauction.entity.Artist;
import cn.edu.xmu.artworkauction.entity.Artwork;
import cn.edu.xmu.artworkauction.service.ArtistService;

/**
 * @author Y
 *
 */
@Transactional
@Service("artistService")
public class ArtistServiceImpl implements ArtistService{
	
    private SessionFactory sessionFactory;
	@Resource(name="sessionFactory")
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	private ArtistDAO artistDAO;

	@Resource(name="artistDAO")
	public void setArtistDAO(ArtistDAO artistDAO){
		this.artistDAO=artistDAO;
	}
	
	//更改用户的信息
	@Override
	public Artist updateArtistInfo(Artist artist,String userName,String email,String phoneNumber,String education,String description,String imageURL)
	{
		// TODO Auto-generated method stub
		artist=artistDAO.artistUpdate(artist,userName,email,phoneNumber,education, description, imageURL);
		return artist;
	}

	@Override
	public Artist updateArtistAddress(Artist artist, Address address) {
		// TODO Auto-generated method stub
		artist=artistDAO.artistUpdateAddress(artist, address);
		return artist;
	}

	
	@Override
	public Artist addArtwork(Artist artist, Artwork artwork) {
		// TODO Auto-generated method stub
		artist=artistDAO.addArtwork(artist, artwork);
		return null;
	}

}