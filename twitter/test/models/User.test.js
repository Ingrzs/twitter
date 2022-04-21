const user = require('./../../app/models/User')

describe ("unit test class", () => {
  test('crear objeto', () => {
  const User = new User(1,"ramiro","rzs", "bio","datecreated","lastupdate")

expect(User.id).tobe(1);
expect(User.usermane).tobe("ramiro");
expect(User.name).tobe("rzs");
expect(User.bio).tobe("bio");
expect(User.dateCreated).tobe("datecreated");
expect(User.lastUpdate).tobe("lastupdate");
})
})
