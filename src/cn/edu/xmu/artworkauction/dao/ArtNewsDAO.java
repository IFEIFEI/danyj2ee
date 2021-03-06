package cn.edu.xmu.artworkauction.dao;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import cn.edu.xmu.artworkauction.entity.ArtNews;
import cn.edu.xmu.artworkauction.entity.ChiefEditor;
import cn.edu.xmu.artworkauction.entity.Editor;

/**
 *  ArtNewsDAO 
 *  @author Dany ifeifei@stu.xmu.edu.cn
 *  Modified By XiaWenSheng 12/12
 */
public interface ArtNewsDAO 
{
	public List<ArtNews> getAllArtNews() throws Exception;
	public void addArtNews(ArtNews artNews);
	public void saveArtNews(ArtNews artNews);
	public void updateArtNews(ArtNews artNews);
	public void deleteArtNews(ArtNews artNews);
	public ArtNews getArtNewsById(Integer id);
	public ArtNews getArtNewsByTitle(String title);
	public List<ArtNews> getArtNewsByType(String type);
	public List<ArtNews> getCheckedArtNews();
	public List<ArtNews> getUnCheckedArtNews();
	public List<ArtNews> getCheckedoutArtNews();
	public List<ArtNews> getUnCheckedoutArtNews();
	public List<ArtNews> getArtNewsByData(Date data);
	public List<ArtNews> getHistoryArtNewsByEditor(Editor editor);
	public List<ArtNews> getHistoryArtNewsByChiefEditor(ChiefEditor chiefEditor);
	public boolean isExistByTitle(String title);
	public List<ArtNews> getTodayArtNews(String columnID);
	public List<ArtNews> getTodayAdvertisement(String columnID);
	public void test();
}
