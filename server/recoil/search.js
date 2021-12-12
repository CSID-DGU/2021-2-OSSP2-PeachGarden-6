import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const searchState = atom({
  key: "searchState",
  default: {
    role: "타자",
    team: "두산",
    position: "전체",
    name: null,
  },
});

export const playerListState = atom({
  key: "playerList",
  default: [],
});

export const playerRoleState = atom({
  key: "playerRole",
  default: '타자',
  effects_UNSTABLE: [persistAtom],
});


export const selectedPlayerState = atom({
  key: "selectedPlayer",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
