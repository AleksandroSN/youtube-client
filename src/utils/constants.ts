export enum RegExForInputValidation {
  minLength = "^(?=.{8,})",
  upperAndLowerCase = "^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})",
  numbersAndLetters = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
  specialChar = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
}
