package cn.edu.xmu.artworkauction.utils;

/**
 * 
 * @author Yu
 * 
 *
 */

public interface MessageState {
	
	//艺术家同意定制
	public static final Integer artistAgreeAuction=1;
	
	//艺术家拒绝定制
	public static final Integer artistDisagreeAuction=2;

	//艺术家上传了定制图片信息
	public static final Integer artistUploadImageState=3;
	
	//艺术家延期没有进行上传图片
	public static final Integer artistDelayUploadImageState=4;
	
	//用户发出定制请求
	public static final Integer userSendAuctiOrder=5;
	
	//用户进行付款
	public static final Integer userPay=6;
	
	//用户延期没有进行付款
	public static final Integer userDelayPay=7;
	
}
