const userSchema = new Schema({
    firstName: {
      type: String,
      unique: false
    },
    lastName: {
      type: String,
      unique: false
    },
    local: {
      username: {
        type: String,
        unique: false,
        required: false
      },
      password: {
        type: String,
        unique: false,
        required: false
      },
      google: {
        googleID: {
          type: String,
          requied: false
        }
      },
      photos: []
    }
  });