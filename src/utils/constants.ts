/* eslint-disable no-useless-escape */
export const RegExForInputValidation = {
  minLength: "^(?=.{8,})",
  upperAndLowerCase: "^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})",
  numbersAndLetters: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
  specialChar: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
  urlValid:
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
};

export const FAKE_TOKEN = "SAFDSFADFDJKHJBJf";
export const LOCAL_STORAGE_KEY = "auth_data";

export const LOGIN_PAGE = "login";
export const ADMIN_PAGE = "admin";
export const VIDEO_PAGE = "video";

export const SORT_BY_DATE = "publishedAt";
export const SORT_BY_COUNT = "viewCount";

export const BORDER_BOTTOM_BLUE = "blue-progress";
export const BORDER_BOTTOM_GREEN = "green-progress";
export const BORDER_BOTTOM_YELLOW = "yellow-progress";
export const BORDER_BOTTOM_RED = "red-progress";

export const WEEK = 7;
export const MONTH = 30;
export const HALF_YEAR = 180;

export const LOGIN_INPUT = "login";
export const PASSWORD_INPUT = "password";
export const TITLE_INPUT = "title";
export const DESCRIPTION_INPUT = "description";
export const IMG_LINK_INPUT = "imgLink";
export const VIDEO_LINK_INPUT = "videoLink";
export const DATE_INPUT = "date";

export const DEBOUNCE_TIME = 700;
export const MIN_LENGTH_CHARACTERS = 3;
export const API_URL = "https://www.googleapis.com/youtube/v3/";
export const CHUNK_SEARCH_URL = "search?type=video&maxResults=15&q=";
export const CHUNK_VIDEO_URL = "videos?part=snippet,statistics&id=";

// REDUX
export const CUSTOM_CARD_FEATURE_KEY = "customCardsFeature";
export const YOUTUBE_CARD_FEATURE_KEY = "youtubeCardsFeature";
export enum CustomCardsActionsName {
  ADD = "[Custom Card] custom card is add",
}
export enum YoutubeCardsActionsName {
  ADD = "[Youtube Card] card from youtube is add",
}
export enum CardActionsName {
  NEW_CARD = "[CARD] recieved new card",
  NEW_INPUT = "[INPUT] recived new input",
}
