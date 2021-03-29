const params = {
  server:{
     host: 'localhost'
   , port: 8080
   , get url(){ return 'http://' + this.host + ':' + this.port } 
  },
}

module.exports = params

