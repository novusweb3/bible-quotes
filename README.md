# Daily Bible Verse Generator

This is a simple web application that generates a daily Bible verse and allows users to generate random verses on demand. The application is built using HTML, CSS, and JavaScript.

## How it Works

1. When the page loads, the application checks if a verse is assigned for the current day.
2. If a verse is assigned for the day, it is displayed on the page.
3. If no verse is assigned for the day, a random verse is generated from the provided list of verses and assigned for the day.
4. The assigned verse is stored in the browser's local storage, so it remains the same even if the page is refreshed.
5. When the "New Verse" button is clicked, the assigned verse for the day is cleared from local storage, and a new random verse is generated and displayed.
6. The user has the option to add their own verses manually.

## Adding Verses Manually

To add your own verses manually, follow these steps:

1. Open the `verses.js` file.
2. Inside the `VERSES` array, add new verse objects in the following format:

   { quote: "Your verse here", author: "Author name here" }

For example:
{ quote: "For God so loved the world...", author: "John 3:16" }


Add as many verse objects as you like, each representing a different Bible verse.
Save the verses.js file.
The application will now include your manually added verses when generating random verses and assigning a verse for the day.

Please note that the verses should be added within the VERSES array in the verses.js file and follow the provided format to ensure proper functionality.

Enjoy daily Bible verses and exploring the Word of God!