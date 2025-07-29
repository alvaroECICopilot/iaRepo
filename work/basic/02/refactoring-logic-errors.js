function processUsers(users) {
  for (let i = 0; i < users.length; i++) {
    console.log('*******************************');
    const user = users[i];
    try {
      if (typeof user.age !== 'number') {
        throw new Error('Invalid age value');
      }
      if (user.age >= 18) {
        console.log(user.name + ' is an adult.');
      } else {
        console.log(user.name + ' is not an adult.');
      }

      if (typeof user.email !== 'string') {
        throw new Error('Invalid email value');
      }
      if (user.email.includes('@')) {
        console.log(user.name + ' email is valid.');
      } else {
        console.log(user.name + ' email is invalid.');
      }

      if (user.subscription === 'premium') {
        console.log(user.name + ' has access to all features.');
      } else if (user.subscription === 'basic') {
        console.log(user.name + ' has limited access.');
      } else {
        console.log(user.name + ' has no access.');
      }
    } catch (error) {
      console.error(`Error processing user ${user.name}: ${error.message}`);
    }
  }
}

const users = [
  { name: 'Alice', age: 25, email: 'alice@example.com', subscription: 'premium' },
  { name: 'Bob', age: 17, email: 'bobexample.com', subscription: 'basic' },
  { name: 'Charlie', age: 30, email: 'charlie@example.com', subscription: 'none' },
];

processUsers(users);
