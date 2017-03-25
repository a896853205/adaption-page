import './conder/picturefill.min.js';
import '../css/index.css';
import '../css/normalize.css';

//为图片绑定事件
(function(){
	let first = document.getElementById("davidImg");
	let second = document.getElementById("charlotteImg");
	let third = document.getElementById("timonImg");
	first.onmouseover = function(){
		second.src = require("../img/basic-charlotte-left.jpg");
		third.src = require("../img/basic-timon-left.jpg");
	};
	first.onmouseout = function(){
		second.src = require("../img/basic-charlotte.jpg");
		third.src = require("../img/basic-timon.jpg");
	};
	second.onmouseover = function(){
		first.src = require("../img/basic-david-right.jpg");
		third.src = require("../img/basic-timon-left.jpg");
	};
	second.onmouseout = function(){
		first.src = require("../img/basic-david.jpg");
		third.src = require("../img/basic-timon.jpg");
	};
	third.onmouseover = function(){
		first.src = require("../img/basic-david-right.jpg");
		second.src = require("../img/basic-charlotte-right.jpg");
	};
	third.onmouseout = function(){
		first.src = require("../img/basic-david.jpg");
		second.src = require("../img/basic-charlotte.jpg");
	};
})();
(function(){
	let header = document.getElementById("header");
	let	bodyer = document.getElementById("bodyer");
	let headerIn = document.getElementById("headerIn");
	let windowWidth,chaFlag = true,resFlag = false;
	//头部还原
	function restoreHead(){
		header.style.removeProperty("position");
		header.style.removeProperty("border-bottom");
		headerIn.style.removeProperty("padding-top");
		bodyer.style.removeProperty("padding-top");
	}
	//头部变化
	function changeHead(){
		header.style.position = "fixed";
		// header.style.top = "6rem";
		header.style.top = "0";
		header.style.borderBottom = "1px solid #ddd";
		header.style.background = "#fff";
		headerIn.style.paddingTop = "0";
		bodyer.style.paddingTop = "14rem";
	}
	window.onresize = function(){
		windowWidth = document.documentElement.clientWidth > 924;
		if(resFlag){
			restoreHead();
		}
	};
	window.onload = function(){
		windowWidth = document.documentElement.clientWidth > 924;
	};
	//滚动条事件
	window.onscroll = function(){
		if(windowWidth){
			if(document.documentElement.scrollTop < 50){
				if(resFlag){
					restoreHead();
					resFlag = false;
					chaFlag = true;
				}
			}else{
				if(chaFlag){
					changeHead();	
					chaFlag = false;
					resFlag = true;
				}
			}
		}
	}
})();

console.log("原网页为:http://www.stilld.nl/ \n纯属自己模仿学习");