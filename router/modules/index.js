// router/modules/index.js
const files = require.context('.', false, /\.js$/)
const modules = [{
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

files.keys().forEach(key => {
	if (key === './index.js') return
	const item = files(key).default
	modules.push(...item)
})

export default modules
