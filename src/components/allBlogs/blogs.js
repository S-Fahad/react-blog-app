import { createContext } from "react";

const allCategories = [
  {
    id: 1,
    imgUrl:
      "https://www.koimoi.com/wp-content/new-galleries/2021/11/box-office-antim-the-final-truth-takes-a-decent-start-on-friday-001.jpg",
    title: "ANTIM-THE FINAL TRUTH",
    about:
      "Antim-The Final Truth: Directed by Mahesh Manjrekar. With Salman Khan, Aayush Sharma, Mahima Makwana, Mahesh Manjrekar.",
    desc: "Antim: The Final Truth is a 2021 Indian Hindi-language action thriller film directed by Mahesh Manjrekar and produced by Salman Khan Films.Distributed by Zee Studios, it is an adaptation of the Marathi film Mulshi Pattern,and stars Salman Khan, Aayush Sharma and Mahima Makwana.The story revolves around the face-off between a Sikh police officer (Khan) and a gangster (Sharma), and like the original, it explores the hard conditions faced by farmers that pushes some of them towards crime.The film was theatrically released worldwide on 26 November 2021.",
    date: "27-Nov",
    category: "bollywood",
  },
  {
    id: 2,
    imgUrl:
      "https://www.wallpaperflare.com/static/533/281/308/mountains-lake-photo-body-wallpaper-preview.jpg",
    desc: "Tepuis tend to be found as isolated entities rather than in connected ranges, which makes them host to hundreds of endemic plant and animal species, some of which are found only on one tepui. Towering over the surrounding forest, the tepuis have almost sheer vertical flanks, and many rise as much as 1,000 meters above the surrounding jungle. The tallest of them are over 3,000 meters tall. The nearly vertical escarpments and dense rainforest bed on which these tepuis or mesa lie, make them inaccessible by foot. Only three of the Gran Sabana's mountains can be reached by foot, among which the 2,180m high Roraima is the most accessible.",
    title: "Tabletop mountains or tepuis of Venezuela",
    date: "15-Sept-2019",
    category: "travel",
  },
  {
    id: 3,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/The_Way_Back_poster.jpeg",
    about:
      "The Way Back (titled Finding the Way Back in the United Kingdom) is a 2020 American sports drama film directed by Gavin O'Connor and written by Brad Ingelsby. It stars Ben Affleck, Al Madrigal, Michaela Watkins, and Janina Gavankar",
    title: "The Way Back",
    desc: "The Way Back (titled Finding the Way Back in the United Kingdom) is a 2020 American sports drama film directed by Gavin O'Connor and written by Brad Ingelsby. It stars Ben Affleck, Al Madrigal, Michaela Watkins, and Janina Gavankar, and follows an alcoholic construction worker who is recruited to become head coach of the basketball team at the high school where he was a famous star.The film was theatrically released in the United States on March 6, 2020, by Warner Bros. Pictures. In response to the COVID-19 pandemic causing movie theaters across the globe to close, Warner Bros. made the film available to own digitally on March 24, 2020. The film received generally positive reviews from critics, with Affleck's performance receiving praise. However, the film suffered at the box office due to COVID-19 as it was only in theaters for two weeks.",
    date: "6-march",
    category: "hollywood",
  },
  {
    id: 4,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Extraction_%282020_film%29.png/220px-Extraction_%282020_film%29.png",
    about:
      "Extraction is a 2020 American action thriller film directed by Sam Hargrave (in his feature directorial debut) and written by Joe Russo, based on the graphic novel Ciudad by Ande Parks, Joe Russo, Anthony Russo, Fernando León González, and Eric Skillman. ",
    title: "Extraction",
    desc: "Extraction is a 2020 American action thriller film directed by Sam Hargrave (in his feature directorial debut) and written by Joe Russo, based on the graphic novel Ciudad by Ande Parks, Joe Russo, Anthony Russo, Fernando León González, and Eric Skillman. The film's cast features Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda, Golshifteh Farahani, Pankaj Tripathi and David Harbour. The film is about an Australian black ops mercenary whose mission to rescue an Indian drug lord's kidnapped son in Dhaka, Bangladesh goes awry when he is double-crossed.Netflix released Extraction on April 24, 2020. The film received positive reviews from critics, who praised the performances, cinematography, and action sequences, but received mixed reviews for the plot. It became the most watched original film in Netflix's history with a reported 99 million households in its first four weeks. A sequel is in development.",
    date: "24-April-2020",
    category: "hollywood",
  },
  {
    id: 26,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
    title: "Bad Boys For Life",
    about:
      "Bad Boys for Life is a 2020 American action comedy film that is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith and Martin Lawrence reprise their starring roles in the film, which is directed by Adil & Bilall and written by Chris Bremner, Peter Craig and Joe Carnahan.",
    desc: "Bad Boys for Life is a 2020 American action comedy film that is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith and Martin Lawrence reprise their starring roles in the film, which is directed by Adil & Bilall and written by Chris Bremner, Peter Craig and Joe Carnahan. The film's cast also includes Paola Núñez, Vanessa Hudgens, Alexander Ludwig, Charles Melton, Kate del Castillo, Nicky Jam, and Joe Pantoliano. It was produced by Smith, Jerry Bruckheimer, and Doug Belgrad. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.A third Bad Boys film had been discussed over the years after the release of the second in 2003, with Michael Bay stating he would be interested in returning to direct, but budgetary constraints made going ahead difficult. The film went through several attempts to enter production over the course of a decade, with a variety of writers and directors attached. The project was eventually finalized and green-lit in October 2018, and filming began the following year, lasting from January to June 2019. Principal photography took place in Atlanta, Miami, and Mexico City.",
    date: "17-Jan-2020",
    category: "hollywood",
  },
  {
    id: 5,
    imgUrl:
      "https://stat2.bollywoodhungama.in/wp-content/uploads/2021/11/Dhamaka-3-322x322.jpg",
    title: "Dhamaka",
    about:
      "Reassigned from TV to radio, a frustrated anchor sees both danger and opportunity when he receives threatening calls on the air.",
    desc: "Dhamaka is a 2021 Indian Hindi-language action thriller film written and directed by Ram Madhvani who also produced the film with Amrita Madhvani, under his banner Ram Madhvani Films, along with Ronnie Screwvala's RSVP Movies, Lotte Cultureworks, Global Gate Entertainment and Lionsgate Films. An official remake of the 2013 film The Terror Live, co-written in the adaptation by Puneet Sharma, the film stars Kartik Aaryan in the leading role of a journalist named Arjun Pathak, who receives a threat after he exclusively interviewed a terrorist, who blew up a bridge. The film also stars Mrunal Thakur and Amruta Subhash in prominent roles.",
    date: "21-sept",
    category: "bollywood",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1562674111-fa6a64c1b345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Mayhem in the Mountains",
    desc: "By the time we managed to wriggle inside the Hellsport tent, which is one of the lightest and tiniest of tents ever produced, we were ready to collapse. Being the smaller of the two I volunteered to lie on the outer side along the ledge, and I felt that my right leg was literally floating over empty air, supported only by the thin nylon fabric of the tent. We stayed silent, munching peanuts one by one, very slowly, in order to pass through the night. The sky had been dark since forenoon and slowly the winds were picking up. Our altimeter signalled the onset of a major storm. If any of us had any sense left we should have left that abominable place immediately, but I guess by then our brains were completely frozen dead with exhaustion and minus 20 C temperature. Around 8 pm the storm started to blow and rage around us, the static in the air made our hair stand up. And then the mayhem started. Every few minutes an ear-shattering lightening would strike the ridge above shaking up the entire mountain and causing massive powder avalanche to rain down upon us. Finding gap between the tent and the ice wall, some of the avalanche debris would go in and started building up an outward force, pushing us off the ledge. We had to jump out of the tent in that madness and shovel snow else very soon our tent guy ropes would come undone and we would disappear along with the tent into the abyss below.",
    date: "10-Oct-2020",
    category: "travel",
  },
  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80",
    desc: "Located on the Bhutan-China border, Gangkhar Puensum stands at 24,836 ft (7570 m). A few attempts to climb it in the past has been in vain, and moreover the peak is far higher than the 1994 Bhutanese benchmark of climbing restrictions that stops you from climbing any peak higher than 6,000 m. ",
    title: "Mountains that still remain unconquered",
    date: "21-Dec-2020",
    category: "travel",
  },
  {
    id: 8,
    imgUrl:
      "https://i.ndtvimg.com/i/2015-01/almonds-raw_625x350_51421213477.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
    desc: "Rich, crunchy and gorgeous - Brown cased almonds (badaam) are not just rich in vitamins and nutrients, they're also a real joy to cook with. Shred them over some creamy kheer, toast them to make a soft and air-light souffle or grind them to make some luscious Badaami Korma - they're one of the most commonly found and loved nuts.Almonds grow on trees in a pale green perforated shell. When an almond is attached to the tree, it is known as drupe. But almonds aren't the only ones that grow in a shell - Olives, prunes and apricots also grow in a hard casing and are found on trees.",
    title: "Why Soaked Almonds are Better Than Raw Almonds",
    date: "21-Sept-2021",
    category: "food",
  },
  {
    id: 9,
    imgUrl:
      "https://images.unsplash.com/photo-1636972677998-d76f527e5576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80",
    desc: "Come winter and you'll commonly sight cups of hot soups. Looking at the Indian dishes, what you can find in most of the houses is a steaming bowl of tomato and pepper rasam or the mellow, millet-based Raab. Not just that certain dishes like sarson ka saag, undhiyu, nimona pulao are winter specialities in the country.Seasonal food has always been an Indian speciality we switch our choice in fruits, vegetables, sometimes even grains with the onset of a different season. The preference of using specific ingredients during certain climates is visible in our sweets as well. It's common to find local and traditional delicacies made of jaggery, instead of sugar during the winters. Case in point the Nolen Gur Rasgulla, a speciality made in Odisha and West Bengal between November to February.",
    title:
      "Importance of eating fresh produce in winters - Chef Sanjeev Kapoor",
    date: "21-sept",
    category: "food",
  },
  {
    id: 10,
    imgUrl:
      "https://images.unsplash.com/photo-1606787619666-345f9a683fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    desc: "Fruit juice comes from the flesh of the fruit or from the whole fruit itself. The method of making fruit juice varies depending on the fruit, but many manufacturers make juice by crushing or “pressing” the fruit to squeeze out the juice inside, then pasteurizing or adding preservatives before packaging the final product.Though many fruit juices have health benefits, consuming too much fruit juice can cause health complications for people, such as weight gain or changes to blood sugar levels.",
    title: "Types of fruit juice, their benefits, and how much to drink",
    date: "2-Nov-2021",
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
    title:
      "Diet advice is as effective as traditional GP advice, but people like it better, according to new study",

    desc: "The trial, funded by the Medical Research Council (MRC) and led by Queen Mary University of London, is the first randomised evaluation of the 5:2 diet, a popular type of intermittent fasting regime. Researchers studied the long-term effects of providing 5:2 diet instructions compared to traditional weight loss advice in 300 UK adults with obesity over a one-year period.The findings show that long-term weight loss was similar for those who received 5:2 diet or standard weight management advice with 18 per cent and 15 per cent of participants respectively losing at least five per cent of their body weight at one year. However, when asked to rate each intervention, participants in the 5:2 diet group were more likely to recommend the intervention to others or be willing to continue with their diet.",
    date: "21-Sept-2021",
    category: "fitness",
  },
  {
    id: 25,
    imgUrl:
      "https://images.unsplash.com/photo-1565257057190-12376d0ab816?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3MnxfaGItZGw0US00VXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    desc: "People who want to lose weight will know that it is a constant struggle of trying new fads and foods to stay in shape and shed some extra kilos. Experts say that weight loss is not supposed to be a battle — that in the process of losing weight, one must not compromise on their health.Did you know that you can lose weight while changing your diet and introducing more clean eating habits with occasional cheat meals? Nutritionist Azra Khan took to Instagram recently to share three smart ways in which you can get to your desired weight, without doing anything too dramatic",
    title:
      "Nutritionist suggests three smart ways to lose weight without crash-dieting",
    date: "27-sept-2020",
    category: "fitness",
  },
  {
    id: 13,
    imgUrl:
      "https://images.unsplash.com/photo-1634630449037-512c3d5c857f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-sept-2020",
    category: "fitness",
  },
  {
    id: 27,
    imgUrl:
      "https://images.unsplash.com/photo-1584962243363-1822e9e9d1d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    desc: "lorem ipsum",
    title: "Catch waves with adventure guide",
    date: "21-Sept-2020",
    category: "fitness",
  },
  {
    id: 14,
    imgUrl:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/6C04/production/_121825672_gettyimages-1340397547.jpg",
    about: "",
    title: "Chinese tech giant Tencent told to suspend new app roll outs",
    desc: "The country's Ministry of Industry and Information Technology (MIIT) has also ordered a temporary suspension of updates to the products. It comes as the technology industry regulator reviews compliance with privacy rules introduced this month.However, current versions of the apps are still available to be downloaded and used as normal.The suspension of new app roll outs and updates is expected to continue to the end of the year as they undergo technical testing by the regulator, the BBC understands.'We are continuously working to enhance user protection features within our apps, and also have regular cooperation with relevant government agencies to ensure regulatory compliance. Our apps remain functional and available for download,' Tencent said in statement.",
    date: "28-Nov-2021",
    category: "technology",
  },
  {
    id: 15,
    imgUrl:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/ECE0/production/_121604606_stuartrussell.png",
    title: "Reith Lectures: AI and why people should be scared",
    desc: "Prof Stuart Russell, founder of the Center for Human-Compatible Artificial Intelligence, at the University of California, Berkeley, is giving this year's Reith Lectures.His four lectures, Living With Artificial Intelligence, address the existential threat from machines more powerful than humans - and offer a way forward.Last month, he spoke to then BBC News technology correspondent Rory Cellan-Jones about what to expect.",
    date: "27-Nov-2021",
    category: "technology",
    views: 102,
  },
  {
    id: 16,
    imgUrl:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/117CA/production/_121862617_nissansunderland_gettyimages-1233744490.jpg",
    about: "lorem ipsum",
    title:
      "The Omicron variant could add pressure to a chronic shortage of microchips used in car manufacturing, the boss of car giant Nissan has warned.",
    date: "21-Nov-2021",
    category: "technology",
  },
  {
    id: 17,
    imgUrl:
      "https://www.pinkvilla.com/imageresize/sardar_udham_twitter_review_heres_what_the_audience_has_to_say_about_vicky_kaushal_starrer_0.jpg?width=752&format=webp&t=pvorg",
    title: "Sardar Udham",
    about:
      "Udham Singh is a well-known figure of the Indian independence movement. He is also referred to as Shaheed-i-Azam Sardar Udham Singh (the expression 'Shaheed-i-Azam' means 'the great martyr').",
    desc: "First things first — If you are looking for a talky film that can light the revolutionary fire in you, ‘Sardar Udham’ isn’t it. Do not expect hard-hitting dialoguebaazi or emotional outbursts. The pre-independence drama based on true events, is a simmering observation of a man consumed by grief. The protagonist makes numbing pain his strength and silence, his voice. Loss and despair are so overpowering that avenging the barbaric crime he witnessed in his 20’s, becomes the only reason for his existence, even 20 years later.Set at the onset of World War II, the film shuttles between past and present. The canvas is massive but meaty source material on the titular character, meagre. None of Udham’s chest-thumping slogans or writings (if any) was found. Here was a man, deeply scarred, who went about doing his job quietly. The challenge was to then connect the dots with whatever little information available and get into his psyche. Shoojit tries to decode the ‘why’ and not just how he ended up doing what he did. The aim is to understand the emotional arc of an innocent boy from Amristar who wouldn’t hold a gun, let alone firing one. What led him to fire at Dwyer from point-blank range and not flee the spot? Was it driven by revenge? Why harbour the pain for two decades and not move on for good? Why is the same person a revolutionary and terrorist for different people?Shoojit (Piku, Vicky Donor) doesn’t take a myopic look at heroism or freedom. His hero doesn’t seem invincible or hero-like. Udham didn’t hate a man or his country who spurred the massacre. His fight was against the British ideology of conquering others’ right to speak and live freely. Through an exhausting runtime of 2 hours, 40 minutes, Shoojit makes us meet Udham, a stoical man on a mission. He moves like a shadow, relentless in his pursuit of Dwyer and freedom from the oppressive British rule. For the longest time, we solely become a spectator of his painstaking journey. We don’t feel invested enough. We see him landing odd jobs in London and being the centre of various unremarkable events leading up to the assassination",
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
  {
    id: 111,
    imgUrl:
      "https://cdn2.wanderlust.co.uk/media/1019/cropped-lia-and-jeremy-at-yosemite-national-park-chapel.jpg?anchor=center&mode=crop&width=1280&height=0&format=auto&quality=90&rnd=132285714670000000",
    desc: "If you want to travel, but you’re not sure where to start, you just need to take the first step. Research places you’d like to go - if you need some inspiration, check out our instagram (@SmallerEarth) to see some of our favourite places in the world.",
    title: "Wanderlust",
    date: "10-June-2021",
    category: "",
  },
  {
    id: 112,
    imgUrl:
      "https://cdn2.wanderlust.co.uk/media/1024/cropped-shutterstock_145434481.jpg?anchor=center&mode=crop&width=1280&height=0&format=auto&quality=90&rnd=132285727150000000",
    desc: "It’s amazing that a guy named “Waldo” has a quote about being unique and getting lost in the world. The beauty of travel is that there are no rules - you can blaze your own trail, and go wherever you want. You never know where you may find yourself - and who else you may inspire to follow in your tracks.",
    title: "Travel for Wildlife",
    date: "20-July-2021",
    category: "",
  },
  {
    id: 113,
    imgUrl:
      "https://ak.picdn.net/offset/photos/5f80600b6f52af4409e4b388/medium/offset_1017486.jpg?DFghwDcb",
    desc: "If you’re feeling stuck, unmotivated, or uninspired, travel is a great way to break that cycle. You’ll get lost in finding new things, and you’ll be way too busy exploring to get bored. There’s not just one specific destination meant for each person - but that’s why we love exploring (and why we love this short travel quote).",
    title: "Wanderlust",
    date: "10-June-2021",
    category: "",
  },
];

export const allBlogs = createContext(allCategories);
