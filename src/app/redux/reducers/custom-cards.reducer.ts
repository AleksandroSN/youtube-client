import { createFeature, createReducer, on } from "@ngrx/store";
import { CUSTOM_CARD_FEATURE_KEY } from "@utils";
import { addCustomCard } from "../actions";
import { CustomCardsState } from "../state.models";

const INITIAL_STATE: CustomCardsState = {
  customCards: [],
};

export const customCardsFeature = createFeature({
  name: CUSTOM_CARD_FEATURE_KEY,
  reducer: createReducer(
    INITIAL_STATE,
    on(
      addCustomCard,
      (state, { customCard }): CustomCardsState => ({
        ...state,
        customCards: [...state.customCards, customCard],
      }),
    ),
  ),
});
