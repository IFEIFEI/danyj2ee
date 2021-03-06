<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
		<title>采编后台-草稿箱</title>
		<style type="text/css">
			h1 {line-height: 300%}
		</style>
		<link rel="stylesheet" href="../css/admin/960.css" type="text/css" media="screen" charset="utf-8" />
		<link rel="stylesheet" href="../css/admin/template.css" type="text/css" media="screen" charset="utf-8" />
		<link rel="stylesheet" href="../css/admin/colour.css" type="text/css" media="screen" charset="utf-8" />
		
	</head>
	<body>
	<h1 id="head">艺术品定制网站后台管理系统</h1>
	
	<ul id="navigation">
			<li><a href="ReportingStaffs-SubmitNews.html">我要写稿</a></li>
			<li><a href="ReportingStaffs-History.html">提交记录</a></li>
			<li><span class="active">草稿箱</span></li>
		</ul>
			<div id="content" class="container_16 clearfix">
				
				<div class="grid_16">
					<form action="" method="post">
					<p>
						<input name="searchbykey" type="text" placeholder="输入关键字进行查找" style="width:300px; height:30px"/>
						<input type="submit" value="查找" />
					</p>
					</form>
				</div>
				
				<div class="grid_16">
					<table>
						<thead>
							<tr>
								<th>题目</th>
								<th>软文类型</th>
								<th>上次修改时间</th>
								<th colspan="2" width="20%">操作</th>
							</tr>
						</thead>
						
						<tbody  id="dtable">
							<c:forEach items='${ EditorAdvList }' var="result">							
							<tr class="alt">
								<td>${result.title}</td>
								<td>${result.type}</td>
								<td>${result.lasttime}</td>
								<td><a href="#" class="edit">编辑</a></td>
								<td><a class="delete" href="javascript:void(0)" onclick="if(window.confirm('确定删除该草稿吗？')) 
    this.href='EditServlet?method=delDraft&advertorial_id=${ result.advertorial_id }'">删除</a></td>
							</tr>
							</c:forEach>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="5" class="pagination">
									<span id="spanFirst">首页</span> 
									<span id="spanPre">上一页</span> 
									<span id="spanNext">下一页</span> 
									<span id="spanLast">尾页</span> 
									第<span id="spanPageNum"></span>页/共<span id="spanTotalPage"></span>页      
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
				
			</div>
		
		<div id="foot">
					<a href="#">联系我们</a>
		</div>
	</body>
	<script>
	var theTable = document.getElementById("dtable");    
	var totalPage = document.getElementById("spanTotalPage");    
	var pageNum = document.getElementById("spanPageNum");    
   
	var spanPre = document.getElementById("spanPre");    
	var spanNext = document.getElementById("spanNext");    
	var spanFirst = document.getElementById("spanFirst");    
	var spanLast = document.getElementById("spanLast");    
   
	var numberRowsInTable = theTable.rows.length;    
	var pageSize = 10;    
	var page = 1;

	//下一页    
	function next(){    
   
    	hideTable();    
        
    	currentRow = pageSize * page;    
    	maxRow = currentRow + pageSize;    
    	if ( maxRow > numberRowsInTable ) maxRow = numberRowsInTable;    
    	for ( var i = currentRow; i< maxRow; i++ ){    
        	theTable.rows[i].style.display = '';    
    	}    
    	page++;    
        
    	if ( maxRow == numberRowsInTable ) 
			{ nextText(); lastText(); }  
    	showPage();    
    	preLink();    
    	firstLink();    
	}    
   
	//上一页    
	function pre(){    
   
    	hideTable();    
        
    	page--;    
        
    	currentRow = pageSize * page;    
    	maxRow = currentRow - pageSize;    
    	if ( currentRow > numberRowsInTable ) currentRow = numberRowsInTable;    
    	for ( var i = maxRow; i< currentRow; i++ ){    
        	theTable.rows[i].style.display = '';    
    	}    
        
        
    	if ( maxRow == 0 ){ preText(); firstText(); }    
    		showPage();   
    		nextLink();    
    		lastLink();  
	}    
   
	//第一页    
	function first(){    
    	hideTable();    
    	page = 1;    
    	for ( var i = 0; i<pageSize; i++ ){    
        	theTable.rows[i].style.display = '';    
    	}    
    	showPage();    
        
    	preText();    
    	nextLink();    
    	lastLink();    
	}    
   
	//最后一页    
	function last(){    
    	hideTable();    
    	page = pageCount();    
    	currentRow = pageSize * (page - 1);    
    	for ( var i = currentRow; i<numberRowsInTable; i++ ){    
        	theTable.rows[i].style.display = '';    
    	}    
    	showPage();    
        
    	preLink();    
    	nextText();    
    	firstLink();    
	}    
   
	function hideTable(){    
    	for ( var i = 0; i<numberRowsInTable; i++ ){    
        	theTable.rows[i].style.display = 'none';    
    	}    
	}    
   
	function showPage(){     
 		pageNum.innerHTML = page;
	}    
   
	//总共页数    
	function pageCount(){    
    	var count = 0;    
    	if ( numberRowsInTable%pageSize != 0 ) count = 1;     
    	return parseInt(numberRowsInTable/pageSize) + count;    
	}    
   
	//显示链接    
	function preLink(){ spanPre.innerHTML = "<a href='javascript:pre();'>上一页</a>";}    
	function preText(){ spanPre.innerHTML = "上一页";}    
   
	function nextLink(){ spanNext.innerHTML = "<a href='javascript:next();'>下一页</a>";}    
	function nextText(){ spanNext.innerHTML = "下一页";}    
   
	function firstLink(){ spanFirst.innerHTML = "<a href='javascript:first();'>首页</a>";}    
	function firstText(){ spanFirst.innerHTML = "首页";}    
   
	function lastLink(){ spanLast.innerHTML = "<a href='javascript:last();'>尾页</a>";}    
	function lastText(){ spanLast.innerHTML = "尾页";}    
   
	//隐藏表格    
	function hide(){    
    	for ( var i = pageSize; i<numberRowsInTable; i++ ){    
        	theTable.rows[i].style.display = 'none';    
    	}    
        
    	totalPage.innerHTML = pageCount();    
    	pageNum.innerHTML = '1';    
        
		if(pageCount()==1) {
			spanPre.innerHTML = " ";
			spanNext.innerHTML = " ";
			spanFirst.innerHTML = " ";
			spanLast.innerHTML = " ";
			return;
		}
		
    	nextLink();    
    	lastLink();    
	}    
   
	hide();
	</script>
</html>