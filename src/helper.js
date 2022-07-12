export const setCookie = (name, value) => {
  const date = new Date();
  date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=None; Secure`;
};

export const getCookie = () => {
  if (!document.cookie.includes('refresh_token')) return null;
  return document.cookie.split(';').filter((cookie) => cookie.includes('refresh_token'))[0].split('=')[1];
};
