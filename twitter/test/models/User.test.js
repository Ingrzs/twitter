const User = require('./../../app/models/User')

describe ("unit test class", () => {
  test ('crear objeto', () => {
  const usar = new User(1, "ramiro", "rzs", "bio")

expect(usar.id).toBe(1);
expect(usar.username).toBe("ramiro");
expect(usar.name).toBe("rzs");
expect(usar.bio).toBe("bio");
expect(usar.dateCreated).not.toBeUndefined();
expect(usar.lastUpdate).not.toBeUndefined();
})


test('prueba para los metodos', () =>{
const usar = new User(1,"ramiro","rzs","bio");
expect(usar.getusername).toBe("ramiro");
expect(usar.getbio).toBe("bio");
expect(usar.getDateCreated).not.toBeUndefined();
expect(usar.getLastUpdated).not.toBeUndefined();
})


})
