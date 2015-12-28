package cn.edu.xmu.artworkauction.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.sun.xml.internal.bind.v2.TODO;

import cn.edu.xmu.artworkauction.entity.Artist;
import cn.edu.xmu.artworkauction.entity.Auction;
import cn.edu.xmu.artworkauction.entity.User;
import cn.edu.xmu.artworkauction.service.AuctionService;
import cn.edu.xmu.artworkauction.utils.AuctionState;

/**
 * @author Dany
 * @version D-1228_1.0.0
 *
 */
@Controller
public class CustomMadeController 
{
	@Resource
	AuctionService auctionService;
	
	@RequestMapping("/getCustomMade")
	public ModelAndView getCustomMada(HttpServletRequest request,Model model)
	{
		if(request.getSession().getAttribute("user")==null)
			return new ModelAndView("login");
		ModelAndView modelAndView=new ModelAndView("auction");
		return modelAndView;
	}
	
	@RequestMapping("/setDetailCustomMade")
	public ModelAndView setDetailCustomMade(HttpServletRequest request,Model model)
	{
		//TODO: 等待部分字段的填充测试
		User user=(User)request.getSession().getAttribute("user");
		Artist artist=(Artist) request.getSession().getAttribute("singleArtist");
		if(user==null || artist==null)
			return new ModelAndView("login");
		//String kind=request.getParameter("kind");
		String size=request.getParameter("size");
		String lowPrice=request.getParameter("price1");
		String highPrice=request.getParameter("price2");
		String type=request.getParameter("type");
		String description=request.getParameter("descriptionInput");
		//String imageURL=request.getParameter("ImageURL");
		Auction auction=new Auction(user,artist,Double.parseDouble(highPrice),Double.parseDouble(lowPrice),type,size,description,null,AuctionState.approved);
		auction.setArtistState(AuctionState.disApproved);
		auctionService.addOneAuctionRecord(auction);
		return new ModelAndView("userCenter");
	}
}
