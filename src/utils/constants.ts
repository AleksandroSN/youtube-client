/* eslint-disable no-useless-escape */
export enum RegExForInputValidation {
  minLength = "^(?=.{8,})",
  upperAndLowerCase = "^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})",
  numbersAndLetters = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
  specialChar = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
  urlValid = "^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$",
}
