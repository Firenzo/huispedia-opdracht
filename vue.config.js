// module.exports = {
// 	publicPath: "/huispedia-opdracht/dist/"
// }

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/huispedia-opdracht/dist/' : '/'
}