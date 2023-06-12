document.addEventListener("DOMContentLoaded", function () {
  const STORAGE_KEY = "dailyVerse";
  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // Number of milliseconds in one day

  function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * window.verses.length);
    return window.verses[randomIndex];
  }

  function displayVerse(verse) {
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");

    quoteElement.textContent = verse.quote;
    authorElement.textContent = verse.author;
  }

  function setDailyVerse(verse) {
    const today = new Date().toDateString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: today, verse: verse }));
  }

  function getDailyVerse() {
    const storedVerse = localStorage.getItem(STORAGE_KEY);
    if (storedVerse) {
      console.log('Verse found in cache');
      const { date, verse } = JSON.parse(storedVerse);
      const storedDate = new Date(date).toDateString();
      const today = new Date().toDateString();

      if (storedDate === today) {
        return verse;
      }
    }

    return null;
  }

  function displayDailyVerse() {
    const dailyVerse = getDailyVerse();

    if (dailyVerse) {
      displayVerse(dailyVerse);
    } else {
      const randomVerse = getRandomVerse();
      setDailyVerse(randomVerse);
      displayVerse(randomVerse);
    }
  }

  function tweetQuote() {
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");

    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteElement.textContent} - ${authorElement.textContent}`;
    window.open(twitterUrl, '_blank');
  }

  const newQuoteButton = document.getElementById("new-quote");
  const twitterButton = document.getElementById("twitter");

  newQuoteButton.addEventListener("click", function () {
    localStorage.removeItem(STORAGE_KEY);
    const randomVerse = getRandomVerse();
    displayVerse(randomVerse);
  });

  twitterButton.addEventListener("click", tweetQuote);

  displayDailyVerse();
});
