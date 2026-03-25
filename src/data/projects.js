const projects = {
    ":Pygame-Level-Editor": {
        title: "Pygame Level Editor",
        text: ` 
I wanted to make more complex games using Pygame, but I quickly realized that without 
proper tools, development would become painful. Because of that, I decided to create my 
own **game engine** for Python game development using Pygame. Like any proper game engine, a 
**level editor** felt like an essential part of the project.


It became clear early on that this would take much more time than anticipated, especially when the only 
tools available were **basic shapes and collision detection**. In the end, however, I managed to build a fairly 
solid level editor, at least by Pygame standards. I also created a **README** explaining how to use the tool and 
**documented** the more technical aspects on a **Notion** page dedicated to this project.

The editor supports features such as **custom assets, saving and loading levels, zooming, on-grid and off-grid 
placement, a layer system, and more**.

For storing map data, I used **JSON files**. Unlike many 2D level editors, mine does not rely on a grid-based system. 
Instead, it uses a **hash map**, which provides performance benefits when handling collision checks. For the save and 
load system, I used **Tkinter**, allowing access to the Windows file system when choosing files.

This project was a lot of fun to work on and taught me a great deal, not only about game development but also about
how much math and vector logic goes into rendering. I also learned how to document a project properly, organize my
code and workflow, and use Notion to make the project accessible to others. This was my first time creating documentation
intended for users who wouldn’t need my direct help.

Throughout the development process, I also learned how to use **Git and version control** effectively, and used it consistently
during the project to manage changes and track progress.

If you’d like to use the editor or explore the code, you can find it on my [GitHub](https://github.com/Gegewindis/Pygame-Level-Editor).
I’ve also included a link to the Notion page used for [documentation](https://www.notion.so/Documentation-2894f48fbfc180189475e53e0dff06f4?source=copy_link) 
and [README](https://www.notion.so/Read-Me-2894f48fbfc180a2a996e223a0d76ee5?source=copy_link). Feedback is greatly appreciated.
                `,
        folderName: "editor_images",
        tags: [],
        repoUrl: "https://github.com/Gegewindis/Pygame-Level-Editor"
    },

    ":VeloData": {
        title: "VeloData",
        text: ` 
Started off by getting aquainted with the **PySide6** designer tool, since 
it was my very first time using it. I designed a **simple and minimalistic** 
design for the app and shortly afterwards started programming. I hooked up 
the buttons and decided that the transferred data should be encrypted.


I had some challenges with the **QT framework**. The implementation of different  
**threads** for sending data and receiving data were a bit tricky. I quickly learned that 
signals existed which let me safely communicate between threads and the UI. I also 
implemented a custom label with a drag and drop event that can receive files.

**AES encryption** was also a part that I wanted to implement. It was interesting to 
learn more about encryption since it was my first project where I implemented it.

I used **TCP** connection to transfer data between machines. I created different headers
with the filename and file size, which is read by the receiver, so it knows how big
different files are.

Overall it was a interesting project where I learned much about TCP, data encryption, 
transferring data, designing the application and the QT framework!

You can find this project along with my other projects on my GitHub [here](https://github.com/Gegewindis/VeloData).
                `,
        folderName: "velodata_images",
        tags: [],
        repoUrl: "https://github.com/Gegewindis/VeloData"
    },

    ":FloodFill": {
        title: "FloodFill",
        text: ` 
My very first school assignment turned into something much bigger than
I expected. I was supposed to make a simple old-school **floodfill** game
using a graphical interface, but I enjoyed it so much that I ended up
creating a full game! :)

I added **multiple settings, themes, and video options**, along with ** game 
presets** thatsave **high scores**, and even an option to create your own **custom 
preset**. I included **credits** to give a shoutout to friends who inspired me,
and added **achievements with fun pop-ups and helpful tips for reaching them.**

On the technical side, the game is built with **Pygame**, a Python library that 
gives you the basic building blocks for a game, like rectangles and 
collision **pixel-art** detection. Game data is stored in **JSON files**, the  
graphics are my own creations, and I used a compiler called **PyInstaller** to make 
a version anyone can download and play. I lastly had to use a floodfill algorithm to create the 
game, which is baes on a **Depth First Search** algorithm.

Creating this game was a blast, and I learned a bunch along the way. If you want
to try it, download it [here](https://drive.google.com/uc?export=download&id=1kQkYxePJidwR-XL46pxpRDlbmoybk14P) 
and see if you can unlock the secret theme by unlocking the achievement!

                `,
        folderName: "floodfill_images",
        tags: [],
        repoUrl: "https://github.com/Gegewindis/FloodFIll"
    },

    ":Infinite-Loldle": {
        title: "Infinite Loldle",
        text: ` 
## The website

Started off by first designing the whole system. Figuring out all pages 
that I was supposed to create for the user to play **gamemodes, authenticate 
themselves and view a leaderboard**. I chose some base colours for the game 
and started mapping out the URLs for the different pages. I then started to 
make the components necessary such as the guess entry, and the header. I implemented the 
gamemodes, then the user authentication and lastly the leaderboard. After the design was 
implemented, I had to go back and implement the **API calls** which was not that difficult since 
I programmed with them in mind from the get-go. 

## The backend

Started off by creating the **ER-diagram** which afterwards was turned into **schema**. 
The **data** was gathered from league-wikis. The server side was created with python 
framework **Django**, and the queries were manually created by us. **A tool** was also created 
which can help us interact with the database in an easier way.

Currently only the website is public on github since I want to eventually deploy 
the website so my friends will be able to play. The website repository can be 
found [here](https://github.com/Gegewindis/Infinite-Loldle-Website/).
                `,
        folderName: "infinite_loldle_images",
        tags: [],
        repoUrl: "https://github.com/Gegewindis/Infinite-Loldle-Website/"
    },

    ":Malicus": {
        title: "Malicus",
        text: ` 
This was my very **first website**, created using only **HTML** and **CSS**. 
I wanted to get into web development since my goal is to become a 
full-stack developer, and I had to start somewhere.

I really enjoy creating and optimizing systems, so I challenged 
myself to build something a bit more creative. It's not the most 
complicated website, but it was an important first stepping stone 
in my journey.

If you'd like to check it out, the source code is available on my 
GitHub, which you can find [here](https://github.com/Gegewindis/Melicus).
                `,
        folderName: "melicus_images",
        tags: [],
        repoUrl: "https://github.com/Gegewindis/Melicus"
    },

    ":SimSim": {
        title: "SimSim",
        text: ` 
This project was an assignment from school where I had to learn to 
implement **Object Oriented Programming**. We had different stations, such 
as fields, barracks, farms, cafeterias, houses and factories. We were 
supposed to simulate a group of people with limited supply of resources 
and see how many days (turns) they would survive before being wiped out. 

We were also allowed to choose from different fields to dive deeper on. 
As shown in the image below, I tried using a pre-existing **GUI** which I configured 
to my simulation. I also used some **multithreading** and some **inheritance**
as well. **Overall, a fun and very interesting project**.
                `,
        folderName: "simsim_images",
        tags: [],
        repoUrl: ""
    },
}

export default projects