const UserService = require('./../../app/services/UserService')
class UserView {
    static createUser(payload){
        if(payload === null){
            console.log("Error es null")
            return {error: "El payload no existe."}    
    }

    else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
        return UserService.create(payload.id, payload.username, payload.name) //esto es para el requerimiento tres
      } else{
        return {error: "el payload necesitan tener un valor válido"}  //para el requeimiento dos ya que si no se cumple de que algun valor sea no valido
      }
}
}
module.exports = UserView