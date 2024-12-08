function randomString(max, min = 1) {
  // Generate a random length within the specified range
  const length = Math.floor(Math.random() * (max - min + 1)) + min;

  // Generate a random string of the specified length
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
