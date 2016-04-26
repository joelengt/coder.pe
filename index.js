//Modulos y Dependencias
var express = require('express')
var app = express()
var http = require('http').Server(app)

var path = require('path')
var logger = require('morgan')
var favicon = require('serve-favicon')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

// Configuración del servidor
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, './views'))

app.use(express.static(path.join(__dirname, './public')))
app.use(logger('dev'))
app.use(cookieParser())

app.use(favicon(path.join(__dirname, './public/images/favicom.ico')))

// Error 404
app.use(function (req, res) {
	res.statusCode = 404
	res.send('Error Pagina No Encontrada')
})

// Error 500
app.use(function (req, res) {
	res.statusCode = 500
	res.send('Error del Servidor, Porfavor intentelo más tarde')
})

//Start server

http.listen(app.set('port'), function (err) {
	if(err) {
		return console.log('Error al iniciar el server en el puerto: ' + app.set('port') + ', detalles: ' +err)
	}
	console.log('Server iniciado en el puerto exitosamente: ' + app.set('port'))

})
