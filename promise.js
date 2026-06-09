function login(email, password) {
  try {
    if (!email) {
      throw new Error("Email is required");
    }

    if (!password) {
      throw new Error("Password is required");
    }

    console.log("Login successful");
  } catch (error) {
    console.error(error.message);
  }
}

login("", "123456");