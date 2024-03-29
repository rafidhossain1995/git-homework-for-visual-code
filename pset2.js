/******************
PROBLEM 1:

In this problem, you will be downloading some files from online, then creating a custom project with git initialized. You will then one by one structure the files and make commits to git as needed.

1. Download this repository from the homepage by clicking "Clone or download", then "Download ZIP". You will be using the files from the /stuff directory.
2. Once the repository has been downloaded, go ahead and unzip it.

3. Achieve the following structure ONLY using command line:


cd Desktop
mkdir assets
mkdir images
mkdir memes
mkdir src
mv images assets
mv memes assets
mv src assets
cd assets
ls
cd images
touch amazojn.jpg
touch facebook.png
touch google.jpg
touch twitter.png
cd ..
cd memes
mv meme.jpg memes
cd ..
cd src
mv foo.js src
mv hello.html app.js
code .
"full stack: Nights and Weekends."

~/Desktop/pset2
    /assets
        /images
            amazon.jpg
            facebook.png
            google.jpg
            twitter.png
        /memes
            meme.jpg
        /src
            foo.js
    app.js
    hello.html

4. Open `hello.html` using a code editor and change "SOME_CLASS" to "Full Stack: Nights & Weekends". Save it.

5. You should have the following commits:
- git initialized
- added app.js
- added hello.html
- created assets directory
- added all images & memes
- added all sources
- modified hello file
******************/
