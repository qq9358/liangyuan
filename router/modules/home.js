// router/modules/member.js
const home = [{
	//注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	path: '/pages/index/index',
	aliasPath: '/', //对于h5端你必须在首页加上aliasPath并设置为/
	name: 'index',
	meta: {
		title: '首页',
	},
}, {
	path: '/pages/index/member-center',
	name: 'member-center',
	meta: {
		title: '我的'
	}
}, {
	path: '/pages/index/order',
	name: 'order',
	meta: {
		title: '订单'
	}
}]
export default home
