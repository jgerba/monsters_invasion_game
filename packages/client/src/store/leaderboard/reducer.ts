import { createSelector, createSlice } from "@reduxjs/toolkit";
import { LeaderboardState } from "./type";
import { RootState } from "..";

const initialState: LeaderboardState = {
  data: [
    {
      id: 1,
      user: {
        name: "Sergrage",
        login: "elenergetica87",
        avatar: "/src/assets/img/user1.png",
      },
      rank: 1,
      zombieKills: 134,
      earnMoney: 2650,
      date: "02.05.2024",
    },
    {
      id: 2,
      user: {
        name: "UserName2",
        login: "zombiKiller226",
        avatar: "/src/assets/img/user2.png",
      },
      rank: 3,
      zombieKills: 112,
      earnMoney: 1650,
      date: "03.05.2024",
    },
    {
      id: 3,
      user: {
        name: "UserName3",
        login: "-^_^- sushilover ~(_8^(|)",
        avatar: "/src/assets/img/user3.png",
      },
      rank: 2,
      zombieKills: 120,
      earnMoney: 1900,
      date: "03.05.2024",
    },
    {
      id: 4,
      user: {
        name: "UserName4",
        login: "Раджа",
        avatar: "/src/assets/img/",
      },
      rank: 4,
      zombieKills: 20,
      earnMoney: 200,
      date: "04.05.2024",
    },
    {
      id: 5,
      user: {
        name: "UserName5",
        login: "Frodo",
        avatar: "/src/assets/img/user1.png",
      },
      rank: 6,
      zombieKills: 87,
      earnMoney: 1450,
      date: "05.05.2024",
    },
    {
      id: 6,
      user: {
        name: "UserName6",
        login: "Chuck Norris Cherry",
        avatar: "/src/assets/img/user1.png",
      },
      rank: 8,
      zombieKills: 62,
      earnMoney: 980,
      date: "06.05.2024",
    },
    {
      id: 7,
      user: {
        name: "UserName7",
        login: "NakedGiraffe",
        avatar: "/src/assets/img/user2.png",
      },
      rank: 10,
      zombieKills: 50,
      earnMoney: 750,
      date: "07.05.2024",
    },
    {
      id: 8,
      user: {
        name: "UserName8",
        login: "SmileySnail42",
        avatar: "/src/assets/img/user1.png",
      },
      rank: 12,
      zombieKills: 40,
      earnMoney: 600,
      date: "08.05.2024",
    },
    {
      id: 9,
      user: {
        name: "UserName49",
        login: "FunnyFroggy23",
        avatar: "/src/assets/img/user3.png",
      },
      rank: 14,
      zombieKills: 30,
      earnMoney: 450,
      date: "09.05.2024",
    },
    {
      id: 10,
      user: {
        name: "UserName10",
        login: "Gorilla",
        avatar: "/src/assets/img/user1.png",
      },
      rank: 16,
      zombieKills: 20,
      earnMoney: 300,
      date: "10.05.2024",
    },
    {
      id: 11,
      user: {
        name: "UserName411",
        login: "Baba-Jaguar",
        avatar: "/src/assets/img/user1.png",
      },
      rank: 18,
      zombieKills: 15,
      earnMoney: 200,
      date: "11.05.2024",
    },
    {
      id: 12,
      user: {
        name: "UserName12",
        login: "AmericanPie2",
        avatar: "/src/assets/img/user2.png",
      },
      rank: 20,
      zombieKills: 10,
      earnMoney: 150,
      date: "12.05.2024",
    },
    {
      id: 13,
      user: {
        name: "UserName13",
        login: "AssFIRE",
        avatar: "/src/assets/img/user3.png",
      },
      rank: 22,
      zombieKills: 5,
      earnMoney: 100,
      date: "13.05.2024",
    },
    {
      id: 14,
      user: {
        name: "UserName14",
        login: "CHikotillo",
        avatar: "/src/assets/img/user1.png",
      },
      rank: 24,
      zombieKills: 2,
      earnMoney: 50,
      date: "14.05.2024",
    },
  ],
  loading: false,
};

export const leaderboardSlice = createSlice({
  initialState,
  name: "leaderboard",
  reducers: {},
});

export const getLeaderBoardState = createSelector(
  (state: RootState) => state.leaderboard,
  item => item,
);
