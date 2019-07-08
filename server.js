const express = require('express')
const path = require('path')
const ip = require('ip')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
const port = 1442
const urlConfig = require('./src/urlConfig.js')
// console.log(urlConfig)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,token');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Credentials", "true")
	next()
})

const appRes = (config) => {
	config.map(v => {
		const { fsUrl, methond, reqUrl, useQuery } = v
		app[methond](reqUrl, (req, res) => {
			const params = req.query
			const file1 = path.join(__dirname, 'src/json/' + fsUrl + '.json')
			const file2 = path.join(__dirname, './src/json/' + params.panelNO + '.json')
			const file = useQuery ? file2 : file1
			console.log(file)
			fs.readFile(file, 'utf-8', (err, data) => {
				if (err) {
					res.send('文件读取失败');
				} else {
					res.send(JSON.parse(data.toString()))
				}
			})
		})
	})
}

appRes(urlConfig)

app.listen(port, () => {
	console.log(`服务器已经启动 http://${ip.address()}:${port}`)
})