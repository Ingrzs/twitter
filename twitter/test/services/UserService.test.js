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
   
   test('Requerimiento tres', () =>{
    const user = UserServices.create(1,"ramirozs","rzs")
    UserServices.updateUserUsername(user,"ramirito")
    expect(user.username).toBe("ramirito")
})

  test('Requerimiento cuatro',()=>{
      const user1 = UserServices.create(1,"ramirozs1","rzs")
      const user2 = UserServices.create(1,"ramirozs2","rzs")
      const user3 = UserServices.create(1,"ramirozs3","rzs")
      const usernames = UserServices.getAllUsernames([user1,user2,user3])
      expect(usernames).toContain("ramirozs1")
      expect(usernames).toContain("ramirozs2")
      expect(usernames).toContain("ramirozs3")

  })

} )