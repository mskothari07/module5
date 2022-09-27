let greet = (user: string): string => {
  return `Hello ${user}`;
};

function greet2(user: string): string {
  return `hello ${user}`;
}

console.log(greet("Meet"));
console.log(greet2("Meet"));
