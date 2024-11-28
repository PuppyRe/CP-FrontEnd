const tabbar = {
	"tabItems":[
	        {
	            "pagePath": "/uni_modules/niceui-tabBar/pages/Menu",
	            "icon": '/static/tarBar/My.png', 
	            "selectedIcon":'/static/tarBar/selectedMy.png', 
	            "text": '首页'
	        },
	        {
	            "pagePath": "/uni_modules/niceui-tabBar/pages/Teachers",
	            "icon": '/static/tarBar/Teacher.png', 
	            "selectedIcon":'/static/tarBar/selectedTeacher.png', 
	            "text": '教师',
	            "up":true
	        },
	        { 
			    "pagePath": "/uni_modules/niceui-tabBar/pages/Message",
			    "icon": '/static/tarBar/Message.png', 
			    "selectedIcon":'/static/tarBar/selectedMessage.png', 
			    "text": '消息'
	        },
			{
			    "pagePath": "/uni_modules/niceui-tabBar/pages/My",
			    "icon": '/static/tarBar/My.png', 
			    "selectedIcon":'/static/tarBar/selectedMy.png', 
			    "text": '我的'
			}
	    ],
		
		"color" : "#333;",
		"selectedColor" : "blue",
}
export default tabbar