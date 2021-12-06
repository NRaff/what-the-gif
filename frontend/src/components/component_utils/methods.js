export const gameKey = (length) => {
  let characterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < length; i++) {
    key += characterList.charAt(Math.floor(Math.random() * characterList.length));
  }
  return key;
}
