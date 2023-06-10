const verses = [
    {
      quote: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      author: "John 3:16"
    },
    {
      quote: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      author: "Proverbs 3:5-6"
    },
    {
      quote: "The Lord is my shepherd, I lack nothing.",
      author: "Psalm 23:1"
    },
    {
      quote: "Delight yourself in the Lord, and he will give you the desires of your heart.",
      author: "Psalm 37:4"
    },
    {
        quote: "Since the day we heard about you, we have not stopped praying for you and asking God to fill you with the knowledge of his will through all spiritual wisdom and understanding.",
        author: "Colossians 1:9"
      },
      {
        quote: "An evil man is trapped by his sinful talk, but a righteous man escapes trouble.",
        author: "Proverbs 12:13"
      },
      {
        quote: "Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.",
        author: "Colossians 3:13"
      },
      {
        quote: "However, I consider my life worth nothing to me; my only aim is to finish the race and complete the task the Lord Jesus has given me—the task of testifying to the good news of God’s grace. ",
        author: "Acts 20:24 "
      },
      {
        quote: "God is our refuge and strength, an ever-present help in trouble. ",
        author: "Psalm 46:1 "
      },
      {
        quote: "I the Lord search the heart and examine the mind, to reward each person according to their conduct, according to what their deeds deserve.",
        author: "Jeremiah 17:10 "
      },
      {
        quote: "Come to me, all you who are weary and burdened, and I will give you rest.",
        author: "Matthew 11:28 "
      },
      {
        quote: "Do not merely listen to the word, and so deceive yourselves. Do what it says. ",
        author: "James 1:22"
      },
      {
        quote: "Come, let us bow down in worship, let us kneel before the Lord our Maker; for he is our God and we are the people of his pasture, the flock under his care. ",
        author: "Psalm 95:6-7"
      },
      {
        quote: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. ",
        author: "Romans 8:28 "
      },
      {
        quote: "Therefore, since we have these promises, dear friends, let us purify ourselves from everything that contaminates body and spirit, perfecting holiness out of reverence for God.",
        author: "2 Corinthians 7:1"
      },
      {
        quote: "But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal. For where your treasure is, there your heart will be also.",
        author: "Matthew 6:20-21"
      },
      {
        quote: "After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever.",
        author: "1 Thessalonians 4:17"
      },
      {
        quote: "Sovereign Lord, as you have promised, you may now dismiss your servant in peace. For my eyes have seen your salvation, which you have prepared in the sight of all nations: a light for revelation to the Gentiles, and the glory of your people Israel.",
        author: "Luke 2:28-32 "
      },
      {
        quote: "You will keep in perfect peace those whose minds are steadfast, because they trust in you. ",
        author: "Isaiah 26:3 "
      },
      {
        quote: "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
        author: "John 15:5"
      },
      {
        quote: "Take delight in the Lord, and he will give you the desires of your heart. ",
        author: "Psalm 37:4 "
      },
      {
        quote: "Get wisdom, get understanding; do not forget my words or turn away from them.",
        author: "Proverbs 4:5"
      },
      {
        quote: "Therefore, as God’s chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience.",
        author: "Colossians 3:12 "
      },
      {
        quote: "I appeal to you, brothers and sisters, in the name of our Lord Jesus Christ, that all of you agree with one another in what you say and that there be no divisions among you, but that you be perfectly united in mind and thought. ",
        author: "1 Corinthians 1:10"
      },
      {
        quote: "For it has been granted to you on behalf of Christ not only to believe in him, but also to suffer for him, since you are going through the same struggle you saw I had, and now hear that I still have. ",
        author: "Philippians 1:29-30"
      },
      {
        quote: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
        author: "Ephesians 4:32"
      },
      {
        quote: "You, God, are my God, earnestly I seek you; I thirst for you, my whole being longs for you, in a dry and parched land  where there is no water. ",
        author: "Psalm 63:1"
      },
      {
        quote: "Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion looking for someone to devour. Resist him, standing firm in the faith, because you know that the family of believers throughout the world is undergoing the same kind of sufferings.",
        author: "1 Peter 5:8-9"
      },
      {
        quote: "Then Jesus declared, 'I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty'. ",
        author: "John 6:35"
      },
      {
        quote: "Oh, the depth of the riches of the wisdom and knowledge of God! How unsearchable his judgments, and his paths beyond tracing out!",
        author: "Romans 11:33"
      },
      {
        quote: "For you created my inmost being; you knit me together in my mother’s womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well. ",
        author: "Psalm 139:13-14"
      },
      {
        quote: "Charm is deceptive, and beauty is fleeting; but a woman who fears the Lord is to be praised.",
        author: "Proverbs 31:30"
      },
      {
        quote: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast. For we are God's handiwork, created in Christ Jesus to good works, which God prepared in advance for us to do.",
        author: "Ephesians 2:8-10"
      },
      {
        quote: "Ah, Sovereign Lord, you have made the heavens and the earth by your great power and outstretched arm. Nothing is too hard for you.",
        author: "Jeremiah 32:17"
      },
      {
        quote: "For whoever wants to save their life will lose it, but whoever loses their life for me will find it.",
        author: "Matthew 16:25"
      },
      {
        quote: "May these words of my mouth and this meditation of my heart be pleasing in your sight, Lord, my Rock and my Redeemer. ",
        author: "Psalm 19:14"
      },
    // Add more verses here
  ];
  
  // Export the verses array
  window.verses = verses;
  