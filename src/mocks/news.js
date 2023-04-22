const news = [
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Sarah Fielding",
    title: "Amazon's palm-reading tech is being tested in Panera cafes",
    description:
      "Amazon One's palm-reading technology that can substitute for credit cards and tickets is now available for Panera customers. With this new partnership, the fast casual chain becomes the first national restaurant to let diners use their palm for payments and l…",
    url: "https://www.engadget.com/amazons-palm-reading-tech-tested-panera-cafes-133037398.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/8Emiu8ebkpmt8FK66lV7mQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/bbb9e710-c8b2-11ed-bf8f-994259819434.cf.jpg",
    publishedAt: "2023-03-22T13:30:37Z",
    content:
      "Amazon One's palm-reading technology that can substitute for credit cards and tickets is now available for Panera customers. With this new partnership, the fast casual chain becomes the first nationa… [+1390 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Morgan Meaker",
    title: "These Angry Dutch Farmers Really Hate Microsoft",
    description:
      "Tech giants want to build massive, “hyperscale” data centers in the Netherlands. A popular political movement wants them stopped.",
    url: "https://www.wired.com/story/microsoft-netherlands-hyperscale-data-centers/",
    urlToImage:
      "https://media.wired.com/photos/6424d5dc3fcbc543446aa03d/191:100/w_1280,c_limit/Microsoft's-Secret-Dutch-Data-Center-Business-Shutterstock-2254993917.jpg",
    publishedAt: "2023-03-30T06:00:00Z",
    content:
      "As soon as Lars Ruiter steps out of his car, he is confronted by a Microsoft security guard, who is already seething with anger. Ruiter, a local councillor, has parked in the rain outside a half-fini… [+3412 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Lauren Goode",
    title: "Tech Layoffs Reveal America’s Unhealthy Obsession With Work",
    description:
      "Author Simone Stolzoff argues the US is in thrall to “workism”—the dangerous illusion that your job is the only source of self-worth.",
    url: "https://www.wired.com/story/plaintext-tech-layoffs-reveal-americas-unhealthy-obsession-with-work/",
    urlToImage:
      "https://media.wired.com/photos/6438a1cfeb20d414e80f3c14/191:100/w_1280,c_limit/Tech-Layoffs-Reveal-Americans-Obsession-With-Work-Plaintext-Business-1369568020.jpg",
    publishedAt: "2023-04-14T13:00:00Z",
    content:
      "Its so nice that everythings back to normal at the office now, isnt it? If normal means mass layoffs, empty office buildings, confusing return-to-office policies, AI panic, and the whiplash-y feeling… [+3961 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Laurie Clarke, Nelson C.J.",
    title: "A Peter Thiel-Backed Startup City Wants to Be Africa’s Delaware",
    description:
      "Nigeria’s Itana partnered with Binance and the Charter Cities Institute to build a physical tech hub near Lagos, but the plan has sparked controversy.",
    url: "https://www.wired.com/story/itana-binance-charter-cities-institute-africa-tech-startup/",
    urlToImage:
      "https://media.wired.com/photos/643de215aca4e6dd09f8855d/191:100/w_1280,c_limit/business-nigeria-start-up-city-1.png",
    publishedAt: "2023-04-18T06:00:00Z",
    content:
      "Asked to comment on the plans, Binances West &amp; East Africa director Nadeem Anjarwalla said in a statement: As we continue to support blockchain adoption across the African continent, Binance is k… [+4033 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Vicky Parrott",
    title: "Volkswagen ID.7 Review: Inoffensive to a Fault",
    description:
      "VW’s latest big electric cruise sedan showcases new tech and impressive aerodynamics, but can it take on the Hyundai Ioniq 6 and Tesla Model S?",
    url: "https://www.wired.com/review/review-volkswagen-id7/",
    urlToImage:
      "https://media.wired.com/photos/643d8db978b1686b7e2ea17c/191:100/w_1280,c_limit/Volkswagen-ID.7-Review-Lifestyle.jpg",
    publishedAt: "2023-04-17T19:06:48Z",
    content:
      "If theres anything the Volkswagen ID.7 makes you realize, its how impressive the Tesla Model S was when it arrived more than a decade ago. After all, we all know that tech moves fast, and yet somehow… [+2381 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Justine Calma",
    title:
      "To capture CO2 in the US, climate tech startups partner with oil and gas",
    description:
      "As it expands into the US, Swiss climate tech startup Climeworks plans to work with an oil and gas company for the first time.",
    url: "https://www.theverge.com/2023/4/21/23690040/climeworks-direct-air-carbon-capture-oil-gas",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/eBtaa43PibWyn8PQJqFnBcnRsb4=/0x0:4000x2667/1200x628/filters:focal(2000x1334:2001x1335)/cdn.vox-cdn.com/uploads/chorus_asset/file/24601397/1235138761.jpg",
    publishedAt: "2023-04-21T18:54:20Z",
    content:
      "To capture CO2 in the US, climate tech startups partner with oil and gas\r\nTo capture CO2 in the US, climate tech startups partner with oil and gas\r\n / Unlike some other companies developing CO2-sucki… [+5302 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Andrew Tarantola",
    title:
      "Hitting the Books: Sputnik's radio tech launched a revolution in bird migration research",
    description:
      '"Birds fly South for the winter and North for the summer," has historically proven to be only slightly less reliable a maxim than the sun always rising in the East and setting in the West. Humanity has been fascinated by the comings and goings of our avian ne…',
    url: "https://www.engadget.com/hitting-the-books-flight-paths-rebecca-heisman-harper-publishing-143053788.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/F.f6X0CF3JXp79Zi2TK5Fw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/6523b760-c9b0-11ed-bfdb-56cf37af3a1d.cf.jpg",
    publishedAt: "2023-04-02T14:30:53Z",
    content:
      '"Birds fly South for the winter and North for the summer," has historically proven to be only slightly less reliable a maxim than the sun always rising in the East and setting in the West. Humanity h… [+16943 chars]',
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jeff Dunn",
    title:
      "Apple's AirPods Pro drop back to $200, plus the rest of the week's best tech deals",
    description:
      "It's Friday, which means it's time for another roundup of notable discounts on good tech. Among the highlights, Apple's AirPods Pro are back down to $200, tying the best price we've seen for the iPhone-friendly noise-cancelling earphones. Amazon has dropped t…",
    url: "https://www.engadget.com/apples-airpods-pro-drop-back-to-200-best-tech-deals-this-week-154133672.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/BAMvC3_.5TRpMJE4CGUJzA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/9bd30380-39fd-11ed-9daf-94386034b5b5.cf.jpg",
    publishedAt: "2023-03-24T15:43:59Z",
    content:
      "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+11983 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Will Shanklin",
    title:
      "CATL’s new battery tech could inch electric planes closer to reality",
    description:
      "With the world gradually moving toward electric cars, it’s only a matter of time before EVs take to the skies, at least for shorter trips. Inching us closer to that milestone is Chinese battery maker CATL (Contemporary Amperex Technology Co. Limited), which o…",
    url: "https://www.engadget.com/catls-new-battery-tech-could-inch-electric-planes-closer-to-reality-200531533.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/upIBRDiBwW33eK4JJZO8.A--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/1aeaf1c0-dfab-11ed-9fbb-ac73c31b6695.cf.jpg",
    publishedAt: "2023-04-20T20:05:31Z",
    content:
      "With the world gradually moving toward electric cars, its only a matter of time before EVs take to the skies, at least for shorter trips. Inching us closer to that milestone is Chinese battery maker … [+2653 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Andrew Tarantola",
    title:
      "Hitting the Books: Tech can't fix what's broken in American policing",
    description:
      "It's never been about safety as much as it has control, serving and protecting only to the benefit of the status quo. Clearview AI, PredPol, Shotspotter, they're all Carolyn Bryant Donham's testimony behind a veneer of technological validity — a shiny black b…",
    url: "https://www.engadget.com/hitting-the-books-more-than-a-glitch-meredith-broussard-mit-press-143009017.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/Pk06geMY965kbY.CnEjasQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/77363c20-c9b5-11ed-bae6-7801a222ee2d.cf.jpg",
    publishedAt: "2023-04-09T14:30:09Z",
    content:
      "It's never been about safety as much as it has control, serving and protecting only to the benefit of the status quo. Clearview AI, PredPol, Shotspotter, they're all Carolyn Bryant Donham's testimony… [+13483 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jeff Dunn",
    title:
      "Amazon's Kindle Paperwhite falls back to $100, plus the rest of the week's best tech deals",
    description:
      "It's Friday, which means it's time for another roundup of good tech deals. Today's highlights include Amazon's Kindle Paperwhite back down to $100, which is within $5 of the popular e-reader's all-time low. Apple's AirPods Pro are $50 off their list price at …",
    url: "https://www.engadget.com/amazon-kindle-paperwhite-falls-back-to-100-best-tech-deals-this-week-150031378.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/tFD5t2qPPoC46G0BB1wNYw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-07/5f168b30-fec8-11ec-bbf7-258b5bf18011.cf.jpg",
    publishedAt: "2023-04-07T15:00:31Z",
    content:
      "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+12546 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jeff Dunn",
    title:
      "Apple's iPad Air drops back to $500, plus the rest of the week's best tech deals",
    description:
      "Another Friday, another roundup of the best tech deals we could find. Our latest selection includes the iPad Air for $500, which is $99 off Apple's list price and a good value for a tablet we've called the best iPad for most people. Beyond that, the 55-inch L…",
    url: "https://www.engadget.com/apple-ipad-air-drops-back-to-500-best-tech-deals-this-week-161950697.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/iKdP.khimqYdX4At2Peeyw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-03/de844380-a47d-11ec-b6be-9dd2ff775c4e.cf.jpg",
    publishedAt: "2023-04-21T16:19:50Z",
    content:
      "Another Friday, another roundup of the best tech deals we could find. Our latest selection includes the iPad Air for $500, which is $99 off Apple's list price and a good value for a tablet we've call… [+10915 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Jess Weatherbed",
    title:
      "Elon Musk’s wealth plummets by $12.6 billion after chaotic 24 hours at Twitter, Tesla, and SpaceX",
    description:
      "The controversial tech magnate’s coffers became a smidge lighter on Thursday after his net worth plummeted by $12.6 billion, the biggest drop in Musk’s wealth so far this year.",
    url: "https://www.theverge.com/2023/4/21/23692915/elon-musk-net-worth-plummet-tesla-twitter-spacex-420",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/lqblonwJIZzU8bdV30HxtE8q4Zo=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23390590/VRG_Illo_STK022_K_Radtke_Musk_Down_Arrow_Blue.jpg",
    publishedAt: "2023-04-21T17:36:03Z",
    content:
      "Illustration by Kristen Radtke / The Verge; Getty Images\r\n\n \n\n Elon Musk’s coffers became a smidge lighter on Thursday after his net worth plummeted by $12.6 billion, according to Bloomberg’s Billion… [+3301 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Artem Golub, LeAnn Wallace, and Blake Montgomery",
    title: "NPR Is Going Dark on Twitter | Future Tech",
    description:
      "After first being labeled 'State-Affiliated Media' by Elon Musk's Twitter, NPR says it'll no longer be tweeting.",
    url: "https://gizmodo.com/npr-quits-twitter-future-tech-1850332324",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0969bc8e556b8577d87019658a346cfb.jpg",
    publishedAt: "2023-04-13T15:05:00Z",
    content:
      "After first being labeled 'State-Affiliated Media' by Elon Musk's Twitter, NPR says it'll no longer be tweeting.\r\nWe may earn a commission from links on this page.",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Martha Lane Fox warns against hysteria over AI",
    description:
      "The tech pioneer told the BBC we should see artificial intelligence as an opportunity.",
    url: "https://www.bbc.co.uk/news/technology-65162257",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/15FFA/production/_129260109_microsoftteams-image.png",
    publishedAt: "2023-04-04T00:37:41Z",
    content:
      'Martha Lane Fox has warned against becoming "too hysterical or hype-driven" over artificial intelligence (AI). \r\nThe tech pioneer instead urges more sensible conversations around its capabilities. \r\n… [+4706 chars]',
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Amy Skorheim",
    title:
      "Apple's second-gen AirPods Pro are down to $200, plus the rest of this week's best tech deals",
    description:
      "We check for tech deals every weekday. On Fridays, we pull together the best of what we found that still happens to be on sale. This week, Amazon continued to sell Apple's latest AirPods Pro for a $50 discount and one more retailer joined in too. Samsung's fl…",
    url: "https://www.engadget.com/apples-second-gen-airpods-pro-are-down-to-200-plus-the-rest-of-this-weeks-best-tech-deals-181113985.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/ErXIpGO4rQaVal_TWhIiKA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/6be0e290-39fe-11ed-a7b7-d9f37772c112.cf.jpg",
    publishedAt: "2023-04-14T18:12:02Z",
    content:
      "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+12007 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jon Fingas",
    title: "Meta begins its latest round of layoffs",
    description:
      "Meta has started the layoffs it announced in March. The company has confirmed that it's letting go of the first wave of the roughly 10,000 affected employees. CNBCnotes that this initial round of job cuts focuses on technical roles, such as software engineer,…",
    url: "https://www.engadget.com/meta-begins-its-latest-round-of-layoffs-145019127.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/nbbyqy5Ca.eCKGzLfcl5CA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-11/6e32a9f0-608e-11ed-85af-6f6f0330bc92.cf.jpg",
    publishedAt: "2023-04-19T14:50:19Z",
    content:
      "Meta has started the layoffs it announced in March. The company has confirmed that it's letting go of the first wave of the roughly 10,000 affected employees. CNBCnotes that this initial round of job… [+1279 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Mariella Moon",
    title: "Biden says it 'remains to be seen' if AI is dangerous",
    description:
      "Artificial intelligence has reached a new level of interest ever since ChatGPT burst into the scene. The AI chatbot with its eerily human-like responses has lit a fire under many tech giants and smaller tech companies that are now rushing to release their riv…",
    url: "https://www.engadget.com/biden-says-it-remains-to-be-seen-if-ai-is-dangerous-042300227.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/2GwT0niO7bHgfCiKaUlBnQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/65bac2e0-d356-11ed-b8f3-0b5b3e52fe01.cf.jpg",
    publishedAt: "2023-04-05T04:23:00Z",
    content:
      "Artificial intelligence has reached a new level of interest ever since ChatGPT burst into the scene. The AI chatbot with its eerily human-like responses has lit a fire under many tech giants and smal… [+1913 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Verge Staff",
    title:
      "The Verge is nominated for three Webby Awards, and you can help us win!",
    description:
      "The Verge has been nominated in three categories for the 2023 Webby Awards — including The Vergecast for best podcast, Full Frame by Becca Farsace for best tech video series, and Seeker by The Verge for best educational social video. Cast your Verge votes now!",
    url: "https://www.theverge.com/2023/4/18/23687373/webby-awards-2023-nominations-voting-peoples-voice-vergecast-full-frame",
    urlToImage: null,
    publishedAt: "2023-04-18T11:30:00Z",
    content:
      "The Verge is nominated for three Webby Awards, and you can help us win!\r\nThe Verge is nominated for three Webby Awards, and you can help us win!\r\n / Get your votes in by Thursday, April 20th, at 11:5… [+1168 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Kyle Barr",
    title: "Here’s How to Find the Original Bitcoin Manifesto in Your Mac",
    description:
      "An Apple developer left one of the strangest Easter eggs hidden in the macOS, offering a surprising and baffling connection between the Cupertino tech company’s mainline operating system to everybody’s (least) favorite cryptographic digital currency. Read mor…",
    url: "https://gizmodo.com/bitcoin-apple-mac-bitcoin-white-paper-1850307069",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/176f6f215c9c45306ca8269f8232701e.jpg",
    publishedAt: "2023-04-06T15:30:00Z",
    content:
      "An Apple developer left one of the strangest Easter eggs hidden in the macOS, offering a surprising and baffling connection between the Cupertino tech companys mainline operating system to everybodys… [+3865 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Steve Dent",
    title:
      "Samsung warns of lower profits amid falling demand for memory chips",
    description:
      "Samsung has warned of plummeting profits and plans to cut back on memory chip production in response to falling demand, The Korea Herald has reported. It expects to earn just 600 billion won ($455 million) for the first quarter of 2023, a drop of 96 percent f…",
    url: "https://www.engadget.com/samsung-warns-of-lower-profits-amid-falling-demand-for-memory-chips-113551159.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/LPh5ViyZLYiIctP4TJ3TwQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/cdad08e0-d52c-11ed-bbbb-c966cc8b0417.cf.jpg",
    publishedAt: "2023-04-07T11:35:51Z",
    content:
      "Samsung has warned of plummeting profits and plans to cut back on memory chip production in response to falling demand, The Korea Herald has reported. It expects to earn just 600 billion won ($455 mi… [+1469 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jon Fingas",
    title: "Apple accused of illegally firing pro-union workers",
    description:
      "Apple is once again facing accusations of cracking down on union organizers. The Communications Workers of America union (CWA) has filed charges with the National Labor Relations Board (NLRB) asserting that Apple illegally intimidated and fired workers at Hou…",
    url: "https://www.engadget.com/apple-accused-of-illegally-firing-pro-union-workers-140058541.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/JhU.VhcCl6NyVdW06dkC8A--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-11/55121710-6cb6-11ed-bece-b7cffd6e7139.cf.jpg",
    publishedAt: "2023-03-28T14:00:58Z",
    content:
      "Apple is once again facing accusations of cracking down on union organizers. The Communications Workers of America union (CWA) has filed charges with the National Labor Relations Board (NLRB) asserti… [+1855 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Emma Lembke and Zamaan Qureshi",
    title: "The Utah and Arkansas Social Media Bans Won’t Protect Us",
    description:
      "This week, Arkansas Governor Sarah Sanders signed into law a bill that requires parents or guardians to grant permission for their child to have a social media account. Last month, Utah passed a similar parental consent law that goes as far as requiring tech …",
    url: "https://gizmodo.com/utah-and-arkansas-social-media-bans-won-t-protect-us-1850354255",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0ae69d474761dea9bae741897a08fcfe.jpg",
    publishedAt: "2023-04-19T19:06:00Z",
    content:
      "This week, Arkansas Governor Sarah Sanders signed into law a bill that requires parents or guardians to grant permission for their child to have a social media account. Last month, Utah passed a simi… [+3487 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Kyle Barr",
    title:
      "Panera Bread Is Letting Customers Pay With Amazon’s Palm Reading Tech",
    description:
      "Panera Bread isn’t telling its legion of customers to shove their hand directly into their broccoli and cheese bread bowl, but a few Missouri franchisees are letting their customers know they can throw their palm onto the kiosk to pay for their meal. It’s not…",
    url: "https://gizmodo.com/panera-amazon-one-palm-reading-tech-biometric-data-1850251557",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/03ebaf34846209b8c45152411cdc2449.jpg",
    publishedAt: "2023-03-22T14:10:00Z",
    content:
      "Panera Bread isnt telling its legion of customers to shove their hand directly into their broccoli and cheese bread bowl, but a few Missouri franchisees are letting their customers know they can thro… [+2545 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Artem Golub and Blake Montgomery",
    title: "If An AI Reworks Copyrighted Images, Is It Art? | Future Tech",
    description:
      "The Balenciaga memes show how computer generated images are challenging legal ideas about fair use.",
    url: "https://gizmodo.com/if-an-ai-reworks-copyrighted-images-is-it-art-1850357976",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b75944e1081497160e7488431b4b2470.jpg",
    publishedAt: "2023-04-20T19:15:00Z",
    content:
      "The Balenciaga memes show how computer generated images are challenging legal ideas about fair use.\r\nWe may earn a commission from links on this page.",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Kevin Hurler",
    title: "Linus Tech Tips YouTube Channel Is Down After Crypto Scammer Hack",
    description:
      "Famed YouTube channel Linus Tech Tips has been hacked and destroyed. The gadget review channel with over 15 million subscribers was spewing Elon Musk-themed crypto scams earlier this morning, but now appears to be completely pulled from the platform.Read more…",
    url: "https://gizmodo.com/linus-tech-tips-youtube-elon-musk-crypto-hacker-1850256438",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/57f76f17cd7f3d4bfb5b9179505847d7.png",
    publishedAt: "2023-03-23T15:30:00Z",
    content:
      "Famed YouTube channel Linus Tech Tips has been hacked and destroyed. The gadget review channel with over 15 million subscribers was spewing Elon Musk-themed crypto scams earlier this morning, but now… [+1801 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Mariella Moon",
    title:
      "Google found to have violated order to save chat evidence in Epic antitrust case",
    description:
      "A federal judge has ruled that Google violated a court order requiring it to preserve employee chat messages relevant to Epic's antitrust case, according to Bloomberg and CNBC. San Francisco US District Judge James Donato said the tech giant \"adopted a 'don't…",
    url: "https://www.engadget.com/google-found-to-have-violated-order-to-save-chat-evidence-in-epic-antitrust-case-052711779.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/ckmFqzjVp4_8ajRGVIrfAQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-11/cb978340-ffa2-11e9-bbff-61a382d9865f.cf.jpg",
    publishedAt: "2023-03-29T05:27:11Z",
    content:
      "A federal judge has ruled that Google violated a court order requiring it to preserve employee chat messages relevant to Epic's antitrust case, according to Bloomberg and CNBC. San Francisco US Distr… [+2258 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Mariella Moon",
    title:
      "Google will soon restrict loan apps from accessing users' photos and contacts",
    description:
      "Google will implement a new rule for apps providing personal loans starting on May 31st that could help protect users from abuse and harassment. The tech giant has updated its policy (via TechCrunch) to prohibit cash lending applications from being able to ac…",
    url: "https://www.engadget.com/google-will-soon-restrict-loan-apps-from-accessing-users-photos-and-contacts-100906959.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/uQMJ8gxULfC2Mgc3MitHfQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/3cd37280-d461-11ed-b9fb-865842e8a31e.cf.jpg",
    publishedAt: "2023-04-06T10:09:06Z",
    content:
      "Google will implement a new rule for apps providing personal loans starting on May 31st that could help protect users from abuse and harassment. The tech giant has updated its policy (via TechCrunch)… [+2150 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Mariella Moon",
    title: "Samsung SSDs and memory cards fall to new lows in Amazon sale",
    description:
      "It's a great time to shop for SSDs and memory cards if you've been looking to expand your devices' storage capacities. Samsung's products are on sale for up to 57 percent off at Amazon, some of which are now listed for their all-time low prices on the website…",
    url: "https://www.engadget.com/samsung-ssds-and-memory-cards-fall-to-new-lows-in-amazon-sale-102828612.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/H8_57ucqUTU1qq44l2k3zw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/106b6ed0-de8b-11ed-bcff-e6ec483cba4c.cf.jpg",
    publishedAt: "2023-04-19T10:28:28Z",
    content:
      "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+2254 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Daniel Cooper",
    title:
      "Quella’s gorgeous retro cafe racer e-bikes are for people who don’t want to ride an e-bike",
    description:
      "I’m no cyclist, but I’ve always had a soft spot for retro-style cafe racer bikes with clean lines and a lack of unnecessary engineering. A lovely triangular frame, two narrow wheels, caliper brakes and a lovely paint job make the perfect bike for tootling aro…",
    url: "https://www.engadget.com/quellas-gorgeous-retro-cafe-racer-e-bikes-are-for-people-who-dont-want-to-ride-an-e-bike-143056450.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/QqKMuUVTKC.1HjsZb15oYg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/deb179b0-e04d-11ed-b3fc-e30c14b8cb7d.cf.jpg",
    publishedAt: "2023-04-21T14:30:56Z",
    content:
      "Im no cyclist, but Ive always had a soft spot for retro-style cafe racer bikes with clean lines and a lack of unnecessary engineering. A lovely triangular frame, two narrow wheels, caliper brakes and… [+2225 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "TikTok: Why do countries think Chinese tech firms are a security risk?",
    description:
      "An increasing number of countries are putting curbs on TikTok and other Chinese technology firms.",
    url: "https://www.bbc.co.uk/news/technology-65019279",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/10607/production/_129097076_chinatechindex1.png",
    publishedAt: "2023-03-23T14:46:45Z",
    content:
      "US Congress members have been grilling TikTok CEO Shou Zi Chew over the the safety of the social media app.\r\nThe US has threatened to ban it completely if the company remains under Chinese ownership.… [+4137 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Kyle Barr",
    title:
      "Elon Reportedly Pulled Out of OpenAI Because They Wouldn’t Let Him Be the Big Boss",
    description:
      "Twitter and Tesla CEO Elon Musk once played the Mr. Money Bags role to Silicon Valley’s newest darling OpenAI, the makers of ChatGPT and DALLE-2. The nonprofit has become the center of the tech world’s new obsession with AI, but a new report claims that back …",
    url: "https://gizmodo.com/elon-musk-openai-sam-altman-tesla-twitter-1850262884",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b0de1ba9d1ab277c30a970763183abb2.jpg",
    publishedAt: "2023-03-24T20:10:00Z",
    content:
      "Twitter and Tesla CEO Elon Musk once played the Mr. Money Bags role to Silicon Valleys newest darling OpenAI, the makers of ChatGPT and DALLE-2. The nonprofit has become the center of the tech worlds… [+3869 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Lauren Leffer",
    title: "Google Plans to Use Generative AI to Pump Out 'Remixed' Ads",
    description:
      "Google has found yet another place it can cram in generative AI. The company is bringing artificial intelligence into its marketing business, adding the tech to the services and content it offers to advertisers, according to a report from the Financial Times.…",
    url: "https://gizmodo.com/google-plans-to-use-generative-ai-for-remixed-ads-1850356632",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5fe88bc9b29d3e4ab9e25eafe36ed539.jpg",
    publishedAt: "2023-04-20T15:45:00Z",
    content:
      "Google has found yet another place it can cram in generative AI. The company is bringing artificial intelligence into its marketing business, adding the tech to the services and content it offers to … [+2315 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Kevin Hurler",
    title: "Remote Work Is Winding Down—Just Ask Zuckerberg",
    description:
      "The days of work-from-home could be dwindling for Meta employees. Hiring managers at the tech giant are reportedly no longer able to list jobs as remote as the company seemingly abandons its easy breezy work-from-home policy. Read more...",
    url: "https://gizmodo.com/meta-instagram-remote-work-work-from-home-facebook-1850287137",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bab4d00cdd08d0d5df3bb5576ecbce5d.jpg",
    publishedAt: "2023-03-31T16:30:00Z",
    content:
      "The days of work-from-home could be dwindling for Meta employees. Hiring managers at the tech giant are reportedly no longer able to list jobs as remote as the company seemingly abandons its easy bre… [+2213 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Nikki Main",
    title: "IT Firm Blames Rogue Ex-Employee for Whites Only Job Ad",
    description:
      "A tech company is under fire for seemingly posting a job listing asking for white candidates only with a note saying not to publish that information. Arthur Grand Technologies reportedly posted an ad on Indeed for a business analyst position with the note “On…",
    url: "https://gizmodo.com/arthur-grand-technologies-indeed-tech-jobs-1850309176",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f964b76a792dd661d0db3b3a0efe369f.jpg",
    publishedAt: "2023-04-06T20:30:00Z",
    content:
      "A tech company is under fire for seeminglyposting a job listing asking for white candidates only with a note saying not to publish that information. Arthur Grand Technologies reportedly posted an ad … [+3448 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Lauren Leffer",
    title:
      "Google Could Be Setting Itself Up for Failure With New Flight Price 'Guarantees'",
    description:
      "Google is taking a bold step in the world of online travel planning. The tech giant is piloting a price guarantee for airline bookings. Now, certain flights departing U.S. airports will come with a money-back promise. If a Google-guaranteed ticket price gets …",
    url: "https://gizmodo.com/google-flight-price-guarantee-announcement-travel-1850294447",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ef4c3e3bd9900460af526db34167155d.jpg",
    publishedAt: "2023-04-03T20:35:00Z",
    content:
      "Google is taking a bold step in the world of online travel planning. The tech giant is piloting a price guarantee for airline bookings. Now, certain flights departing U.S. airports will come with a m… [+5085 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Lauren Leffer",
    title: "Canceled HBO Originals Re-Emerge on Roku",
    description:
      "Westworld is back online, after being cancelled by HBO and subsequently removed from the company’s HBO Max streaming platform at the end of 2022. The popular sci-fi series re-emerged on Roku on Wednesday, as reported by Tech Crunch.Read more...",
    url: "https://gizmodo.com/hbo-max-discovery-roku-westworld-1850303038",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8126bb85d390423291e171d652e74ecd.jpg",
    publishedAt: "2023-04-05T17:00:00Z",
    content:
      "Westworld is back online, after being cancelled by HBO and subsequently removed from the companys HBO Max streaming platform at the end of 2022. The popular sci-fi series re-emerged on Roku on Wednes… [+2292 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "East Europe governments urge tech firms to fight disinformation - Reuters",
    description:
      "East Europe governments urge tech firms to fight disinformation  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvZWFzdC1ldXJvcGUtZ292ZXJubWVudHMtdXJnZS10ZWNoLWZpcm1zLWZpZ2h0LWRpc2luZm9ybWF0aW9uLTIwMjMtMDMtMjkv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-03-29T13:24:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Ukraine's tech entrepreneurs fight war on a different front - Reuters.com",
    description:
      "Ukraine's tech entrepreneurs fight war on a different front  Reuters.com",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V1cm9wZS91a3JhaW5lcy10ZWNoLWVudHJlcHJlbmV1cnMtZmlnaHQtd2FyLWRpZmZlcmVudC1mcm9udC0yMDIzLTA0LTA0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-04T10:07:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Analysis: Israel's tech sector reels from SVB collapse, proposed ... - Reuters",
    description:
      "Analysis: Israel's tech sector reels from SVB collapse, proposed ...  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvaXNyYWVscy10ZWNoLXNlY3Rvci1yZWVscy1zdmItY29sbGFwc2UtcHJvcG9zZWQtanVkaWNpYWwtcmVmb3JtLTIwMjMtMDQtMDMv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-03T06:06:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Breakingviews - Alibaba drafts breakup blueprint for China tech - Reuters",
    description:
      "Breakingviews - Alibaba drafts breakup blueprint for China tech  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2JyZWFraW5ndmlld3MvYWxpYmFiYS1kcmFmdHMtYnJlYWt1cC1ibHVlcHJpbnQtY2hpbmEtdGVjaC0yMDIzLTAzLTI5L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-03-29T03:00:35Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "Chatbot dreams drive frenzied tech rally in China - Reuters",
    description: "Chatbot dreams drive frenzied tech rally in China  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2NoaW5hL2NoYXRib3QtZHJlYW1zLWRyaXZlLWZyZW56aWVkLXRlY2gtcmFsbHktY2hpbmEtMjAyMy0wMy0yOS_SAQA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-03-29T09:01:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "TomTom returns to profit as location tech gains steam - Reuters",
    description:
      "TomTom returns to profit as location tech gains steam  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvdG9tdG9tcy1xMS1yZXZlbnVlLWJlYXRzLWVzdGltYXRlcy1kcml2ZW4tYnktbG9jYXRpb24tdGVjaC0yMDIzLTA0LTE0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-14T05:47:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Maurizio Fiaschetti",
    title:
      "Now the tide of money into the tech sector is ebbing, we can see who has no bathers on | Maurizio Fiaschetti",
    description:
      "Following an increase in interest rates, new startups, old tech companies and SVB are facing hard timesTech companies and their bank of choice are in crisis: there have been widespread layoffs, and Silicon Valley Bank (SVB) recently collapsed. So what went wr…",
    url: "https://www.theguardian.com/commentisfree/2023/mar/22/money-technology-sector-interest-rates-startups-svb",
    urlToImage:
      "https://i.guim.co.uk/img/media/16d1b0dfe6d62fa89be1f559c9279941a82601f4/0_114_3202_1921/master/3202.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=1774d6d24b1e731ea2274cc992189be0",
    publishedAt: "2023-03-22T08:30:19Z",
    content:
      "Tech companies and their bank of choice are in crisis: there have been widespread layoffs, and Silicon Valley Bank (SVB) recently collapsed. So what went wrong?\r\nLets start with tech companies. There… [+4516 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Thomas Germain",
    title:
      "Underage Posters Get a Legal Bedtime as Utah Bans Social Media After 10:30 PM",
    description:
      "Utah passed a pair of laws on Thursday laying out groundbreaking rules for children and social media. The laws require social media companies to verify users’ ages, obtain parental consent before kids can use apps like Instagram or TikTok, and ban anyone unde…",
    url: "https://gizmodo.com/underage-posters-get-a-legal-bedtime-as-utah-bans-socia-1850261373",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ca79a5913927abd181d72b6c525a4f15.jpg",
    publishedAt: "2023-03-24T17:45:00Z",
    content:
      "Utah passed a pair of laws on Thursday laying out groundbreaking rules for children and social media. The laws require social media companies to verify users ages, obtain parental consent before kids… [+5761 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Tom Warren",
    title:
      "Microsoft reportedly working on its own AI chips that may rival Nvidia’s",
    description:
      "Microsoft’s codename Athena is reportedly a secret project for AI chips. Reports suggest Microsoft is looking to cut its reliance on Nvidia for its costly AI push.",
    url: "https://www.theverge.com/2023/4/18/23687912/microsoft-athena-ai-chips-nvidia",
    urlToImage: null,
    publishedAt: "2023-04-18T14:10:48Z",
    content:
      "Microsoft reportedly working on its own AI chips that may rival Nvidias\r\nMicrosoft reportedly working on its own AI chips that may rival Nvidias\r\n / The AI race has tech companies scrambling for Nvid… [+2296 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "pzaveri@insider.com (Paayal Zaveri)",
    title: "Tech leaders are urging caution on AI",
    description:
      "In this edition: Elon Musk and other tech leaders urge caution on AI, regulators are getting more strict on tech M&A, and fintech's fraud problem.",
    url: "https://www.businessinsider.com/tech-leaders-urging-caution-ai-chatgpt-tech-deals-regulation-office-2023-3",
    urlToImage:
      "https://i.insider.com/63d3bd6a4589790018e56ded?width=1200&format=jpeg",
    publishedAt: "2023-03-30T10:36:08Z",
    content:
      "Happy Thursday readers. I'm Paayal Zaveri, and today I'm finally giving ChatGPT a chance. The AI chatbot has been hugely popular over the last few months. It seems like it can do everything from have… [+4800 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "pzaveri@insider.com (Paayal Zaveri)",
    title:
      "Tech CEOs increasingly admire Elon Musk's harsh leadership style, but they should actually take cues from Apple's Tim Cook",
    description:
      "Apple is the only major tech firm that hasn't done layoffs. As tech CEOs continue cost cutting experts say they should look at Cook's leadership rather than Musk.",
    url: "https://www.businessinsider.com/tech-ceos-how-to-be-like-tim-cook-elon-musk-2023-3",
    urlToImage:
      "https://i.insider.com/5fe25c2ca644880018193012?width=1200&format=jpeg",
    publishedAt: "2023-03-27T17:03:19Z",
    content:
      "With Amazon and Meta each conducting a second round of layoffs, it's got many wondering how much deeper these major companies can cut.\r\nIt also makes Apple's stability, and the fact that it hasn't he… [+4460 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Italy's Meloni vetoes takeover deal involving Russia tech giant Yandex - Reuters",
    description:
      "Italy's Meloni vetoes takeover deal involving Russia tech giant Yandex  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZGVhbHMvaXRhbHlzLW1lbG9uaS12ZXRvZXMtdGFrZW92ZXItZGVhbC1pbnZvbHZpbmctcnVzc2lhLXRlY2gtZ2lhbnQteWFuZGV4LTIwMjMtMDMtMjMv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-03-23T16:16:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Futures edge higher as tech and growth stocks gain; focus on jobs ... - Reuters",
    description:
      "Futures edge higher as tech and growth stocks gain; focus on jobs ...  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvZnV0dXJlcy1lZGdlLWhpZ2hlci10ZWNoLWdyb3d0aC1zdG9ja3MtZ2Fpbi1mb2N1cy1qb2JzLWRhdGEtMjAyMy0wNC0wNC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-04T10:13:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Canada to ramp up clean-tech push in budget to level playing field ... - Reuters.com",
    description:
      "Canada to ramp up clean-tech push in budget to level playing field ...  Reuters.com",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2FtZXJpY2FzL2NhbmFkYS1yYW1wLXVwLWNsZWFuLXRlY2gtcHVzaC1idWRnZXQtbGV2ZWwtcGxheWluZy1maWVsZC13aXRoLXVzLTIwMjMtMDMtMjgv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-03-28T10:07:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "HSBC hires Silicon Valley Bank bankers to focus on tech, healthcare - Reuters",
    description:
      "HSBC hires Silicon Valley Bank bankers to focus on tech, healthcare  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2ZpbmFuY2UvaHNiYy1oaXJlcy1zaWxpY29uLXZhbGxleS1iYW5rLWJhbmtlcnMtZm9jdXMtdGVjaC1oZWFsdGhjYXJlLTIwMjMtMDQtMTEv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-11T18:56:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Salvadoran lawmakers pass tech tax cut, including for AI businesses - Reuters Canada",
    description:
      "Salvadoran lawmakers pass tech tax cut, including for AI businesses  Reuters Canada",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2FtZXJpY2FzL3NhbHZhZG9yYW4tbGF3bWFrZXJzLXBhc3MtdGVjaC10YXgtY3V0LWluY2x1ZGluZy1haS1idXNpbmVzc2VzLTIwMjMtMDQtMTkv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-19T03:52:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "AUKUS needs to pool tech resources as US edge erodes ... - Reuters",
    description:
      "AUKUS needs to pool tech resources as US edge erodes ...  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2F1a3VzLW5lZWRzLXBvb2wtdGVjaC1yZXNvdXJjZXMtdXMtZWRnZS1lcm9kZXMtYXVzdHJhbGlhbi1pbnRlbGxpZ2VuY2UtY2hpZWYtMjAyMy0wNC0wNC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-04T02:31:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "European stocks get tech lift, UBS climbs on naming Ermotti as new ... - Reuters",
    description:
      "European stocks get tech lift, UBS climbs on naming Ermotti as new ...  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2V1cm9wZWFuLXN0b2Nrcy1nZXQtdGVjaC1saWZ0LXVicy1jbGltYnMtbmFtaW5nLWVybW90dGktbmV3LWNlby0yMDIzLTAzLTI5L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-03-29T07:21:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Morning Bid: Out of the sinking, banks 'n' tech lead the way - Reuters",
    description:
      "Morning Bid: Out of the sinking, banks 'n' tech lead the way  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiVWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvYXNpYS9nbG9iYWwtbWFya2V0cy12aWV3LWFzaWEtZ3JhcGhpYy1waXgtMjAyMy0wMy0yOS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-03-29T21:46:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Wall St Week Ahead Tech earnings to test markets' 'most crowded ... - Reuters",
    description:
      "Wall St Week Ahead Tech earnings to test markets' 'most crowded ...  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvd2FsbC1zdC13ZWVrLWFoZWFkLXRlY2gtZWFybmluZ3MtdGVzdC1tYXJrZXRzLW1vc3QtY3Jvd2RlZC10cmFkZS0yMDIzLTA0LTIxL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-21T18:22:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Igor Bonifacic",
    title: "Sony’s PS5 God of War: Ragnarok bundle is $50 off again",
    description:
      "If you missed the chance to buy the PlayStation 5 \r\nGod of War: Ragnarok\r\n bundle when it was $50 off last month\r\n, now you have another opportunity to do so. Amazon is again offering the bundle for $509, down from $560. With the discount, you’re effectively …",
    url: "https://www.engadget.com/sonys-ps5-god-of-war-ragnarok-bundle-is-50-off-again-153846267.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/j6ebuqkYHOuBDK_HSWgHgw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-11/1fa5a901-1fee-11eb-b6fd-ecc1bfdbf55f.cf.jpg",
    publishedAt: "2023-04-08T15:38:46Z",
    content:
      "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+1195 chars]",
  },
  {
    source: {
      id: "ars-technica",
      name: "Ars Technica",
    },
    author: "Scharon Harding",
    title: "Best Buy starts selling mail-in tech recycling boxes",
    description:
      "Retailer joins Apple, HP, and more in offering mail-in electronics recycling.",
    url: "https://arstechnica.com/gadgets/2023/04/best-buy-starts-selling-mail-in-tech-recycling-boxes/",
    urlToImage:
      "https://cdn.arstechnica.net/wp-content/uploads/2023/04/GettyImages-1245081557-760x380.jpg",
    publishedAt: "2023-04-05T17:44:48Z",
    content:
      "28 with \r\nBest Buy today announced an expansion of its electronics recycling program that lets people send in electronics without leaving their home. The retailer is now selling prepaid boxes that cu… [+3020 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Lauren Leffer",
    title: "Alaska Airlines Kills the Check-in Kiosk, Brings in Face Scanners",
    description:
      "Alaska Airlines is flying forward into the future. Or, trying to do something like that at least. The company announced a suite of changes, soon to be coming to airport lobbies, in a Tuesday press release. Read more...",
    url: "https://gizmodo.com/alaska-airlines-kills-check-in-kiosk-adds-face-scanners-1850347504",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/23acc3ded85340faa93f72976447d25b.gif",
    publishedAt: "2023-04-18T16:35:00Z",
    content:
      "Alaska Airlines is flying forward into the future. Or, trying to do something like that at least. The company announced a suite of changes, soon to be coming to airport lobbies, in a Tuesday press re… [+5195 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Boone Ashworth",
    title: "Microsoft Adds Bing Chat to SwiftKey Beta for Android",
    description:
      "Plus: Kobo’s new E Ink tablet is made for doodling, Google moves podcasts into YouTube Music, and Peloton connects to Android watches.",
    url: "https://www.wired.com/story/bing-chat-swiftkey-beta-android/",
    urlToImage:
      "https://media.wired.com/photos/643070d14b81c928190defda/191:100/w_1280,c_limit/Bing's-AI-Chatbot-Can-Now-Write-Your-Text-Messages-Gear-GettyImages-1465611774.jpg",
    publishedAt: "2023-04-08T13:00:00Z",
    content:
      "The ongoing incursion of artificial intelligence into every app, service, and facet of your life continues. Microsofts popular Android keyboard app SwiftKey lets you type by swiping across letters on… [+3049 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Aarian Marshall",
    title: "Lyft’s Vibe Shift Signals the End of the Gig Economy Dream",
    description:
      "The company's founders promised good vibes and greener cities. Now they’re stepping down, and the new CEO is focused on saving the business.",
    url: "https://www.wired.com/story/plaintext-lyft-vibe-shift-signals-the-end-of-the-gig-economy-dream/",
    urlToImage:
      "https://media.wired.com/photos/642f5188db2f888188f404e4/191:100/w_1280,c_limit/Logan-Green-David-Risher-John-Zimmer-Lyft-Plaintext-Business_1.jpg",
    publishedAt: "2023-04-07T13:00:00Z",
    content:
      "Last week, Lyft suddenly announced that its cofounders, president Logan Green and CEO John Zimmer, would step away from the ride-hailing company after 11 years. David Risher, a former executive at Mi… [+3464 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Alejandra Caraballo, Kelly Capatosto",
    title: "The Abortion Medication Ruling Threatens Free Speech Online",
    description:
      "The Texas decision may revive an antiabortion communications provision that was never taken off the books.",
    url: "https://www.wired.com/story/abortion-pill-comstock-free-speech-internet/",
    urlToImage:
      "https://media.wired.com/photos/6436c31122d33aa7352ff364/191:100/w_1280,c_limit/abortion_pills_GettyImages-525386743-(1).jpg",
    publishedAt: "2023-04-12T15:09:36Z",
    content:
      "The US District Court decision to block access to the abortion pill mifepristone  has threatened the most common form of abortion.  In his ruling, Judge Matthew Kacsmaryk invoked the long-dormant Com… [+3972 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "hbullock@insider.com (Hallam Bullock)",
    title: "TikTok CEO Shou Zi Chew has the internet eating out of his hand",
    description:
      "In today's edition of 10 Things in Tech: Romance scams are on the rise, Gen Z is coming for the housing market, and how to land a job in tech.",
    url: "https://www.businessinsider.com/tiktok-ceo-has-the-internet-eating-out-of-his-hand-2023-3",
    urlToImage:
      "https://i.insider.com/641dbe2b23738f0018baf8ee?width=1200&format=jpeg",
    publishedAt: "2023-03-25T11:30:00Z",
    content:
      "How do you spend $400,000 on takeaway in a matter of months? Hint: you're going to need to order a lot of steak and lobster. \r\nNewsletter editor Hallam Bullock here, reporting from London, and I'm ba… [+4308 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Adam Oram",
    title:
      "Grid Studio's Earth Day Sale Offers 15% Off Unique Tech Art Pieces - CNET",
    description:
      "Grid transforms old tech into framed artworks that make perfect gifts or office decor.",
    url: "https://www.cnet.com/deals/grid-studios-earth-day-sale-offers-15-off-unique-tech-art-pieces/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/9d6fe51cbf07dfd695d42455f27c070fe911245d/hub/2023/04/21/449909d5-ccba-4fc7-9f1c-29b5b6808a19/grdi-earth-day-game-boy.png?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2023-04-21T11:17:00Z",
    content:
      "We've seen tons of Earth Day deals launching this week with the celebration itself occurring on April 22, and a bunch of sustainable and eco-friendly products are seeing prices slashed. Grid Studio, … [+1065 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Gaia Bernstein",
    title: "Technology Addiction Has Created a Self-Help Trap",
    description:
      "The history of other industries shows that individuals aren't always personally responsible, and that there's a way out.",
    url: "https://www.wired.com/story/gaia-bernstein-technology-tobacco/",
    urlToImage:
      "https://media.wired.com/photos/64223b0f7d0b4c5278027e62/191:100/w_1280,c_limit/ideas_technology_addiction_self-help.jpg",
    publishedAt: "2023-03-28T13:00:00Z",
    content:
      "For years, I sat down to work each morning, realizing hours later that I felt drained, but got little done. Instead of writing, I spent my time texting, emailing, and mostly aimlessly browsing throug… [+6517 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Paayal Zaveri",
    title: "Big tech companies continue cost cutting",
    description:
      "In this edition: Big tech's new watchword is revenue per employee, Google cuts office perks, and Tesla's behind on its solar roof ambitions.",
    url: "https://www.businessinsider.com/big-tech-cost-cutting-meta-google-apple-vr-tesla-solar-2023-3",
    urlToImage:
      "https://i.insider.com/641e1ba1c60a3d00184ef2e0?width=1200&format=jpeg",
    publishedAt: "2023-04-03T10:30:14Z",
    content:
      "It's Monday, readers. I'm Paayal Zaveri, and welcome to the first week of April.We're now officially a quarter of the way through the year. That's a good reminder to make sure you plan some vacation … [+4904 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Samara Abramson,Teresa Zhang",
    title: "How tech layoffs could affect the economy",
    description:
      "Tech companies went on a hiring spree during the pandemic. Now those same companies are slashing their workforces in mass layoffs.",
    url: "https://www.businessinsider.com/how-tech-layoffs-could-affect-the-economy-2023-4",
    urlToImage:
      "https://i.insider.com/642b23631717ad0019ae94a0?width=1200&format=jpeg",
    publishedAt: "2023-04-03T19:34:23Z",
    content:
      "<ul>\n<li>In the beginning of the pandemic, people were spending more money on digital services and goods.</li>\n<li>So tech companies went on a hiring spree.</li>\n<li>Now those same companies are slas… [+279 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Lauren Leffer",
    title: "Australian Mayor Threatens to Sue OpenAI for Defamation by Chatbot",
    description:
      "Producing airtight, accurate facts isn’t ChatGPT’s strong suit. The OpenAI-created large language model is known to fabricate information for its own ends—outright lying in service of generating fluid text, quickly or completing tasks. But is ChatGPT legally …",
    url: "https://gizmodo.com/openai-defamation-chatbot-brian-hood-chatgpt-1850302595",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/540cd43a1144e192cb0af4d6ea6a1262.jpg",
    publishedAt: "2023-04-05T16:15:00Z",
    content:
      "Producing airtight, accurate facts isnt ChatGPTs strong suit. The OpenAI-created large language model is known to fabricate information for its own endsoutright lying in service of generating fluid t… [+5391 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Nikki Main",
    title: "BuzzFeed News Is Shutting Down",
    description:
      "Media layoffs are surging around the U.S., but BuzzFeed is taking it one step further and shuttering its whole news division as it lays off 15% of employees.",
    url: "https://gizmodo.com/buzzfeed-news-shutting-down-layoffs-1850357443",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/745876105c24b540217913ce10544854.jpg",
    publishedAt: "2023-04-20T15:46:00Z",
    content:
      "BuzzFeed News is closing.\r\nCEO Jonah Peretti announced Buzzfeed is closing in a company-wide memo to staff on Thursday: We are reducing our workforce by approximately 15% today across our Business, C… [+1597 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Tim Barber, Jeremy White",
    title: "Watches & Wonders 2023: Rolex Has an Emoji Watch",
    description:
      "Colored lab-grown diamonds, 3D printing, and more titanium that you can shake a stick at mark the wild releases from Watches & Wonders 2023.",
    url: "https://www.wired.com/story/rolex-has-an-emoji-watch-yes-really/",
    urlToImage:
      "https://media.wired.com/photos/642464f571301c1b7c3c1e7c/191:100/w_1280,c_limit/rolex_gear_m128238-0106_2301jva_002_cmjn.jpg",
    publishedAt: "2023-03-29T16:23:30Z",
    content:
      "Having debuted the tech in a limited-edition watch last year, Oris is now applying it to what was already one of its most tech-forward models, the ProPilot Altimeter (£5,250, or $6,485). First seen i… [+2895 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Mariella Moon",
    title: "Google launches a beta Nearby Share app for Windows PCs",
    description:
      "Back at CES 2022, Google talked about how it‘s improving Android’s integration with the Windows ecosystem in several ways. Nearby Share was one of the features it promised for Microsoft’s desktop OS. Now, the tech giant has rolled out a beta Nearby Share app …",
    url: "https://www.engadget.com/google-launches-a-beta-nearby-share-app-for-windows-pcs-120201590.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/d6sN__tS7fJHj96ely9rjA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/a3b71440-d07c-11ed-afb4-2b3d17ad8652.cf.jpg",
    publishedAt: "2023-04-01T12:02:01Z",
    content:
      "Back at CES 2022, Google talked about how its improving Androids integration with the Windows ecosystem in several ways. Nearby Share was one of the features it promised for Microsofts desktop OS. No… [+1464 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jon Fingas",
    title: "Renewable power generation overtook coal in the US last year",
    description:
      "Renewables are already producing more energy than fossil fuels in Europe, and now the US is approaching that milestone. The US Energy Information Administration (EIA) has determined that renewable power generation overtook coal in 2022, with 4,090 million meg…",
    url: "https://www.engadget.com/renewable-power-generation-overtook-coal-in-the-us-last-year-200907783.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/B3FXShssNsprrC_ZznZU5w--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-12/66473110-2357-11ea-bffa-18d7a5547dee.cf.jpg",
    publishedAt: "2023-03-29T20:09:07Z",
    content:
      "Renewables are already producing more energy than fossil fuels in Europe, and now the US is approaching that milestone. The US Energy Information Administration (EIA) has determined that renewable po… [+1713 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Sarah Fielding",
    title: "Apple's previous-gen AirPods Pro drop to $159",
    description:
      "AirPods are known for two things: playing good audio and going on sale. Today, Apple's premium earbuds are living up to one of them in big way after Woot slashed the first-generation AirPod Pros back to an all-time low from $249 to $159. That's a savings of $…",
    url: "https://www.engadget.com/apples-previous-gen-airpods-pro-drop-to-159-123402268.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/YHDQX9hSWjbYECd10Xz63w--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-10/a8d81410-458a-11ed-bbd7-f5518cdbbbea.cf.jpg",
    publishedAt: "2023-04-18T12:34:02Z",
    content:
      "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+1447 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jon Fingas",
    title: "Apple's third-gen AirPods are back on sale for $150",
    description:
      "Now that spring is making outdoor walks more of a pleasure, you might want some wireless earbuds — and thankfully, Amazon is making them more affordable. The retailer is again selling Apple's third-generation AirPods for $150, or $20 off. That's a record-low …",
    url: "https://www.engadget.com/apples-third-gen-airpods-are-back-on-sale-for-150-131553863.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/dRCWtH4PB.H3rbF82OuYZg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-07/86691650-0c59-11ed-aeea-f62a1d412790.cf.jpg",
    publishedAt: "2023-04-04T13:15:53Z",
    content:
      "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+1489 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jon Fingas",
    title: "Apple's 14-inch M2 MacBook Pro is up to $250 off at Amazon",
    description:
      "This is a prime moment to buy a high-powered Mac laptop for a grad, or as a treat for yourself. Amazon is offering steep discounts for 14-inch MacBook Pro models with the M2 Pro chip. The base version with a 10-core CPU and 512GB of storage is available at an…",
    url: "https://www.engadget.com/apples-14-inch-m2-macbook-pro-is-up-to-250-off-at-amazon-133159632.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/13TWGLfxc.eFbXWdVAYyAw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/f28fc410-dead-11ed-b3cf-9e904e70b76d.cf.jpg",
    publishedAt: "2023-04-19T13:31:59Z",
    content:
      "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+1557 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Mariella Moon",
    title:
      "Google reportedly plans to let companies use AI-generated ad content",
    description:
      "Google's advertising customers will soon be able to use the company's generative artificial intelligence to create ad campaigns, according to the Financial Times. Apparently, the tech giant is gearing up to embed its generative AI, the same technology powerin…",
    url: "https://www.engadget.com/google-reportedly-plans-to-let-companies-use-ai-generated-ad-content-105547069.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/xMcgsqYkF6Rt.5OIF.aKfw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/b4ace0c0-df5b-11ed-b2fd-b8ef9311c750.cf.jpg",
    publishedAt: "2023-04-20T10:55:47Z",
    content:
      "Google's advertising customers will soon be able to use the company's generative artificial intelligence to create ad campaigns, according to the Financial Times. Apparently, the tech giant is gearin… [+1498 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Steve Dent",
    title: "The Nintendo Switch OLED is $30 off right now",
    description:
      "The Nintendo Switch OLED is a big improvement over the original, due in particular to the 7-inch OLED display that's larger and brighter than the original model. It's also $50 more than its predecessor, but a sale (today only) helps negate some of that. Woot …",
    url: "https://www.engadget.com/the-nintendo-switch-oled-is-30-off-right-now-131533906.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/nvLo5_V5ZhlsoQHOfSzQvQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/f90e0970-cc9a-11ed-b8ff-126c20741589.cf.jpg",
    publishedAt: "2023-03-27T13:15:33Z",
    content:
      "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+1506 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Steve Dent",
    title: "Apple's Mac Mini M2 falls back to a low of $500",
    description:
      "Apple's Mac Mini M2 gives you more speed and connectivity than you'd guess in such a small package, and for surprisingly little money, too. Now, it's dropped back down to the lowest price we've ever seen, starting at just $500 ($100 off the regular price) for…",
    url: "https://www.engadget.com/apples-mac-mini-m2-falls-back-to-a-low-of-500-083538308.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/xhkSHMLLAJTWhozWhYNdjw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/9125b0f0-ddbc-11ed-acf5-33d4eca9067d.cf.jpg",
    publishedAt: "2023-04-18T08:35:38Z",
    content:
      "All products recommended by Engadget are selected by our editorial team, independent of our parent company. Some of our stories include affiliate links. If you buy something through one of these link… [+1739 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jon Fingas",
    title: "Amazon launches an accelerator to boost generative AI startups",
    description:
      'Amazon may not be known for making generative AI, but it\'s eager to help others get their technology up and running. Amazon Web Services (AWS) is launching a generative AI accelerator that will help the "most promising" startups flourish. The 10-week program …',
    url: "https://www.engadget.com/amazon-launches-an-accelerator-to-boost-generative-ai-startups-134746016.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/S2fyP.XBWvrWRBe2bR6YGw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-01/705e47d0-9468-11ed-9ebf-5ffbcddf3128.cf.jpg",
    publishedAt: "2023-04-05T13:47:46Z",
    content:
      "Amazon may not be known for making generative AI, but it's eager to help others get their technology up and running. Amazon Web Services (AWS) is launching a generative AI accelerator that will help … [+1726 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Kris Holt",
    title: "Microsoft Teams adds Snapchat AR Lenses to video chats",
    description:
      "Microsoft\r\n and Snap\r\n have teamed up to bring Snapchat Lenses to Teams. The next time you hop onto a call with colleagues or friends, you'll be able to pick from one of 26 popular Lenses to add some visual flair to your video chats. You'll be able to turn yo…",
    url: "https://www.engadget.com/microsoft-teams-adds-snapchat-ar-lenses-to-video-chats-163057951.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/v_Q7y8Xx3wj_8oRrwLEcWw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/2b237d10-d7b2-11ed-8df7-493e7fe0ae07.cf.jpg",
    publishedAt: "2023-04-10T16:30:57Z",
    content:
      "Microsoft\r\n and Snap\r\n have teamed up to bring Snapchat Lenses to Teams. The next time you hop onto a call with colleagues or friends, you'll be able to pick from one of 26 popular Lenses to add some… [+1413 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Steve Dent",
    title: "Sony investment will put AI chips inside Raspberry Pi boards",
    description:
      "Sony's semiconductor division has announced that it's making a \"strategic investment\" in Raspberry Pi as a way to bring its AI tech to a wider market. The idea is to give Raspberry Pi users around the world a development platform for its Aitrios edge computin…",
    url: "https://www.engadget.com/sony-investment-will-put-ai-chips-inside-raspberry-pi-boards-083503462.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/YnwFCW5yh1_lBnS_nZcXFg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/9187f130-d906-11ed-bfff-437ef0360c42.cf.jpg",
    publishedAt: "2023-04-12T08:35:03Z",
    content:
      "Sony's semiconductor division has announced that it's making a \"strategic investment\" in Raspberry Pi as a way to bring its AI tech to a wider market. The idea is to give Raspberry Pi users around th… [+1543 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jon Fingas",
    title:
      "Amazon lays off more than 100 employees across its gaming divisions",
    description:
      'Amazon\'s ongoing layoffs now include those more directly involved in game production. The company has provided an internal memo from gaming VP Christoph Hartmann (originally shared by Bloomberg) announcing layoffs of "just over" 100 employees across gaming di…',
    url: "https://www.engadget.com/amazon-lays-off-more-than-100-employees-across-its-gaming-divisions-190634108.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/cAO0mIAjEJIm00K0V6T0yw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-11/44a95c60-65fb-11ed-b6de-9d4a35ddd125.cf.jpg",
    publishedAt: "2023-04-04T19:06:34Z",
    content:
      "Amazon's ongoing layoffs now include those more directly involved in game production. The company has provided an internal memo from gaming VP Christoph Hartmann (originally shared by Bloomberg) anno… [+1636 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jon Fingas",
    title: "Italy to block ChatGPT over data protection issues",
    description:
      "Italians might not have access to ChatGPT for much longer. Italy's Privacy Guarantor has ordered ChatGPT blocked over concerns OpenAI is violating the European Union's General Data Protection Regulation (GDPR) through its data handling practices. The regulato…",
    url: "https://www.engadget.com/italy-to-block-chatgpt-over-data-protection-issues-134922771.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/w9lK8aeLmw62GailCQtC.A--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/e3fbe4c0-cfc0-11ed-bf73-37a2513825a6.cf.jpg",
    publishedAt: "2023-03-31T13:49:22Z",
    content:
      "Italians might not have access to ChatGPT for much longer. Italy's Privacy Guarantor has ordered ChatGPT blocked over concerns OpenAI is violating the European Union's General Data Protection Regulat… [+1721 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "pzaveri@insider.com (Paayal Zaveri,April Joyner)",
    title:
      "Potential regulator challenges to Big Tech M&A may have far-reaching consequences for the tech ecosystem",
    description:
      "Deals involving large tech companies may get harder as regulators ramp up scrutiny, like the DOJ's potential lawsuit blocking Adobe's Figma takeover.",
    url: "https://www.businessinsider.com/tech-merger-deals-harder-adobe-figma-antitrust-startups-exit-options-2023-3",
    urlToImage:
      "https://i.insider.com/64235d3172dd380018a18afd?width=1200&format=jpeg",
    publishedAt: "2023-03-30T09:30:00Z",
    content:
      "US regulators are cracking down on Big Tech's bids to swoop up startups and that could have huge implications for the broader tech M&amp;A scene.\r\nThe US Department of Justice is planning to block Ad… [+5006 chars]",
  },
  {
    source: {
      id: null,
      name: "Android Central",
    },
    author: "patrick.farmer@futurenet.com (Patrick Farmer)",
    title: "Best Earth Day deals 2023: your sustainable tech shopping guide",
    description:
      "Earth Day is April 22nd, so a ton of online retailers are discounting their sustainable tech and refurbished devices. These are the best deals we've found so far.",
    url: "https://www.androidcentral.com/phones/best-earth-day-deals-2023-your-sustainable-tech-shopping-guide",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/aVunuEPtmpuarTYaNyGkye-1200-80.jpg",
    publishedAt: "2023-04-19T19:36:01Z",
    content:
      "The Earth Day sales are kicking off, so if you're looking to pick up some sustainable tech this year, now's the time to buy. Below you'll find the best Earth Day tech deals that are available now, pl… [+2770 chars]",
  },
  {
    source: {
      id: null,
      name: "Hackaday",
    },
    author: "Elliot Williams",
    title: "Sufficiently Advanced Tech: Has Bugs",
    description:
      "Arthur C. Clarke said that “Any sufficiently advanced technology is indistinguishable from magic”. He was a sci-fi writer, though, and not a security guy. Maybe it should read “Any sufficiently …read more",
    url: "https://hackaday.com/2023/04/15/sufficiently-advanced-tech-has-bugs/",
    urlToImage:
      "https://hackaday.com/wp-content/uploads/2019/02/carlanguage.jpg",
    publishedAt: "2023-04-15T14:00:23Z",
    content:
      "Arthur C. Clarke said that Any sufficiently advanced technology is indistinguishable from magic. He was a sci-fi writer, though, and not a security guy. Maybe it should read Any sufficiently advanced… [+1904 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "The web firm that wants to stop you getting 'cancelled'",
    description:
      "Website and app Rumble says it offers an uncensored rival to the likes of YouTube and Twitter.",
    url: "https://www.bbc.co.uk/news/business-65050160",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/932F/production/_129097673_rumble2.jpg",
    publishedAt: "2023-03-26T23:06:08Z",
    content:
      'A supporter of Donald Trump made headlines last year when he said: "We are uncancellable by big tech."\r\nThe defiant claim came from Devin Nunes, who is the chief executive of Trump Media and Technolo… [+7499 chars]',
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "Police arrest suspect in Cash App founder Bob Lee's death",
    description:
      "Bob Lee's death after a stabbing in downtown San Francisco ignited criticism of policing in the city.",
    url: "https://www.bbc.co.uk/news/world-us-canada-65257806",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/A4B8/production/_129286124_06feb74d-e797-4d98-b8a2-998fe12bd34d.png",
    publishedAt: "2023-04-13T17:49:33Z",
    content:
      "Police in San Francisco have arrested a person in connection with the fatal stabbing of Cash App founder Bob Lee. \r\nPolice found Mr Lee, 43, unconscious with stab wounds on 4 April near San Francisco… [+1385 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Asia Martin",
    title:
      "Leaked Amazon memo shows plans to reduce employee stock awards in 2025",
    description:
      "Leaked Amazon memos, AI tricking reporters, and the late Bob Lee in today's 10 Things in Tech.",
    url: "https://www.businessinsider.com/amazon-memo-ai-microsoft-tesla-toyota-chatgpt-cashapp-google-2025-2023-4",
    urlToImage:
      "https://i.insider.com/642e9c5f2a659a0019a6a228?width=1200&format=jpeg",
    publishedAt: "2023-04-06T10:30:08Z",
    content:
      "Welcome back to another day of tech news.  Last week, Elon Musk and a number of tech elites signed an open letter to put a six month pause on developing AI. While it's obvious that AI has the ability… [+4068 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Morgan Chittum",
    title:
      "Retail investors are sitting on big losses in their stock portfolios even as the market rallies in 2023",
    description:
      '"This prolonged bear market – particularly in tech - along with recent growing fears of a recession are undoubtedly weighing on sentiment."',
    url: "https://markets.businessinsider.com/news/stocks/stock-market-rally-retail-investors-portfolio-losses-tesla-apple-nvidia-2023-4",
    urlToImage:
      "https://i.insider.com/64397c2c75412f0018d5737a?width=1200&format=jpeg",
    publishedAt: "2023-04-14T18:08:40Z",
    content:
      "Sesame/Getty Images\r\n<ul>\n<li>The average retail investor portfolio is down 27% year-to-date, per VandaTrack.</li>\n<li>US stocks have been surprisingly resilient in 2023 despite looming recession fea… [+2381 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Morgan Chittum",
    title:
      "US stocks rise but close lower for the week as investors mull mixed bag of corporate earnings",
    description:
      "Mega-cap tech companies like Alphabet and Amazon are on deck to report quarterly results next week.",
    url: "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-mixed-earnings-reports-2023-4",
    urlToImage:
      "https://i.insider.com/6442e7c5e1a96300185aa30d?width=1200&format=jpeg",
    publishedAt: "2023-04-21T20:07:23Z",
    content:
      "Traders work on the floor of the New York Stock ExchangeMichael M. Santiago/Getty Images\r\n<ul>\n<li>US stock indices rose Friday as investors digested mixed earnings reports.</li>\n<li>However, all thr… [+1907 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Meira Gebel",
    title:
      "Change.org's CTO has advice for every company that wants to make an impact: work fast, lean into tech, and focus on solutions",
    description:
      "Change.org chief technology officer Elaine Zhou told Insider how organizations can modernize internal tech tools to improve their overall business.",
    url: "https://www.businessinsider.com/technology-ai-business-growth-change-org-cto-elaine-zhou-interview-2023-4",
    urlToImage:
      "https://i.insider.com/6439b3607cdf0f00185cb24c?width=1200&format=jpeg",
    publishedAt: "2023-04-17T13:30:10Z",
    content:
      '.insider-raw-embed + p { display: none; }\r\n\n // put series title here\n const seriesTitle = "Tech Leadership Playbook";\n // put sponsor text here\n const text = "Presented by";\n // put the viking id fo… [+6243 chars]',
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Hasan Chowdhury",
    title:
      "Tech employees should expect more debloating even after 330,000 jobs got wiped",
    description:
      "Tech firms have cut thousands of workers but these losses represent a small fraction of their bloated workforces.",
    url: "https://www.businessinsider.com/google-and-amazon-should-cut-more-jobs-analysts-say-2023-4",
    urlToImage:
      "https://i.insider.com/63601bef5ff3360019756e73?width=1200&format=jpeg",
    publishedAt: "2023-04-11T12:39:11Z",
    content:
      "Tech companies have already carried out mass layoffs but could have further to go.iStock; Marianne Ayala/Insider\r\n<ul>\n<li>Silicon Valley has laid off over 330,000 workers since last year but the car… [+4987 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Mark Sweney",
    title: "Autonomy founder Mike Lynch loses appeal against extradition to US",
    description:
      "Tech entrepreneur alleged to have duped Hewlett-Packard into overpaying for software in $11bn dealMike Lynch, the tech entrepreneur once hailed as Britain’s answer to Bill Gates, has lost an appeal against extradition to the US to answer criminal fraud charge…",
    url: "https://www.theguardian.com/business/2023/apr/21/autonomy-founder-mike-lynch-loses-appeal-against-extradition-to-us-hewlett-packard",
    urlToImage:
      "https://i.guim.co.uk/img/media/4787c6babb2738dcf3da2182731fa0161ee02838/0_139_5150_3090/master/5150.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bf7f0e0e10c245762361b2bdd5f6269b",
    publishedAt: "2023-04-21T10:26:38Z",
    content:
      "Mike Lynch, the tech entrepreneur once hailed as Britains answer to Bill Gates, has lost an appeal against extradition to the US to answer criminal fraud charges.\r\nLynch, the co-founder of the Britis… [+1685 chars]",
  },
  {
    source: {
      id: null,
      name: "Slashdot.org",
    },
    author: "msmash",
    title: "US Tech Giants Voice Concern Over India's Fact-Checking Rule",
    description:
      "The Asia Internet Coalition, an influential industry organization representing technology giants such as Facebook, Google, Apple, and Amazon, has voiced concerns over a recent amendment to India's IT rules, saying the changes grant the local government expans…",
    url: "https://yro.slashdot.org/story/23/04/17/1058207/us-tech-giants-voice-concern-over-indias-fact-checking-rule",
    urlToImage: "https://a.fsdn.com/sd/topics/facebook_64.png",
    publishedAt: "2023-04-17T14:00:00Z",
    content:
      'Love may laugh at locksmiths, but he has a profound respect for money bags.\r\n-- Sidney Paternoster, "The Folly of the Wise"',
  },
  {
    source: {
      id: null,
      name: "Slashdot.org",
    },
    author: "msmash",
    title: "The Spy Law That Big Tech Wants To Limit",
    description:
      "Top tech companies are mounting a push to limit how US intelligence agencies collect and view texts, emails and other information about their users, especially American citizens. From a report: The companies, including Alphabet's Google, Meta Platforms and Ap…",
    url: "https://tech.slashdot.org/story/23/03/22/1613235/the-spy-law-that-big-tech-wants-to-limit",
    urlToImage: "https://a.fsdn.com/sd/topics/usa_64.png",
    publishedAt: "2023-03-22T16:40:00Z",
    content:
      "The companies, including Alphabet's Google, Meta Platforms and Apple, want Congress to limit Section 702 of the Foreign Intelligence Surveillance Act, as they work to renew the law before it expires … [+1494 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Jody Serrano",
    title: "Cash App Creator Bob Lee Stabbed to Death in San Francisco",
    description:
      "Bob Lee, the creator of Cash App and former CTO at Jack Dorsey’s Square, now Block, was stabbed to death in San Francisco on Tuesday morning. Read more...",
    url: "https://gizmodo.com/cash-app-creator-bob-lee-stabbed-to-death-san-francisco-1850302260",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e28ca32d27ef6d90f606fec2dca2a1ee.png",
    publishedAt: "2023-04-05T12:38:00Z",
    content:
      "Bob Lee, the creator of Cash App and former CTO at Jack Dorseys Square, now Block, was stabbed to death in San Francisco on Tuesday morning. \r\nLees death was reported by NBC Bay Area and TechCrunch a… [+1882 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Kevin Hurler",
    title: "Italy Flocks to VPNs Amidst ChatGPT Ban",
    description:
      "After Italy temporarily banned ChatGPT and announced an investigation into OpenAI, residents of the country apparently grew interested in VPNs. After the Italian Data Protection Authority announced the ban and investigation, search volume surrounding the VPNs…",
    url: "https://gizmodo.com/italy-vpn-chatgpt-chatbot-openai-ai-1850302301",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2aa8b3ad8ed80c758fafadb1af84d66c.jpg",
    publishedAt: "2023-04-05T13:55:00Z",
    content:
      "After Italy temporarily banned ChatGPT and announced an investigation into OpenAI, residents of the country apparently grew interested in VPNs. After the Italian Data Protection Authority announced t… [+2375 chars]",
  },
  {
    source: {
      id: "ars-technica",
      name: "Ars Technica",
    },
    author: "Scharon Harding",
    title:
      "Tech makers must provide repairs for up to 10 years under proposed EU law",
    description:
      "Proposal doesn't enforce affordable spare parts, manuals, rights group complains.",
    url: "https://arstechnica.com/gadgets/2023/03/tech-makers-must-provide-repairs-for-up-to-10-years-under-proposed-eu-law/",
    urlToImage:
      "https://cdn.arstechnica.net/wp-content/uploads/2023/03/GettyImages-1305200685-1-760x380.jpg",
    publishedAt: "2023-03-23T18:37:44Z",
    content:
      "Enlarge/ Smartphone repairs could be required for up to five years, while other products, like washing machines, may require up to a decade of vendor repairs.\r\n0 with \r\nMakers of numerous product cat… [+5110 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Stephen Collinson",
    title:
      "The pulsating state politics that could shape America more than Trump's legal woes",
    description:
      "Donald Trump may be getting all the headlines, but partisan struggles in state capitals across the country may do far more to change America than the drama surrounding the first ex-president to be charged with a crime.",
    url: "https://www.cnn.com/2023/04/06/politics/state-political-battles-analysis/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230405180255-protasiewicz-0404.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-04-06T04:05:38Z",
    content:
      "Donald Trump may be getting all the headlines, but partisan struggles in state capitals across the country may do far more to change America than the drama surrounding the first ex-president to be ch… [+8822 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Kevin Liptak",
    title:
      "Biden's trip to Ireland is part homecoming, part diplomacy and part politics",
    description:
      'When President Joe Biden was isolating with Covid in the White House last summer, atop the stack of books on his desk was a 320-page paperback: "JFK in Ireland."',
    url: "https://www.cnn.com/2023/04/11/politics/joe-biden-ireland-trip/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230410122957-03-joe-biden-ireland-trip.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-04-11T09:01:33Z",
    content:
      "Belfast, Northern IrelandCNN\r\n  — \r\nWhen President Joe Biden was isolating with Covid in the White House last summer, atop the stack of books on his desk was a 320-page paperback: JFK in Ireland.\r\nTh… [+8342 chars]",
  },
  {
    source: {
      id: null,
      name: "The Economist",
    },
    author: "The Economist",
    title: "Politics",
    description: "The world this week",
    url: "https://www.economist.com/the-world-this-week/2023/03/23/politics",
    urlToImage:
      "https://www.economist.com/img/b/1280/720/90/media-assets/image/20230325_WWP002.jpg",
    publishedAt: "2023-03-23T15:17:05Z",
    content:
      "Vladimir Putin, Russias president, hosted Xi Jinping, his Chinese counterpart, in Moscow. Mr Putin endorsed a Chinese plan for a ceasefire and negotiations in the war in Ukraine. The plan does not ac… [+6046 chars]",
  },
  {
    source: {
      id: null,
      name: "The Economist",
    },
    author: "The Economist",
    title: "Politics",
    description: "The world this week",
    url: "https://www.economist.com/the-world-this-week/2023/03/30/politics",
    urlToImage:
      "https://www.economist.com/img/b/1280/720/90/media-assets/image/20230401_WWP001.jpg",
    publishedAt: "2023-03-30T12:54:00Z",
    content:
      "Binyamin Netanyahu, Israels prime minister, agreed to pause legislation intended to weaken the Supreme Court and politicise judicial appointments, after mass protests brought the country to a halt. O… [+6012 chars]",
  },
  {
    source: {
      id: null,
      name: "The Economist",
    },
    author: "The Economist",
    title: "Politics",
    description: "The world this week",
    url: "https://www.economist.com/the-world-this-week/2023/04/13/politics",
    urlToImage:
      "https://www.economist.com/img/b/1280/720/90/media-assets/image/20230415_WWP001.jpg",
    publishedAt: "2023-04-13T13:28:57Z",
    content:
      "To mark the 25th anniversary of the Good Friday Agreement Joe Biden visited Belfast, where he briefly met the main parties in Northern Ireland. The settlement has ensured peace in the province but ge… [+6134 chars]",
  },
  {
    source: {
      id: null,
      name: "The Economist",
    },
    author: "The Economist",
    title: "Politics",
    description: "The world this week",
    url: "https://www.economist.com/the-world-this-week/2023/04/05/politics",
    urlToImage:
      "https://www.economist.com/img/b/1280/720/90/media-assets/image/20230408_WWP002.jpg",
    publishedAt: "2023-04-05T14:42:56Z",
    content:
      "Donald Trump appeared before a judge in Manhattan to plead not guilty to 34 charges of falsifying business records. They relate to payments he made before the 2016 election to a pornographic actress … [+6065 chars]",
  },
  {
    source: {
      id: null,
      name: "The Economist",
    },
    author: "The Economist",
    title: "Politics",
    description: "The world this week",
    url: "https://www.economist.com/the-world-this-week/2023/04/20/politics",
    urlToImage:
      "https://www.economist.com/img/b/1280/720/90/media-assets/image/20230422_WWP002.jpg",
    publishedAt: "2023-04-20T15:11:15Z",
    content:
      "War broke out in Sudan between the national army, led by General Abdel Fattah al-Burhan, Sudans de facto leader, who seized power in a coup in 2021, and the Rapid Support Forces, a paramilitary comma… [+6122 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Half of Republicans say politics drove US abortion pill court ruling ... - Reuters",
    description:
      "Half of Republicans say politics drove US abortion pill court ruling ...  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMie2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VzL2hhbGYtcmVwdWJsaWNhbnMtc2F5LXBvbGl0aWNzLWRyb3ZlLXVzLWFib3J0aW9uLXBpbGwtY291cnQtcnVsaW5nLXJldXRlcnNpcHNvcy0yMDIzLTA0LTEzL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-13T10:02:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Arifa Akbar",
    title:
      "Slow Violence review – surreal comedy of apocalyptic office politics",
    description:
      "Pleasance, LondonThe climate crisis is explored via the senseless bureaucracy of a travel agency in a show that lacks subtlety Office politics can be a keen mirror of group behaviour and social ills, especially in absurdist or comic form, from the polite prot…",
    url: "https://www.theguardian.com/stage/2023/mar/24/slow-violence-review-pleasance-london",
    urlToImage:
      "https://i.guim.co.uk/img/media/dd1906bac8ecfc199c12ade4be74d80f2f37f72a/239_239_3735_2240/master/3735.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTIucG5n&enable=upscale&s=85aac82cf28f3e33bae2ddbf0302c701",
    publishedAt: "2023-03-24T11:14:44Z",
    content:
      "Office politics can be a keen mirror of group behaviour and social ills, especially in absurdist or comic form, from the polite protest of Herman Melvilles Bartleby to David Brents white-collar tyran… [+1783 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Guardian Staff",
    title: "How Nigel Lawson left his mark on British politics | Letters",
    description:
      "Stephen Locke, Lawson’s former private secretary, on how rewarding it was to work for him, and Margaret Beckett on his divisive legacy. Plus letters from Mark Hebert, Valerie Gidlow and Greg QuieryThank you, Martin Kettle, for your thoughtful and incisive pie…",
    url: "https://www.theguardian.com/politics/2023/apr/06/how-nigel-lawson-left-his-mark-on-british-politics",
    urlToImage:
      "https://i.guim.co.uk/img/media/140275a7da03ca8534178cfb5d919190cac698d8/0_191_4394_2635/master/4394.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c7a910dffeb317e990310ab4416a0bb7",
    publishedAt: "2023-04-06T17:05:34Z",
    content:
      "Thank you, Martin Kettle, for your thoughtful and incisive piece on Nigel Lawsons legacy (A committed unbeliever: Nigel Lawson left the Tory party a complex, divisive legacy, 5 April). I was his priv… [+3166 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Nicole Gaudiano",
    title:
      "Biden shoots down multiple questions about his predecessor's indictment: 'I have no comment on Trump'",
    description:
      "Democrats have told Insider that Biden, for many reasons, needs to be quiet about the biggest story in politics.",
    url: "https://www.businessinsider.com/donald-trump-no-comment-joe-biden-indictment-2023-3",
    urlToImage:
      "https://i.insider.com/639b8199b7e0f200180944be?width=1200&format=jpeg",
    publishedAt: "2023-03-31T14:16:55Z",
    content:
      "President Joe Biden, left, and former President Donald Trump, right, in a composite image.Getty Images\r\n<ul>\n<li>Biden was asked multiple times Friday morning about the historic indictment of Donald … [+2506 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "LINDSAY WHITEHURST",
    title: "Rapper's multimillion-dollar politics conspiracy trial opens",
    description:
      "A founding member of the 1990s hip-hop group the Fugees was enmeshed in political conspiracies involving millions of dollars in foreign money under two...",
    url: "https://news.yahoo.com/rappers-multimillion-dollar-politics-conspiracy-210646777.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/vxMSCvp54SBrNxKkmiA5YA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/46af3f57a9d63563af10bea07662b173",
    publishedAt: "2023-03-30T21:06:46Z",
    content:
      "WASHINGTON (AP) A founding member of the 1990s hip-hop group the Fugees was enmeshed in political conspiracies involving millions of dollars in foreign money under two different U.S. presidents, fede… [+2511 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Helena Smith in Athens",
    title:
      "Artist of the voting world: Albania’s PM Edi Rama mixes paint with politics",
    description:
      "This week Rama debuts exhibition in Greece and will be first Albanian PM to visit 10 Downing StreetWhen Albania’s leader Edi Rama doodles in his prime ministerial office, he is consumed by what he calls his artistic spirit. The act of sketching over sheets of…",
    url: "https://www.theguardian.com/world/2023/mar/23/artist-of-the-voting-world-albanias-pm-edi-rama-mixes-paint-with-politics",
    urlToImage:
      "https://i.guim.co.uk/img/media/9448eab72c8cba93698e6734396723adb2b26ed5/0_537_4624_2774/master/4624.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c5f0a63b7bb4efc883496a4714f838e1",
    publishedAt: "2023-03-23T05:00:05Z",
    content:
      "When Albanias leader Edi Rama doodles in his prime ministerial office, he is consumed by what he calls his artistic spirit. The act of sketching over sheets of A4 sized paper, on used printouts, note… [+5027 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Robert Reich",
    title:
      "The most consequential politics story in the US isn’t the Trump arraignment | Robert Reich",
    description:
      "In Wisconsin, voters will choose a new judge for the supreme court and a senator for the state legislature. These elections could decide the future of the USOne of the biggest challenges to the future of American democracy is unfolding this Tuesday, but not i…",
    url: "https://www.theguardian.com/commentisfree/2023/apr/04/robert-reich-opinion-wisconsin-politics",
    urlToImage:
      "https://i.guim.co.uk/img/media/70b141eceae16e48925f92193c3dc21728d68c62/0_219_3510_2107/master/3510.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=9fcc63f117ce480cb9ee27811618383e",
    publishedAt: "2023-04-04T10:00:37Z",
    content:
      "One of the biggest challenges to the future of American democracy is unfolding this Tuesday, but not in Manhattan. Its occurring in Wisconsin.\r\nBeyond the fact that no former president has ever faced… [+5201 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Andrew Sparrow",
    title:
      "Gillian Keegan says schools don’t have enough maths teachers to implement Sunak’s plans – UK politics live",
    description:
      "The prime minister is expected to restate his desire to ensure all pupils study maths up to the age of 18Good morning. Rishi Sunak will give a speech this morning restating his desire to ensure that all pupils study maths up to the age of 18. You could argue …",
    url: "https://www.theguardian.com/politics/live/2023/apr/17/rishi-sunak-gillian-keegan-teachers-maths-plans-keir-starmer-uk-politics-live",
    urlToImage:
      "https://i.guim.co.uk/img/media/690487798f3cc9c94e85f5b4d7b9dcf6ae006ed7/0_6_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=76085ac15be5432f022a53c72d627cbd",
    publishedAt: "2023-04-17T08:27:14Z",
    content:
      "In a statement on Rishi Sunaks plan for maths teaching, the National Education Union makes the same point as the one conceded by Gillian Keegan that there arent enough teachers.\r\nMary Bousted, the un… [+5246 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Andrew Sparrow",
    title:
      "Report into Dominic Raab bullying allegations expected to be published today – UK politics live",
    description:
      "The justice secretary has faced multiple formal complaints over his dealings with civil servantsGood morning. After months of waiting, Dominic Raab, the justice secretary and deputy prime minister, seems likely to find out today whether he will be sacked over…",
    url: "https://www.theguardian.com/politics/live/2023/apr/20/dominic-raab-bullying-report-allegations-rishi-sunak-snp-humza-yousaf-illegal-migration-bill-politics-live",
    urlToImage:
      "https://i.guim.co.uk/img/media/bcef07b4ef8a53e3afc53a5719888c51897e012b/0_202_3109_1866/master/3109.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=f30b51b4182a6824c591c064de837a91",
    publishedAt: "2023-04-20T08:28:37Z",
    content:
      "Plan to let UK ignore European court injunctions blocking migrant deportations could be defeated in Lords, peer suggests\r\nThe governments illegal migration bill, which will stop people arriving in th… [+5029 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Jon Fingas",
    title: "Twitter starts pulling legacy blue verification checkmarks",
    description:
      "Twitter has talked about pulling legacy verified checkmarks for a while, and now it's acting on that plan. The social network has begun removing the original blue ticks from users' profiles — formerly verified staff at Engadget can confirm this. From now on, …",
    url: "https://www.engadget.com/twitter-starts-pulling-legacy-blue-verification-checkmarks-205010576.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/PEdJg3ttFM8xsxvPD_Sf1Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/a114fe30-ca52-11ed-b189-48938a47a650.cf.jpg",
    publishedAt: "2023-04-20T20:50:10Z",
    content:
      "Twitter has talked about pulling legacy verified checkmarks for a while, and now it's acting on that plan. The social network has begun removing the original blue ticks from users' profiles formerly … [+1640 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title:
      "Rahul Gandhi's MP status uncertain after conviction in defamation case",
    description:
      "India's Opposition leaders are holding a protest march against the verdict.",
    url: "https://www.bbc.co.uk/news/world-asia-india-65023061",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/3A1A/production/_129047841_gettyimages-1248465831-594x594.jpg",
    publishedAt: "2023-03-24T07:56:45Z",
    content:
      "Uncertainty prevails over India's senior opposition leader Rahul Gandhi's status as a lawmaker after he was sentenced to two years in prison in a criminal defamation case.\r\nThe verdict delivered by a… [+2643 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Sunder Katwala",
    title:
      "Yousaf and Sunak … politics is making progress but society must catch up | Sunder Katwala",
    description:
      "A truly equitable country is still some way off despite recent successes at the very topAs Rishi Sunak called Humza Yousaf to congratulate the new SNP leader, dozens of South Asian family WhatsApp groups shared memes asking whether the British Indian prime mi…",
    url: "https://www.theguardian.com/commentisfree/2023/apr/02/yousaf-and-sunak-politics-making-progress-society-must-catch-up",
    urlToImage:
      "https://i.guim.co.uk/img/media/dab9924630568dab11df66246636846277b03a92/0_200_4684_2810/master/4684.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tb3BpbmlvbnMucG5n&enable=upscale&s=dbd8ff37a7f8aa9f5d23f896a79098a9",
    publishedAt: "2023-04-02T06:00:14Z",
    content:
      "As Rishi Sunak called Humza Yousaf to congratulate the new SNP leader, dozens of South Asian family WhatsApp groups shared memes asking whether the British Indian prime minister and the Scottish Paki… [+5846 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Brian Logan",
    title:
      "Eshaan Akbar review – navigating the choppy waters of UK racial politics",
    description:
      "Cambridge JunctionThe Londoner is argumentative, entertaining and full of bracing good sense as he catalogues his personal experiences of racism“What’s your favourite racism?” With this question, Eshaan Akbar opens his debut touring show. The Londoner’s star …",
    url: "https://www.theguardian.com/culture/2023/apr/02/eshaan-akbar-review-navigating-the-choppy-waters-of-uk-racial-politics",
    urlToImage:
      "https://i.guim.co.uk/img/media/db2f4da4985201b09ee3d5be0fe4557ed07b6ed9/0_170_5090_3054/master/5090.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTMucG5n&enable=upscale&s=95ee42e7906c3d259867ab23965071f9",
    publishedAt: "2023-04-02T11:23:18Z",
    content:
      "Whats your favourite racism? With this question, Eshaan Akbar opens his debut touring show. The Londoners star is in the ascendant right now, with a role in Netflixs Sex Education recently announced.… [+1831 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Editorial",
    title:
      "The Guardian view on Boris Johnson: a pernicious influence on politics | Editorial",
    description:
      "The former prime minister represents a vandalistic, irresponsible ethos of government. The Tories must repudiate him unconditionally Boris Johnson knew the rules, broke them and lied about it. That much is not disputed. The former prime minister accepts that …",
    url: "https://www.theguardian.com/commentisfree/2023/mar/22/the-guardian-view-on-boris-johnson-a-pernicious-influence-on-politics",
    urlToImage:
      "https://i.guim.co.uk/img/media/077f0c9db803e9d8c025c4ebad140cf2da6d015f/0_197_6011_3606/master/6011.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=70d044eab22ce8f5ff289df2ca98bc20",
    publishedAt: "2023-03-22T18:27:12Z",
    content:
      "Boris Johnson knew the rules, broke them and lied about it. That much is not disputed. The former prime minister accepts that statements he made to the Commons about parties in Downing Street during … [+3481 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Jonathan Yerushalmy",
    title:
      "After Sanna Marin and Jacinda Ardern, is female representation at the top of politics going backwards?",
    description:
      "The growth in the number of female leaders has plateaued around the world, while representation in national parliaments remains staticOn a recent speaking tour in Australia, Barack Obama offered up his idea on how to turn the tide on more than a decade of dem…",
    url: "https://www.theguardian.com/world/2023/apr/06/after-ardern-marin-and-sturgeon-is-female-representation-in-politics-going-backwards",
    urlToImage:
      "https://i.guim.co.uk/img/media/942dee8e6fc7d89f13119d2abfe7adc9c3a1ed62/0_0_2500_1500/master/2500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=087437731b280a860ef12f2608f0156b",
    publishedAt: "2023-04-05T20:00:03Z",
    content:
      "On a recent speaking tour in Australia, Barack Obama offered up his idea on how to turn the tide on more than a decade of democratic erosion, to steer the world on to a path of sustainability and pea… [+6332 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Sam Levine in Milwaukee",
    title:
      "Liberal judge’s Wisconsin supreme court race win shows a shake-up in US politics",
    description:
      "Victory will have consequences for abortion and voting rights in the state as Democrats become serious about down-ballot racesJanet Protasiewicz’s victory in the Wisconsin supreme court race on Tuesday amounted to a political earthquake in Wisconsin, one of A…",
    url: "https://www.theguardian.com/us-news/2023/apr/05/wisconsin-supreme-court-election-results-janet-protasiewicz-win",
    urlToImage:
      "https://i.guim.co.uk/img/media/f60fabb6dbe07f9c683f363b993a06198dbb38c7/0_68_2321_1393/master/2321.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=59a2a2f6b2a01c84e3392b8286a12707",
    publishedAt: "2023-04-05T12:59:00Z",
    content:
      "Janet Protasiewiczs victory in the Wisconsin supreme court race on Tuesday amounted to a political earthquake in Wisconsin, one of Americas most volatile political battlegrounds.\r\nHer victory undersc… [+5922 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Justin McCurry in Tokyo",
    title:
      "‘I decided I could do better than them’: the women taking on Japan’s male-dominated politics",
    description:
      "Female candidates in the local elections across the country this weekend face one of the world’s toughest glass ceilingsAi Ishimori was teaching Japanese cookery classes in France when she was gripped by an urge to return to her home country.“Shinzo Abe was p…",
    url: "https://www.theguardian.com/world/2023/apr/07/i-decided-i-could-do-better-than-them-the-women-taking-on-japans-male-dominated-politics",
    urlToImage:
      "https://i.guim.co.uk/img/media/b258258b4224aca28e3a1d3e6d43221a4a6a36bb/0_0_6048_3627/master/6048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=89d56e02175dfa54b5cdbfb771aebd50",
    publishedAt: "2023-04-07T04:57:57Z",
    content:
      "Ai Ishimori was teaching Japanese cookery classes in France when she was gripped by an urge to return to her home country.\r\nShinzo Abe was prime minister at the time, and a group of older men were do… [+6024 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Cheryl Teh",
    title:
      "Former Trump aide Anthony Scaramucci says Donald Trump is a 'family guy' who's just like Logan Roy — the ruthless patriarch in 'Succession'",
    description:
      "\"He's sort of the Logan Roy of American politics. He has this love-hate relationship with his family,\" Scaramucci told MSNBC's Stephanie Ruhle.",
    url: "https://www.businessinsider.com/anthony-scaramucci-donald-trump-logan-roy-succession-comparison-2023-4",
    urlToImage:
      "https://i.insider.com/642e55ad2a659a0019a69d8e?width=1200&format=jpeg",
    publishedAt: "2023-04-06T07:56:23Z",
    content:
      "Donald Trump, right, sits with his children, from left, Eric Trump, Donald Trump Jr., and Ivanka Trump.AP Photo/Evan Vucci, File\r\n<ul>\n<li>Former Trump aide Anthony Scaramucci likened his ex-boss to … [+2701 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Kelsey Vlamis,Natalie Musumeci",
    title:
      "Former Manhattan prosecutor says DA 'damn well better win' after Trump indictment because the reputation of the office is at stake",
    description:
      'The Manhattan DA office is "famous for ignoring politics" but "that will be lost if this crashes and burns," a former prosecutor for the office said.',
    url: "https://www.businessinsider.com/former-manhattan-prosecutor-better-win-trump-indictment-reputation-at-stake-2023-3",
    urlToImage:
      "https://i.insider.com/64261f6cb643e80019df9ccf?width=1200&format=jpeg",
    publishedAt: "2023-03-31T01:06:12Z",
    content:
      "Manhattan DA Alvin Bragg; Donald TrumpSeth Wenig, File/Associated Press; Andrew Harnik/Associated Press\r\n<ul>\n<li>Donald Trump became the first former president to be indicted on Thursday.</li>\n<li>A… [+2484 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "John L. Dorman",
    title:
      "Rep. Katie Porter recounts her frustration at having to explain housing policy to onetime HUD secretary Ben Carson during a congressional hearing: 'I was tutoring a neurosurgeon'",
    description:
      'Rep. Porter detailed her viral 2019 exchange with then-HUD Secretary Ben Carson over housing policy in "I Swear: Politics Is Messier Than My Minivan."',
    url: "https://www.businessinsider.com/katie-porter-ben-carson-housing-reo-foreclosure-tutoring-neurosurgeon-book-2023-4",
    urlToImage:
      "https://i.insider.com/643c55fc7cdf0f00185ccaa3?width=1200&format=jpeg",
    publishedAt: "2023-04-16T20:16:43Z",
    content:
      "Rep. Katie Porter of California.Robert Gauthier/Los Angeles Times via Getty Images\r\n<ul>\n<li>Rep. Katie Porter detailed an odd 2019 exchange she had with Ben Carson over housing policy.</li>\n<li>Cars… [+2729 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Aaron Mok",
    title:
      "This is what happened when 25 AI avatars were let loose in a virtual town",
    description:
      "Researchers observed AI agents interacting in the virtual town Smallville, and found they can plan their days, debate politics, and even plan a party.",
    url: "https://www.businessinsider.com/ai-avatars-let-loose-in-virtual-town-display-beginnings-agi-2023-4",
    urlToImage:
      "https://i.insider.com/6435863e2588f70018ce4b59?width=1200&format=jpeg",
    publishedAt: "2023-04-12T08:30:14Z",
    content:
      'A screenshot from the study "Generative Agents: Interactive Simulacra of Human Behavior," which observed AI avatars in a virtual town.arXiv/Cornell University\r\n<ul>\n<li>Researchers let 25 AI avatars … [+3602 chars]',
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Guardian staff reporter",
    title:
      "Blind date: ‘There was confusion between hare – which was on the menu – and hair’",
    description:
      "Aidan, 52, therapist (left), meets Richard, 58, local social housing managerWhat were you hoping for?A fun, politics-free evening. Something stimulating rather than challenging – it was Saturday night, after all. Continue reading...",
    url: "https://www.theguardian.com/lifeandstyle/2023/apr/08/blind-date-aidan-richard",
    urlToImage:
      "https://i.guim.co.uk/img/media/9ef76f5d87276dfd68c60270dc86e8c8ffc2d7c7/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=95a579422ede874809b6ab68c6aa12ee",
    publishedAt: "2023-04-08T05:00:14Z",
    content:
      "Aidan on Richard\r\nWhat were you hoping for?A fun, politics-free evening. Something stimulating rather than challenging it was Saturday night, after all.\r\nFirst impressions?He wasnt on his phone. Smil… [+4047 chars]",
  },
  {
    source: {
      id: null,
      name: "HuffPost",
    },
    author: "AP NEWS",
    title: "Rapper’s Multimillion-Dollar Politics Conspiracy Trial Opens",
    description:
      "A founding member of the 1990s hip-hop group the Fugees was enmeshed in political conspiracies involving millions of dollars in foreign money.",
    url: "https://www.huffpost.com/entry/the-fugees-politics-conspiracy-trial_n_6426f085e4b02a8d518e6203",
    urlToImage:
      "https://img.huffingtonpost.com/asset/6426f2932000001c00ed4fa7.webp?cache=D2aKCBa5w6&ops=1200_630",
    publishedAt: "2023-03-31T14:49:30Z",
    content:
      "Prakazrel Pras Michel, center, a member of the 1990s hip-hop group the Fugees, arrives at federal court for his trial in an alleged campaign finance conspiracy on March 30 in Washington.\r\nWASHINGTON … [+2692 chars]",
  },
  {
    source: {
      id: null,
      name: "NPR",
    },
    author: "Ron Elving",
    title:
      "Congress revisits approval for Iraq invasion, recalling change of heart on Vietnam",
    description:
      "In terms of domestic politics, the Iraq War followed the trajectory of the Vietnam War, which also relied on a resolution supporting the use of military force that Congress passed and later repealed.",
    url: "https://www.npr.org/2023/03/25/1165953799/congress-repeal-iraq-war-aumf-vietnam",
    urlToImage:
      "https://media.npr.org/assets/img/2023/03/24/gettyimages-57272427_wide-9a215e802e0c4459a50ce9fd3075636834d8dae8-s1400-c100.jpg",
    publishedAt: "2023-03-25T14:54:38Z",
    content:
      "U.S marines and Iraqis are seen on April 9, 2003, as the statue of Iraqi dictator Saddam Hussein is toppled at al-Fardous square in Baghdad.\r\nWathiq Khuzaie/Getty Images\r\nIn the coming weeks, both ch… [+9661 chars]",
  },
  {
    source: {
      id: "time",
      name: "Time",
    },
    author: "Charlotte Alter",
    title: "What Polling Says About the Politics of Trump’s Indictment",
    description:
      "How much appetite does the public have for a presidential candidate determined to litigate old grievances as new legal challenges loom?",
    url: "https://time.com/6268048/donald-trump-indictment-polling/",
    urlToImage:
      "https://api.time.com/wp-content/uploads/2023/04/donald-trump-mar-a-lago-03.jpg?quality=85&w=1200&h=628&crop=1",
    publishedAt: "2023-04-05T02:16:45Z",
    content:
      "For a brief moment when Donald Trump glided through the crowd at Mar-a-Lago and ascended to a podium flanked by American flags before a cheering crowd, it seemed like the beginning of a successful ca… [+4805 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Andrew Sparrow",
    title:
      "Badenoch hails Asia-Pacific trade deal and dismisses claims it will only boost economy by 0.08% – UK politics live",
    description:
      "Business and trade secretary says claims deal will deliver limited economic boost are based on old dataGood morning. The globalist, economic case for Brexit (there were other arguments too, but this is the one that swayed Rishi Sunak) was based on the idea th…",
    url: "https://www.theguardian.com/politics/live/2023/mar/31/rishi-sunak-kemi-badenoch-trade-deal-conservatives-tory-labour-keir-starmer-latest-politics-updates",
    urlToImage:
      "https://i.guim.co.uk/img/media/991971089e84ba3157a3fa02a97f27156eccbb39/316_329_2708_1625/master/2708.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=a6c4515a75eb26c74ae4c00bba1c4766",
    publishedAt: "2023-03-31T08:00:08Z",
    content:
      "Good morning. The globalist, economic case for Brexit (there were other arguments too, but this is the one that swayed Rishi Sunak) was based on the idea that the importance of the EU in global trade… [+2704 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Maria Skóra",
    title:
      "In Poland, the Catholic church backed abortion bans and authoritarian politics. Young people are turning away | Maria Skóra",
    description:
      "The close ties between Poland’s ruling Law & Justice party and the church appear to be alienating voters The Catholic church in Poland is close to an existential crisis. For one of the most Catholic countries in the world, and the homeland of Pope John Paul I…",
    url: "https://www.theguardian.com/commentisfree/2023/apr/05/catholic-church-poland-law-and-justice-party-young-voters",
    urlToImage:
      "https://i.guim.co.uk/img/media/6fb8b8b7cf2796415aa5123a02e841c7aaa701c0/0_260_7781_4671/master/7781.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=99bc7dee6c47f20715b7c63fecc8325a",
    publishedAt: "2023-04-05T09:00:30Z",
    content:
      "The Catholic church in Poland is close to an existential crisis. For one of the most Catholic countries in the world, and the homeland of Pope John Paul II, this is unprecedented. Poland is not becom… [+4797 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Harry Taylor",
    title:
      "Sunak calls for Stormont return ahead of Biden visit for Good Friday agreement anniversary – UK politics live",
    description:
      "Prime minister urges return to power-sharing government in Northern Ireland; US president arrives on TuesdayGood morning from London.Today marks 25 years since the Good Friday Agreement was signed, bringing an end to the troubles in Northern Ireland which kil…",
    url: "https://www.theguardian.com/politics/live/2023/apr/10/rishi-sunak-stormont-joe-biden-visit-northern-ireland-good-friday-agreement-anniversary-uk-politics-live",
    urlToImage:
      "https://i.guim.co.uk/img/media/be4e28dc3661b9cce49cfa6b71ae84eaabd5c10c/0_305_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=89eacf8c57d15ab5c65c7b310bf399fb",
    publishedAt: "2023-04-10T08:47:12Z",
    content:
      "Good morning from London.\r\nToday marks 25 years since the Good Friday Agreement was signed, bringing an end to the troubles in Northern Ireland which killed thousands and created a state of terror fo… [+3820 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Rachel Hall",
    title:
      "Tories fear if Johnson is suspended over Partygate then Uxbridge could be lost in byelection – UK politics live",
    description:
      "Latest updates: party fears it would lose London constituency if former PM is suspended after appearance at privileges committeeGood morning,Today there’s one thing everyone is talking about in Westminster: is this the death knell for Boris Johnson’s politica…",
    url: "https://www.theguardian.com/politics/live/2023/mar/23/boris-johnson-rishi-sunak-partygate-brexit-latest-politics-news-updates",
    urlToImage:
      "https://i.guim.co.uk/img/media/8471cb15d93e84b99601ba2db75c83cef8ae4ed0/0_153_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=d4664579b05fd7baf2b12dc0470698bc",
    publishedAt: "2023-03-23T09:12:35Z",
    content:
      "Good morning,\r\nToday theres one thing everyone is talking about in Westminster: is this the death knell for Boris Johnsons political career?\r\nHis face this morning is splashed across the newspaper fr… [+5314 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Andrew Sparrow",
    title:
      "Labour calls for ‘serious strategy’ to tackle grooming gangs after Sunak claims ‘political correctness’ part of problem – UK politics live",
    description:
      "Rishi Sunak announcing ‘grooming gangs taskforce’ which will see specialist officers parachuted in to assist police forcesGood morning. Rishi Sunak is today announcing a crackdown on grooming gangs. He is announcing a “grooming gangs taskforce” which will see…",
    url: "https://www.theguardian.com/politics/live/2023/apr/03/labour-calls-for-serious-strategy-to-tackle-grooming-gangs-after-sunak-claims-political-correctness-part-of-problem-uk-politics-live",
    urlToImage:
      "https://i.guim.co.uk/img/media/11f66e1eb436212ca304d82b2f4468d68a0c3ab5/3_185_4703_2822/master/4703.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=34a8023040e1162693dbf7995653af5a",
    publishedAt: "2023-04-03T07:58:32Z",
    content:
      "Good morning. Rishi Sunak is today announcing a crackdown on grooming gangs. He is announcing a grooming gangs taskforce which will see specialist officers parachuted in to assist police forces with … [+2340 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Andrew Sparrow",
    title:
      "Rishi Sunak warned over NHS waiting times targets if RCN votes against nurses pay deal – UK politics live",
    description:
      "Prime minister told tackling target difficult if more NHS strikes aheadGood morning. Yesterday, when ConservativeHome was interviewing Rishi Sunak, it started with a video that it described as presenting Sunak’s own account of what he has achieved since he be…",
    url: "https://www.theguardian.com/politics/live/2023/apr/14/rishi-sunak-rcn-nurses-pay-deal-suella-braverman-small-boats-uk-politics-live",
    urlToImage:
      "https://i.guim.co.uk/img/media/e4b2d1143a63beb6a9cf16044b690762156b9c3f/0_390_5848_3509/master/5848.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=542acd378be0906cf769fa60ab630e34",
    publishedAt: "2023-04-14T08:05:51Z",
    content:
      "The RCN ballot of members on the NHS pay deal closed at 9am. The result should be announced this afternoon, the union says. A spokesperson said:\r\nVoting closed at 9am and we have no verified result u… [+3957 chars]",
  },
  {
    source: {
      id: null,
      name: "VentureBeat",
    },
    author: "Sharon Goldman",
    title:
      "The strange new world of AI power, politics and the ‘pause’ | The AI Beat",
    description:
      "The noisy debates around AI risk and regulation got many decibels louder last week, while simultaneously becoming even harder to decipher.",
    url: "https://venturebeat.com/ai/the-strange-new-world-of-ai-power-politics-and-the-pause-the-ai-beat/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2023/04/Untitled-design-36.png?w=1200&strip=all",
    publishedAt: "2023-04-03T13:00:00Z",
    content:
      "Join top executives in San Francisco on July 11-12, to hear how leaders are integrating and optimizing AI investments for success. Learn More\r\nThe noisy debates around AI risk and regulation got many… [+1330 chars]",
  },
  {
    source: {
      id: null,
      name: "Boing Boing",
    },
    author: "Gareth Branwyn",
    title:
      'Review: Uncovering the layers of history and politics in Andrew Lawler\'s "Under Jerusalem"',
    description:
      "Science and archeology journalist, Andrew Lawler, has made a name for himself writing unique and compelling books on somewhat unconventional subjects. His first book, Why Did the Chicken Cross the World?, explored the cultural history of the domesticated chic…",
    url: "https://boingboing.net/2023/03/25/review-uncovering-the-layers-of-history-and-politics-in-andrew-lawlers-under-jerusalem.html",
    urlToImage:
      "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/03/9780385546850-1-1-e1679746712944.jpg?fit=1107%2C519&ssl=1",
    publishedAt: "2023-03-25T12:18:51Z",
    content:
      "Science and archeology journalist, Andrew Lawler, has made a name for himself writing unique and compelling books on somewhat unconventional subjects. His first book, Why Did the Chicken Cross the Wo… [+5135 chars]",
  },
  {
    source: {
      id: null,
      name: "The Atlantic",
    },
    author: "John Hendrickson",
    title: "Trump’s WWE Theory of Politics",
    description:
      "The former president grew up a wrestling fan—and mastered the dark art of arena-style rhetoric.",
    url: "https://www.theatlantic.com/newsletters/archive/2023/03/how-wrestling-made-trump/673597/?utm_source=feed",
    urlToImage: null,
    publishedAt: "2023-03-31T22:18:00Z",
    content:
      "This is an edition of The Atlantic Daily, a newsletter that guides you through the biggest stories of the day, helps you discover new ideas, and recommends the best in culture. Sign up for it here.Le… [+9401 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "JENNIFER PELTZ and MICHAEL R. SISAK",
    title: "Who is Juan Merchan, the NY judge handling Trump's case?",
    description:
      "His caseload has featured charges against former President Donald Trump's company and some of Trump's closest associates in business and politics.  Now Judge...",
    url: "https://news.yahoo.com/juan-merchan-ny-judge-handling-183939919.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/ergJUvWWO4NFq4OS4IjUSw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/7086ad05fdfaaa56dd2e1a76c17a8fa8",
    publishedAt: "2023-04-03T18:39:39Z",
    content:
      "NEW YORK (AP) His caseload has featured charges against former President Donald Trump's company and some of Trump's closest associates in business and politics.\r\nNow Judge Juan Manuel Merchan is pois… [+6599 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Editorial",
    title:
      "The Guardian view on Suella Braverman: cruel and unusual | Editorial",
    description:
      "Sayeeda Warsi was right to call out the home secretary over her deliberate strategy of racist rhetoric Even in politics, and certainly in more normal settings, it takes a lot to challenge a colleague openly. To weigh the consequences of a public criticism bef…",
    url: "https://www.theguardian.com/commentisfree/2023/apr/13/the-guardian-view-on-suella-braverman-cruel-and-unusual",
    urlToImage:
      "https://i.guim.co.uk/img/media/9487ac9ee7fe24895ba87f50ac78bccbab8a25fa/548_14_2686_1612/master/2686.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=9ca95390d337c47eacce84aae330046b",
    publishedAt: "2023-04-13T17:21:59Z",
    content:
      "Even in politics, and certainly in more normal settings, it takes a lot to challenge a colleague openly. To weigh the consequences of a public criticism before making it, not least for ones family, i… [+3471 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Andy Beckett",
    title:
      "It’s tempting for Starmer to fall back on the Blair playbook – what are the risks? | Andy Beckett",
    description:
      "The former Labour leader’s appeal was his personality, but with the country on the rocks voters may overlook Starmer’s lack of charismaTony Blair’s triumphant time as opposition leader was more than 25 years and several political eras ago. But it still casts …",
    url: "https://www.theguardian.com/commentisfree/2023/mar/31/labour-keir-starmer-tony-blair-playbook",
    urlToImage:
      "https://i.guim.co.uk/img/media/beb79cdc53466bf77e22e9b18adb92bf88efd932/0_0_5847_3508/master/5847.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=2edf9dae5757671c373d2f5af925cd64",
    publishedAt: "2023-03-31T07:00:17Z",
    content:
      "Tony Blairs triumphant time as opposition leader was more than 25 years and several political eras ago. But it still casts a huge shadow over our politics. Tories fear a repeat of the 1997 election. … [+6244 chars]",
  },
  {
    source: {
      id: null,
      name: "Slate Magazine",
    },
    author: "Heather Tal Murphy",
    title:
      "I Spent Trump Arraignment Day at His Golf Course. Guess How the Golfers Took It.",
    description:
      '"I identify as a golfer," one patron said when asked about politics.',
    url: "https://slate.com/news-and-politics/2023/04/trump-arraignment-golf-course-bronx.html",
    urlToImage:
      "https://compote.slate.com/images/7684cbcc-f172-453d-ba27-7f36ce4ed54c.jpeg?crop=4500%2C3000%2Cx0%2Cy0&width=1560",
    publishedAt: "2023-04-05T20:14:40Z",
    content:
      "On Tuesday afternoon, for the first time ever, a former U.S. president exited his vehicle and entered a criminal court to surrender on a grand jury indictment. NPR, CNBC, The New York Times, The Wash… [+7638 chars]",
  },
  {
    source: {
      id: null,
      name: "The Atlantic",
    },
    author: "Derek Thompson",
    title: "The Dangerous Rise of ‘Front-Yard Politics’",
    description: "Many public crusaders are private reactionaries.",
    url: "https://www.theatlantic.com/ideas/archive/2023/04/front-yard-placards-nimby-dei-refugees/673706/?utm_source=feed",
    urlToImage: null,
    publishedAt: "2023-04-13T10:00:00Z",
    content:
      "This is Work in Progress, a newsletter by Derek Thompson about work, technology, and how to solve some of America’s biggest problems. Sign up here to get it every week.Several months ago, while walki… [+15623 chars]",
  },
  {
    source: {
      id: null,
      name: "The Atlantic",
    },
    author: "David A. Graham",
    title: "We’ve Entered the Era of ‘Total Politics’",
    description: "All that matters is what’s possible, not what’s prudent.",
    url: "https://www.theatlantic.com/ideas/archive/2023/04/tennessee-house-expel-democrats-greg-abbott-pardon/673734/?utm_source=feed",
    urlToImage: null,
    publishedAt: "2023-04-15T11:30:00Z",
    content:
      "On April 6, the Tennessee House of Representatives voted to expel two Democratic lawmakers for disrupting the chamber to protest gun violence. It was an exercise of raw political muscle, a move by Re… [+9139 chars]",
  },
  {
    source: {
      id: "time",
      name: "Time",
    },
    author: "Molly Ball",
    title: "The Least Popular Man in Washington",
    description:
      "The Florida senator talks about his war on the party establishment, running on principles, and why people should be angrier about politics.",
    url: "https://time.com/6267826/rick-scott-interview/",
    urlToImage:
      "https://api.time.com/wp-content/uploads/2023/04/rick-scott-001.jpg?quality=85&crop=0px%2C298px%2C2400px%2C1256px&resize=1200%2C628&strip",
    publishedAt: "2023-04-06T11:00:33Z",
    content:
      "Rick Scott wants to know what I think of the speech he’s about to give. “Pretty aggressive, right?” he says with a bashful grin.\r\nThe Republican senator from Florida has just walked into the Conserva… [+23826 chars]",
  },
  {
    source: {
      id: null,
      name: "Slate Magazine",
    },
    author: "Emily Peck, Felix Salmon, and Elizabeth Spiers",
    title: "Too Big, To Fail, Too Furious",
    description:
      "Slate Money talks about Credit Suisse, the politics of the FDIC, and TikTok’s appearance in front of Congress.",
    url: "https://slate.com/podcasts/slate-money/2023/03/slate-money-talks-about-credit-suisse-the-politics-of-the-fdic-and-tiktoks-appearance-in-front-of-congress",
    urlToImage:
      "https://compote.slate.com/images/bb44330d-b6d6-4ba7-b5d3-------99d11f5996ad.jpeg?width=1560&rect=1560x1040&offset=0x0",
    publishedAt: "2023-03-25T09:00:00Z",
    content:
      "If you can't access your feeds, please contact customer support.Thanks! Check your phone for a link to finish setting up your feed.\r\nPlease enter a 10-digit phone number.\r\nListen on your phone:RECOMM… [+173 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Andrew Sparrow",
    title:
      "Starmer claims NHS is ‘broken’ and not safe under Tories, as he says he is unconcerned about poll lead falling – UK politics live",
    description:
      "According to the Politico poll of polls Labour’s average lead over the Conservatives has fallen to 15 pointsGood morning. Today we have got the first PMQs since the Easter recess and the first involving Rishi Sunak and Keir Starmer for almost a month. Sunak h…",
    url: "https://www.theguardian.com/politics/live/2023/apr/19/keir-starmer-nhs-rishi-sunak-pmqs-uk-politics-live",
    urlToImage:
      "https://i.guim.co.uk/img/media/a20bd5a021364acc7d44861e50475195b6ca1ce0/751_297_1928_1157/master/1928.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=2ffbf94fb94f520ff3fa9e7cfbe6aa03",
    publishedAt: "2023-04-19T08:27:32Z",
    content:
      "Good morning. Today we have got the first PMQs since the Easter recess and the first involving Rishi Sunak and Keir Starmer for almost a month. Sunak has been relatively successful in recent weeks (t… [+5428 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Expelled Black Tennessee lawmakers want to reclaim their seats - CBC News",
    description:
      "<ol><li>Expelled Black Tennessee lawmakers want to reclaim their seats  CBC News\r\n</li><li>Tennessee: Expelled Democratic lawmakers seek seats again  CTV News\r\n</li><li>SYMONE Exclusive: the Tennessee Three discuss expulsion from the state legislature  MSNBC\r…",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiVGh0dHBzOi8vd3d3LmNiYy5jYS9uZXdzL3dvcmxkL3Rlbm5lc3NlZS1sYXdtYWtlcnMtZXhwZWxsZWQtc2Nob29sLXNob290aW5nLTEuNjgwNTgxNNIBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-09T21:19:16Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "polygon",
      name: "Polygon",
    },
    author: "Colette Arrand",
    title:
      "Roman Reigns should’ve been the next John Cena or The Rock — but the WWE left him behind",
    description:
      "Before his Cody Rhodes match, here’s why the John Cena- or The Rock-level star was undermined by WWE politics, Vince McMahon’s business, leukemia, and COVID.",
    url: "https://www.polygon.com/23663283/roman-reigns-wwe-wrestlemania-cody-rhodes",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/MVfIaQCuJRs-dqwBeQtdCCfzT5g=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24547833/264_SS_08232020JG_37829__0684871ba7e376bd9a73f0f879bbe6bc.jpg",
    publishedAt: "2023-03-31T15:13:00Z",
    content:
      "If you buy something from a Polygon link, Vox Media may earn a commission. See our ethics statement.With WrestleMania 39 set to kick off on April 1, and Polygon contributor Abraham Josephine Riesmans… [+12583 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Auriol Miller",
    title:
      "From trade unions to future wellbeing, Wales is quietly pioneering a different way of doing politics in the UK | Auriol Miller",
    description:
      "There is much a future Labour government in Westminster could learn from what’s happening in the Senedd – take note Keir Starmer<ul><li>Auriol Miller is the director of the Institute for Welsh Affairs</li></ul>One of the defining stories of the British econom…",
    url: "https://www.theguardian.com/commentisfree/2023/mar/31/trade-unions-wellbeing-wales-westminster-starmer",
    urlToImage:
      "https://i.guim.co.uk/img/media/8ee362968d8cd2ba0db0c3657767fd8f6fe421de/0_263_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=af6ae33b0b2195e0128bbf94a549a83a",
    publishedAt: "2023-03-31T12:59:19Z",
    content:
      "One of the defining stories of the British economy over the past few decades is the decline in trade union membership. The UK has experienced one of the sharpest falls in Europe, from a high of 49.9%… [+5251 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Gaby Hinsliff",
    title:
      "Starmer was not ‘soft on crime’. But this is politics – and the ruthless Tory machine is just starting up | Gaby Hinsliff",
    description:
      "The Labour leader’s record as an advocate for victims of sexual abuse is instructive, just don’t expect to hear about itFiona Ivison was 17 when she was strangled and battered to death by a man who had paid her for sex. He then left her body in a freezing car…",
    url: "https://www.theguardian.com/commentisfree/2023/apr/20/starmer-not-soft-on-crime-tory-labour-leader",
    urlToImage:
      "https://i.guim.co.uk/img/media/73d9e2112dd16c82a3b956d518da6a17fd3c047e/0_0_3047_1829/master/3047.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=f74d055e225a10e3bf0bfca80a67dd33",
    publishedAt: "2023-04-20T17:12:48Z",
    content:
      "Fiona Ivison was 17 when she was strangled and battered to death by a man who had paid her for sex. He then lefther body in a freezing car park.\r\nShe was only 14 when she was groomed by an older man … [+6551 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "PA Media",
    title: "Northern Ireland terrorism threat level rises to ‘severe’",
    description:
      "MI5 increases level from ‘substantial’, meaning an attack is highly likely<ul><li>Politics live – latest updates</li></ul>MI5 has increased the terrorism threat level in Northern Ireland from substantial to severe, meaning an attack is highly likely, the Nort…",
    url: "https://www.theguardian.com/uk-news/2023/mar/28/northern-ireland-terrorism-threat-level-mi5",
    urlToImage:
      "https://i.guim.co.uk/img/media/676d9bc7e2c1153d9fb3f4afb8fadb1ec9792876/459_570_3141_1885/master/3141.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f6a7c3a02b38dd7d1042a46f1e27d129",
    publishedAt: "2023-03-28T11:37:37Z",
    content:
      "The terrorism threat level in Northern Ireland has been increased from substantial to severe, meaning an attack is highly likely.\r\nIn a written statement to MPs, the Northern Ireland secretary, Chris… [+1877 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Diane Taylor",
    title:
      "Home Office accused of building delays into plan to speed asylum claims",
    description:
      "Questionnaire system at heart of effort to reduce backlog is ‘fundamentally flawed’, say immigration lawyers<ul><li>Politics live - latest updates</li></ul>Immigration lawyers have accused the Home Office of building delays into a scheme to speed up decisions…",
    url: "https://www.theguardian.com/uk-news/2023/mar/30/home-office-accused-of-building-delays-into-plan-to-speed-asylum-claims",
    urlToImage:
      "https://i.guim.co.uk/img/media/d03c4dd8f158f5b71007f48a6011380165fc8b7d/432_451_5328_3197/master/5328.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e00e7fefee3bb4e7143782e0b72cab2b",
    publishedAt: "2023-03-30T15:46:26Z",
    content:
      "Immigration lawyers have accused the Home Office of building delays into a scheme meant to speed up decisions on 12,000 asylum claims.\r\nThe plans announced last month to cut the asylum backlog which … [+3435 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Richard Assheton in Lagos",
    title:
      "‘Women get it done’: Ireti Kingibe, Abuja’s new senator, plans for progressive Nigeria",
    description:
      "Up and coming politician will focus on wealth redistribution, female representation and healthcareIreti Kingibe is not the usual Nigerian politician. Four years ago, the engineer wife of a former minister was considering leaving the country for the US or Brit…",
    url: "https://www.theguardian.com/world/2023/mar/23/women-get-it-done-ireti-kingibe-abujas-new-senator-plans-for-progressive-nigeria",
    urlToImage:
      "https://i.guim.co.uk/img/media/f04be922bdbe7fb68aa47f2521c4ae95cbfd511b/0_22_1010_605/master/1010.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4100bf9837fd526d73bb5ed7dc614280",
    publishedAt: "2023-03-23T05:00:04Z",
    content:
      "Ireti Kingibe is not the usual Nigerian politician. Four years ago, the engineer wife of a former minister was considering leaving the country for the US or Britain, or at least going on a cruise.\r\nT… [+5658 chars]",
  },
  {
    source: {
      id: null,
      name: "Boing Boing",
    },
    author: "Jennifer Sandlin",
    title:
      "Remembering the McCain Girls, whose viral hit during the 2008 presidential campaign heralded a new era in internet politics",
    description:
      'Do you remember the McCain Girls and their viral hit, "Raining McCain"? If not, you should go watch it, it\'s quite….something. The video was released during the 2008 U.S. Presidential campaign, when John McCain was running against Barack Obama. Academics have…',
    url: "https://boingboing.net/2023/04/11/remembering-the-mccain-girls-whose-viral-hit-during-the-2008-presidential-campaign-heralded-a-new-era-in-internet-politics.html",
    urlToImage:
      "https://i0.wp.com/boingboing.net/wp-content/uploads/2017/07/800px-John_McCain_-_Guard_Association_of_the_United_States_General_Conference.jpg?fit=680%2C452&ssl=1",
    publishedAt: "2023-04-11T07:33:00Z",
    content:
      'Do you remember the McCain Girls and their viral hit, "Raining McCain"? If not, you should go watch it, it\'s quite.something. The video was released during the 2008 U.S. Presidential campaign, when J… [+5267 chars]',
  },
  {
    source: {
      id: null,
      name: "HuffPost",
    },
    author: "AP",
    title: "Democratic Sen. Bob Casey Of Pennsylvania To Seek 4th Term",
    description:
      "Democratic Sen. Bob Casey brings unmatched name recognition in Pennsylvania politics to his party’s defense of a seat in a presidential battleground state.",
    url: "https://www.huffpost.com/entry/election-2024-pennsylvania-senate_n_6433e6e0e4b05cef00ca08a7",
    urlToImage:
      "https://img.huffingtonpost.com/asset/6433e6e12400003d0085d852.jpeg?ops=1200_630",
    publishedAt: "2023-04-10T10:41:23Z",
    content:
      "HARRISBURG, Pa. (AP) Democratic Sen. Bob Casey will seek a fourth term in office, bringing the power of incumbency and unmatched name recognition in Pennsylvania politics to his partys defense of a s… [+5583 chars]",
  },
  {
    source: {
      id: "time",
      name: "Time",
    },
    author: "Brian Bennett and Eric Cortellessa",
    title:
      "The Trump Indictment Marks a New Volatile Chapter in American Politics",
    description:
      "The charges brought against Donald Trump by Alvin Bragg may be mere prelude to more serious charges, and a more vindictive campaign season.",
    url: "https://time.com/6268699/onald-trump-indictment-investigations-election-politics/",
    urlToImage:
      "https://api.time.com/wp-content/uploads/2023/04/donald-trump-ariaingment-new-york-25.jpg?quality=85&crop=0px%2C61px%2C2400px%2C1256px&resize=1200%2C628&strip",
    publishedAt: "2023-04-04T23:51:45Z",
    content:
      "This was not the Donald Trump the world is used to, a small figure in a room full of people with the authority to tell him what to do. But the image of citizen Trump, surrounded by cops, marshals and… [+14675 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Parth M.N.",
    title: "A Manhunt in India Left 27 Million People Without Mobile Internet",
    description:
      "Authorities ordered Twitter accounts blocked and the internet shut down as they hunt for Sikh separatist Amritpal Singh Sandhu.",
    url: "https://www.wired.com/story/sandhu-manhunt-india-twitter-internet-blackout/",
    urlToImage:
      "https://media.wired.com/photos/6424a64171301c1b7c3c1e7d/191:100/w_1280,c_limit/Manhunt-In-India-Left-27-Million-Without-Internet-Business-1244342826.jpg",
    publishedAt: "2023-03-29T23:00:00Z",
    content:
      "Manish Kumar runs a car rental service in the city of Jalandhar in Indias northern state of Punjab. For the past two weeks, his business has been strugglingstarting on March 18, when, for four days, … [+2809 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Morgan Meaker",
    title: "Paris Fell in Love With Escooters. Now It Might Ban Them",
    description:
      "Weaving through traffic and protests in the French capital shows that the real problem isn’t scooters—it’s cars.",
    url: "https://www.wired.com/story/paris-escooter-ban/",
    urlToImage:
      "https://media.wired.com/photos/6426265e8d5a78c733628c67/191:100/w_1280,c_limit/Paris-Voting-On-E-Scooter-Ban-Business-1477858006.jpg",
    publishedAt: "2023-03-31T06:00:00Z",
    content:
      "Atop my escooter, I am a human in a city of apes. With my back straight, I tower above my fellow road-users who are hunched over car steering wheels and bike handles. This newfound poise, however, la… [+2715 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Joanna Walters",
    title:
      "Trump lawyer to testify to grand jury in federal classified documents case – live",
    description:
      "Evan Corcoran will appear before jury examining case of government papers kept by Trump at Mar-a-LagoGood morning, US politics live blog readers, it may be Friday but there is plenty of action coming up on Capitol Hill and in some of the various criminal case…",
    url: "https://www.theguardian.com/us-news/live/2023/mar/24/trump-indictment-classified-documents-grand-jury-biden-canada-live-updates",
    urlToImage:
      "https://i.guim.co.uk/img/media/7efccd6d6928a20858100f02e2aabc411e3121a3/0_0_5500_3302/master/5500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=13e8a0d580de7ef28f18d8ad1fec8c4c",
    publishedAt: "2023-03-24T12:55:37Z",
    content:
      "Donald Trumps principal lawyer, Evan Corcoran, was seen entering federal court in Washington moments ago.\r\nHe is scheduled to testify there today before the grand jury investigating the federal crimi… [+2945 chars]",
  },
  {
    source: {
      id: null,
      name: "The Atlantic",
    },
    author: "Isabel Fattal",
    title: "Mike Pence Is in a Trump Trap",
    description:
      "“Pence unwittingly wrote himself out of conservative politics.”",
    url: "https://www.theatlantic.com/newsletters/archive/2023/03/mike-pence-is-in-a-trump-trap/673482/?utm_source=feed",
    urlToImage: null,
    publishedAt: "2023-03-22T22:49:00Z",
    content:
      "This is an edition of The Atlantic Daily, a newsletter that guides you through the biggest stories of the day, helps you discover new ideas, and recommends the best in culture. Sign up for it here.By… [+8698 chars]",
  },
  {
    source: {
      id: null,
      name: "Boing Boing",
    },
    author: "Carla Sinclair",
    title:
      "The Mooch hilariously compares Trump to Logan Roy of Succession — they are both loving family men",
    description:
      "Nothing illustrates the endemic doublethink of the GOP better than Anthony Scaramucci's description of Donald Trump: \"This is a family guy. Whether you like Mr. Trump or not, he's sort of the Logan Roy of American politics,\" he comically said on MSNBC, insinu…",
    url: "https://boingboing.net/2023/04/06/the-mooch-hilariously-compares-trump-to-logan-roy-of-succession-they-are-both-loving-family-men.html",
    urlToImage:
      "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/04/mooch.jpeg?fit=1200%2C663&ssl=1",
    publishedAt: "2023-04-06T17:41:19Z",
    content:
      "Nothing illustrates the endemic doublethink of the GOP better than Anthony Scaramucci's description of Donald Trump: \"This is a family guy. Whether you like Mr. Trump or not, he's sort of the Logan R… [+1084 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Rebecca Knight",
    title:
      "The drama and politics in my office are so distracting that I have to work harder to make up for lost time",
    description:
      "For some, spending more days at the office means more time in the gossip den. Here's what to do about those drama kings and queens in your workplace.",
    url: "https://www.businessinsider.com/avoiding-office-drama-and-politics-return-to-work2023-3",
    urlToImage:
      "https://i.insider.com/64271aa745ef1b001984c0d1?width=1200&format=jpeg",
    publishedAt: "2023-04-03T10:00:09Z",
    content:
      "A man sits at a desk in a dimly lit office.Isabel Fernandez-Pujol/Insider\r\n<ul>\n<li>Insider's latest work-advice column is about how to handle the drama seekers in your office.</li>\n<li>Experts recom… [+4904 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Andy Beckett",
    title:
      "Britain is the most socially liberal it's ever been. Could somebody let our politicians know? | Andy Beckett",
    description:
      "There is a seemingly limitless supply of reactionary politics on offer today. But it looks increasingly out of step with realityIf you’re a social conservative in Britain, these are the best of times and the worst of times. They are the worst because, as the …",
    url: "https://www.theguardian.com/commentisfree/2023/apr/21/britain-socially-liberal-politicians-conservative-politics",
    urlToImage:
      "https://i.guim.co.uk/img/media/a32aeeca93abb249a5ae4fc7dbb6ab1cbbce36f9/0_73_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=8d8237df1c8a91f2e338b1907f215f80",
    publishedAt: "2023-04-21T07:00:05Z",
    content:
      "If youre a social conservative in Britain, these are the best of times and the worst of times. They are the worst because, as the rightwing press warns daily, liberal and other subversive values are … [+6750 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Trudeau grilled by Poilievre over $162000 Jamaica family trip - Global News",
    description:
      "<ol><li>Trudeau grilled by Poilievre over $162000 Jamaica family trip  Global News\r\n</li><li>Trudeau family vacationed with wealthy friends who donated to Pierre Elliott Trudeau Foundation  CBC News\r\n</li><li>Politics Briefing: PM defends vacation at Jamaican…",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CCAiC05ORkkyX29kWnhJmAEB?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-18T21:31:06Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Trump faces arraignment. Here's what happened when other U.S. politicians were indicted - CBC News",
    description:
      "<ol><li>Trump faces arraignment. Here's what happened when other U.S. politicians were indicted  CBC News\r\n</li><li>Trump Tower In New York Ahead Of Donald Trump's Arraignment | Donald Trump hush Money Case | U.S.A.  CNN-News18\r\n</li><li>Trump's expected arra…",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiR2h0dHBzOi8vd3d3LmNiYy5jYS9uZXdzL3dvcmxkL3VzLWZlZGVyYWwtb2ZmaWNpYWwtaW5kaWN0bWVudHMtMS42Nzk3MTk00gEgaHR0cHM6Ly93d3cuY2JjLmNhL2FtcC8xLjY3OTcxOTQ?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-04-03T13:28:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: null,
    title: "Jacinda Ardern's emotional last speech in New Zealand's parliament",
    description:
      "The former prime minister announced she was stepping down and retiring from politics earlier this year.",
    url: "https://www.bbc.co.uk/news/av/world-asia-65186368",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/8BCB/production/_129278753_p0fdz49q.jpg",
    publishedAt: "2023-04-05T07:12:37Z",
    content:
      "Former New Zealand prime minister Jacinda Ardern gave an emotional farewell to parliament on Wednesday.\r\nShe announced she was stepping down and retiring from politics earlier this year, after five a… [+27 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Maya Yang in New York",
    title:
      "Clarence Thomas accused of accepting luxury trips from billionaire Republican donor – live",
    description:
      "<ul><li>Justice has accepted gifts for two decades, report says</li><li>Sign up to receive First Thing – our daily briefing by email</li></ul>Good morning US politics readers. A new investigation by ProPublica has found that conservative supreme court justice…",
    url: "https://www.theguardian.com/us-news/live/2023/apr/06/clarence-thomas-supreme-court-harlan-crow-trump-indictment-politics-live",
    urlToImage:
      "https://i.guim.co.uk/img/media/f265f6b4bb62c3c5c7a1b277b769b81d3dbf0ff1/0_576_8640_5184/master/8640.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=905b6dff860b19e9cfeb367be5a8cef8",
    publishedAt: "2023-04-06T13:14:54Z",
    content:
      "Good morning US politics readers. A new investigation by ProPublica has found that conservative supreme court justice Clarence Thomas accepted multiple luxury trips from Harlan Crow, a Republican rea… [+1630 chars]",
  },
  {
    source: {
      id: null,
      name: "The New Yorker",
    },
    author: null,
    title: "The Sparkling Standup of Morgan Bassichis",
    description:
      "“A Crowded Field,” at Abrons Arts Center, is the last in the comedian-activist’s musico-comic trilogy about radical Jewish politics.",
    url: "https://www.newyorker.com/magazine/2023/04/03/the-sparkling-standup-of-morgan-bassichis",
    urlToImage:
      "https://media.newyorker.com/photos/641cc389cfeaaa3f78d5e9a1/16:9/w_1280,c_limit/230403_r42107.jpg",
    publishedAt: "2023-03-24T10:00:00Z",
    content:
      "It would have been enough if the comedian-activist Morgan Bassichis had merely helped us laugh at the pandemic (with their quarantunes, on Instagram, and a book of wry to-do lists); it would have bee… [+322 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Matthew Goodwin",
    title:
      "Labour is doing well, but it could still lose the election. Here are the three big hurdles it must overcome | Matthew Goodwin",
    description:
      "The party hasn’t reconnected with its traditional working-class voters – and looking soft on immigration will make things worseLabour has staged one of the most impressive recoveries in history. After finding itself outflanked by Nigel Farage’s national popul…",
    url: "https://www.theguardian.com/commentisfree/2023/mar/27/labour-lose-election-three-hurdles-working-class-immigration",
    urlToImage:
      "https://i.guim.co.uk/img/media/bc0d9b6c934cd5f7a78e6ab61d2d949b312967b6/0_41_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=ab2888e24d37889251b44a15a965add6",
    publishedAt: "2023-03-27T12:16:59Z",
    content:
      "Labour has staged one of the most impressive recoveries in history. After finding itself outflanked by Nigel Farages national populism, then Brexit, and then Boris Johnson, the party now commands a 1… [+7175 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Kevin Rawlinson",
    title:
      "Overhaul of sex education in England based on ‘overblown’ claims, say teachers",
    description:
      "MP’s claims of inappropriate teaching of sex education in schools rejected as ‘lacking evidence’ prompted government review<ul><li>Politics live - latest updates</li></ul>Plans to overhaul official guidance on sex education in schools are blowing a perceived …",
    url: "https://www.theguardian.com/education/2023/mar/31/overhaul-of-sex-education-in-england-based-on-overblown-claims-say-teachers",
    urlToImage:
      "https://i.guim.co.uk/img/media/306dadde6aa5f43503b99ace3c1f65ef7a1830f9/88_380_3170_1903/master/3170.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fc086f3c601510ebab0e19584b6158ed",
    publishedAt: "2023-03-31T15:50:19Z",
    content:
      "Plans to overhaul official guidance on sex education in schools are blowing a perceived problem out of all proportion, teachers representatives have said.\r\nThe Department for Education (DfE) has set … [+3879 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Tess McClure in Auckland",
    title:
      "New Zealand Labour tied with National in latest polls, six months out from election",
    description:
      "Māori party likely to be kingmaker according to latest polls as countdown begins to election daySix months out from a general election, New Zealand’s politics sits on a knife-edge, with the Labour and National parties splitting the vote evenly in recent polls…",
    url: "https://www.theguardian.com/world/2023/apr/12/new-zealand-labour-tied-with-national-in-latest-polls-six-months-out-from-election",
    urlToImage:
      "https://i.guim.co.uk/img/media/42ba0149d0748ec3f5ee25b5e72b8ce3e7cad9bf/0_285_5400_3240/master/5400.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=86006751e34a665a8c403fc8bdfdf904",
    publishedAt: "2023-04-12T00:42:51Z",
    content:
      "Six months out from a general election, New Zealands politics sits on a knife-edge, with the Labour and National parties splitting the vote evenly in recent polls.\r\nPolling from over the Easter weeke… [+2460 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Aubrey Allegretti Political correspondent",
    title:
      "Labour’s Jess Phillips opens up about taking anti-anxiety medication",
    description:
      "Frontbencher says MPs face extreme trauma but are ‘just expected to deal with it as part of your job’<ul><li>Politics live – latest updates</li></ul>The Labour frontbencher Jess Phillips has opened up about taking anti-anxiety medication amid the experiences …",
    url: "https://www.theguardian.com/society/2023/apr/06/labour-jess-phillips-opens-up-about-taking-anti-anxiety-medication",
    urlToImage:
      "https://i.guim.co.uk/img/media/e8ae1273d083c19cb72d0d631fd38ac4e54e9564/0_246_3019_1810/master/3019.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4ba2e39119320db4b42cc33648ce32df",
    publishedAt: "2023-04-06T10:33:16Z",
    content:
      "The Labour frontbencher Jess Phillips has opened up about taking anti-anxiety medication amid the experiences and attacks she has faced an MP, but said: Im a tough old bird.\r\nThe Westminster Bridge t… [+3239 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Jon Henley Europe correspondent",
    title:
      "Finland shifts to the right but could face weeks of fraught coalition talks",
    description:
      "Petteri Orpo’s NCP pushes party of predecessor Sanna Marin into third place in tight electionFinland’s probable new conservative prime minister, Petteri Orpo, will this week start exploring coalition options after a narrow election win that shifted the Nordic…",
    url: "https://www.theguardian.com/world/2023/apr/03/finland-shifts-to-the-right-coalition-talks-petteri-orpo-ncp-sanna-marin-election",
    urlToImage:
      "https://i.guim.co.uk/img/media/43391ba98f07900993949b7df2ea7b3f6856bbb3/0_121_4634_2780/master/4634.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f519f9120dcfc9a2ae6a0b7cabc0e01c",
    publishedAt: "2023-04-03T12:36:10Z",
    content:
      "Finlands probable new conservative prime minister, Petteri Orpo, will this week start exploring coalition options after a narrow election win that shifted the Nordic countrys politics to the right an… [+6225 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Vikram Dodd Police and crime correspondent",
    title:
      "Louise Casey accuses Met police chief of ‘hollow’ reasoning on failings",
    description:
      "Sir Mark Rowley’s refusal to admit Met police ‘institutionally’ racist, misogynistic and homophobic draws further criticism • Politics live - latest updatesThe author of the devastating report into the Metropolitan police has criticised the force’s commission…",
    url: "https://www.theguardian.com/uk-news/2023/mar/22/louise-casey-accuses-met-police-chief-of-hollow-reasoning-on-failings",
    urlToImage:
      "https://i.guim.co.uk/img/media/4b666c486bbb391a122f72707a9e0af3395a24ad/539_43_2878_1727/master/2878.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bde2e58f69e9929cc922b855d0394e6e",
    publishedAt: "2023-03-22T15:55:02Z",
    content:
      "The author of the devastating report on the Metropolitan police has criticised the forces commissioner, Sir Mark Rowley, for refusing to accept her description of the force as institutionally racist,… [+4193 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Aletha Adu",
    title: "Labour would freeze council tax for one year, says Keir Starmer",
    description:
      "Party leader says Labour would use windfall tax profits to stop rises in England, as local election campaign begins<ul><li>Politics live – latest updates</li></ul>Keir Starmer pledged to use an extended windfall tax to freeze council tax for one year as Labou…",
    url: "https://www.theguardian.com/politics/2023/mar/30/labour-would-freeze-council-tax-for-one-year-says-keir-starmer",
    urlToImage:
      "https://i.guim.co.uk/img/media/19cd65e6061d5575f1fc57ed391430980931f1fb/0_241_3610_2165/master/3610.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4c171470a5a2e4df928c042842e0af52",
    publishedAt: "2023-03-30T13:26:09Z",
    content:
      "Keir Starmer pledged to use an extended windfall tax to freeze council tax for one year as Labour kicked off its local election campaign on Thursday.\r\nDays before millions of people in England see th… [+3395 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Denis Campbell Health policy editor",
    title: "Junior doctors’ union asks Acas to help end strikes deadlock",
    description:
      "Conciliation service urged to look for ways to end logjam with government over demand for 35% pay rise<ul><li>UK politics live – latest updates</li></ul>The junior doctors’ union has asked the conciliation service Acas to look into ways of breaking the deadlo…",
    url: "https://www.theguardian.com/society/2023/apr/12/junior-doctors-union-acas-strikes-deadlock-pay",
    urlToImage:
      "https://i.guim.co.uk/img/media/dd8df988b72dcd7cf08feecf513f22615b02ec73/0_37_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b03193a57524ad3a50efdde0ba3ada0b",
    publishedAt: "2023-04-12T09:46:47Z",
    content:
      "The junior doctors union has asked the conciliation service Acas to look into ways of breaking the deadlock in their dispute with the government over their claim for a 35% pay rise.\r\nTens of thousand… [+3961 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Peter Walker",
    title:
      "Greens launch local elections campaign with pledge to push for rent controls",
    description:
      "Party increasingly targeting Tory rural councils and ex-Conservative voters who it says feel taken for granted<ul><li>Politics live – latest updates</li></ul>The Greens have launched their local elections campaign with a pledge to push for rent controls and a…",
    url: "https://www.theguardian.com/politics/2023/apr/05/green-party-launch-local-elections-campaign-pledge-rent-controls",
    urlToImage:
      "https://i.guim.co.uk/img/media/5e05bb89d45630e6599f9ca0bdb30091fb1ac077/0_68_3742_2246/master/3742.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9f1e4edc308db20f28df717a85b63bd4",
    publishedAt: "2023-04-05T14:36:32Z",
    content:
      "The Greens have launched their local elections campaign with a pledge to push for rent controls and a mass programme of council houses built to Passivhaus environmental standards, with the party pred… [+3282 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Jessica Elgot and Jim Waterson",
    title:
      "Richard Sharp’s future as BBC chair in doubt over ‘very uncomfortable’ report",
    description:
      "Former Conservative party donor reportedly briefed on findings of investigation into his appointment<ul><li>UK politics live – latest updates</li></ul>Richard Sharp’s future as chair of the BBC is in doubt as he awaits the publication of a “very uncomfortable…",
    url: "https://www.theguardian.com/media/2023/apr/19/richard-sharp-future-bbc-chair-doubt-uncomfortable-report-boris-johnson",
    urlToImage:
      "https://i.guim.co.uk/img/media/4b9bef0b93e784d26fb598a7f4ace148e6b0ba19/0_148_5100_3060/master/5100.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9aa06654875d3a5a6b56fbb4b44eaf97",
    publishedAt: "2023-04-19T13:52:23Z",
    content:
      "Richard Sharps future as chair of the BBC is in doubt as he awaits the publication of a very uncomfortable report on how he was recommended for the job by the former prime minister Boris Johnson.\r\nSh… [+2707 chars]",
  },
  {
    source: {
      id: "vice-news",
      name: "Vice News",
    },
    author: "Pallavi Pundir, Sahar Habib Ghazi",
    title: "Modi’s Biggest Rival Called Him a Thief. Now He’s Going to Jail.",
    description: "“This has changed the narrative of Indian politics.”",
    url: "https://www.vice.com/en/article/93k5xv/narendra-modi-rahul-gandhi-india-elections-2024-democracy",
    urlToImage:
      "https://video-images.vice.com/articles/6422c1c5b6a824e71c73964c/lede/1679999795168-gettyimages-1248391105.jpeg?image-resize-opts=Y3JvcD0xeHc6MC43OTgzeGg7MHh3LDAuMTUzM3hoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg",
    publishedAt: "2023-03-28T11:22:43Z",
    content:
      "The leader of India’s main opposition party, who analysts say had the best chance of challenging Indian Prime Minister Narendra Modi at the 2024 general elections, is no longer qualified to do so. \r\n… [+4669 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Helena Horton",
    title: "Tory party’s £3.5m ‘dirty donations’ revealed by DeSmog analysis",
    description:
      "Gifts bestowed on party and MPs by climate deniers and entities linked to fossil fuel and high pollution industry<ul><li>Politics live - latest updates</li></ul>The Conservative party received £3.5m from individuals and entities linked to climate denial, foss…",
    url: "https://www.theguardian.com/environment/2023/mar/30/tory-partys-35m-dirty-donations-revealed-by-desmog-analysis",
    urlToImage:
      "https://i.guim.co.uk/img/media/255d96b290615f81663bcf2fc2a1a395a13e9f4a/0_317_2936_1763/master/2936.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4879ff48e6c2a5c37bc1e18f3f8590bb",
    publishedAt: "2023-03-30T14:00:03Z",
    content:
      "The Conservative party received £3.5m from individuals and entities linked to climate denial, fossil fuels and high pollution industries last year, according to new analysis.\r\nThe climate website DeS… [+3692 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Aamna Mohdin Community affairs correspondent",
    title:
      "‘You get frustrated’: three Black leaders on Manchester’s diversity problem",
    description:
      "Leaders respond after a Guardian study finds just 4.6% of people in prominent public positions in the city are Black<ul><li>Manchester urged to act on ‘scandalous’ lack of Black people in prominent roles</li></ul>A Guardian analysis has found just 4.6% of peo…",
    url: "https://www.theguardian.com/news/2023/apr/03/frustrated-three-black-leaders-manchester-diversity-problem",
    urlToImage:
      "https://i.guim.co.uk/img/media/7252d109e1d1ad1b2dcb451de261c5bb0e45295c/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a3b73ca3fdde489b0fee0f61ebc23fe2",
    publishedAt: "2023-04-03T09:00:45Z",
    content:
      "A Guardian analysis has found just 4.6% of people in prominent public positions in Manchester including politics, sport, education, arts, business and health are Black. The figure is a significant un… [+4860 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Helena Horton Environment reporter",
    title:
      "Thérèse Coffey accused of ‘throwing in the towel’ over sewage scandal",
    description:
      "At launch of cleaner water plan, minister says those who say they can end problem are ‘detached from reality’ or dishonest<ul><li>Politics live - latest updates</li></ul>Thérèse Coffey has admitted that she cannot end the sewage scandal, in what critics are c…",
    url: "https://www.theguardian.com/environment/2023/apr/04/therese-coffey-accused-of-throwing-in-the-towel-over-sewage-scandal",
    urlToImage:
      "https://i.guim.co.uk/img/media/566cc4e0f3cbbdd80e51c5a38f79cb0b250739a5/0_0_4500_2701/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3d3037835dd6334fbfa966e109e73ff0",
    publishedAt: "2023-04-04T13:59:37Z",
    content:
      "Thérèse Coffey has admitted she cannot end the sewage scandal, in what critics are calling a complete abdication of duty.\r\nLaunching her departments cleaner water plan at the London Wetland Centre in… [+3492 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Aamna Mohdin, Pamela Duncan and Niels de Hoog",
    title:
      "Manchester urged to act on ‘scandalous’ lack of Black people in prominent roles",
    description:
      "In city where they make up 14.8% of the population, Black people occupy just 4.6% of top public positions, analysis finds<ul><li>‘You get frustrated’: three Black leaders on Manchester’s diversity problem</li></ul>Just 4.6% of people in prominent public posit…",
    url: "https://www.theguardian.com/news/ng-interactive/2023/apr/03/manchester-urged-act-scandalous-lack-black-people-prominent-roles",
    urlToImage:
      "https://i.guim.co.uk/img/media/e39ba5c35f6e52f6108bceb6925d698687c5032b/0_0_2500_1500/master/2500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=811c07c537ac4af9648f863e6ddb9f24",
    publishedAt: "2023-04-03T09:00:46Z",
    content:
      "Just 4.6% of people in prominent public positions in Manchester are Black, according to wide-ranging analysis, prompting leading politicians and campaigners to call for radical action to address the … [+11461 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Margaret Sullivan",
    title:
      "Trump’s indictment over hush money to a porn star would be poetic justice",
    description:
      "Unfortunately, actual justice may prove to be far more elusiveYou have to hand it to Stormy Daniels.After all of Donald Trump’s well-documented malfeasance over the decades – his fake university and failed casino, his Covid denialism, his consorting with dict…",
    url: "https://www.theguardian.com/commentisfree/2023/mar/24/trumps-indictment-over-hush-money-to-a-porn-star-would-be-poetic-justice",
    urlToImage:
      "https://i.guim.co.uk/img/media/372c6259f3bacf3d43fbb270254fcc4fd4e9bf39/0_0_2200_1320/master/2200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=dbb7f9682216a664726af253ed21907c",
    publishedAt: "2023-03-24T07:10:13Z",
    content:
      "You have to hand it to Stormy Daniels.\r\nAfter all of Donald Trumps well-documented malfeasance over the decades his fake university and failed casino, his Covid denialism, his consorting with dictato… [+3956 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Libby Brooks Scotland correspondent",
    title: "SNP braces for leadership result after contest opens up divisions",
    description:
      "Fears of resignations among 72,000-strong membership as party seeks path forward from Sturgeon era<ul><li>Politics live - latest updates</li></ul>The Scottish National party is braced for the outcome of a tumultuous leadership contest that has seen profound p…",
    url: "https://www.theguardian.com/politics/2023/mar/24/snp-leadership-contest-result-scotland-nicola-sturgeon",
    urlToImage:
      "https://i.guim.co.uk/img/media/47e460a35d4e3df3796fa2b0d3039b91a5b02aae/0_187_2800_1680/master/2800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=42b39f3efc6884376b2261aea7585bd2",
    publishedAt: "2023-03-24T14:44:07Z",
    content:
      "The Scottish National party is braced for the outcome of a tumultuous leadership contest during which profound policy divisions have emerged between the candidates, exposing the extent to which the w… [+5121 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Rory Carroll and Lisa O'Carroll",
    title:
      "Derry security operation under way before dissident republican parade",
    description:
      "Police say parade could be used to launch gun and bomb attacks in effort to upstage Joe Biden’s visit to Northern Ireland<ul><li>UK politics live – latest udpates</li></ul>A security operation is under way in Derry before a parade by dissident republicans tha…",
    url: "https://www.theguardian.com/uk-news/2023/apr/10/derry-security-operation-under-way-before-dissident-republican-parade",
    urlToImage:
      "https://i.guim.co.uk/img/media/6fbc33f6c3ff90609b244c33f3d658e5639a23c5/2228_1299_3831_2297/master/3831.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5597581498377f16a59563873b50fd67",
    publishedAt: "2023-04-10T11:33:25Z",
    content:
      "A security operation is under way in Derry before a parade by dissident republicans that police said could be used to launch gun and bomb attacks in an effort to upstage Joe Bidens visit to Northern … [+3817 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Peter Walker Political correspondent",
    title: "Keir Starmer: Labour must win seats in Scotland for legitimacy",
    description:
      "Party’s leader says he wants a ‘strong showing’ in Scotland, where it holds just one Westminster constituencyLabour must win back significant numbers of parliamentary seats in Scotland if it is to be seen as a legitimate UK-wide government, Keir Starmer has s…",
    url: "https://www.theguardian.com/uk-news/2023/apr/16/keir-starmer-labour-must-win-seats-in-scotland-for-legitimacy",
    urlToImage:
      "https://i.guim.co.uk/img/media/b9d526e04916f07581b56b011415dafa9eeab171/0_69_4867_2921/master/4867.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2f46e4081186057a78d7a8b06a2511e0",
    publishedAt: "2023-04-16T09:54:11Z",
    content:
      "Labour must win back significant numbers of parliamentary seats in Scotland if it is to be seen as a legitimate UK-wide government, Keir Starmer has said.\r\nSpeaking on a BBC Radio 4 programme about p… [+2349 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Oliver Holmes and agencies",
    title: "Israeli crisis continues as fired defence minister refuses to quit",
    description:
      "Questions raised over Benjamin Netanyahu’s control over coalition as he makes concessions to far-right Israeli politics descended into disarray on Tuesday with questions over whether a fired defence minister was refusing to step down and concern that Benjamin…",
    url: "https://www.theguardian.com/world/2023/mar/28/israeli-political-crisis-continues-fired-defence-minister-refuses-step-down-benjamin-netanyahu",
    urlToImage:
      "https://i.guim.co.uk/img/media/23d25f4d12205b5f0a124a40199992885ee23aaa/0_354_5344_3208/master/5344.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=10f38aadae943a928d87aa43a9491a01",
    publishedAt: "2023-03-28T12:15:35Z",
    content:
      "Israeli politics descended into disarray on Tuesday with questions over whether a fired defence minister was refusing to step down and concern that Benjamin Netanyahu may have promised too much to fa… [+3976 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Margaret Sullivan",
    title:
      "Dominion’s suit exposed how Fox damages democracy with its lies | Margaret Sullivan",
    description:
      "The settlement, though disappointing, provides at least a measure of accountabilityAs opening arguments neared on Tuesday afternoon, even the most hardened skeptics might have found themselves thinking the impossible was actually going to happen: the corrosiv…",
    url: "https://www.theguardian.com/commentisfree/2023/apr/19/dominions-suit-exposed-how-fox-damages-democracy-with-its-lies",
    urlToImage:
      "https://i.guim.co.uk/img/media/53140b547bb097e41d1af4876638becf01ee21fc/0_0_4065_2439/master/4065.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=973d60d15d653d356e04e111e9a1d780",
    publishedAt: "2023-04-19T09:08:34Z",
    content:
      "As opening arguments neared on Tuesday afternoon, even the most hardened skeptics might have found themselves thinking the impossible was actually going to happen: the corrosive lies of Fox News woul… [+4411 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Aubrey Allegretti Political correspondent",
    title:
      "Dorset asylum seeker barge will not be like a prison, says minister",
    description:
      "But Richard Holden also says efforts will be made to avoid people needing to leave port to access local services<ul><li>Politics live – latest updates</li></ul>A barge due to be used to house hundreds of asylum seekers in Dorset is not a prison but efforts wi…",
    url: "https://www.theguardian.com/uk-news/2023/apr/06/dorset-asylum-seeker-barge-will-not-be-like-prison",
    urlToImage:
      "https://i.guim.co.uk/img/media/313f8fa259800a14ca86606ffa9ee486b46fb499/0_149_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6d6480f9198ce68685ec24efa7bbf48e",
    publishedAt: "2023-04-06T09:04:52Z",
    content:
      "A barge due to be used to house hundreds of asylum seekers in Dorset is not a prison but efforts will be made to avoid asylum seekers needing to leave the port to access services in the local communi… [+3077 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Severin Carrell Scotland editor",
    title:
      "Scottish Labour leader criticises ‘deluded’ SNP amid party donations row",
    description:
      "Anas Sarwar tells rally in first minister’s constituency the party is rapidly losing right to govern<ul><li>UK politics live – latest updates</li></ul>The Scottish Labour leader, Anas Sarwar, has accused the Scottish National party of being politically bankru…",
    url: "https://www.theguardian.com/politics/2023/apr/17/scottish-labour-leader-anas-sarwar-snp-party-donations-row-scotland-glasgow",
    urlToImage:
      "https://i.guim.co.uk/img/media/fd67da8e55f97b6a2df2943a724bf7863a4afafa/168_168_3220_1933/master/3220.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3921cdaa3f4fb12526fcd55984822b29",
    publishedAt: "2023-04-17T14:46:10Z",
    content:
      "The Scottish Labour leader, Anas Sarwar, has accused the Scottish National party of being politically bankrupt and deceitful, as further questions emerged about Nicola Sturgeons role in discussions o… [+4240 chars]",
  },
  {
    source: {
      id: null,
      name: "The Atlantic",
    },
    author: "John Hendrickson",
    title: "How Wrestling Explains America",
    description:
      "Did Trump and his buddy Vince McMahon turn politics upside down, or was it already that way?",
    url: "https://www.theatlantic.com/politics/archive/2023/03/wwe-wrestling-trump-mcmahon-politics/673517/?utm_source=feed",
    urlToImage: null,
    publishedAt: "2023-03-26T22:00:00Z",
    content:
      "Awash in strobes, Seth “Freakin” Rollins begins his waltz to the ring. His nemesis, the YouTube star Logan Paul, is there waiting for him.Rollins pauses beneath the jumbotron and holds his arms outst… [+16679 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Andrew Rawnsley",
    title:
      "Labour’s attack ads show the party is torn by more than ugly tactics against the Tories | Andrew Rawnsley",
    description:
      "Going so negative betrays a lack of confidence about how to convey Sir Keir Starmer’s positive messagesGo hard or go home. Such is the defiantly unrepentant response of those Labour people willing to defend the party’s digital attack ad on Rishi Sunak, which …",
    url: "https://www.theguardian.com/commentisfree/2023/apr/16/labour-attack-ads-show-the-party-is-torn-over-more-than-ugly-tactics-against-the-tories",
    urlToImage:
      "https://i.guim.co.uk/img/media/b3f0d610048d3dad9dea5a1256cdce19e74bdf1f/0_117_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tb3BpbmlvbnMucG5n&enable=upscale&s=2dfbbbfc2a2398da4fb47886c14712cd",
    publishedAt: "2023-04-16T07:31:04Z",
    content:
      "Go hard or go home. Such is the defiantly unrepentant response of those Labour people willing to defend the partys digital attack ad on Rishi Sunak, which smeared the Tory leader with the accusation … [+8495 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Jonathan Freedland",
    title:
      "Netanyahu is leading a coup against his own country. But the threat is not only to Israel | Jonathan Freedland",
    description:
      "As one door slid open for Northern Ireland 25 years ago, another was sliding shut for Israel and Palestine – and disaster followedEven before the freshly acquitted Gwyneth Paltrow gave us what we are obliged to call the Slalom Witch Trial, she had already mad…",
    url: "https://www.theguardian.com/commentisfree/2023/mar/31/benjamin-netanyahu-israel-northern-ireland-palestine",
    urlToImage:
      "https://i.guim.co.uk/img/media/a8577a17e15e91fd8c5b897e5978911ce4fdd01e/0_0_4200_2520/master/4200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=bfccf9dcdbb700d8f70f3f58fe27e176",
    publishedAt: "2023-03-31T16:33:55Z",
    content:
      "Even before the freshly acquitted Gwyneth Paltrow gave us what we are obliged to call the Slalom Witch Trial, she had already made an enduring gift to the language. For a quarter century, we have spo… [+7321 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Martin Kettle",
    title:
      "Let's be clear: Joe Biden isn’t the problem for Northern Ireland – it’s the Brexit diehards | Martin Kettle",
    description:
      "When it comes to Irish politics, the US president has baggage. But the DUP’s attempts to cast him as a meddling nationalist won’t washNormally it is difficult for a visitor to arrive in Ireland without seeing large signs proclaiming how welcome they are. The …",
    url: "https://www.theguardian.com/commentisfree/2023/apr/12/joe-biden-northern-ireland-brexit-irish-us-president-dup",
    urlToImage:
      "https://i.guim.co.uk/img/media/0e7c64870a2d79e82b011025f1d8458f7c4975bc/0_360_6463_3879/master/6463.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=94d658f1f6e954f76f280c49091cd63c",
    publishedAt: "2023-04-12T16:19:27Z",
    content:
      "Normally it is difficult for a visitor to arrive in Ireland without seeing large signs proclaiming how welcome they are. The fusillade of unionist hostility that marked Joe Bidens visit to Belfast su… [+6030 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "Editorial",
    title:
      "The Guardian view on the SNP leadership: significant for Scotland and beyond | Editorial",
    description:
      "A leadership race has exposed the party’s divisions over how to pursue independenceWhere the Scottish National party goes after the departure of Nicola Sturgeon matters not just to Scotland but to the whole of Britain. Ms Sturgeon has been an astonishingly su…",
    url: "https://www.theguardian.com/commentisfree/2023/mar/24/the-guardian-view-on-the-snp-leadership-significant-for-scotland-and-beyond",
    urlToImage:
      "https://i.guim.co.uk/img/media/784e39eb2efcbb319d080764f6a7253040512ebb/0_168_5028_3017/master/5028.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=f92e9d787db52724bb90e6f5e487b033",
    publishedAt: "2023-03-24T18:12:22Z",
    content:
      "Where the Scottish National party goes after the departure of Nicola Sturgeon matters not just to Scotland but to the whole of Britain. Ms Sturgeon has been an astonishingly successful politician. Un… [+3633 chars]",
  },
];

const newNews = news.map((item, index) => {
  return {
    ...item,
    id: index + 1,
    slug: item.title.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, "-"),
  };
});

export default newNews;
