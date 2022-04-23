const UserServices = require('./../../app/services/UserService')

describe("Test para usuarios del servicio",()=>{

    test('Requerimiento uno', () =>{
    const user =  UserServices.create(1,"ramirozs","rzs")
    expect(user.username).toBe("ramirozs")
    expect(user.name).toBe("rzs")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
    })
} )