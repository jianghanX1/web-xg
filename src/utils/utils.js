import request from '@/utils/request.js'

// 获取全部游戏列表
export function getGameList(gameType) {
    return request({
        url: '/pmm/game/ranking/list',
        method: 'get',
        params: {
            gameType
        }
    })
}

// 获取游戏详情
export function getGameInfo(gameId) {
    return request({
        url: '/pmm/game/info',
        method: 'get',
        params: {
            gameId
        }
    })
}

// 获取游戏类型
export function getGameType() {
    return request({
        url: '/pmm/system/dict',
        method: 'get',
        params: {
            dictTypes: 'game_type'
        }
    })
}

// 随机打乱数组
export function shuffle(arr) {
    let length = arr.length,
        randomIndex,
        temp;
    while (length) {
        randomIndex = Math.floor(Math.random() * (length--));
        temp = arr[randomIndex];
        arr[randomIndex] = arr[length];
        arr[length] = temp
    }
    return arr;
}

// 判断pc/移动端
export function determinePcOrMove() {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        //fontsize计算
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 16 + 'px'
        return 1
    } else {
        return 2
    }
}

/**
 * 配置 seo
 * @param title 网页标题
 * @param key 关键词
 * @param des 描述
 */
export function setMeta(key, des) {
    // let  title_default = "网站名称";
    // if(title){
    //   title_default += title;
    // }
    // document.title = title_default;
    document.querySelector("meta[name='keywords']").setAttribute('content', key);
    document.querySelector("meta[name='description']").setAttribute('content', des);
}


// 固定数据香港用
import AdamAndEveGoXmas from '@/assets/AdamAndEveGoXmas/180x180.png';
import BikeRaceX from '@/assets/bike race x/180x180.png';
import BubbleShooterChallenge from '@/assets/BubbleShooterChallenge/180x180.png';
import BuilderIdleArcade from '@/assets/BuilderIdleArcade/180x180.png';
import CandyBubble2 from '@/assets/CandyBubble2/180x180.png';
import CarromClash from '@/assets/CarromClash/180x180.jpg';
import CarromPool from '@/assets/CarromPool/180x180.jpg';
import CatRoomBlast from '@/assets/CatRoomBlast/180x180.png';
import ChickChickenConnect from '@/assets/ChickChickenConnect/180x180.png';
import ChristmasDector from '@/assets/ChristmasDector/180x180.png';
import ChristmasInstagirls from '@/assets/ChristmasInstagirls/180x180.png';
import CowBay from '@/assets/CowBay/180x180.png';
import CrazyRacing from '@/assets/Crazy Racing/180x180.png';
import DominoFrenzy from '@/assets/Domino Frenzy/180x180.png';
import DragRacing from '@/assets/DragRacing/180x180.jpg';
import EggsACar from '@/assets/EggsACar/180x180.png';
import EndlessHand from '@/assets/EndlessHand/180x180.png';
import EpicPranks from '@/assets/EpicPranks/180x180.png';
import ExtremeBikers from '@/assets/Extreme Bikers/180x180.png';
import FantasticSniper from '@/assets/FantasticSniper/180x180.png';
import FantasyMadness from '@/assets/FantasyMadness/180x180.png';
import FastFurious from '@/assets/Fast Furious/180x180.png';
import FGLudo from '@/assets/FGLudo/180x180.png';
import FireBlocks from '@/assets/FireBlocks/180x180.png';
import FlipBottle from '@/assets/Flip Bottle/180x180.png';
import FourColors from '@/assets/FourColors/180x180.png';
import FreekickTraining from '@/assets/FreekickTraining/180x180.png';
import GardenTales3 from '@/assets/GardenTales3/180x180.png';
import HappyGlass from '@/assets/HappyGlass/180x180.png';
import HiddenMagicOG from '@/assets/HiddenMagicOG/180x180.png';
import HitRunSolo from '@/assets/HitRunSolo/180x180.png';
import InstadivaNikkeDressUp from '@/assets/InstadivaNikkeDressUp/180x180.png';
import JuiceMaster from '@/assets/JuiceMaster/180x180.png';
import KillerAssassin from '@/assets/Killer Assassin/180x180.png';
import KimonoFashion from '@/assets/KimonoFashion/180x180.png';
import KnifeHit from '@/assets/KnifeHit/180x180.png';
import KnifeSmash2 from '@/assets/KnifeSmash2/180x180.png';
import LineBiker from '@/assets/LineBiker/180x180.png';
import LinkLinePuzzle from '@/assets/Link Line Puzzle/180x180.png';
import LudoLegend from '@/assets/LudoLegend/180x180.jpg';
import MatchGood3D from '@/assets/MatchGood3D/180x180.png';
import MineCartNoob from '@/assets/MineCartNoob/180x180.png';
import MinecraftRunner from '@/assets/MinecraftRunner/180x180.png';
import MotoManiac2 from '@/assets/Moto Maniac 2/180x180.png';
import MysticalMixing from '@/assets/MysticalMixing/180x180.png';
import PerfectPiano from '@/assets/PerfectPiano/180x180.jpg';
import PixieTwinesBirth from '@/assets/Pixie Twines Birth/180x180.png';
import PizzaNinjaMania from '@/assets/Pizza Ninja Mania/180x180.png';
import Plumber from '@/assets/Plumber/180x180.png';
import RoadTurn from '@/assets/Road Turn/180x180.png';
import RollThisBall from '@/assets/RollThisBall/180x180.jpg';
import RoomDesign from '@/assets/Room Design/180x180.png';
import SaveTheGoldFish from '@/assets/SaveTheGoldFish/180x180.png';
import SheepNSheep from '@/assets/SheepNSheep/180x180.png';
import SnakeAndLadders from '@/assets/Snake And Ladders/180x180.png';
import SnakeBattle from '@/assets/SnakeBattle/180x180.png';
import SpotTheDifference2 from '@/assets/SpotTheDifference2/180x180.png';
import StackSmash from '@/assets/Stack Smash000/180x180.png';
import SupermarketGirlCleanup from '@/assets/SupermarketGirlCleanup/180x180.png';
import SuperSnipre from '@/assets/SuperSnipre/180x180.png';
import SwingManHook from '@/assets/SwingManHook/180x180.png';
import TrollThiefStickmanPuzzle from '@/assets/TrollThiefStickmanPuzzle/180x180.png';
import X2Blocks2048Number from '@/assets/X2Blocks2048Number/180x180.png';
import ZombieKillers from '@/assets/ZombieKillers/180x180.png';
export function getJson() {
    return (
        [{
            "gameId": 1,
            "Name": "AdamAndEveGoXmas",
            "Url": "https://www.yiygames.com/gcenter/games/AdamAndEveGoXmas/",
            "iconUrl": AdamAndEveGoXmas,
            "dis": 111
        }, {
            "gameId": 2,
            "Name": "Bike RaceX",
            "Url": "https://www.yiygames.com/gcenter/games/BikeRaceX/",
            "iconUrl": BikeRaceX,
            "dis": "The newest extreme Bike RaceX racing game is here! Grab your motorbike, strap on your helmet and grab some airtime over obstacles to beat the clock on amazing off road circuits."
        }, {
            "gameId": 3,
            "Name": "Bubble Shooter Challenge",
            "Url": "https://www.yiygames.com/gcenter/games/BubbleShooterChallenge/",
            "iconUrl": BubbleShooterChallenge,
            "dis": "*A classic bubble shooter game, the gameplay is simple, shoot the bubbles of the same color onto the bubbles of the same color, if the number is more than three, then you can destroy it\n*The feedback of the game is very good, come and experience it"
        }, {
            "gameId": 4,
            "Name": "Builder Idle Arcade",
            "Url": "https://www.yiygames.com/gcenter/games/BuilderIdleArcade/",
            "iconUrl": BuilderIdleArcade,
            "dis": "*A game that simulates management and construction. \n*At the beginning, players can collect trees or rocks and sell them to recycling stations for money. \n*After a certain economy, they can buy wood and food processing machines. Later, they can hire workers to mine raw materials."
        }, {
            "gameId": 5,
            "Name": "Candy Bubble2",
            "Url": "https://www.yiygames.com/gcenter/games/CandyBubble2/",
            "iconUrl": CandyBubble2,
            "dis": "*This fun bubble shooter game is easy just to pick up and play, perfect for the whole family to play and enjoy. \n*Start the adventure now, hit and blast the balls and discover the most classic and amazing puzzle game!"
        }, {
            "gameId": 6,
            "Name": "Carrom Clash",
            "Url": "https://www.yiygames.com/gcenter/games/CarromClash/",
            "iconUrl": CarromClash,
            "dis": "*CarromClash multiplayer game on the board you have to be better and drop your Pool on the board before your opponent\n*you can play against any player in the world."
        }, {
            "gameId": 7,
            "Name": "Carrom Pool",
            "Url": "https://www.yiygames.com/gcenter/games/CarromPool/",
            "iconUrl": CarromPool,
            "dis": "*Carrom Pool is a sport-based tabletop & carrom board disc games of Indian version of pool disk game.\n*Don't miss out on this fun and relaxing carrom games!"
        }, {
            "gameId": 8,
            "Name": "CatRoomBlast",
            "Url": "https://www.yiygames.com/gcenter/games/CatRoomBlast/",
            "iconUrl": CatRoomBlast,
            "dis": "*Match, earn money and stars to create your cute characters.\n*Improve your home."
        }, {
            "gameId": 9,
            "Name": "ChickChickenConnect",
            "Url": "https://www.yiygames.com/gcenter/games/ChickChickenConnect/",
            "iconUrl": ChickChickenConnect,
            "dis": "*A game with cute style, bright colors, and classic cartoon gameplay. Elimination is done by connecting all the chickens of the same color. \n*If you eliminate a large number at one time, you can also get colored eggs. Colored eggs can be clicked to eliminate a whole circle chick"
        }, {
            "gameId": 10,
            "Name": "ChristmasDector",
            "Url": "https://www.yiygames.com/gcenter/games/ChristmasDector/",
            "iconUrl": ChristmasDector,
            "dis": "*Looking for decorations to decorate your room\n*Dress up for an unforgettable Christmas."
        }, {
            "gameId": 11,
            "Name": "ChristmasInstagirls",
            "Url": "https://www.yiygames.com/gcenter/games/ChristmasInstagirls/",
            "iconUrl": ChristmasInstagirls,
            "dis": "*Choose one of the girls characters to dress up Raven Queen, \n*Apple White, Madeline Hatter, Draculaura, Cleo de Nile, Clawdeen - monster high dress up style games, or design your own dolls"
        }, {
            "gameId": 12,
            "Name": "CowBay",
            "Url": "https://www.yiygames.com/gcenter/games/CowBay/",
            "iconUrl": CowBay,
            "dis": "*A survival building game where you play as a cute cow. \n*By collecting wood to build tools such as axes, you can cut trees, use various materials to make workbenches, and then unlock and make more tools, such as pickaxes, shovels, etc. to mine more materials, survive and build and grow stronger"
        }, {
            "gameId": 13,
            "Name": "CrazyRacing",
            "Url": "https://www.yiygames.com/gcenter/games/CrazyRacing/",
            "iconUrl": CrazyRacing,
            "dis": "*Drive your car, defeat the hostile thugs on the road, collect more money, \n*upgrade vehicles, weapons and equipment, defeat the enemy bosses, come and join this crazy racing road"
        }, {
            "gameId": 14,
            "Name": "DominoFrenzy",
            "Url": "https://www.yiygames.com/gcenter/games/DominoFrenzy/",
            "iconUrl": DominoFrenzy,
            "dis": "*Try to shoot the ball as smart as possible and hit the Dominos at the right spot\n*create a huge chain reaction."
        }, {
            "gameId": 15,
            "Name": "DragRacing",
            "Url": "https://www.yiygames.com/gcenter/games/DragRacing/",
            "iconUrl": DragRacing,
            "dis": "*Drive, customize your speed car and beat all of your racing rivals \n*and become the #1 from all racers with the best underground cars in his garage!"
        }, {
            "gameId": 16,
            "Name": "EggsACars",
            "Url": "https://www.yiygames.com/gcenter/games/EggsACars/",
            "iconUrl": EggsACar,
            "dis": "*Tap the right arrow button to move forward, then hit the left arrow button to \nreverse.\n*Be patient though, it's not as easy as you think."
        }, {
            "gameId": 17,
            "Name": "EndlessHand",
            "Url": "https://www.yiygames.com/gcenter/games/EndlessHand/",
            "iconUrl": EndlessHand,
            "dis": "*A cooking-themed game. Players need to be quick-eyed and quick-handed. Every time the hand passes over the pizza, carefully confirm whether it is the ingredient that we need to sprinkle on the pizza. \n*If so, it must be passed when the hand passes over the pizza. Click to sprinkle the ingredients"
        }, {
            "gameId": 18,
            "Name": "EpicPranks",
            "Url": "https://www.yiygames.com/gcenter/games/EpicPranks/",
            "iconUrl": EpicPranks,
            "dis": "*Here is unknown and interesting, you only have weapons in your hand.\n*Meeting partners, reaping resonance, and winning, fighting is that simple."
        }, {
            "gameId": 19,
            "Name": "ExtremeBikers",
            "Url": "https://www.yiygames.com/gcenter/games/ExtremeBikers/",
            "iconUrl": ExtremeBikers,
            "dis": "*It's time to take your bike off the road, customize your rider \n*and race againstyour friends in the new Multiplayer Race mode!"
        }, {
            "gameId": 20,
            "Name": "FantasticSniper",
            "Url": "https://www.yiygames.com/gcenter/games/FantasticSniper/",
            "iconUrl": FantasticSniper,
            "dis": "*Move the scope of the sniper rifle, aim at the zombies, or aim at the various mechanisms reserved for players in each level. \n*After killing all the zombies, you can pass the level. *Sometimes it is the best choice to pass the level instead of directly attacking the zombies."
        }, {
            "gameId": 21,
            "Name": "FantasyMadness",
            "Url": "https://www.yiygames.com/gcenter/games/FantasyMadness/",
            "iconUrl": FantasyMadness,
            "dis": "*A vampire survivor game, but we are playing a druid who controls the power of nature. Every time you upgrade, \n*you can randomly choose one of the three skills to upgrade. You will face a large number of enemies. \n*Every once in a while There will also be bosses coming, making every skill upgrade "
        }, {
            "gameId": 22,
            "Name": "FastFurious",
            "Url": "https://www.yiygames.com/gcenter/games/FastFurious/",
            "iconUrl": FastFurious,
            "dis": "*Set your great name and get ready for some fun lightning speed car racing!\n*You can racing all over the world,choose your track and start racing with your opponent."
        }, {
            "gameId": 23,
            "Name": "FGLudo",
            "Url": "https://www.yiygames.com/gcenter/games/FGLudo/",
            "iconUrl": FGLudo,
            "dis": "*The game is played between 2 and 4 players. \n*The goal of the game is to move all four pieces to the home position in the center."
        }, {
            "gameId": 24,
            "Name": "FireBlocks",
            "Url": "https://www.yiygames.com/gcenter/games/FireBlocks/",
            "iconUrl": FireBlocks,
            "dis": "*You need to shoot fruit rings of the rotate tower from a cannon. \n*Watch out for moving obstacles and don't blast them!"
        }, {
            "gameId": 25,
            "Name": "FlipBottle",
            "Url": "https://www.yiygames.com/gcenter/games/FlipBottle/",
            "iconUrl": FlipBottle,
            "dis": "*Make the bottle jump or even double flip. \n*How? Just tap the screen at the right moment and jump!"
        }, {
            "gameId": 26,
            "Name": "FourColors",
            "Url": "https://www.yiygames.com/gcenter/games/FourColors/",
            "iconUrl": FourColors,
            "dis": "*The classic Uno card game is now free to play, Uno and the first player who runs out of cards wins, \n*the game supports up to four players, come and try"
        }, {
            "gameId": 27,
            "Name": "FreekickTraining",
            "Url": "https://www.yiygames.com/gcenter/games/FreekickTraining/",
            "iconUrl": FreekickTraining,
            "dis": "*Do you like football game? \n*Make your team a Soccer Champion 2020."
        }, {
            "gameId": 28,
            "Name": "GardenTales3",
            "Url": "https://www.yiygames.com/gcenter/games/GardenTales3/",
            "iconUrl": GardenTales3,
            "dis": "*A classic matchmaking game with beautiful pictures and gameplay. \n*Click more than 2 pieces of the same color and adjacent candies to eliminate them. \n*The more eliminations in one row, the higher the score. Come and try it!"
        }, {
            "gameId": 29,
            "Name": "HappyGlass",
            "Url": "https://www.yiygames.com/gcenter/games/HappyGlass/",
            "iconUrl": HappyGlass,
            "dis": "*Try to find the best way to complete each level. \n*You can come up with your own solution so be creative and don't be afraid to think out of the box!\n*Some levels might look easy but let's see if you can actually get the 3 stars."
        }, {
            "gameId": 30,
            "Name": "HiddenMagicOG",
            "Url": "https://www.yiygames.com/gcenter/games/HiddenMagicOG/",
            "iconUrl": HiddenMagicOG,
            "dis": "*Look for the various items listed in each level in the magic house. \n*Most of the items are relatively obvious and highly recognizable. \n*The knowledge you need is a pair of eyes that are good at discovering."
        }, {
            "gameId": 31,
            "Name": "HitRunSolo",
            "Url": "https://www.yiygames.com/gcenter/games/HitRunSolo/",
            "iconUrl": HitRunSolo,
            "dis": "*A vertical version of Parkour dodging, attacking enemies at the same time, improving your own level, *defeating higher-level enemies, and at the end, according to your accumulated levels, \n*you will perform a ladder challenge to determine your position"
        }, {
            "gameId": 32,
            "Name": "InstadivaNikkeDressUp",
            "Url": "https://www.yiygames.com/gcenter/games/InstadivaNikkeDressUp/",
            "iconUrl": InstadivaNikkeDressUp,
            "dis": "*Nikke's fashion dress up, dress up Nikke through your dressing aesthetics, \n*share your dressing results on social software after dressing up, \n*get everyone's likes and attention, you can try a variety of fashion styles"
        }, {
            "gameId": 33,
            "Name": "JuiceMaster",
            "Url": "https://www.yiygames.com/gcenter/games/JuiceMaster/",
            "iconUrl": JuiceMaster,
            "dis": "*The gameplay is more than easy. \n*Tap to start, time your hits and slice all moving fruits at a time to make fresh juice\n*A glass of juice is made each time you finish a level."
        }, {
            "gameId": 34,
            "Name": "KillerAssassin",
            "Url": "https://www.yiygames.com/gcenter/games/KillerAssassin/",
            "iconUrl": KillerAssassin,
            "dis": "*Control the assassin and hunt down your targets one by one\n*Targets with automatic machine guns can be lurking around each corner\n*Attack them swiftly and escape without being spotted"
        }, {
            "gameId": 35,
            "Name": "KimonoFashion",
            "Url": "https://www.yiygames.com/gcenter/games/KimonoFashion/",
            "iconUrl": KimonoFashion,
            "dis": "*Dress up a series of Japanese-style scenes and characters serving and makeup, \n*such as paper cranes, porcelain, garden landscapes, various styles of kimonos, and unique Japanese traditional makeup"
        }, {
            "gameId": 36,
            "Name": "KnifeHit",
            "Url": "https://www.yiygames.com/gcenter/games/KnifeHit/",
            "iconUrl": KnifeHit,
            "dis": "*Throw the knives into the logs to break them. \n*Slash the apples and unlock new knives.Be careful to not hit the knives or the spikes. \n*Time your actions, target carefully and become the knife master!"
        }, {
            "gameId": 37,
            "Name": "KnifeSmash2",
            "Url": "https://www.yiygames.com/gcenter/games/KnifeSmash2/",
            "iconUrl": KnifeSmash2,
            "dis": "*Aim to hit the spinning circle, precision counts and don't make any mistakes\n*The more knives you dash,the harder it becomes."
        }, {
            "gameId": 38,
            "Name": "LineBiker",
            "Url": "https://www.yiygames.com/gcenter/games/LineBiker/",
            "iconUrl": LineBiker,
            "dis": "*Perform insane stunts while you cruise through the never-ending world of Rider! \n*Grab your motorcycle and start flipping like a maniac!"
        }, {
            "gameId": 39,
            "Name": "LinkLinePuzzle",
            "Url": "https://www.yiygames.com/gcenter/games/LinkLinePuzzle/",
            "iconUrl": LinkLinePuzzle,
            "dis": "*Free & easy to play brain puzzle! \n*Challenging for anyone from a smart puzzler to a casual gamer.\n*STEM Challenge with GeoBoard!"
        }, {
            "gameId": 40,
            "Name": "LudoLegend",
            "Url": "https://www.yiygames.com/gcenter/games/LudoLegend/",
            "iconUrl": LudoLegend,
            "dis": "*Ludo Rules are easy for people of all ages. Ludo game is played between 2 to 4 players. \n*Each player has 4 tokens. Whoever gets all four tokens to the Home first is the winner of the ludo game."
        }, {
            "gameId": 41,
            "Name": "MatchGood3D",
            "Url": "https://www.yiygames.com/gcenter/games/MatchGood3D/",
            "iconUrl": MatchGood3D,
            "dis": "*A 3D game where you find three identical objects and eliminate them. The stacks under each layer in the 3D screen are relatively easy to see, \n*but because it is 3D, the size of the objects will affect the stacking order. \n*How many levels can you pass successfully?"
        }, {
            "gameId": 42,
            "Name": "MineCartNoob",
            "Url": "https://www.yiygames.com/gcenter/games/MineCartNoob/",
            "iconUrl": MineCartNoob,
            "dis": "*Every time it is farther than the last time, noob sits in his car, with the power of the pig, pushes the car down from a high place, \n*accelerates, flips, sprints and sees how far you can drive in the end, \n*use the collection Get gold coins to upgrade various content"
        }, {
            "gameId": 43,
            "Name": "MinecraftRunner",
            "Url": "https://www.yiygames.com/gcenter/games/MinecraftRunner/",
            "iconUrl": MinecraftRunner,
            "dis": "*Noob's parkour adventure, slide left and right to operate noob's up and down travel position, \n*avoid obstacles and organs, as well as various hostile characters, \n*collect gold coins and props along the way to improve the character's ability"
        }, {
            "gameId": 44,
            "Name": "MotoManiac2",
            "Url": "https://www.yiygames.com/gcenter/games/MotoManiac2/",
            "iconUrl": MotoManiac2,
            "dis": "*Show off your awesome bike racing skills in this totally fun and competitive sports game,\n*Moto Bike Mania! There are many stages to ride through and each one offers a different challenge."
        }, {
            "gameId": 45,
            "Name": "MysticalMixing",
            "Url": "https://www.yiygames.com/gcenter/games/MysticalMixing/",
            "iconUrl": MysticalMixing,
            "dis": "*Simulated magic summoning, a realistic simulated summoning experience\n*choose different magic bottles, different materials, *put them into the magic pot for stirring, read spells, and create your own elves"
        }, {
            "gameId": 46,
            "Name": "PerfectPiano",
            "Url": "https://www.yiygames.com/gcenter/games/PerfectPiano/",
            "iconUrl": PerfectPiano,
            "dis": "*Perfect Piano with 68 different music sounds. \n*4 different instruments and 17 notes that you can play."
        }, {
            "gameId": 47,
            "Name": "PixieTwinesBirth",
            "Url": "https://www.yiygames.com/gcenter/games/PixieTwinesBirth/",
            "iconUrl": PixieTwinesBirth,
            "dis": "*You can make some fresh juice, give a tablet and other activities like listening to music for her baby and drinking a water, \n*Check her heartbeat using a stethoscope etc."
        }, {
            "gameId": 48,
            "Name": "PizzaNinjaMania",
            "Url": "https://www.yiygames.com/gcenter/games/PizzaNinjaMania/",
            "iconUrl": PizzaNinjaMania,
            "dis": "*Let's become a ninja, master, hero, spy, or legend of slicing dancing fruit - the best of hyper- casual hit fruit-slicing \n*mobile with-in fruit jump and dancing by the best EDM music!"
        }, {
            "gameId": 49,
            "Name": "Plumber",
            "Url": "https://www.yiygames.com/gcenter/games/Plumber/",
            "iconUrl": Plumber,
            "dis": "*Plumber is a free easy-to-use puzzle game with HD graphics in which your job is to connect all pipes to make a perfect pipe joints! \n*Simply turn the different pipe pieces by touching them and connect them together to form a complete pipe."
        }, {
            "gameId": 50,
            "Name": "RoadTurn",
            "Url": "https://www.yiygames.com/gcenter/games/RoadTurn/",
            "iconUrl": RoadTurn,
            "dis": "*Prevent traffic accidents by controlling when the cars can turn onto the highway.\n*Take care and look the road cars"
        }, {
            "gameId": 51,
            "Name": "RollThisBall",
            "Url": "https://www.yiygames.com/gcenter/games/RollThisBall/",
            "iconUrl": RollThisBall,
            "dis": "*To do so there's a board full of different tracks that you'll have to drag around to make the best possible track without any breaks along the way."
        }, {
            "gameId": 52,
            "Name": "RoomDesign",
            "Url": "https://www.yiygames.com/gcenter/games/RoomDesign/",
            "iconUrl": RoomDesign,
            "dis": "*Select the furniture you want in your very own room.\n*Decorate the room with different items to complement the furniture.\n*Position and resize the furnitures anywhere you want to create a unique style."
        }, {
            "gameId": 53,
            "Name": "SaveTheGoldFish",
            "Url": "https://www.yiygames.com/gcenter/games/SaveTheGoldFish/",
            "iconUrl": SaveTheGoldFish,
            "dis": "*Unlock the mechanism and rescue the goldfish. \n*Each level has some bolts. You have to plan your actions reasonably, use your ingenuity, find the correct unlocking method, \n*put the water in the position of the goldfish, and save the goldfish"
        }, {
            "gameId": 54,
            "Name": "SheepNSheep",
            "Url": "https://www.yiygames.com/gcenter/games/SheepNSheep/",
            "iconUrl": SheepNSheep,
            "dis": "*Three identical blocks can be eliminated, the rules are very simple, the first level is also very simple, *the second level is very difficult, super difficult, extremely difficult, so difficult to kill, \n*why don't you try it"
        }, {
            "gameId": 55,
            "Name": "SnakeAndLadders",
            "Url": "https://www.yiygames.com/gcenter/games/SnakeAndLadders/",
            "iconUrl": SnakeAndLadders,
            "dis": "*This Dice game is a simple race contest based on sheer luck and is popular with young kids.\n*Come and Try your lucky"
        }, {
            "gameId": 56,
            "Name": "SnakeBattle",
            "Url": "https://www.yiygames.com/gcenter/games/SnakeBattle/",
            "iconUrl": SnakeBattle,
            "dis": "*This snake game is an addictive new mobile game that combines the classic game of \nsnake with elements. \n*In this game you are a snake instead of a blob and the goal is become the biggest and longest snake reptile in the game."
        }, {
            "gameId": 57,
            "Name": "SpotTheDifference2",
            "Url": "https://www.yiygames.com/gcenter/games/SpotTheDifference2/",
            "iconUrl": SpotTheDifference2,
            "dis": "*A classic spot-the-differences game, the gameplay is simple and easy to understand, \n*look for the differences in the two pictures, find all the differences and you can pass the level, there are a large number of levels in the game, who are you with a sharp eye?v"
        }, {
            "gameId": 58,
            "Name": "StackSmash",
            "Url": "https://www.yiygames.com/gcenter/games/StackSmash/",
            "iconUrl": StackSmash,
            "dis": "*You can smash, bump and bounce through revolving helix platforms to reach the end.\n*How far can you go ?"
        }, {
            "gameId": 59,
            "Name": "SupermarketGirlCleanup",
            "Url": "https://www.yiygames.com/gcenter/games/SupermarketGirlCleanup/",
            "iconUrl": SupermarketGirlCleanup,
            "dis": "\"Free download “educational shopping game” for have fun. \nPlay this “superstore simulator game” and enjoy shipping exactly like a “shopping mall”.\""
        }, {
            "gameId": 60,
            "Name": "SuperSnipre",
            "Url": "https://www.yiygames.com/gcenter/games/SuperSnipre/",
            "iconUrl": SuperSnipre,
            "dis": "*A sniper shooting game. Each level has a number of targets that need to be dealt with. \n*At the same time, each level can use a variety of ways to achieve your sniper mission. \n*When you pass the level, your hit rate will be calculated, and you will become a sniper with a hundred shots."
        }, {
            "gameId": 61,
            "Name": "SwingManHook",
            "Url": "https://www.yiygames.com/gcenter/games/SwingManHook/",
            "iconUrl": SwingManHook,
            "dis": "*Use a stretch trampoline and drawstring to get the littlester past the finish line.\n* Tapping the screen can make the released drawstring hang on the hook, and the villain can use the amplitude of the left and right swing to pass the level faster"
        }, {
            "gameId": 62,
            "Name": "TrollThiefStickmanPuzzle",
            "Url": "https://www.yiygames.com/gcenter/games/TrollThiefStickmanPuzzle/",
            "iconUrl": TrollThiefStickmanPuzzle,
            "dis": "*Long Hand Prank Puzzle, as shown in the title \n*your hand can stretch very long, you can turn, \n*you can do many unexpected things and pranks, nonsensical and funny games"
        }, {
            "gameId": 63,
            "Name": "X2Blocks2048Number",
            "Url": "https://www.yiygames.com/gcenter/games/X2Blocks2048Number/",
            "iconUrl": X2Blocks2048Number,
            "dis": "*There are several tracks to choose from in the game. *Each time, some relatively small numbers will be randomly selected from each level of 2048 for you, and the selected location will be launched. \n*If the conditions are met, it can be eliminated. The goal is to get as high as possible."
        }, {
            "gameId": 64,
            "Name": "ZombieKillers",
            "Url": "https://www.yiygames.com/gcenter/games/ZombieKillers/",
            "iconUrl": ZombieKillers,
            "dis": "*Keep your finger on the trigger as you try to ensure your survival in a virus ravaged world. \n*Upgrade your skills as a survivor and zombie terminator in frontline fighting, enhance your arsenal of weapons."
        }]
    )
}

// 常玩游戏列表替换
export function recentGame (element) {
    let recentGame = JSON.parse(localStorage.getItem('recentGame'))
    let index = recentGame.findIndex((item) => item.filterStatus == 0)
    if (recentGame.findIndex((item) => item.gameId == element.gameId) != -1) {
        recentGame.map((item,index)=>{
            if (item.gameId == element.gameId) {
                recentGame.splice(index,1)
                item.filterStatus = 1
                recentGame.unshift(item)
            }
        })
        localStorage.setItem('recentGame',JSON.stringify(recentGame))
        return
    }
    if (index == -1) {
        recentGame.map((item)=>{
            item.filterStatus = 0
        })
        recentGame[0] = {...element,filterStatus: 1}
        localStorage.setItem('recentGame',JSON.stringify(recentGame))
    } else {
        let arr = []
        recentGame.map((item)=>{
            if (item.filterStatus == 0) {
                arr.push(item)
            }
        })
        recentGame.map((item,idx)=>{
            if (item.gameId == arr[arr.length - 1].gameId) {
                recentGame.splice(idx,1)
                recentGame.unshift({...element,filterStatus: 1})
            }
        })
        localStorage.setItem('recentGame',JSON.stringify(recentGame))
    }
}