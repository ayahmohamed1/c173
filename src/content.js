// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  // --- Secret Date / Password Protection ---
  password: {
    code: '2009',
    title: 'enter a secret date',
    subtitle: 'a date only we know ♡',
    buttonText: 'UNLOCK ♡',
    errorMessages: [
      'no babee!',
      'no try 2009',
    ],
  },

  welcome: {
    greeting: 'hello ',
    name: 'my love',
    question: 'would you like to open your gift?',
    yesButton: 'YES PLEASE',
    noButton: 'NO THANKS',
  },

  noThanks: {
    message: "i promise you'll like it",
    tryAgainButton: 'TRY AGAIN',
  },

  menu: {
    title: 'pick a gift',
    subtitle: 'choose one to open ↓',
    items: [
      { id: 'memories', icon: '📸', label: 'Captured\nMemories' },
      { id: 'flowers', icon: '🌷', label: 'Virtual\nFlowers' },
      { id: 'song', icon: '🎵', label: 'our\nsong' },
      { id: 'letter', icon: '💌', label: 'Love\nLetter' },
    ],
  },

  memories: {
    title: 'our memories',
    returnButton: 'RETURN',
    images: [
      { src: '/images/memory1.jpg', label: '❤️', tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️', tag: 'cute' },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory5.jpg', label: '❤️', tag: 'always' },
      { src: '/images/memory6.jpg', label: '❤️', tag: 'mine' },
      { src: '/images/memory7.jpg', label: '❤️', tag: 'us' },
      { src: '/images/memory8.jpg', label: '❤️', tag: 'us' },
    ],
  },



  flowers: {
    title: 'for you',
    returnButton: 'RETURN',
    flowerName: 'TULIP',
    flowerSubtitle: 'just like you — rare & beautiful',
    poems: [
      `"I love you and every little thing about you ♡"`,
      `"I get lost in your eyes; nothing else compares ✨"`,
      `"Everything sweet and beautiful reminds me of you 🌷"`,
      `"you are my favorite person♥️"`,
      `"The heart and warmth of my home 🏡"`,
      `"you are my happiness♡"`,
      `"My whole world and everything in it 💫"`,
      `"my reason to smile 💕"`,
    ],
  },

  song: {
    title: 'our song',
    returnButton: 'RETURN',
    // Put your .mp3 in public/music/ and update this path:
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  letter: {
    title: 'a letter',
    returnButton: 'RETURN',
    message: `Happy birthday, my love! ❤️ I hope your day is as beautiful and special as you are. I want you to know that I’ll always love you, through every moment, every situation, and every chapter of life. No matter what happens or how things change, my love for you will always remain the same. I hope you’ll always be by my side, because having you in my life means more to me than words could ever express. ❤️`,
    signoff: 'I love you always,',
    signature: 'Your love ♡',
  },


}

export default content
