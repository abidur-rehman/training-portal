db.auth('admin', 'example')

db = db.getSiblingDB('lms')

db.createUser(
  {
    user: "user2",
    pwd: "password",
    roles: [ "readWrite", "lms" ]
  }
)