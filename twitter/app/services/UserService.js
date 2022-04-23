const user = require('./../../app/models/User')

class UserService {
    static create(id,username,name){
        return new user (id,username,name,"sinbio")
         
    }
    
    static getInfo(user){
        return [user.id,user.username,user.name,user.bio]
    }

    static updateUserUsername(user, newuser){
         return user.username = newuser
    }
}
module.exports =UserService