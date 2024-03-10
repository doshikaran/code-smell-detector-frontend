function processUserData(users) {
  let processedUsers = [];
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let userData = {};
    userData.id = user.id;
    userData.fullName = user.firstName + " " + user.lastName;
    userData.email = user.email;
    userData.isActive = user.status === "active";
    if (user.address) {
      userData.address =
        user.address.street +
        ", " +
        user.address.city +
        ", " +
        user.address.zip;
    } else {
      userData.address = "Not provided";
    }
    if (user.birthDate) {
      let birthDate = new Date(user.birthDate);
      let ageDifMs = Date.now() - birthDate.getTime();
      let ageDate = new Date(ageDifMs);
      userData.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    } else {
      userData.age = "Unknown";
    }
    if (user.subscriptions) {
      userData.subscriptions = user.subscriptions
        .map((subscription) => subscription.name)
        .join(", ");
    } else {
      userData.subscriptions = "None";
    }
    processedUsers.push(userData);
  }
  return processedUsers;
}

function summarizeUsers(users) {
  return users.map((user) => ({
    id: user.id,
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.email,
    status: user.status === "active" ? "Active" : "Inactive",
  }));
}

function processedUsers(users) {
  let processedUsers = [];
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let userData = {};
    userData.id = user.id;
    userData.fullName = user.firstName + " " + user.lastName;
    userData.email = user.email;
    userData.isActive = user.status === "active";
    if (user.address) {
      userData.address =
        user.address.street +
        ", " +
        user.address.city +
        ", " +
        user.address.zip;
    } else {
      userData.address = "Not provided";
    }
    if (user.birthDate) {
      let birthDate = new Date(user.birthDate);
      let ageDifMs = Date.now() - birthDate.getTime();
      let ageDate = new Date(ageDifMs);
      userData.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    } else {
      userData.age = "Unknown";
    }
    if (user.subscriptions) {
      userData.subscriptions = user.subscriptions
        .map((subscription) => subscription.name)
        .join(", ");
    } else {
      userData.subscriptions = "None";
    }
    processedUsers.push(userData);
  }
  return processedUsers;
}
