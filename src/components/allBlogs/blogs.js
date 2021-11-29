import { createContext } from "react";

const allCategories = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1637133111206-6a1b88c476a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    title: "Catch waves with adventure guide",
    desc: "lorem ipsum",
    date: "21-sept",
    category: "bollywood",
  },
  {
    id: 2,
    imgUrl:
      "https://www.wallpaperflare.com/static/533/281/308/mountains-lake-photo-body-wallpaper-preview.jpg",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "travel",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1622373349450-1185d8359ea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "hollywood",
  },
  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1561357747-a5ebd644c2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "hollywood",
  },
  {
    id: 26,
    imgUrl:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "hollywood",
  },
  {
    id: 5,
    imgUrl:
      "https://media.istockphoto.com/photos/bollywood-picture-id689019358?k=20&m=689019358&s=612x612&w=0&h=WvGCfjEgCPfyuaaOIeYSPZru4EDlgTN7QuI9JZVZ0pA=",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "bollywood",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1562674111-fa6a64c1b345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Catch waves with adventure guide",
    desc: "lorem ipsum",
    date: "21-sept",
    category: "travel",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "travel",
  },
  {
    id: 8,
    imgUrl:
      "https://images.unsplash.com/photo-1637154199148-62dd57c5b6e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "food",
  },
  {
    id: 9,
    imgUrl:
      "https://images.unsplash.com/photo-1636972677998-d76f527e5576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "food",
  },
  {
    id: 10,
    imgUrl:
      "https://images.unsplash.com/photo-1606787619666-345f9a683fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "food",
  },
  {
    id: 24,
    imgUrl:
      "https://images.unsplash.com/photo-1633972767165-d4e890406190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "food",
  },
  {
    id: 11,
    imgUrl:
      "https://images.unsplash.com/photo-1604573714289-312a6972f67c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "food",
    views: 102,
  },
  {
    id: 12,
    imgUrl:
      "https://images.unsplash.com/photo-1635586148798-b0de0b74987b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "fitness",
  },
  {
    id: 25,
    imgUrl:
      "https://images.unsplash.com/photo-1565257057190-12376d0ab816?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3MnxfaGItZGw0US00VXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "fitness",
  },
  {
    id: 13,
    imgUrl:
      "https://images.unsplash.com/photo-1634630449037-512c3d5c857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "fitness",
  },
  {
    id: 22,
    imgUrl:
      "https://images.unsplash.com/photo-1584962243363-1822e9e9d1d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "fitness",
  },
  {
    id: 14,
    imgUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "technology",
  },
  {
    id: 15,
    imgUrl:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "technology",
    views: 102,
  },
  {
    id: 16,
    imgUrl:
      "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "technology",
  },
  {
    id: 17,
    imgUrl:
      "https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "bollywood",
  },
  {
    id: 20,
    imgUrl:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "home",
  },
  {
    id: 18,
    imgUrl:
      "https://images.unsplash.com/photo-1637355054940-b18363493271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "home",
  },
  {
    id: 19,
    imgUrl:
      "https://images.unsplash.com/photo-1635206936639-a81691418fbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept",
    category: "home",
    views: 102,
  },
  {
    id: 21,
    imgUrl:
      "https://images.unsplash.com/photo-1634926638859-841e6d65cf68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "Gujrat is vastly overrated and it's a mystery to us why the region isn't more well known as a tourist destination. it has a plethora of temples and palaces",
    title: "Joshua tree overnight adventure",
    date: "August 21 2017",
    category: "Travel",
  },
  {
    id: 22,
    imgUrl:
      "https://images.unsplash.com/photo-1634926638859-841e6d65cf68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "Gujrat is vastly overrated and it's a mystery to us why the region isn't more well known as a tourist destination. it has a plethora of temples and palaces",
    title: "Joshua tree overnight adventure",
    date: "August 21 2017",
    category: "Travel",
  },
  {
    id: 23,
    imgUrl:
      "https://images.unsplash.com/photo-1634926638859-841e6d65cf68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    desc: "Gujrat is vastly overrated and it's a mystery to us why the region isn't more well known as a tourist destination. it has a plethora of temples and palaces",
    title: "Joshua tree overnight adventure",
    date: "August 21 2017",
    category: "Travel",
  },
];

export const allBlogs = createContext(allCategories);
