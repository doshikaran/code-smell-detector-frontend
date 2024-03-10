function summarizeUsers(users) {
    return users.map(user => ({
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      status: user.status === 'active' ? 'Active' : 'Inactive'
    }));
  }
  