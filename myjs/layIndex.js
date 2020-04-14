var vm;
vm = new Vue({
	el: '#layApp',
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