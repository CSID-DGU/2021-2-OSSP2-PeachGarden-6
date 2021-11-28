import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const searchState = atom({
  key: "searchState",
  default: {
    role: "타자",
    team: "두산",
    position: "C",
    name: null,
  },
});

export const playerListState = atom({
  key: "playerList",
  default: [],
});

export const selectedPlayerState = atom({
  key: "selectedPlayer",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
