import { atom } from "recoil";

export const searchState = atom({
  key: 'searchState',
  default: {
    role: '타자',
    team: '두산',
    position: 'C',
    name: null,
  }
})