<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="container" id="1">    
            <div class="artistInformation">
                 <div class="artistTouxiang">
                    <img src="images/user/${user.imageURL }">
                 </div>
                 <div class="artistText"> 
                    <h1>${user.realName }</h1>
                    <h2>${user.birthday.year +1900},${user.country }</h2>
                    <h3>${user.addresses[0].province }，${user.addresses[0].country }</h3>
                    <h4>${user.education }</h4>       
                 </div>
            </div> 
</div>