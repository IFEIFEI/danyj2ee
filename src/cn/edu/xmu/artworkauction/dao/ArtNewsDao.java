package cn.edu.xmu.artworkauction.dao;

import java.util.List;

import cn.edu.xmu.artworkauction.entity.ArtNews;

/*
 *  ArtNewsDao ��������Ѷ�ĳ־û�����
 *  @author Dany ifeifei@stu.xmu.edu.cn
 */
public interface ArtNewsDao 
{
	public List<ArtNews> getAllArtNews() throws Exception;
	public void addArtNews(ArtNews artNews);
	public void saveArtNews(ArtNews artNews);
	public void deleteArtNews(ArtNews artNews);
	public ArtNews getArtNewsById(Integer id);
	public List<ArtNews> getArtNewsByTitle(String title);
	public List<ArtNews> getArtNewsByType(String type);
	public List<ArtNews> getCheckedArtNews();
	public List<ArtNews> getUnCheckedArtNews(Integer lev);
	public List<ArtNews> getCheckedoutArtNews();
	public List<ArtNews> getUnCheckedoutArtNews();
	public boolean isExistByTitle(String title);
}
