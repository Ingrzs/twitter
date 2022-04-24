const UserView = require('./../../app/views/userview')
describe ("test para userview" ,() =>{

test('requerimiento uno vista',()=>{
    const payload = null
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/payload no existe/)
})

})