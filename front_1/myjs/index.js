var vm;
vm = new Vue({
	el: '#app',
	data: {
		msg: "",
		list: [
			
			{
				title: "系统管理",
				titleContent:[
					{
					tiname:'用户管理',
					src:"test.html",
					showContent: true,
				},{
					tiname:'角色管理',
					src:"test.html",
					showContent: true,
				},{
					tiname:'部门管理',
					src:"test.html",
					showContent: true,
				},{
					tiname:'菜单管理',
					src:"test.html",
					showContent: true,
				},{
					tiname:'登录日志',
					src:"test.html",
					showContent: true,
				},
					],
				showContent: true,
			},
			{
				title: "添加用户",
				titleContent:[
					{
					tiname:'用户列表',
					src:"test1.html",
					showContent: true,
				},{
					tiname:'用户分类',
					src:"test1.html",
					showContent: true,
				},{
					tiname:'layui',
					src:"test1.html",
					showContent: true,
				},
					],
				showContent: true,
			},
			{
				title: "商品管理",
				titleContent:[
					{
					tiname:'商品管理',
					src:"test1.html",
					showContent: true,
				},{
					tiname:'品类管理',
					src:"test1.html",
					showContent: true,
				}
					],
				showContent: false,
			},
		]
	},
	methods: {
		enter() {
			// alert(99);
		},
		leave() {
			// alert("00");
		},
		cl(e) {
			console.info(e)
			var tem = this.list;
			tem[e].showContent = !tem[e].showContent;
			this.list = tem;
		}
	}
});


/*鼠标经过div的时候吧li的背景设会默认的*/
$(".left ul li div").mouseenter(function() {
	$("li").css({
		"background-color": "#404852"
	});
});
/*鼠标离开去除样式*/
$(".left ul li div").mouseleave(function() {
	$("li").attr("style", "background-color");
})


$(".ll").click(function() {
	/*获取所点击节点下的子节点*/
	var fl = $(this).find("div").css("display");
	if (fl == "none") { //判断是否已经打开
		//设置为可见
		$(this).find("div").css({
			"display": "block"
		});
	} else if (fl == "block") { //是打开状态就设置为不打开
		//设置为不可见
		$(this).find("div").css({
			"display": "none"
		});
	}
})
