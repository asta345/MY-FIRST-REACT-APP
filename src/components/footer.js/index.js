import React from "react";
import {container,Wrapper,Row,Column,Link,Title}from './styles/footer'
export default function footer({children,...restprops}){
	return<Container {...restprops}>{children}</Container> 
}

Footer.Wrapper = function FooterWrapper({children,...restprops}){
	return<Container {...restprops}>{children}</Container> 
}

Footer.Row=function FooterWrapper({children,...restprops}){
	return<Row {...restprops}>{children}</Row> 
}
Footer.Column=function FooterWrapper({children,...restprops}){
	return<Column{...restprops}>{children}</Column> 
}
Footer.Link =function FooterWrapper({children,...restprops}){
	return<Link {...restprops}>{children}</Link> 
}
Footer.Title=function FooterWrapper({children,...restprops}){
	return<Title{...restprops}>{children}</Title> 
}