import { CarouselItemInterface } from "@componentes/components/core/CarouselItem";
import { GameProps } from "@componentes/components/core/GameCard";
import { TableData } from "@componentes/components/core/Table";
import type { Metadata } from "next";
import BallDashAvatar from "../assets/gallery/ballDash-avatar.png";
import BallDashThumbnail from "../assets/gallery/ballDash-thumbnail.png";
import DragonsAndKinghtsAvatar from "../assets/gallery/dragonsAndKnights-avatar.png";
import DragonsAndKingthsThumbnail from "../assets/gallery/dragonsAndKnights-thumbnail.png";
import {
  default as HoopshotAvatar,
  default as HoopshotThumbnail,
} from "../assets/gallery/hoopshot-thumbnail.png";
import KaratePandaAvatar from "../assets/gallery/karatePanda-avatar.png";
import KaratePandaThumbnail from "../assets/gallery/karatePanda-thumbnail.png";
import PillarsOfDefenseAvatar from "../assets/gallery/pillarsOfDefense-avatar.png";
import PillarsOfDefenseThumbnail from "../assets/gallery/pillarsOfDefense-thumbnail.png";
import RoyalBingoAvatar from "../assets/gallery/royalBingo-avatar.png";
import RoyalBingoThumbnail from "../assets/gallery/royalBingo-thumbnail.png";
import WordCraftAvatar from "../assets/gallery/wordCraft-avatar.png";
import WordCraftThumbnail from "../assets/gallery/wordCraft-thumbnail.png";
import RoyalBingoLeaderboardAvatar from "../assets/leaderboard/royalBingo-leaderboardAvatar.png";
import DragonsAndKinghtsLeaderboardAvatar from "../assets/leaderboard/dragonsAndKinghts-leaderboardAvatar.png";
import BallDashLeaderboardAvatar from "../assets/leaderboard/ballDash-leaderboardAvatar.png";
import KaratePandaLeaderboardAvatar from "../assets/leaderboard/karatePanda-leaderboardAvatar.png";
import WoodcraftTournament from "../assets/tournaments/woodcraft-tournament.png";
import RoyalBingoTournament from "../assets/tournaments/royalBingo-tournament.png";
import BallDashTournament from "../assets/tournaments/ballDash-tournament.png";
import DragonsAndKnightsTournament from "../assets/tournaments/dragonsAndKingths-tournament.png";

interface LeaderBoardData {
  [key: string]: TableData;
}

export const metadata: Metadata = {
  title: "Win App",
  description: "- Play to Win Crypto Rewards",
  icons: "../app/favicon.ico",
};

export const galleryData: GameProps[] = [
  {
    thumbnail: KaratePandaThumbnail,
    avatar: KaratePandaAvatar,
    creator: "Win Games",
    title: "Karate Panda",
    badge: "Battle",
    counter: "+2",
  },
  {
    thumbnail: WordCraftThumbnail,
    avatar: WordCraftAvatar,
    creator: "Win Games",
    title: "WordCraft",
    badge: "Puzzle",
    counter: "+2",
  },
  {
    thumbnail: BallDashThumbnail,
    avatar: BallDashAvatar,
    creator: "Win Games",
    title: "Ball Dash",
    badge: "Sport",
    counter: "+2",
  },
  {
    thumbnail: DragonsAndKingthsThumbnail,
    avatar: DragonsAndKinghtsAvatar,
    creator: "Win Games",
    title: "21 Kinghts and Dragons",
    badge: "Fantasy",
    counter: "+2",
  },
  {
    thumbnail: HoopshotThumbnail,
    avatar: HoopshotAvatar,
    creator: "Win Games",
    title: "Hoopshot",
    badge: "Strategy",
    counter: "+2",
  },
  {
    thumbnail: RoyalBingoThumbnail,
    avatar: RoyalBingoAvatar,
    creator: "Win Games",
    title: "Royal Bingo",
    badge: "Puzzle",
    counter: "+2",
  },
  {
    thumbnail: PillarsOfDefenseThumbnail,
    avatar: PillarsOfDefenseAvatar,
    creator: "Win Games",
    title: "Pillars of Defense",
    badge: "Battle",
    counter: "+2",
  },
];

export const tournamentsList: CarouselItemInterface[] = [
  {
    id: "carouselItem-1",
    thumbnail: WoodcraftTournament,
    title: "Woodcraft",
    avatars: [
      PillarsOfDefenseAvatar,
      RoyalBingoAvatar,
      DragonsAndKinghtsAvatar,
    ],
    playerCount: 12,
    reward: 100,
    currencyType: "yellow",
    entryFee: 15,
  },
  {
    id: "carouselItem-2",
    thumbnail: RoyalBingoTournament,
    title: "Royal Bingo",
    avatars: [
      PillarsOfDefenseAvatar,
      RoyalBingoAvatar,
      DragonsAndKinghtsAvatar,
    ],
    playerCount: 12,
    reward: 100,
    currencyType: "yellow",
    entryFee: 15,
  },
  {
    id: "carouselItem-3",
    thumbnail: BallDashTournament,
    title: "Ball Dash",
    avatars: [
      PillarsOfDefenseAvatar,
      RoyalBingoAvatar,
      DragonsAndKinghtsAvatar,
    ],
    playerCount: 12,
    reward: 100,
    currencyType: "blue",
    entryFee: 15,
  },
  {
    id: "carouselItem-4",
    thumbnail: DragonsAndKnightsTournament,
    title: "21 Knights and Dragons",
    avatars: [
      PillarsOfDefenseAvatar,
      RoyalBingoAvatar,
      DragonsAndKinghtsAvatar,
    ],
    playerCount: 12,
    reward: 100,
    currencyType: "blue",
    entryFee: 15,
  },
  {
    id: "carouselItem-5",
    thumbnail: WoodcraftTournament,
    title: "Woodcraft",
    avatars: [
      PillarsOfDefenseAvatar,
      RoyalBingoAvatar,
      DragonsAndKinghtsAvatar,
    ],
    playerCount: 12,
    reward: 100,
    currencyType: "blue",
    entryFee: 15,
  },
  {
    id: "carouselItem-6",
    thumbnail: WoodcraftTournament,
    title: "Woodcraft",
    avatars: [
      PillarsOfDefenseAvatar,
      RoyalBingoAvatar,
      DragonsAndKinghtsAvatar,
    ],
    playerCount: 12,
    reward: 100,
    currencyType: "blue",
    entryFee: 15,
  },
];

export const leaderboardData: LeaderBoardData = {
  latestWins: [
    {
      game: {
        title: "Royal Bingo",
        subtitle: "WinGames",
        avatar: RoyalBingoLeaderboardAvatar,
      },
      player: "AcidFlux",
      betAmount: "+12.00",
      multiplier: "0.00x",
      profit: "+12.00",
    },
    {
      game: {
        title: "Royal Bingo",
        subtitle: "WinGames",
        avatar: RoyalBingoLeaderboardAvatar,
      },
      player: "AdmiralScott123",
      betAmount: "+21.00",
      multiplier: "2.00x",
      profit: "+21.00",
    },
    {
      game: {
        title: "21 Knights & Dragons",
        subtitle: "WinGames",
        avatar: DragonsAndKinghtsLeaderboardAvatar,
      },
      player: "Hidden",
      betAmount: "+14.00",
      multiplier: "2.00x",
      profit: "+14.00",
    },
    {
      game: {
        title: "Ball Dash",
        subtitle: "WinGames",
        avatar: BallDashLeaderboardAvatar,
      },
      player: "Hidden",
      betAmount: "+32.00",
      multiplier: "2.00x",
      profit: "+32.00",
    },
    {
      game: {
        title: "Karate Panda",
        subtitle: "WinGames",
        avatar: KaratePandaLeaderboardAvatar,
      },
      player: "AlleyFrog777",
      betAmount: "+9.00",
      multiplier: "2.00x",
      profit: "+9.00",
    },
  ],
  bigWins: [
    {
      game: {
        title: "Mega Jackpot - Big Wins",
        subtitle: "WinGames",
        avatar: RoyalBingoLeaderboardAvatar,
      },
      player: "LuckyPlayer",
      betAmount: "+500.00",
      multiplier: "10.00x",
      profit: "+5000.00",
    },
    {
      game: {
        title: "Super Slots - Big Wins",
        subtitle: "WinGames",
        avatar: RoyalBingoLeaderboardAvatar,
      },
      player: "Winner123",
      betAmount: "+200.00",
      multiplier: "5.00x",
      profit: "+1000.00",
    },
    {
      game: {
        title: "Treasure Hunt - Big Wins",
        subtitle: "WinGames",
        avatar: DragonsAndKinghtsLeaderboardAvatar,
      },
      player: "GoldDigger",
      betAmount: "+150.00",
      multiplier: "4.00x",
      profit: "+600.00",
    },
    {
      game: {
        title: "Fortune Wheel - Big Wins",
        subtitle: "WinGames",
        avatar: BallDashLeaderboardAvatar,
      },
      player: "SpinMaster",
      betAmount: "+100.00",
      multiplier: "3.00x",
      profit: "+300.00",
    },
    {
      game: {
        title: "Lucky Dice - Big Wins",
        subtitle: "WinGames",
        avatar: KaratePandaLeaderboardAvatar,
      },
      player: "DiceKing",
      betAmount: "+75.00",
      multiplier: "2.50x",
      profit: "+187.50",
    },
  ],
};
