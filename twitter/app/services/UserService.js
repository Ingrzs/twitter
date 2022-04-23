const user = require('./../../app/models/User')

class UserService {
    static create(id,username,name){
        return new user (id,username,name,"sinbio")
    }
}

module.exports =UserService