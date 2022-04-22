class User {
constructor(id,username,name,bio,dateCreated,lastUpdate){
    this.id = id
    this.username = username
    this.name = name
    this.bio = bio
    this.dateCreated = new Date()
    this.lastUpdate = new Date()
}
    get getusername (){
       return this.username
    }

    get getbio(){
        return this.bio
    }
    
    get getDateCreated(){
        return this.dateCreated
    }

    get getLastUpdated(){
        return this.lastUpdate
    }


     set setusername(newusername){
         this.username = newusername
     }

     set setbio(newbio){
         this.bio = newbio
     }

}
module.exports = User