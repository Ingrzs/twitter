const UserServices = require('./../../app/services/UserService')

describe("Test para usuarios del servicio",()=>{

    test('Requerimiento uno', () =>{
    const user =  UserServices.create(1,"ramirozs","rzs")
    expect(user.username).toBe("ramirozs")
    expect(user.name).toBe("rzs")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
    })


   test('Requerimiento dos',() =>{
       const user = UserServices.create(1,"ramirozs", "rzs")
       const userlista = UserServices.getInfo(user)
       expect(userlista[0]).toBe(1)  
       expect(userlista[1]).toBe("ramirozs")
       expect(userlista[2]).toBe("rzs")
       expect(userlista[3]).toBe("sinbio") 
   })


  

} )