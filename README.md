React + Vite

this is ecommerce website for our software engineering 02 project

after cloning => To setup this project.
commands:
npm install  ==> to install all modules listed in the package.json and its versions

**Reminder**
ask jamil the data for .env its important in order to run AUth0 and Sanity

to run:
npm run dev ===> to run local node server.

other commands can be found in package.json "scripts"
npm run "scripts"



extensions: 
ES7+ React/Redux/React-Native snippets
Tailwind CSS IntelliSense



workspace issues:
Tailwind CSS IntelliSense may not always work. to fix this.

ctrl + p ==> then type ">settings.json", enter "open workspace settings (JSON)"

{
    "tailwindCSS.includeLanguages": {
    "html": "html",
    "javascript": "javascript",
    "css": "css"
},
"editor.quickSuggestions": {
    "strings": true
}
}
copy the code and paste it there.