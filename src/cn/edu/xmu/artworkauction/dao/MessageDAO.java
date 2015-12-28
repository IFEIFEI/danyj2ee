package cn.edu.xmu.artworkauction.dao;

import java.util.List;

import cn.edu.xmu.artworkauction.entity.Message;
import cn.edu.xmu.artworkauction.entity.User;


/**MessageDAO deal with all the things about message
 *  
 * @author Yu
 * 
 *
 */

public interface MessageDAO 
{	
	//根据收信人查询
	public List<Message> getAllMessageByUserTo(User userTo);
	public List<Message> getAllMessageByUserToAndState(User userTo,Integer state);
	
	public void addMessage(Message message);
	public void updateMessage(Message message);
	public void deleteMessage(Message message);
	public void saveMessage(Message message);
}

