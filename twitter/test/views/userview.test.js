const UserView = require('./../../app/views/userview')
describe ("test para userview" ,() =>{

test('requerimiento uno vista',()=>{
    const payload = null
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/payload no existe/)
})

test("Requerimiento dos", () => {
    const payload = {username: null, name: 12, id: "id"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
  })

})