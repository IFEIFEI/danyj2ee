/**
 * 
 */
package cn.edu.xmu.artworkauction.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
/**
 * @author yu
 * 
 */
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name="tb_auction")
@NamedQueries(
		{
			//按照用户查找定制
			@NamedQuery(name="@HQL_GetAllAuctionByUser",
					query="from Auction m where m.user=?"),
			//按照用户和定制的状态查找定制
			@NamedQuery(name="@HQL_GetAllAuctionByUserAndState",
					query="from Auction m where m.user=? and m.userState=? and m.artistState=? "),
			//按照艺术家查找定制
			@NamedQuery(name="@HQL_GetAllAuctionByArtist",
					query="from Auction m where m.artist=?"),
			//按照艺术家和定制的状态查找定制
			@NamedQuery(name="@HQL_GetAllAuctionByArtistAndState",
					query="from Auction m where m.artist=? and m.userState=? and m.artistState=?  ")
		})
public class Auction {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;
	
	@ManyToOne(targetEntity=User.class, cascade = {CascadeType.ALL})
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne(targetEntity=Artist.class, cascade = {CascadeType.ALL})
	@JoinColumn(name="artist_id")
	private Artist artist;
	
	//艺术家设置的定制艺术品的总价格
	@Column
	private Double money;
	
	//用户定制的价格上限
	@Column
	private Double priceMax;
	
	//用户定制的价格下限
	@Column
	private Double priceMin;
	
	@OneToMany(targetEntity = AuctionItem.class, cascade = CascadeType.ALL)
	private List<AuctionItem> auctionItems;
	
	//种类
	@Column
	private String type;
	
	//尺寸
	@Column
	private String size;
	
	//用户填写的描述
	@Column(length=500)
	private String description;
	
	//用户填写的参考
	@Column
	private String imageURL;
	
	//因为用户在接到艺术家的定制回馈的时候可以拒绝
    //定制状态
	@Column
	private Integer userState;
	
	//定制状态
	@Column
	private Integer artistState;
	
	
	public Auction() {
		// TODO Auto-generated constructor stub
	}
	
	//用户提交请求的时候，进行初始化；
	public Auction(User user,Artist artist,Double priceMax,Double priceMin,String type,String size, String description,String imageURL,Integer userState)
	{
		setUser(user);
		setArtist(artist);
		setPriceMax(priceMax);
		setPriceMin(priceMin);
		setSize(size);
		setType(type);
		setDescription(description);
		setImageURL(imageURL);
		setUserState(userState);
	}
	
	public Integer getId()
	{
		return id;
	}
	public void setId(Integer id)
	{
		this.id=id;
	}
	
	public User getUser()
	{
		return user;
	}
	public void setUser(User user)
	{
		this.user=user;
	}
	
	public Artist getArtist()
	{
		return artist;
	}
	public void setArtist(Artist artist)
	{
		this.artist=artist;
	}
	
	public Double getMoney()
	{
		return money;
	}
	public void setMoney(Double money)
	{
		this.money=money;
	}
	
	public Double getPriceMax()
	{
		return priceMax;
	}
	public void setPriceMax(Double priceMax)
	{
		this.priceMax=priceMax;
	}
	
	public Double getPriceMin()
	{
		return priceMin;
	}
	public void setPriceMin(Double priceMin)
	{
		this.priceMin=priceMin;
	}
	
	public List<AuctionItem>  getAuctionItems()
	{
		return auctionItems;
	}
	public void setAuctionItems(List<AuctionItem> auctionItems)
	{
		this.auctionItems=auctionItems;
	}
	
	public String getType()
	{
		return type;
	}
	public void setType(String type)
	{
		this.type=type;
	}
	
	public String getSize()
	{
		return size;
	}
	public void setSize(String size)
	{
		this.size=size;
	}
	
	public String getDescription()
	{
		return description;
	}
	public void setDescription(String description)
	{
		this.description=description;
	}
	
	public String getImageURL()
	{
		return imageURL;
	}
	public void setImageURL(String imageURL)
	{
		this.imageURL=imageURL;
	}
	
	public Integer getArtistState()
	{
		return artistState;
	}
	public void setArtistState(Integer artistState)
	{
		this.artistState=artistState;
	}	
	
	public Integer getUserState()
	{
		return userState;
	}
	public void setUserState(Integer userState)
	{
		this.userState=userState;
	}
}
