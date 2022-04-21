const User = require('./../../app/models/User')

describe ("unit test class", () => {
  test ('crear objeto', () => {
  const usar = new User(1, "ramiro", "rzs", "bio", "dateCreated", "lastUpdate")

expect(usar.id).toBe(1);
expect(usar.username).toBe("ramiro");
expect(usar.name).toBe("rzs");
expect(usar.bio).toBe("bio");
expect(usar.dateCreated).toBe("dateCreated");
expect(usar.lastUpdate).toBe("lastUpdate");
})
})
