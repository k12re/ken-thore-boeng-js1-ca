export function checkMail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const mailPattern = regEx.test(email);
  return mailPattern;
}
