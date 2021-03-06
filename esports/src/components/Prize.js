import React from "react";
import { Bubble } from "react-chartjs-2";

const dataYear = {
  2018:[
   {
     label: ["Dota 2"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:41420078.99,r:1118/25,y:167}
    ]
    },
   {
      label: ["Counter-Strike: Global Offensive"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:22657892.39,r:4548/25,y:828}
     ]
   },
   {
    label: ["Fortnite"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:20055832.14,r:1442/25,y:174}
     ]
   },
   {
    label: ["League of Legends"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:14512216.23,r:1799/25,y:178}
     ]
   },
   {
    label: ["PLAYERUNKNOWN’S BATTLEGROUNDS"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:7572167.16,r:1473/25,y:107}
     ]
   },
   {
    label: ["Overwatch"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:6590091.65,r:1452/25,y:95}
     ]
   },
   {
    label: ["Heroes of the Storm"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:5277279.76,r:368/25,y:34}
     ]
   },
   {
    label: ["Hearthstone"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:4711852.27,r:828/25,y:131}
     ]
   },
   {
    label: ["Call of Duty: World War II	"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:4276751.83,r:220/25,y:38}
     ]
   },
   {
    label: ["Starcraft II"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:4013357.65,r:364/25,y:434}
     ]
   },
   {
    label: ["Arena of Valor"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:3324141.25,r:210/25,y:18}
     ]
   },
   {
    label: ["Rocket League"],
    backgroundColor: "rgba(7, 178, 64, 0.6)",
    borderColor: "rgba(7, 178, 64, 1)",
      data: [
        {x:2297363.32,r:287/25,y:74}
     ]
   },
   {
    label: ["FIFA 18"],
    backgroundColor: "rgba(163, 53, 72, 0.6)",
    borderColor: "rgba(163, 53, 72, 1)",
      data: [
        {x:2178215.26,r:223/25,y:35}
     ]
   },
 ],
  2017:[
     {
       label: ["Dota 2"],
       backgroundColor: "rgba(252, 52, 92, 0.6)",
       borderColor: "rgba(252, 52, 92, 0.6)",
       data: [
         {x:38054862.80,r:1002/25,y:160}
      ]
      },
     {
        label: ["Counter-Strike: Global Offensive"],
        backgroundColor: "rgba(142, 165, 235, 0.6)",
        borderColor: "rgba(142, 165, 235, 0.6)",
        data: [
          {x:19265587.57,r:4768/25,y:902}
       ]
     },
     {
      label: ["League of Legends"],
      backgroundColor: "rgba(255, 221, 0, 0.6)",
      borderColor: "rgba(255, 221, 0, 0.6)",
        data: [
          {x:12192063.76,r:1874/25,y:180}
       ]
     },
     {
      label: ["Heroes of the Storm"],
      backgroundColor: "rgba(163, 222, 131, 0.6)",
      borderColor: "rgba(163, 222, 131, 0.6)",
        data: [
          {x:5444449.54,r:441/25,y:41}
       ]
     },
     {
      label: ["Call of Duty: Infinite Warfare"],
      backgroundColor: "rgba(175, 80, 175, 0.6)",
      borderColor: "rgba(175, 80, 175, 1)",
        data: [
          {x:4027894.95,r:298/25,y:72}
       ]
     },
     {
      label: ["Hearthstone"],
      backgroundColor: "rgba(187, 156, 42, 0.6)",
      borderColor: "rgba(187, 156, 42, 1)",
        data: [
          {x:3476623.09,r:678/25,y:122}
       ]
     },
     {
      label: ["Overwatch"],
      backgroundColor: "rgba(232, 67, 150, 0.6)",
      borderColor: "rgba(232, 67, 150, 1)",
        data: [
          {x:3468515.83,r:1531/25,y:265}
       ]
     },
     {
      label: ["StarCraft II"],
      backgroundColor: "rgba(43, 211, 230, 0.6)",
      borderColor: "rgba(43, 211, 230, 1)",
        data: [
          {x:3407271.15,r:377/25,y:645}
       ]
     },
     {
      label: ["Halo 5: Guardians"],
      backgroundColor: "rgba(137, 172, 158, 0.6)",
      borderColor: "rgba(137, 172, 158, 1)",
        data: [
          {x:1748000.00,r:99/25,y:14}
       ]
     },
     {
      label: ["SMITE"],
      backgroundColor: "rgba(246, 178, 138, 0.6)",
      borderColor: "rgba(246, 178, 138, 1)",
        data: [
          {x:1567900.00,r:143/25,y:8}
       ]
     },
     {
      label: ["H1Z1"],
      backgroundColor: "rgba(183, 202, 125, 0.6)",
      borderColor: "rgba(183, 202, 125, 1)",
        data: [
          {x:1551550.00	,r:88/25,y:8}
       ]
     },
     {
      label: ["CrossFire"],
      backgroundColor: "rgba(7, 178, 64, 0.6)",
      borderColor: "rgba(7, 178, 64, 1)",
        data: [
          {x:1519054.74,r:169/25,y:36}
       ]
     },
     {
      label: ["Quake Champions"],
      backgroundColor: "rgba(163, 53, 72, 0.6)",
      borderColor: "rgba(163, 53, 72, 1)",
        data: [
          {x:1481152.31,r:127/25,y:55}
       ]
     },
   ],
  2016:[
    {
      label: ["Dota 2"],
      backgroundColor: "rgba(252, 52, 92, 0.6)",
      borderColor: "rgba(252, 52, 92, 0.6)",
      data: [
        {x:37454419.92,r:896/25,y:153}
     ]
     },
    {
       label: ["Counter-Strike: Global Offensive"],
       backgroundColor: "rgba(142, 165, 235, 0.6)",
       borderColor: "rgba(142, 165, 235, 0.6)",
       data: [
         {x:17257390.23,r:4378/25,y:856}
      ]
    },
    {
     label: ["League of Legends"],
     backgroundColor: "rgba(255, 221, 0, 0.6)",
     borderColor: "rgba(255, 221, 0, 0.6)",
       data: [
         {x:10517828.44,r:1580/25,y:179}
      ]
    },
    {
     label: ["Heroes of the Storm"],
     backgroundColor: "rgba(163, 222, 131, 0.6)",
     borderColor: "rgba(163, 222, 131, 0.6)",
       data: [
         {x:4663149.10,r:388/25,y:63}
      ]
    },
    {
     label: ["Call of Duty: Black Ops III"],
     backgroundColor: "rgba(175, 80, 175, 0.6)",
     borderColor: "rgba(175, 80, 175, 1)",
       data: [
         {x:3853863.62,r:365/25,y:54}
      ]
    },
    {
     label: ["Hearthstone"],
     backgroundColor: "rgba(187, 156, 42, 0.6)",
     borderColor: "rgba(187, 156, 42, 1)",
       data: [
         {x:3455125.46,r:582/25,y:134}
      ]
    },
    {
     label: ["Halo 5: Guardians"],
     backgroundColor: "rgba(232, 67, 150, 0.6)",
     borderColor: "rgba(232, 67, 150, 1)",
       data: [
         {x:3411240.03,r:176/25,y:36}
      ]
    },
    {
     label: ["StarCraft II"],
     backgroundColor: "rgba(43, 211, 230, 0.6)",
     borderColor: "rgba(43, 211, 230, 1)",
       data: [
         {x:3182218.75,r:412/25,y:650}
      ]
    },
    {
     label: ["Overwatch"],
     backgroundColor: "rgba(137, 172, 158, 0.6)",
     borderColor: "rgba(137, 172, 158, 1)",
       data: [
         {x:1990735.16,r:1186/25	,y:260}
      ]
    },
    {
     label: ["SMITE"],
     backgroundColor: "rgba(246, 178, 138, 0.6)",
     borderColor: "rgba(246, 178, 138, 1)",
       data: [
         {x:1638242.04,r:316/25,y:21}
      ]
    },
    {
     label: ["CrossFire"],
     backgroundColor: "rgba(183, 202, 125, 0.6)",
     borderColor: "rgba(183, 202, 125, 1)",
       data: [
         {x:887159.96,r:152/25,y:20}
      ]
    },
    {
     label: ["Street Fighter V"],
     backgroundColor: "rgba(7, 178, 64, 0.6)",
     borderColor: "rgba(7, 178, 64, 1)",
       data: [
         {x:867026.88,r:135/25,y:60}
      ]
    },
    {
     label: ["FIFA Online 3"],
     backgroundColor: "rgba(163, 53, 72, 0.6)",
     borderColor: "rgba(163, 53, 72, 1)",
       data: [
         {x:835082.40,r:35/25,y:3}
      ]
    },
  ],
  2015:[
   {
     label: ["Dota 2"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:31035370.86	,r:986/25,y:226}
    ]
    },
   {
      label: ["League of Legends"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:7713989.66,r:1907/25,y:307}
     ]
   },
   {
    label: ["Counter-Strike: Global Offensive"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:6282272.07,r:3000/25,y:705}
     ]
   },
   {
    label: ["SMITE"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:3709088.73,r:252/25,y:42}
     ]
   },
   {
    label: ["StarCraft II"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:3016193.36,r:500/25,y:688}
     ]
   },
   {
    label: ["Call of Duty: Advanced Warfare"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:2479868.75,r:751/25,y:363}
     ]
   },
   {
    label: ["Heroes of the Storm"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:2470686.83,r:666/25,y:286}
     ]
   },
   {
    label: ["Hearthstone"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:2369583.73,r:558/25,y:250}
     ]
   },
   {
    label: ["World of Tanks"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:1203054.52,r:248/25,y:20}
     ]
   },
   {
    label: ["Heroes of Newerth"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:810839.41,r:261/25,y:76}
     ]
   },
   {
    label: ["Ultra Street Fighter IV"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:642578.64,r:148/25,y:123}
     ]
   },
   {
    label: ["Super Smash Bros. Melee"],
    backgroundColor: "rgba(7, 178, 64, 0.6)",
    borderColor: "rgba(7, 178, 64, 1)",
      data: [
        {x:514782.37,r:554/25,y:532}
     ]
   },
   {
    label: ["CrossFire"],
    backgroundColor: "rgba(163, 53, 72, 0.6)",
    borderColor: "rgba(163, 53, 72, 1)",
      data: [
        {x:500714.08,r:133/25,y:73}
     ]
   },
 ],
  2014:[
    {
      label: ["Dota 2"],
      backgroundColor: "rgba(252, 52, 92, 0.6)",
      borderColor: "rgba(252, 52, 92, 0.6)",
      data: [
        {x:16580231.09,r:667/8,y:145}
     ]
     },
    {
       label: ["League of Legends"],
       backgroundColor: "rgba(142, 165, 235, 0.6)",
       borderColor: "rgba(142, 165, 235, 0.6)",
       data: [
         {x:8057290.99,r:1633/8,y:428}
      ]
    },
    {
     label: ["StarCraft II"],
     backgroundColor: "rgba(255, 221, 0, 0.6)",
     borderColor: "rgba(255, 221, 0, 0.6)",
       data: [
         {x:3468615.03,r:500/8,y:608}
      ]
    },
    {
     label: ["Counter-Strike: Global Offensive"],
     backgroundColor: "rgba(163, 222, 131, 0.6)",
     borderColor: "rgba(163, 222, 131, 0.6)",
       data: [
         {x:1960427.74,r:1395/8,y:277}
      ]
    },
    {
     label: ["Call of Duty: Ghosts"],
     backgroundColor: "rgba(175, 80, 175, 0.6)",
     borderColor: "rgba(175, 80, 175, 1)",
       data: [
         {x:1516491.95,r:176/8,y:61}
      ]
    },
    {
     label: ["Hearthstone"],
     backgroundColor: "rgba(187, 156, 42, 0.6)",
     borderColor: "rgba(187, 156, 42, 1)",
       data: [
         {x:1123245.18,r:309/8,y:177}
      ]
    },
    {
     label: ["World of Tanks"],
     backgroundColor: "rgba(232, 67, 150, 0.6)",
     borderColor: "rgba(232, 67, 150, 1)",
       data: [
         {x:882436.68,r:64/8,y:7}
      ]
    },
    {
     label: ["CrossFire"],
     backgroundColor: "rgba(43, 211, 230, 0.6)",
     borderColor: "rgba(43, 211, 230, 1)",
       data: [
         {x:506348.43,r:187/8,y:46}
      ]
    },
    {
     label: ["SMITE"],
     backgroundColor: "rgba(137, 172, 158, 0.6)",
     borderColor: "rgba(137, 172, 158, 1)",
       data: [
         {x:497909.60,r:81/8,y:10}
      ]
    },
    {
     label: ["Heroes of Newerth"],
     backgroundColor: "rgba(246, 178, 138, 0.6)",
     borderColor: "rgba(246, 178, 138, 1)",
       data: [
         {x:486110.24,r:249/8,y:87}
      ]
    },
    {
     label: ["World of WarCraft"],
     backgroundColor: "rgba(183, 202, 125, 0.6)",
     borderColor: "rgba(183, 202, 125, 1)",
       data: [
         {x:250000.00,r:24/8,y:1}
      ]
    },
    {
     label: ["WarCraft III"],
     backgroundColor: "rgba(7, 178, 64, 0.6)",
     borderColor: "rgba(7, 178, 64, 1)",
       data: [
         {x:215181.80,r:47/8,y:29}
      ]
    },
    {
     label: ["Super Smash Bros. Melee"],
     backgroundColor: "rgba(163, 53, 72, 0.6)",
     borderColor: "rgba(163, 53, 72, 1)",
       data: [
         {x:163317.73,r:360/8,y:266}
      ]
    },
  ],
  2013:[
   {
     label: ["League of Legends"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:6204728.89,r:1201/6,y:366}
    ]
    },
   {
      label: ["Dota 2"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:4520435.80,r:429/6,y:113}
     ]
   },
   {
    label: ["StarCraft II"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:3834756.44,r:606/6,y:496}
     ]
   },
   {
    label: ["Call of Duty: Black Ops 2"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:1426995.53,r:165/6,y:47}
     ]
   },
   {
    label: ["Counter-Strike: Global Offensive"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:1211869.54,r:1000/6,y:199}
     ]
   },
   {
    label: ["Turbo Racing League"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:1000000.00,r:16/6,y:9}
     ]
   },
   {
    label: ["Heroes of Newerth"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:649870.10,r:315/6,y:96}
     ]
   },
   {
    label: ["FIFA 13"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:441149.41,r:43/6,y:44}
     ]
   },
   {
    label: ["Madden NFL 2013"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:400000.00,r:8/6,y:1}
     ]
   },
   {
    label: ["Halo 4"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:371798.76,r:55/6,y:15}
     ]
   },
   {
    label: ["World of Tanks"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:329000.00,r:47/6,y:6}
     ]
   },
   {
    label: ["CrossFire"],
    backgroundColor: "rgba(7, 178, 64, 0.6)",
    borderColor: "rgba(7, 178, 64, 1)",
      data: [
        {x:270618.52,r:207/6,y:68}
     ]
   },
   {
    label: ["World of WarCraft"],
    backgroundColor: "rgba(163, 53, 72, 0.6)",
    borderColor: "rgba(163, 53, 72, 1)",
      data: [
        {x:189000.00,r:12/6,y:1}
     ]
   },
 ],
  2012:[
  {
    label: ["League of Legends"],
    backgroundColor: "rgba(252, 52, 92, 0.6)",
    borderColor: "rgba(252, 52, 92, 0.6)",
    data: [
      {x:4281489.09,r:919/6,y:388}
   ]
   },
  {
     label: ["StarCraft II"],
     backgroundColor: "rgba(142, 165, 235, 0.6)",
     borderColor: "rgba(142, 165, 235, 0.6)",
     data: [
       {x:4199246.79,r:672/6,y:695}
    ]
  },
  {
   label: ["Dota 2"],
   backgroundColor: "rgba(255, 221, 0, 0.6)",
   borderColor: "rgba(255, 221, 0, 0.6)",
     data: [
       {x:2078193.31,r:237/6,y:86}
    ]
  },
  {
   label: ["Counter-Strike"],
   backgroundColor: "rgba(163, 222, 131, 0.6)",
   borderColor: "rgba(163, 222, 131, 0.6)",
     data: [
       {x:547584.85,r:535/6,y:65}
    ]
  },
  {
   label: ["Heroes of Newerth"],
   backgroundColor: "rgba(175, 80, 175, 0.6)",
   borderColor: "rgba(175, 80, 175, 1)",
     data: [
       {x:341962.28,r:307/6,y:63}
    ]
  },
  {
   label: ["Counter-Strike: Global Offensive"],
   backgroundColor: "rgba(187, 156, 42, 0.6)",
   borderColor: "rgba(187, 156, 42, 1)",
     data: [
       {x:222538.77,r:306/6,y:48}
    ]
  },
  {
   label: ["Counter-Strike: Source"],
   backgroundColor: "rgba(232, 67, 150, 0.6)",
   borderColor: "rgba(232, 67, 150, 1)",
     data: [
       {x:214637.92,r:291/6,y:35}
    ]
  },
  {
   label: ["World of WarCraft"],
   backgroundColor: "rgba(43, 211, 230, 0.6)",
   borderColor: "rgba(43, 211, 230, 1)",
     data: [
       {x:208500.00,r:15/6,y:2}
    ]
  },
  {
   label: ["Defense of the Ancients"],
   backgroundColor: "rgba(137, 172, 158, 0.6)",
   borderColor: "rgba(137, 172, 158, 1)",
     data: [
       {x:205438.37,r:113/6,y:11}
    ]
  },
  {
   label: ["World of Tanks"],
   backgroundColor: "rgba(246, 178, 138, 0.6)",
   borderColor: "rgba(246, 178, 138, 1)",
     data: [
       {x:123502.27,r:67/6,y:9}
    ]
  },
  {
   label: ["Super Street Fighter IV Arcade Edition"],
   backgroundColor: "rgba(183, 202, 125, 0.6)",
   borderColor: "rgba(183, 202, 125, 1)",
     data: [
       {x:107590.66,r:61/6,y:39}
    ]
  },
  {
   label: ["StarCraft: Brood War"],
   backgroundColor: "rgba(7, 178, 64, 0.6)",
   borderColor: "rgba(7, 178, 64, 1)",
     data: [
       {x:106816.29,r:52/6,y:31}
    ]
  },
  {
   label: ["Counter-Strike Online"],
   backgroundColor: "rgba(163, 53, 72, 0.6)",
   borderColor: "rgba(163, 53, 72, 1)",
     data: [
       {x:106108.00,r:33/6,y:4}
    ]
  },
],
  2011:[
   {
     label: ["StarCraft II"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:3178440.33,r:516/6,y:789}
    ]
    },
   {
      label: ["Dota 2"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:1672268.08,r:93/6,y:6}
     ]
   },
   {
    label: ["Call of Duty: Modern Warfare 3"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:1003515.34,r:41/6,y:4}
     ]
   },
   {
    label: ["Counter-Strike"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:879914.71,r:686/6,y:84}
     ]
   },
   {
    label: ["Halo: Reach"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:593521.98,r:86/6,y:15}
     ]
   },
   {
    label: ["League of Legends"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:520354.30,r:374/6,y:168}
     ]
   },
   {
    label: ["StarCraft: Brood War"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:423063.87,r:100/6,y:37}
     ]
   },
   {
    label: ["Call of Duty: Black Ops"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:346153.48,r:117/6,y:20}
     ]
   },
   {
    label: ["Counter-Strike: Source"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:261943.40,r:331/6,y:42}
     ]
   },
   {
    label: ["Defense of the Ancients"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:244082.84,r:237/6,y:27}
     ]
   },
   {
    label: ["World of WarCraft"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:165000.00,r:18/6,y:3}
     ]
   },
   {
    label: ["WarCraft III"],
    backgroundColor: "rgba(7, 178, 64, 0.6)",
    borderColor: "rgba(7, 178, 64, 1)",
      data: [
        {x:149527.55,r:53/6,y:64}
     ]
   },
   {
    label: ["Quake Live"],
    backgroundColor: "rgba(163, 53, 72, 0.6)",
    borderColor: "rgba(163, 53, 72, 1)",
      data: [
        {x:125267.32,r:39/6,y:68}
     ]
   },
 ],
  2010:[
    {
      label: ["Counter-Strike"],
      backgroundColor: "rgba(252, 52, 92, 0.6)",
      borderColor: "rgba(252, 52, 92, 0.6)",
      data: [
        {x:1446039.99,r:848/6,y:112}
     ]
     },
    {
       label: ["StarCraft II"],
       backgroundColor: "rgba(142, 165, 235, 0.6)",
       borderColor: "rgba(142, 165, 235, 0.6)",
       data: [
         {x:820839.29,r:320/6,y:278}
      ]
    },
    {
     label: ["Halo 3"],
     backgroundColor: "rgba(255, 221, 0, 0.6)",
     borderColor: "rgba(255, 221, 0, 0.6)",
       data: [
         {x:798113.79,r:85/6,y:9}
      ]
    },
    {
     label: ["StarCraft: Brood War"],
     backgroundColor: "rgba(163, 222, 131, 0.6)",
     borderColor: "rgba(163, 222, 131, 0.6)",
       data: [
         {x:628499.64,r:99/6,y:15}
      ]
    },
    {
     label: ["WarCraft III"],
     backgroundColor: "rgba(175, 80, 175, 0.6)",
     borderColor: "rgba(175, 80, 175, 1)",
       data: [
         {x:361963.85,r:79/6,y:87}
      ]
    },
    {
     label: ["Counter-Strike: Source"],
     backgroundColor: "rgba(187, 156, 42, 0.6)",
     borderColor: "rgba(187, 156, 42, 1)",
       data: [
         {x:348114.03	,r:542/6,y:61}
      ]
    },
    {
     label: ["World of WarCraft"],
     backgroundColor: "rgba(232, 67, 150, 0.6)",
     borderColor: "rgba(232, 67, 150, 1)",
       data: [
         {x:291250.00,r:63/6,y:9}
      ]
    },
    {
     label: ["Quake Live"],
     backgroundColor: "rgba(43, 211, 230, 0.6)",
     borderColor: "rgba(43, 211, 230, 1)",
       data: [
         {x:177411.41,r:77/6,y:77}
      ]
    },
    {
     label: ["Defense of the Ancients"],
     backgroundColor: "rgba(137, 172, 158, 0.6)",
     borderColor: "rgba(137, 172, 158, 1)",
       data: [
         {x:158306.30,r:64/6,y:48}
      ]
    },
    {
     label: ["FIFA 10"],
     backgroundColor: "rgba(246, 178, 138, 0.6)",
     borderColor: "rgba(246, 178, 138, 1)",
       data: [
         {x:117026.71,r:434/6,y:364}
      ]
    },
    {
     label: ["Halo: Reach"],
     backgroundColor: "rgba(183, 202, 125, 0.6)",
     borderColor: "rgba(183, 202, 125, 1)",
       data: [
         {x:114000.00,r:10/6,y:3}
      ]
    },
    {
     label: ["Magic: The Gathering Online"],
     backgroundColor: "rgba(7, 178, 64, 0.6)",
     borderColor: "rgba(7, 178, 64, 1)",
       data: [
         {x:100000.00,r:12/6,y:1}
      ]
    },
    {
     label: ["Soul Calibur IV"],
     backgroundColor: "rgba(163, 53, 72, 0.6)",
     borderColor: "rgba(163, 53, 72, 1)",
       data: [
         {x:100000.00,r:6/6,y:1}
      ]
    },
  ],
  2009:[
   {
     label: ["Counter-Strike"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:1345951.70,r:720/2,y:116}
    ]
    },
   {
      label: ["StarCraft: Brood War"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:708775.32,r:137/2,y:51}
     ]
   },
   {
    label: ["WarCraft III"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:387351.00,r:74/2,y:90}
     ]
   },
   {
    label: ["Counter-Strike: Source"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:247039.65,r:321/2,y:47}
     ]
   },
   {
    label: ["Halo 3"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:234900.71,r:76/2,y:7}
     ]
   },
   {
    label: ["Defense of the Ancients"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:124530.20,r:123/2,y:17}
     ]
   },
   {
    label: ["FIFA 09"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:118886.69,r:52/2,y:17}
     ]
   },
   {
    label: ["Call of Duty 4: Modern Warfare"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:109724.84,r:117/2,y:21}
     ]
   },
   {
    label: ["Quake Live"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:79946.08,r:33/2,y:19}
     ]
   },
   {
    label: ["Gears of War 2"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:60000.00,r:10/2,y:4}
     ]
   },
   {
    label: ["Super Smash Bros. Melee"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:51999.99,r:161/2,y:89}
     ]
   },
   {
    label: ["Magic: The Gathering Online"],
    backgroundColor: "rgba(7, 178, 64, 0.6)",
    borderColor: "rgba(7, 178, 64, 1)",
      data: [
        {x:50000.00,r:8/2,y:1}
     ]
   },
   {
    label: ["Super Smash Bros. Brawl"],
    backgroundColor: "rgba(163, 53, 72, 0.6)",
    borderColor: "rgba(163, 53, 72, 1)",
      data: [
        {x:48302.26,r:195/2,y:97}
     ]
   },
 ],
  2008:[
  {
    label: ["Counter-Strike"],
    backgroundColor: "rgba(252, 52, 92, 0.6)",
    borderColor: "rgba(252, 52, 92, 0.6)",
    data: [
      {x:1593534.82,r:662/2,y:107}
   ]
   },
  {
     label: ["StarCraft: Brood War"],
     backgroundColor: "rgba(142, 165, 235, 0.6)",
     borderColor: "rgba(142, 165, 235, 0.6)",
     data: [
       {x:1049976.45,r:191/2,y:26}
    ]
  },
  {
   label: ["Counter-Strike: Source"],
   backgroundColor: "rgba(255, 221, 0, 0.6)",
   borderColor: "rgba(255, 221, 0, 0.6)",
     data: [
       {x:870731.10,r:467/2,y:60}
    ]
  },
  {
   label: ["Halo 3"],
   backgroundColor: "rgba(163, 222, 131, 0.6)",
   borderColor: "rgba(163, 222, 131, 0.6)",
     data: [
       {x:688924.67,r:72/2,y:11}
    ]
  },
  {
   label: ["WarCraft III"],
   backgroundColor: "rgba(175, 80, 175, 0.6)",
   borderColor: "rgba(175, 80, 175, 1)",
     data: [
       {x:681496.09,r:116/2,y:105}
    ]
  },
  {
   label: ["World of WarCraft"],
   backgroundColor: "rgba(187, 156, 42, 0.6)",
   borderColor: "rgba(187, 156, 42, 1)",
     data: [
       {x:450500.00,r:72/2,y:11}
    ]
  },
  {
   label: ["World in Conflict"],
   backgroundColor: "rgba(232, 67, 150, 0.6)",
   borderColor: "rgba(232, 67, 150, 1)",
     data: [
       {x:228110.73,r:20/2,y:7}
    ]
  },
  {
   label: ["Call of Duty 4: Modern Warfare"],
   backgroundColor: "rgba(43, 211, 230, 0.6)",
   borderColor: "rgba(43, 211, 230, 1)",
     data: [
       {x:218907.09,r:165/2,y:23}
    ]
  },
  {
   label: ["Forza Motorsport 2"],
   backgroundColor: "rgba(137, 172, 158, 0.6)",
   borderColor: "rgba(137, 172, 158, 1)",
     data: [
       {x:207000.00,r:16/2,y:1}
    ]
  },
  {
   label: ["FIFA 08"],
   backgroundColor: "rgba(246, 178, 138, 0.6)",
   borderColor: "rgba(246, 178, 138, 1)",
     data: [
       {x:201433.25,r:62/2,y:13}
    ]
  },
  {
   label: ["Dead or Alive 4"],
   backgroundColor: "rgba(183, 202, 125, 0.6)",
   borderColor: "rgba(183, 202, 125, 1)",
     data: [
       {x:189708.46,r:18/2,y:3}
    ]
  },
  {
   label: ["F.E.A.R."],
   backgroundColor: "rgba(7, 178, 64, 0.6)",
   borderColor: "rgba(7, 178, 64, 1)",
     data: [
       {x:118000.00	,r:8/2,y:2}
    ]
  },
  {
   label: ["Unreal Tournament 3"],
   backgroundColor: "rgba(163, 53, 72, 0.6)",
   borderColor: "rgba(163, 53, 72, 1)",
     data: [
       {x:104812.82,r:3/2,y:3}
    ]
  },
],
  2007:[
   {
     label: ["Counter-Strike"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:1616905.59,r:834/2,y:99}
    ]
    },
   {
      label: ["StarCraft: Brood War"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:1049963.19	,r:128/2,y:37}
     ]
   },
   {
    label: ["Counter-Strike: Source"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:839646.60,r:408/2,y:45}
     ]
   },
   {
    label: ["WarCraft III"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:800507.08,r:113/2,y:101}
     ]
   },
   {
    label: ["Halo 2"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:673462.47,r:655/2,y:14}
     ]
   },
   {
    label: ["Dead or Alive 4"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:254986.85,r:30/2,y:6}
     ]
   },
   {
    label: ["Project Gotham Racing 3"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:224986.85,r:27/2,y:5}
     ]
   },
   {
    label: ["World of WarCraft"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:213500.00,r:21/2,y:7}
     ]
   },
   {
    label: ["FIFA 07"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:210512.23,r:37/2,y:10}
     ]
   },
   {
    label: ["Rainbow Six: Vegas"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:176400.77,r:137/2,y:7}
     ]
   },
   {
    label: ["Gears of War"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:170900.77,r:33/2,y:7}
     ]
   },
   {
    label: ["Quake 4"],
    backgroundColor: "rgba(7, 178, 64, 0.6)",
    borderColor: "rgba(7, 178, 64, 1)",
      data: [
        {x:146558.81,r:30/2,y:10}
     ]
   },
   {
    label: ["Halo 3"],
    backgroundColor: "rgba(163, 53, 72, 0.6)",
    borderColor: "rgba(163, 53, 72, 1)",
      data: [
        {x:100000.00,r:16/2,y:1}
     ]
   },],
  2006:[
    {
      label: ["Counter-Strike"],
      backgroundColor: "rgba(252, 52, 92, 0.6)",
      borderColor: "rgba(252, 52, 92, 0.6)",
      data: [
        {x:2101051.86,r:923/2,y:112}
     ]
     },
    {
       label: ["StarCraft: Brood War"],
       backgroundColor: "rgba(142, 165, 235, 0.6)",
       borderColor: "rgba(142, 165, 235, 0.6)",
       data: [
         {x:809030.24,r:142/2,y:41}
      ]
    },
    {
     label: ["Halo 2"],
     backgroundColor: "rgba(255, 221, 0, 0.6)",
     borderColor: "rgba(255, 221, 0, 0.6)",
       data: [
         {x:618050.00,r:54/2,y:19}
      ]
    },
    {
     label: ["WarCraft III"],
     backgroundColor: "rgba(163, 222, 131, 0.6)",
     borderColor: "rgba(163, 222, 131, 0.6)",
       data: [
         {x:497579.95,r:84/2,y:62}
      ]
    },
    {
     label: ["Quake 4"],
     backgroundColor: "rgba(175, 80, 175, 0.6)",
     borderColor: "rgba(175, 80, 175, 1)",
       data: [
         {x:358339.00,r:73/2,y:35}
      ]
    },
    {
     label: ["Counter-Strike: Source"],
     backgroundColor: "rgba(187, 156, 42, 0.6)",
     borderColor: "rgba(187, 156, 42, 1)",
       data: [
         {x:177710.53,r:254/2,y:27}
      ]
    },
    {
     label: ["Super Smash Bros. Melee"],
     backgroundColor: "rgba(232, 67, 150, 0.6)",
     borderColor: "rgba(232, 67, 150, 1)",
       data: [
         {x:144584.00	,r:44/2,y:22}
      ]
    },
    {
     label: ["Madden NFL 2006"],
     backgroundColor: "rgba(43, 211, 230, 0.6)",
     borderColor: "rgba(43, 211, 230, 1)",
       data: [
         {x:100000.00,r:1/2,y:1}
      ]
    },
    {
     label: ["FIFA 06"],
     backgroundColor: "rgba(137, 172, 158, 0.6)",
     borderColor: "rgba(137, 172, 158, 1)",
       data: [
         {x:84069.99,r:15/2,y:8}
      ]
    },
    {
     label: ["Quake III Arena"],
     backgroundColor: "rgba(246, 178, 138, 0.6)",
     borderColor: "rgba(246, 178, 138, 1)",
       data: [
         {x:83813.76,r:46/2,y:6}
      ]
    },
    {
     label: ["Battlefield 2"],
     backgroundColor: "rgba(183, 202, 125, 0.6)",
     borderColor: "rgba(183, 202, 125, 1)",
       data: [
         {x:79074.59,r:10/2,y:8}
      ]
    },
    {
     label: ["Project Gotham Racing 3"],
     backgroundColor: "rgba(7, 178, 64, 0.6)",
     borderColor: "rgba(7, 178, 64, 1)",
       data: [
         {x:72300.00,r:8/2,y:4}
      ]
    },
    {
     label: ["TrackMania Nations"],
     backgroundColor: "rgba(163, 53, 72, 0.6)",
     borderColor: "rgba(163, 53, 72, 1)",
       data: [
         {x:72000.00,r:11/2,y:2}
      ]
    },
  ],
  2005:[
    {
     label: ["Counter-Strike"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:1286412.30,r:705,y:87}
    ]
    },
   {
      label: ["Painkiller"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:960000.00,r:42,y:10}
     ]
   },
     {
      label: ["StarCraft: Brood War"],
      backgroundColor: "rgba(255, 221, 0, 0.6)",
      borderColor: "rgba(255, 221, 0, 0.6)",
        data: [
          {x:592759.49,r:88,y:28}
       ]
     },
     {
      label: ["WarCraft III"],
      backgroundColor: "rgba(163, 222, 131, 0.6)",
      borderColor: "rgba(163, 222, 131, 0.6)",
        data: [
          {x:438648.01,r:93,y:41}
       ]
     },
     {
      label: ["Halo 2"],
      backgroundColor: "rgba(175, 80, 175, 0.6)",
      borderColor: "rgba(175, 80, 175, 1)",
        data: [
          {x:197850.00,r:65,y:38}
       ]
     },
     {
      label: ["Counter-Strike: Source"],
      backgroundColor: "rgba(187, 156, 42, 0.6)",
      borderColor: "rgba(187, 156, 42, 1)",
        data: [
          {x:150546.22,r:103,y:12}
       ]
     },
     {
      label: ["FIFA 05"],
      backgroundColor: "rgba(232, 67, 150, 0.6)",
      borderColor: "rgba(232, 67, 150, 1)",
        data: [
          {x:57728.01,r:5,y:7}
       ]
     },
     {
      label: ["Quake III Arena"],
      backgroundColor: "rgba(43, 211, 230, 0.6)",
      borderColor: "rgba(43, 211, 230, 1)",
        data: [
          {x:56673.87,r:24,y:9}
       ]
     },
     {
      label: ["Quake 4"],
      backgroundColor: "rgba(137, 172, 158, 0.6)",
      borderColor: "rgba(137, 172, 158, 1)",
        data: [
          {x:51780.70,r:42,y:7}
       ]
     },
     {
      label: ["Doom 3"],
      backgroundColor: "rgba(246, 178, 138, 0.6)",
      borderColor: "rgba(246, 178, 138, 1)",
        data: [
          {x:50000.00,r:3,y:1}
       ]
     },
     {
      label: ["Wolfenstein: Enemy Territory"],
      backgroundColor: "rgba(183, 202, 125, 0.6)",
      borderColor: "rgba(183, 202, 125, 1)",
        data: [
          {x:50000.00,r:19,y:1}
       ]
     },
     {
      label: ["Pro Evolution Soccer 4"],
      backgroundColor: "rgba(7, 178, 64, 0.6)",
      borderColor: "rgba(7, 178, 64, 1)",
        data: [
          {x:40550.64,r:11,y:2}
       ]
     },
     {
      label: ["Super Smash Bros. Melee"],
      backgroundColor: "rgba(163, 53, 72, 0.6)",
      borderColor: "rgba(163, 53, 72, 1)",
        data: [
          {x:36072.46,r:48,y:30}
       ]
     },
   ],
  2004:[
   {
     label: ["Counter-Strike"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:848934.67,r:608,y:80}
    ]
    },
   {
      label: ["StarCraft: Brood War"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:498433.15,r:77	,y:16}
     ]
   },
   {
    label: ["WarCraft III"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:353388.90,r:111,y:72}
     ]
   },
   {
    label: ["Doom 3"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:207748.16,r:13,y:3}
     ]
   },
   {
    label: ["Halo: Combat Evolved"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:183456.00,r:59,y:22}
     ]
   },
   {
    label: ["Quake III Arena"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:111500.00,r:35,y:4}
     ]
   },
   {
    label: ["Unreal Tournament 2004"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:106512.41,r:30,y:4}
     ]
   },
   {
    label: ["Counter-Strike: Condition Zero"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:85000.00,r:15,y:1}
     ]
   },
   {
    label: ["Painkiller"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:55000.00,r:18,y:3}
     ]
   },
   {
    label: ["Call of Duty"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:50000.00,r:51,y:1}
     ]
   },
   {
    label: ["FIFA 04"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:40000.00,r:3,y:1}
     ]
   },
   {
    label: ["Need for Speed: Underground"],
    backgroundColor: "rgba(7, 178, 64, 0.6)",
    borderColor: "rgba(7, 178, 64, 1)",
      data: [
        {x:35000.00,r:3,y:1}
     ]
   },
   {
    label: ["Project Gotham Racing 2"],
    backgroundColor: "rgba(163, 53, 72, 0.6)",
    borderColor: "rgba(163, 53, 72, 1)",
      data: [
        {x:35000.00,r:3,y:1}
     ]
   },
 ],
  2003:[
   {
     label: ["Counter-Strike"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:804577.99,r:474,y:60}
    ]
    },
   {
      label: ["StarCraft: Brood War	"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:276838.39,r:81,y:16}
     ]
   },
   {
    label: ["WarCraft III"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:191632.33,r:60,y:29}
     ]
   },
   {
    label: ["Halo: Combat Evolved"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:107150.005,r:70,y:12}
     ]
   },
   {
    label: ["Unreal Tournament 2003"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:106156.41,r:17,y:7}
     ]
   },
   {
    label: ["Quake III Arena"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:95463.46,r:26,y:6}
     ]
   },
   {
    label: ["FIFA 03"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:54066.44,r:10,y:3}
     ]
   },
   {
    label: ["Age of Mythology"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:49000.00,r:8,y:3}
     ]
   },
   {
    label: ["Age of Empires II: The Age of Kings"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:16695.00,r:11,y:3}
     ]
   },
   {
    label: ["Super Smash Bros. Melee"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:15550.00,r:8,y:4}
     ]
   },
   {
    label: ["Tekken 4"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:12500.00,r:3,y:3}
     ]
   },
   {
    label: ["NASCAR Thunder 2003"],
    backgroundColor: "rgba(7, 178, 64, 0.6)",
    borderColor: "rgba(7, 178, 64, 1)",
      data: [
        {x:5933.50,r:0,y:1}
     ]
   },
   {
    label: ["Gran Turismo 3: A-Spec"],
    backgroundColor: "rgba(163, 53, 72, 0.6)",
    borderColor: "rgba(163, 53, 72, 1)",
      data: [
        {x:1500.00,r:3,y:1}
     ]
   },
 ],
  2002:[
   {
     label: ["Counter-Strike"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:400994.88,r:352,y:14}
    ]
    },
   {
      label: ["StarCraft: Brood War"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:132944.26,r:36	,y:10}
     ]
   },
   {
    label: ["Quake III Arena"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:102206.40,r:24,y:4}
     ]
   },
   {
    label: ["Return to Castle Wolfenstein"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:67424.30,r:30,y:2}
     ]
   },
   {
    label: ["Age of Empires II: The Age of Kings"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:61450.00,r:15,y:4}
     ]
   },
   {
    label: ["FIFA 2002 World Cup"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:43000.00,r:8,y:1}
     ]
   },
   {
    label: ["Unreal Tournament"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:43000.00,r:8,y:2}
     ]
   },
   {
    label: ["Unreal Tournament 2003"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:34000.00,r:18,y:5}
     ]
   },
   {
    label: ["WarCraft III"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:31285.25,r:12,y:4}
     ]
   },
   {
    label: ["NASCAR Thunder 2002"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:7679.25,r:0,y:1}
     ]
   },
   {
    label: ["	Star Wars Jedi Knight II: Jedi Outcast"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:7679.25,r:0,y:1}
     ]
   },
   {
    label: ["Halo: Combat Evolved"],
    backgroundColor: "rgba(7, 178, 64, 0.6)",
    borderColor: "rgba(7, 178, 64, 1)",
      data: [
        {x:5000.00,r:21,y:2}
     ]
   },
   {
    label: ["Age of Empires"],
    backgroundColor: "rgba(163, 53, 72, 0.6)",
    borderColor: "rgba(163, 53, 72, 1)",
      data: [
        {x:100.00,r:3,y:1}
     ]
   },
  ],
  2001:[
   {
     label: ["Counter-Strike"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:345992.44,r:219,y:12}
    ]
    },
   {
      label: ["Quake III Arena"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:147736.74,r:48,y:14}
     ]
   },
   {
    label: ["Age of Empires II: The Age of Kings"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:143200.00,r:33,y:7}
     ]
   },
   {
    label: ["StarCraft: Brood War"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:91893.99,r:50,y:9}
     ]
   },
   {
    label: ["FIFA 2001"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:46000.00,r:9,y:2}
     ]
   },
   {
    label: ["Unreal Tournament"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:46000.00,r:9,y:2}
     ]
   },
   {
    label: ["Aliens versus Predator 2"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:40000.00,r:1,y:1}
     ]
   },
   {
    label: ["QuakeWorld"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:15000.00,r:8,y:1}
     ]
   },
   {
    label: ["Capcom vs. SNK"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:0.00,r:3,y:1}
     ]
   },
   {
    label: ["Marvel vs. Capcom 2"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:0.00,r:3,y:1}
     ]
   },
   {
    label: ["Street Fighter Alpha 3"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:0.00,r:3,y:1}
     ]
   },
   {
    label: ["Super Street Fighter II Turbo"],
    backgroundColor: "rgba(7, 178, 64, 0.6)",
    borderColor: "rgba(7, 178, 64, 1)",
      data: [
        {x:0.00,r:3,y:1}
     ]
   }
  ],
  2000:[
   {
     label: ["Quake III Arena"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:415237.82,r:97,y:28}
    ]
    },
   {
      label: ["StarCraft: Brood War"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:133038.04,r:47,y:10}
     ]
   },
   {
    label: ["Age of Empires II: The Age of Kings"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:63528.11,r:14,y:5}
     ]
   },
   {
    label: ["FIFA 2000"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:50000.00,r:4,y:1}
     ]
   },
   {
    label: ["Counter-Strike"],
    backgroundColor: "rgba(175, 80, 175, 0.6)",
    borderColor: "rgba(175, 80, 175, 1)",
      data: [
        {x:23763.33,r:62,y:2}
     ]
   },
   {
    label: ["Age of Empires"],
    backgroundColor: "rgba(187, 156, 42, 0.6)",
    borderColor: "rgba(187, 156, 42, 1)",
      data: [
        {x:9500.00,r:4,y:1}
     ]
   },
   {
    label: ["Marvel vs. Capcom 2"],
    backgroundColor: "rgba(232, 67, 150, 0.6)",
    borderColor: "rgba(232, 67, 150, 1)",
      data: [
        {x:0.00,r:3,y:1}
     ]
   },
   {
    label: ["Street Fighter Alpha 2"],
    backgroundColor: "rgba(43, 211, 230, 0.6)",
    borderColor: "rgba(43, 211, 230, 1)",
      data: [
        {x:0.00,r:3,y:1}
     ]
   },
   {
    label: ["Street Fighter Alpha 3"],
    backgroundColor: "rgba(137, 172, 158, 0.6)",
    borderColor: "rgba(137, 172, 158, 1)",
      data: [
        {x:0.00,r:3,y:1}
     ]
   },
   {
    label: ["Street Fighter III: 3rd Strike"],
    backgroundColor: "rgba(246, 178, 138, 0.6)",
    borderColor: "rgba(246, 178, 138, 1)",
      data: [
        {x:0.00,r:3,y:1}
     ]
   },
   {
    label: ["Super Street Fighter II Turbo"],
    backgroundColor: "rgba(183, 202, 125, 0.6)",
    borderColor: "rgba(183, 202, 125, 1)",
      data: [
        {x:0.00,r:3,y:1}
     ]
   }
  ],
  1999:[
     {
       label: ["StarCraft: Brood War"],
       backgroundColor: "rgba(252, 52, 92, 0.6)",
       borderColor: "rgba(252, 52, 92, 0.6)",
       data: [
         {x:139553.84,r:40,y:11}
      ]
      },
     {
        label: ["Descent 3"],
        backgroundColor: "rgba(142, 165, 235, 0.6)",
        borderColor: "rgba(142, 165, 235, 0.6)",
        data: [
          {x:50000.00,r:1,y:1}
       ]
     },
     {
      label: ["Quake III Arena"],
      backgroundColor: "rgba(255, 221, 0, 0.6)",
      borderColor: "rgba(255, 221, 0, 0.6)",
        data: [
          {x:43200.00,r:15,y:2}
       ]
     },
     {
      label: ["Quake II"],
      backgroundColor: "rgba(163, 222, 131, 0.6)",
      borderColor: "rgba(163, 222, 131, 0.6)",
        data: [
          {x:42400.00,r:12,y:2}
       ]
     }
    ],
  1998:[
   {
     label: ["Quake II"],
     backgroundColor: "rgba(252, 52, 92, 0.6)",
     borderColor: "rgba(252, 52, 92, 0.6)",
     data: [
       {x:66200.0	,r:16,y:4}
    ]
    },
   {
      label: ["QuakeWorld"],
      backgroundColor: "rgba(142, 165, 235, 0.6)",
      borderColor: "rgba(142, 165, 235, 0.6)",
      data: [
        {x:43500.0	,r:12,y:3}
     ]
   },
   {
    label: ["StarCraft: Brood War"],
    backgroundColor: "rgba(255, 221, 0, 0.6)",
    borderColor: "rgba(255, 221, 0, 0.6)",
      data: [
        {x:20000.0,r:8,y:1}
     ]
   },
   {
    label: ["Age of Empires"],
    backgroundColor: "rgba(163, 222, 131, 0.6)",
    borderColor: "rgba(163, 222, 131, 0.6)",
      data: [
        {x:2000.0	,r:1,y:1}
     ]
   }
  ],
}

class Prize extends React.Component {
  constructor() {
    super();
    this.state = {
      year: 2018,
    };
  }

  yearChange = (event) => {
    console.log(event.target.value);
    this.setState({
      year: event.target.value,
    });
  }

  render() {
    return (
      <div className="App containter">
        <h1>Game Prize Pool Distribution (1998 - 2018)</h1>
        <p>
          The size of the bubbles represent the amount of professional players in the competitive scene relative to the other games.
          It is visible that Dota 2 currently has the most overall prize pool, but at the same time it has an average amount of
          tournaments and a very small amount of recorded competitive players. It is also evident that CS:GO has the biggest recorded
          number of competitive players as well as the most tournaments held, but it's total overall prize pool for 2018 is far less
          than Dota 2. Why would this be?{" "}
        </p>{" "}
        <select value={this.state.year} onChange={this.yearChange}>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
        </select>
        <Bubble
          data={{
            datasets: dataYear[this.state.year]
          }}
          options={{
            legend: {
              display: true
            },
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              streaming: {
                frameRate: 120
              }
            },
            scales: {
              xAxes: [{
                  gridLines: {
                      display:true
                  },
                  scaleLabel: {
                      display: true,
                      labelString: 'Total Prize Pool Money',
                      fontStyle: 'bold',
                      fontSize: 20
                  },
                 ticks: {
                   callback: function(value, index, values) {
                     if(parseInt(value) >= 1000){
                       return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                     } else {
                       return '$' + value;
                     }
                   }
                 }
             }],
             yAxes: [{
                 scaleLabel: {
                     display: true,
                     labelString: '# of Tournaments',
                     fontStyle: 'bold',
                     fontSize: 20
                 },
                 gridLines: {
                     display:true,
                 },
                 ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                      if(parseInt(value) >= 1000) {
                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      } else {
                        return value;
                      }
                    }
                }
            }],
            },
            tooltips: {
              callbacks: {
                // this callback is used to create the tooltip label
                label: function(tooltipItem, data) {
                  // get the data label and data value to display
                  // convert the data value to local string so it uses a comma seperated number
                  var dataLabel = data.datasets[tooltipItem.datasetIndex].label;
                  // add the currency symbol $ to the label
                  // var data = JSON.stringify(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]);
                  var prizePool = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].x;
                  prizePool = Math.trunc(prizePool);
                  var value = ' Prizes: $' + commaFormat(prizePool);
                  var tournaments = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].y;
                  tournaments = Math.trunc(tournaments);
                  value += ', Tournaments: ' + commaFormat(tournaments);
                  dataLabel += value;
                  // return the text to display on the tooltip
                  return dataLabel;
                }
              }
            }
          }}
        />
      </div>
    );
  }
}

export default Prize;

function commaFormat(value) {
  if(parseInt(value) >= 1000){
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return value;
  }
}
