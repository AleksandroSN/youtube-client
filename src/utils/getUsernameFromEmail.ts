export const getUsernameFromEmail = (str: string): string => str.substring(str.indexOf("@"), -1);
