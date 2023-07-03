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
import AdventureDrivers from '@/assets/AdventureDrivers/180x180.jpg';
import AmazingBubbleBreaker from '@/assets/AmazingBubbleBreaker/180x180.jpg';
import AvoidDying from '@/assets/AvoidDying/180x180.jpg';
import BasketBall from '@/assets/BasketBall/180x180.jpg';
import BearSUS from '@/assets/BearSUS/180x180.jpg';
import BigTowerTinySquare2 from '@/assets/BigTowerTinySquare2/180x180.jpg';
import BlockBlast from '@/assets/BlockBlast/180x180.jpg';
import BlumgiBall from '@/assets/BlumgiBall/180x180.jpg';
import BlumgiCastle from '@/assets/BlumgiCastle/180x180.jpg';
import BlumgiRocket from '@/assets/BlumgiRocket/180x180.jpg';
import BlumgiSlime from '@/assets/BlumgiSlime/180x180.jpg';
import BowlingStars from '@/assets/BowlingStars/180x180.jpg';
import BoxRob from '@/assets/BoxRob/180x180.jpg';
import BrainTestTrickyPuzzles from '@/assets/BrainTestTrickyPuzzles/180x180.jpg';
import Breakoid from '@/assets/Breakoid/180x180.jpg';
import BubbleCharms from '@/assets/BubbleCharms/180x180.jpg';
import BubbleCharmsXmas from '@/assets/BubbleCharmsXmas/180x180.jpg';
import BubblesCool from '@/assets/Bubbles Cool/180x180.jpg';
import BubbleShooterLak from '@/assets/BubbleShooterLak/180x180.jpg';
import BubbleShots from '@/assets/BubbleShots/180x180.jpg';
import BumperCarsSoccer from '@/assets/BumperCarsSoccer/180x180.jpg';
import CannonStrike from '@/assets/CannonStrike/180x180.jpg';
import CatsLoveCake2 from '@/assets/CatsLoveCake2/180x180.jpg';
import CoverOrange from '@/assets/CoverOrange/180x180.jpg';
import CrazyCars from '@/assets/CrazyCars/180x180.jpg';
import CrushIt from '@/assets/CrushIt/180x180.jpg';
import DAdish from '@/assets/DAdish/180x180.jpg';
import DetectiveLoupePuzzle from '@/assets/DetectiveLoupePuzzle/180x180.jpg';
import DotRush from '@/assets/DotRush/180x180.jpg';
import DreadheadParkour from '@/assets/DreadheadParkour/180x180.jpg';
import DriveMad from '@/assets/DriveMad/180x180.jpg';
import DungeonMiner from '@/assets/DungeonMiner/180x180.jpg';
import FlipperDunk from '@/assets/FlipperDunk/180x180.jpg';
import FootballPenaltyChampions from '@/assets/FootballPenaltyChampions/180x180.jpg';
import FootyZag from '@/assets/FootyZag/180x180.jpg';
import ForgottenHill from '@/assets/ForgottenHill/180x180.jpg';
import FreeKickShooter from '@/assets/FreeKickShooter/180x180.jpg';
import FruitNinja from '@/assets/FruitNinja/180x180.jpg';
import FunWaterSorting from '@/assets/FunWaterSorting/180x180.jpg';
import GameOfFarmers from '@/assets/GameOfFarmers/180x180.jpg';
import GoldDigger2 from '@/assets/GoldDigger2/180x180.jpg';
import GolfChampions from '@/assets/GolfChampions/180x180.jpg';
import HeroRescue from '@/assets/HeroRescue/180x180.jpg';
import IdleAnts2 from '@/assets/IdleAnts2/180x180.jpg';
import ItIsStoryTime from '@/assets/ItIsStoryTime/180x180.jpg';
import JamesGun from '@/assets/JamesGun/180x180.jpg';
import JigsawPhotoPuzzleChristmas from '@/assets/JigsawPhotoPuzzleChristmas/180x180.jpg';
import JoyRider from '@/assets/JoyRider/180x180.jpg';
import LikeAKing from '@/assets/LikeAKing/180x180.jpg';
import MagicBridge from '@/assets/MagicBridge/180x180.jpg';
import MazePathOfLight from '@/assets/MazePathOfLight/180x180.jpg';
import MiniBattlesSurvivor from '@/assets/MiniBattlesSurvivor/180x180.jpg';
import MiniTrain from '@/assets/MiniTrain/180x180.jpg';
import MonkeyMart from '@/assets/MonkeyMart/180x180.jpg';
import MotoX3M from '@/assets/MotoX3M/180x180.jpg';
import NoetMaster from '@/assets/NoetMaster/180x180.jpg';
import NoobDrive from '@/assets/NoobDrive/180x180.jpg';
import OneButtonBounce from '@/assets/OneButtonBounce/180x180.jpg';
import PenaltyShooters2 from '@/assets/PenaltyShooters2/180x180.jpg';
import PenaltySuperstar from '@/assets/PenaltySuperstar/180x180.jpg';
import PingPong from '@/assets/PingPong/180x180.jpg';
import PowerBadminton from '@/assets/PowerBadminton/180x180.jpg';
import Rhomb from '@/assets/Rhomb/180x180.jpg';
import SlingWorldCup from '@/assets/SlingWorldCup/180x180.jpg';
import SniperCode2 from '@/assets/SniperCode2/180x180.jpg';
import SoccerAllStars from '@/assets/SoccerAllStars/180x180.jpg';
import SpaceBubbles from '@/assets/SpaceBubbles/180x180.jpg';
import StickDefenders from '@/assets/StickDefenders/180x180.jpg';
import StickmanClimb2 from '@/assets/StickmanClimb2/180x180.jpg';
import StickmanHook from '@/assets/StickmanHook/180x180.jpg';
import StickmanWar from '@/assets/StickmanWar/180x180.jpg';
import StickMerge from '@/assets/StickMerge/180x180.jpg';
import StupidZombies2 from '@/assets/StupidZombies2/180x180.jpg';
import SuperBubbleShooter from '@/assets/SuperBubbleShooter/180x180.jpg';
import SuperFowlst from '@/assets/SuperFowlst/180x180.jpg';
import SuperFowlst2 from '@/assets/SuperFowlst2/180x180.jpg';
import SuperNova from '@/assets/SuperNova/180x180.jpg';
import Swingers from '@/assets/Swingers/180x180.jpg';
import Swingo from '@/assets/Swingo/180x180.jpg';
import TetraBlocks from '@/assets/TetraBlocks/180x180.jpg';
import ThumbFighterChristmas from '@/assets/ThumbFighterChristmas/180x180.jpg';
import TinyTownRacing from '@/assets/TinyTownRacing/180x180.jpg';
import TurnRight from '@/assets/TurnRight/180x180.jpg';
import WhoIsLying from '@/assets/WhoIsLying/180x180.jpg';
import YokaiDungeon from '@/assets/YokaiDungeon/180x180.jpg';
import ZenBlocks from '@/assets/ZenBlocks/180x180.jpg';

export function getJson() {
    return (
        [{
            "gameId": 1,
            "Name": "Adventure Drivers",
            "Url": "https://www.gugoplay.com/gcenter/url/AdventureDrivers/",
            "iconUrl": AdventureDrivers,
            "desc": "Go on an exciting adventure and compete in thrilling car races for fame, glory and treasure! Explore 30 obstacle courses on a mysterious island and try to be the first to cross the finish line. Race against opponents, perform cool stunts, and collect coins, treasure chests, and power-ups that can give you a decisive edge over your competition.",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 1,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,RACING",
            "VideoUrl": "https://www.gugoplay.com/g_videos/CrazyCars.mp4",
            "ImgSize": 1
        }, {
            "gameId": 2,
            "Name": "Amazing Bubble Breaker",
            "Url": "https://www.gugoplay.com/gcenter/url/AmazingBubbleBreaker/",
            "iconUrl": AmazingBubbleBreaker,
            "desc": "Are you looking for a challenge? marvelous! In addition to the easy mode, Amazing Bubble Breaker has medium and hard modes for anyone who wants to test their skills.Four amazing bubble themes and two awesome backgrounds with awesome animations. Compare your score with others thanks to online player rankings.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL",
            "VideoUrl": "https://www.gugoplay.com/g_videos/DriveMad.mp4",
            "ImgSize": 1
        }, {
            "gameId": 3,
            "Name": "Avoid Dying",
            "Url": "https://www.gugoplay.com/gcenter/url/AvoidDying/",
            "iconUrl": AvoidDying,
            "desc": "With bow and arrow you have to hit the target. Don't get frustrated when little stickman dreams of avoiding death.",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "SHOOTING,CASUAL",
            "VideoUrl": "https://www.gugoplay.com/g_videos/MotoX3M.mp4",
            "ImgSize": 1
        }, {
            "gameId": 4,
            "Name": "Basket Ball",
            "Url": "https://www.gugoplay.com/gcenter/url/BasketBall/",
            "iconUrl": BasketBall,
            "desc": "Basketball Battle has powerful yet simple controls that give you total control over your players on the basketball court. Use feints and clever footwork to drive to the rim and score, breaking opponents' angles and leaving them behind for big rewards. Score three barrels in a row to catch fire and take your game to the next level",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,ACTION",
            "VideoUrl": "https://www.gugoplay.com/g_videos/StickmanHook.mp4",
            "ImgSize": 2
        }, {
            "gameId": 5,
            "Name": "Bear SUS",
            "Url": "https://www.gugoplay.com/gcenter/url/BearSUS/",
            "iconUrl": BearSUS,
            "desc": "Bear Sus is an action game where you play as a brawler bear going against other bears in various fighting arenas. Fight with ease thanks to the classic, unbearably simple two-button control scheme! Choose from 8 playable wrestling bears with mix-and-matching moves, so you can come up with your own unique style. Sharpen your claws and jump into the Arcade Mode where you play against 5 grizzly bears and unlock new fighters and color pawlettes. ",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "ACTION",
            "VideoUrl": "https://www.gugoplay.com/g_videos/CrazyCars.mp4",
            "ImgSize": 2
        }, {
            "gameId": 6,
            "Name": "Big Tower Tiny Square 2",
            "Url": "https://www.gugoplay.com/gcenter/url/BigTowerTinySquare2/",
            "iconUrl": BigTowerTinySquare2,
            "desc": "Big Tower Tiny Square 2 is a puzzle platform game where you jump and pass dangerous obstacles and traps. Our square character is back for more adventure in the pursuit of finding the famous pineapple! Move up the carefully-designed tower while dodging spikes, traps, and other hazards. Touch every checkpoint in order to save your progress in this relentless multi-level platform. ",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION",
            "VideoUrl": "https://www.gugoplay.com/g_videos/DriveMad.mp4",
            "ImgSize": 2
        }, {
            "gameId": 7,
            "Name": "Block Blast",
            "Url": "https://www.gugoplay.com/gcenter/url/BlockBlast/",
            "iconUrl": BlockBlast,
            "desc": "Welcome to Block Blast! This is a sliding block puzzle game that is fun, addictive and easy to play.\nThe game is both fun and strategic. Unique gameplay and endless fun, take a break anytime!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE",
            "VideoUrl": "https://www.gugoplay.com/g_videos/MotoX3M.mp4",
            "ImgSize": 2
        }, {
            "gameId": 8,
            "Name": "Blumgi Ball",
            "Url": "https://www.gugoplay.com/gcenter/url/BlumgiBall/",
            "iconUrl": BlumgiBall,
            "desc": "You aim is to simply get the ball through the hoop like the good old classic basketball. Blumgi Ball is a sports game that combines the platform and puzzle genres into one fun package. You do this using a slingshot system where you pull the indicator in accordance with the intensity at which you want to throw the ball, and release it to throw. Get the ball through the net using a slingshot system where you pull the indicator in accordance with the intensity at which you want to throw the ball, and release it to throw.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 1,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,GIRLS,ACTION",
            "VideoUrl": "https://www.gugoplay.com/g_videos/StickmanHook.mp4",
            "ImgSize": 2
        }, {
            "gameId": 9,
            "Name": "Blumgi Castle",
            "Url": "https://www.gugoplay.com/gcenter/url/BlumgiCastle/",
            "iconUrl": BlumgiCastle,
            "desc": "Blumgi Castle is a skill game where you equip various explosives and special weapons in order to sink your enemies into the water. Blow your foes up, or demolish the ground that they are standing on! Use the indicator around your character to aim, hold down the action button to set intensity, and release to rain bombs upon monsters. You will finish a level successfully if every creature in the level is defeated. You will unlock a brand new cool character every few levels, so make sure you play as every single one of them! Make sure to check the special weapons at the top - as there are really entertaining ones like bigger explosions, buzzsaw, dynamites, laser beams, and even the famous teleporting basketball from its sibling game Blumgi Ball! There is no one right way to clear a level, so feel free to create destruction and enjoy this addictive skill game to the fullest!",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "SHOOTING,ACTION",
            "VideoUrl": "https://www.gugoplay.com/g_videos/CrazyCars.mp4",
            "ImgSize": 2
        }, {
            "gameId": 10,
            "Name": "Blumgi Rocket",
            "Url": "https://www.gugoplay.com/gcenter/url/BlumgiRocket/",
            "iconUrl": BlumgiRocket,
            "desc": "Blumgi Rocket is a platform game where you drive a rocket-fast car in colorful levels filled with obstacles. Go up hills, down slopes, through tunnels, mountains, and more in absolute full speed! Experience the thrill of the cool slow motion animation as you fire your rockets. The longer you hold down the rocket button, the more powerfully you will be propelled. When you're mid-air, perform stunts to finish the level quicker and impress your fans. Unlock new vehicle skins by progressing through the game and finishing every level. How quickly can you finish Blumgi Rocket and master this game?",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,ACTION",
            "VideoUrl": "https://www.gugoplay.com/g_videos/DriveMad.mp4",
            "ImgSize": 2
        }, {
            "gameId": 11,
            "Name": "Blumgi Slime",
            "Url": "https://www.gugoplay.com/gcenter/url/BlumgiSlime/",
            "iconUrl": BlumgiSlime,
            "desc": "Blumgi Slime is an arcade game that will put your timing and aiming skills to the test by jumping to the finish line. You control a cute bouncy character that can only move around by jumping. Hold down the action button to channel your strength - the longer you hold it down, the higher and more intensely you will jump. Pass over various types of obstacles to touch the checkered platform. Each stage will introduce something fun and quirky in this game from new colors to obstacle types. You'll appreciate the perfect blend of challenge and colorful atmosphere when playing Blumgi Slime. Can you finish all of the levels?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,ACTION",
            "VideoUrl": "https://www.gugoplay.com/g_videos/MotoX3M.mp4",
            "ImgSize": 2
        }, {
            "gameId": 12,
            "Name": "Bowling Stars",
            "Url": "https://www.gugoplay.com/gcenter/url/BowlingStars/",
            "iconUrl": BowlingStars,
            "desc": "Bowling Stars is a realistic bowling game with stunning graphics, smooth controls and customizable items. Choose your favorite ball among more than a dozen styles and hit the bowling alley! You need to aim very carefully, considering the speed at which you throw is directly related to how hard you flick the ball. Go ahead and practice your real-life bowling skills in Bowling Stars! How many strikes were you able to score this time?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "BALL,GIRLS,CASUAL,3D",
            "VideoUrl": "https://www.gugoplay.com/g_videos/StickmanHook.mp4",
            "ImgSize": 2
        }, {
            "gameId": 13,
            "Name": "Box Rob",
            "Url": "https://www.gugoplay.com/gcenter/url/BoxRob/",
            "iconUrl": BoxRob,
            "desc": "In the puzzle platformer BoxRob, you can load goods onto your truck with the most adaptable and mobile forklift ever! You must collect each box and place it in the correct slot in order to mark it as completed. The stages become harder and harder as the game progresses. At first, you just run around collecting boxes in simple levels. To crack the code and complete the level, perform special actions or follow the sequence. Compare your high scores with your friends and share BoxRob 2 with them. Don't forget to play BoxRob, the first game in the series!",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 1,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,PUZZLE,ACTION",
            "VideoUrl": "https://www.gugoplay.com/g_videos/CrazyCars.mp4",
            "ImgSize": 2
        }, {
            "gameId": 14,
            "Name": "Brain Test Tricky Puzzles",
            "Url": "https://www.gugoplay.com/gcenter/url/BrainTestTrickyPuzzles/",
            "iconUrl": BrainTestTrickyPuzzles,
            "desc": "Brain Test  brings a host of new characters, new customization mechanics, and most importantly, a brand new brain teaser. We're going \"back to basics\" by updating the original Brain Test 1 formula in tons of tricky ways. Brain Test is an addictive free tricky puzzle game with a series of tricky brain teasers. Different riddles and tricky tests will challenge your mind. Join the Tricky Club, unlock all its members, and help them overcome tricky situations.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE",
            "VideoUrl": "https://www.gugoplay.com/g_videos/DriveMad.mp4",
            "ImgSize": 2
        }, {
            "gameId": 15,
            "Name": "Breakoid",
            "Url": "https://www.gugoplay.com/gcenter/url/Breakoid/",
            "iconUrl": Breakoid,
            "desc": "Breakoid is a new take on the classic block-breaker / Arkanoid game genre with amazing graphics, visuals and sound! Try your hand at the normal mode and see how many levels you can break your way through or test out the endless mode and use special abilities to make your way to the top! If you get too good for the original levels, try out the level editor and create your ultimate block-breaking extravaganza!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,GIRLS,CASUAL",
            "VideoUrl": "https://www.gugoplay.com/g_videos/MotoX3M.mp4",
            "ImgSize": 2
        }, {
            "gameId": 16,
            "Name": "Bubble Charms",
            "Url": "https://www.gugoplay.com/gcenter/url/BubbleCharms/",
            "iconUrl": BubbleCharms,
            "desc": "Create and burst groups of matching bubbles! This colorful bubble shooter features four-leaf clovers, hearts, music notes, and lightning bolts. Your mission is to clear all of the pieces as fast as possible. Don't let the Bubble Charms reach your shooter!",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "SHOOTING,GIRLS,CASUAL"
        }, {
            "gameId": 17,
            "Name": "Bubble Charms Xmas",
            "Url": "https://www.gugoplay.com/gcenter/url/BubbleCharmsXmas/",
            "iconUrl": BubbleCharmsXmas,
            "desc": "Burst the holiday bubbles! In this festive arcade game, you will help Santa's elf clear the snowy sky. Aim for a cluster of matching pieces, and pop the group to score. There are yellow jingle bells, green Christmas trees, and purple candy canes. You can use a color bomb to transform a whole group. In Bubble Charms Xmas, you will level up after every 500 points. Launch a fireball to destroy every bubble in your path. In order to eliminate the stone blockers, you must remove all of the surrounding pieces!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 18,
            "Name": "Bubbles Cool",
            "Url": "https://www.gugoplay.com/gcenter/url/BubblesCool/",
            "iconUrl": BubblesCool,
            "desc": "Burst the holiday bubbles! In this festive arcade game, you will help Santa's elf clear the snowy sky. Aim for a cluster of matching pieces, and pop the group to score. There are yellow jingle bells, green Christmas trees, and purple candy canes. You can use a color bomb to transform a whole group. In Bubble Charms Xmas, you will level up after every 500 points. Launch a fireball to destroy every bubble in your path. In order to eliminate the stone blockers, you must remove all of the surrounding pieces!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 19,
            "Name": "Bubble Shooter Lak",
            "Url": "https://www.gugoplay.com/gcenter/url/BubbleShooterLak/",
            "iconUrl": BubbleShooterLak,
            "desc": "Pop bubbles until they're all gone! This ball game is the original bubble shooter. Your goal is to clear every bubble from the board. You can earn maximum points by shooting groups of identical bubbles. Try clearing the entire board in just a few shots.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 20,
            "Name": "Bubble Shots",
            "Url": "https://www.gugoplay.com/gcenter/url/BubbleShots/",
            "iconUrl": BubbleShots,
            "desc": "Bubble Shots is a classic arcade skill game where the objective is to shoot and make disappear as many bubbles as possible. Aim and shoot bubbles, and create groups of more than 3 of the same color to burst them! Use amazing power-ups such as special bubbles and bombs to clear the stage faster. And remember: time is running!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 21,
            "Name": "Bumper Cars Soccer",
            "Url": "https://www.gugoplay.com/gcenter/url/BumperCarsSoccer/",
            "iconUrl": BumperCarsSoccer,
            "desc": "Bumper Cars Soccer is a sports and car game created by Avix Games. Are you ready for a new type of soccer played in cars? Choose your vehicle, drive around a football pitch and try to score goals against your opponent. Combine your driving skills with your agility to be the champion in this game. You can play against your friends locally or match against challenging bots. Whether you're rocket fast or slow behind the wheel, you have a shot at this league!",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "CAR,BALL,ACTION,3D"
        }, {
            "gameId": 22,
            "Name": "Cannon　Strike",
            "Url": "https://www.gugoplay.com/gcenter/url/CannonStrike/",
            "iconUrl": CannonStrike,
            "desc": "Your objective is to fill the bucket below with the colorful balls in your arsenal. Aim smart, shoot the cannon and fill all the buckets with colors. The balls you can't get into the bucket will deduct points from your final score. Go ahead and share Cannon Strike with your friends to compare your high scores!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,PUZZLE,ACTION"
        }, {
            "gameId": 23,
            "Name": "Cats Love Cake 2",
            "Url": "https://www.gugoplay.com/gcenter/url/CatsLoveCake2/",
            "iconUrl": CatsLoveCake2,
            "desc": " You play as a bouncy cat character and you have to bounce your way through the leve to reach the delicious cake ! Beware of the spikes and traps on the way ! Unlock more and more playable animals as you complete levels. If you fail a couple times, the level will show you the perfect route to take. Can you finish all levels and unlock all playable characters?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,ACTION"
        }, {
            "gameId": 24,
            "Name": "Cover Orange",
            "Url": "https://www.gugoplay.com/gcenter/url/CoverOrange/",
            "iconUrl": CoverOrange,
            "desc": "Cover Orange is a puzzle platform game where you must rearrange objects to cover our orange friends and protect from the impending acid rain. A deadly, genetically modified rain cloud of fruit-dissolving vapour is heading for the orange capital of the world. You must drag every object at your disposal and drop them in a way that forms a shelter over the oranges. Use your wits to create barriers that will save the maximum amount of oranges.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,PUZZLE"
        }, {
            "gameId": 25,
            "Name": "Crazy Cars",
            "Url": "https://www.gugoplay.com/gcenter/url/CrazyCars/",
            "iconUrl": CrazyCars,
            "desc": "Crazy Cars is a 3D car game that takes place in a vibrant location full of interesting tracks, entertaining obstacles, and rewarding challenges. Pick a fast car and speed up on exciting ramps, climb Mount Egg, go full throttle on race tracks, perform stunts at drag races, and explore many other fun areas and activities for you to take part in. There are obstacle courses that could even fling your car across the map! Make sure to collect every star, wrench, and other collectible you come across in order to spend them on shiny new vehicles. There are over 17 unique cars you can drive! The game even lets you play against your friend with split screen functionality. Are you ready to sate your need for speed with Crazy Cars?",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 1,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,ACTION,RACING"
        }, {
            "gameId": 26,
            "Name": "Crush It",
            "Url": "https://www.gugoplay.com/gcenter/url/CrushIt/",
            "iconUrl": CrushIt,
            "desc": "Crush It! is an arcade game created by Sakkat Studio. Start your own juice factory where you need to crush fruits the old-fashioned way: Using your fists! Punch various types of fruits and treasure chests on the conveyor belt to make money. Avoid punching bombs, as they will cost you a life. The money you've earned can be spent on new types of fruits, and even on cool accessories for your hand. Go ahead and give it a play. You will go bananas over Crush It!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 27,
            "Name": "DAdish",
            "Url": "https://www.gugoplay.com/gcenter/url/DAdish/",
            "iconUrl": DAdish,
            "desc": "Dadish is a platform game where you're a radish daddy who's in charge of finding his kids who have gone missing from the vegetable patch. Explore an exciting world, face off with fast-food themed foes, and reunite Dadish with his missing children in this challenging platforming adventure. Collect stars, unlock secrets, enjoy the playful soundtrack, get to know unforgettable characters, play more than 50 exciting levels, and much more! Are you ready for the radventure of your life?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,ACTION"
        }, {
            "gameId": 28,
            "Name": "Detective Loupe Puzzle",
            "Url": "https://www.gugoplay.com/gcenter/url/DetectiveLoupePuzzle/",
            "iconUrl": DetectiveLoupePuzzle,
            "desc": "Detective Loupe Puzzle is a thinking point-and-click game where you are a detective whose job is to solve various cases. Be a resilient investigator and start investigating crime scenes to find possible clues. Use hints or the magnifying glass to focus on a certain area and spot signs of suspicious activity. Look for clues, interview potential suspects, and pick up evidence to solve a different crime every level. There are many exciting different cases to solve with unique characters, stories, and events. People need you Mr. Detective. Can you help save innocent lives and shed light to the truth?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,PUZZLE"
        }, {
            "gameId": 29,
            "Name": "Dot Rush",
            "Url": "https://www.gugoplay.com/gcenter/url/DotRush/",
            "iconUrl": DotRush,
            "desc": "Dot Rush is a skill game developed by QKY Games. In this game, you take control of the red and blue spinning balls and try to merge them with the balls shooting at them at full speed. Test your reflexes by spinning them at the right moment, otherwise you will lose points. Go ahead and try to beat your own high score in this amazing skill game. Dot Rush is much more fun when you share the game with your friends and compare your scores.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,CASUAL,ACTION"
        }, {
            "gameId": 30,
            "Name": "Dreadhead Parkour",
            "Url": "https://www.gugoplay.com/gcenter/url/DreadheadParkour/",
            "iconUrl": DreadheadParkour,
            "desc": "Dreadhead Parkour is a parkour game where you play as the flashy Dreadhead and get to slide, backflip, frontflip and move around each level to reach the end! Collect all the coins to get new skins and max your score on each level! There are plenty of bombs, spikes, huge jumps and tons more to hop over or slide under to keep your eyes open and your head up so as not to get hit! How hardcore is your parkour...?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 1,
            "3D": 0,
            "Type": "ACTION,PARKOUR"
        }, {
            "gameId": 31,
            "Name": "Drive Mad",
            "Url": "https://www.gugoplay.com/gcenter/url/DriveMad/",
            "iconUrl": DriveMad,
            "desc": "Drive Mad is a car game where you drive on a track filled with obstacles. Your aim is to reach the finish line in one piece. You have to balance your speed so your car doesn't flip over. This is harder than it sounds, as there are many thrilling and creative stunts and obstacles for you to enjoy. Do you have what it takes to finish every level in Drive Mad?",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 1,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "CAR,CASUAL,RACING,PARKOUR,3D"
        }, {
            "gameId": 32,
            "Name": "Dungeon　Miner",
            "Url": "https://www.gugoplay.com/gcenter/url/DungeonMiner/",
            "iconUrl": DungeonMiner,
            "desc": "Your late uncle has left you a mine to teach you all about hard work and earn your fortune. Now grab your pickaxe and delve deep into all the areas on your piece of land. Craft new weapons and tools, explore dungeons to find valuables and blueprints, fight creatures, upgrade your gear and embark on an exciting adventure. Dungeon Miner will never get boring as it's laden with rich content and many surprises for you to explore.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,PARKOUR"
        }, {
            "gameId": 33,
            "Name": "Flipper Dunk",
            "Url": "https://www.gugoplay.com/gcenter/url/FlipperDunk/",
            "iconUrl": FlipperDunk,
            "desc": "Flipper Dunk is a skill game developed by QKY Games. In this game, you'll use your flippers to send the orange ball flying and rack up as many points as possible. Your goal is to not let the ball get past your flippers, and try to score as many points as you can before the time runs out. This game is much more fun when you share the game with your friends and compare your scores!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,CASUAL,ACTION,PARKOUR"
        }, {
            "gameId": 34,
            "Name": "Football Penalty Champions",
            "Url": "https://www.gugoplay.com/gcenter/url/FootballPenaltyChampions/",
            "iconUrl": FootballPenaltyChampions,
            "desc": "Football Penalty Champions is a cool HTML5 game that is playable both on your desktop and on your mobile phone!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL"
        }, {
            "gameId": 35,
            "Name": "Footyzag",
            "Url": "https://www.gugoplay.com/gcenter/url/FootyZag/",
            "iconUrl": FootyZag,
            "desc": "FootyZag is a soccer game where you have to build up your attack from the back and pass to your teammates to get near the opponents goal. When you have reached the strike you can take a shot on goal to score.Adjust the power and the effect just in the right way to curl the ball around the keeper and make sure to go to the next round. Pass your way through all the other teams and become the ultimate FootyZag player! ",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 1,
            "3D": 0,
            "Type": "BALL,ACTION,PARKOUR"
        }, {
            "gameId": 36,
            "Name": "Forgotten Hill",
            "Url": "https://www.gugoplay.com/gcenter/url/ForgottenHill/",
            "iconUrl": ForgottenHill,
            "desc": "Forgotten Hill: Surgery is a scary point and click game. It's the third chapter of the mysteries of Forgotten Hill series. After the events of Forgotten Hill: Fall and Forgotten Hill: Puppeteer, you woke up in a creepy room inside a surgery clinic. Find all the clues and try to escape the surgery clinic. Can you unravel the mystery?  ",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,PUZZLE"
        }, {
            "gameId": 37,
            "Name": "Free Kick Shooter",
            "Url": "https://www.gugoplay.com/gcenter/url/FreeKickShooter/",
            "iconUrl": FreeKickShooter,
            "desc": "Free Kick Shooter is a soccer game in which the player has to score as many goals as possible. Show your soccer skills and put yourself to the test in this challenging game. Shoot as many free kicks as you can before time runs out, get points based on your precision, and beat your own record! Do you dare to show who is the best on the field?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,ACTION"
        }, {
            "gameId": 38,
            "Name": "Fruit Ninja",
            "Url": "https://www.gugoplay.com/gcenter/url/FruitNinja/",
            "iconUrl": FruitNinja,
            "desc": "Fruit Ninja is an arcade game where you have to swipe and slash your way through all kinds of fruit, from pears and apples, to coconuts and bananas. Aim for the highest score by slicing multiple fruits at once and build up your combo to surpass everyone else! You can also get huge scores from critically striking the fruit so be strategic with your swiping. However, beware of the bombs! Hitting one of them will end your run. Fruit Ninja, the classic fruit destroying swiping adventure is here!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,ACTION"
        }, {
            "gameId": 39,
            "Name": "Fun Water Sorting",
            "Url": "https://www.gugoplay.com/gcenter/url/FunWaterSorting/",
            "iconUrl": FunWaterSorting,
            "desc": "Fun Water Sorting is a puzzle game in which your objective is to sort liquids by color by mixing them properly. Start by moving the fluids into the right tubes until there is only one color per tube. Think logically and find your own way to sort the colorful water. If you get stuck or make mistakes, you can always get a hint or undo your last movement! Share Fun Water Sorting with your friends and learn who can finish the game the fastest!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 40,
            "Name": "Game Of Farmers",
            "Url": "https://www.gugoplay.com/gcenter/url/GameOfFarmers/",
            "iconUrl": GameOfFarmers,
            "desc": "Leave the chaotic city life behind and start building your dream farm. Unlock various types of plants, vegetables, fruits, and animals and make money with their help even when you're offline. Sell your crops and organic products to buy new types of seeds, even magical ones. This is your first step to becoming the world's most successful farmer. You know what they say: When life gives you lemons, plant their seeds and watch 'em grow!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 41,
            "Name": "Gold Digger 2",
            "Url": "https://www.gugoplay.com/gcenter/url/GoldDigger2/",
            "iconUrl": GoldDigger2,
            "desc": "You are a miner with a shovel and you are discovering the underground world. Shovelling your way through mud, earth and rock, you can collect money to improve your skills and buy better tools. The game is an ongoing adventure in which you can improve your character step by step.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 42,
            "Name": "Golf Champions",
            "Url": "https://www.gugoplay.com/gcenter/url/GolfChampions/",
            "iconUrl": GolfChampions,
            "desc": "Golf Champions is a golf tournament game like no other! Your goal is to get the ball in the hole as few strokes as possible. Hit the ball with just the right amount of force. This is a game where both playing too safe and too risky will have consequences. Aim to get the highest score you can get & brag to all your friends about your digital golfing skills!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "BALL,3D"
        }, {
            "gameId": 43,
            "Name": "Hero Rescue",
            "Url": "https://www.gugoplay.com/gcenter/url/HeroRescue/",
            "iconUrl": HeroRescue,
            "desc": "In this game, you are in charge of controlling a rescue helicopter. Click or tap on the screen to lift the rescue chopper up. Pilot the chopper skillfully and rescue civilians from a wildfire. You get more stars if you don't leave anyone behind. Can you finish Hero Rescue without any casualties?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 44,
            "Name": "Idle Ants 2",
            "Url": "https://www.gugoplay.com/gcenter/url/IdleAnts2/",
            "iconUrl": IdleAnts2,
            "desc": "Idle Ants 2 is a simulation game where you command an army of hungry ants collect food. Help them break apart and carry various snacks, fruits, vegetables, meat, and even inedible objects back into the burrow underground. Click, tap or repeatedly press space to make your ants work more efficiently. Upgrade your colony using the three buttons at the bottom of the screen. Boost \"Speed\" to make your colony work faster, \"Workers\" to recruit a new ant, and \"Strength\" to make your ants carry larger pieces. The more you play, the cooler maps and objects you will encounter. Beach, park, classroom, kitchen, carnival, picnic blanket, city square, and more! Can you and your ants visit all of the places Idle Ants has to offer?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "CASUAL,3D"
        }, {
            "gameId": 45,
            "Name": "It Is Story Time",
            "Url": "https://www.gugoplay.com/gcenter/url/ItIsStoryTime/",
            "iconUrl": ItIsStoryTime,
            "desc": "Do you want to put your brainpower to the test? It's Story Time features various mini-games full of challenging puzzles you can solve by thinking outside the box. Find hidden objects, drag and drop multiple objects to mix them, remove parts of objects, open closets and drawers, and much more. The game will present you with a list of tasks, which you need to complete by manipulating the objects you see in the game. Feel free to use the hint button if you're stuck. This game will boost your focus and attention while offering suitable entertainment for the whole family!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 46,
            "Name": "James　Gun",
            "Url": "https://www.gugoplay.com/gcenter/url/JamesGun/",
            "iconUrl": JamesGun,
            "desc": "You're busted and you need to jump out of your lover’s window, now! Try to land on your sports car without falling to your certain death. Hold onto the ledges to slow down your fall, grab onto another ledge and let go when it’s safe to do so. You’ll soon find out that your relationship gravity is far more dangerous than the one that’s making you sneak out of this apartment.",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "SHOOTING,ACTION"
        }, {
            "gameId": 47,
            "Name": "Jigsaw Photo Puzzle Christmas",
            "Url": "https://www.gugoplay.com/gcenter/url/JigsawPhotoPuzzleChristmas/",
            "iconUrl": JigsawPhotoPuzzleChristmas,
            "desc": "Jigsaw Photo Puzzle: Christmas is a jigsaw puzzle game where you must drag puzzle pieces around and place them in the right spot to reveal a stunning, cool image related to the Christmas holiday. If you have all pieces in the right spot, you complete the level! There are 3 difficulty levels to choose from: easy, normal and hard, each adding more and more pieces to the puzzle. Get under the blanket with a cup of hot chocolate and play this relaxing puzzle experience in the most wonderful time of the year!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 48,
            "Name": "Joy Rider",
            "Url": "https://www.gugoplay.com/gcenter/url/JoyRider/",
            "iconUrl": JoyRider,
            "desc": " Show off your riding and stunt skills on your fancy bike across canyons, forests, and even outer space! Blaze through various levels filled with simple or deceptive obstacles that you have to avoid. Show that you're a pro by doing flips, backflips, or any other cool move you can think of. Then complete your swag by unlocking colorful new headpieces, costumes, and motorcycles. To maximize your success, pay attention to the tasks such as completing a level without crashing once. If you're stuck in a level, you can use the skip button that appears at the top after crashing several times. Go ahead and give Joyrider a try!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 1,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "ACTION,RACING"
        }, {
            "gameId": 49,
            "Name": "LikeAKing",
            "Url": "https://www.gugoplay.com/gcenter/url/LikeAKing/",
            "iconUrl": LikeAKing,
            "desc": "You are a king who must battle other kings using and combining the units in your collection of cards. Each card is a unique unit you can use on the battlefield. Some of them attack the enemy, but some of them mine gold and even lay out traps for the enemy unit. Complete quests, build a strong deck, and most importantly, strategize wisely to be the one true king that stands!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "ACTION,3D"
        }, {
            "gameId": 50,
            "Name": "Magic Bridge",
            "Url": "https://www.gugoplay.com/gcenter/url/MagicBridge/",
            "iconUrl": MagicBridge,
            "desc": "Take control of one of the many cat characters and try to stay alive on a bridge that keeps moving upward. The bridge will point downward depending on where you stand, so you have to be quick on your paws to keep a steady balance. Avoid all enemies, pick up all the coins and unlock more characters who have different strengths. Jump on the bridge and experience this endless fun!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,ACTION"
        }, {
            "gameId": 51,
            "Name": "Maze：Path Of Light",
            "Url": "https://www.gugoplay.com/gcenter/url/MazePathOfLight/",
            "iconUrl": MazePathOfLight,
            "desc": "Maze: Path of Light is a thinking puzzle game where you go through a maze as a beam of light. Your objective is to reach the end of each maze to get to the next level. You move around by picking a direction at each crossroad, sending the beam of light to follow the path. Think of which path is the best to take before choosing ! Are you ready to relax with this satisfying labyrinth game ?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "CASUAL,PUZZLE,3D"
        }, {
            "gameId": 52,
            "Name": "Mini Battles Survivor",
            "Url": "https://www.gugoplay.com/gcenter/url/MiniBattlesSurvivor/",
            "iconUrl": MiniBattlesSurvivor,
            "desc": "Minibattles Survivor is an arcade game that contains 65 easy-to-play casual mini games! Say goodbye to stress with these simple yet challenging party games in Minibattles Survivor. Climb the winner's ladder that consists of 20 rounds, and beat all of the games to prove to your friends that you are the true survivor! Represent your country in the global leaderboards, unlock Pro Mode to practice and get better, replay your favorite games, and most importantly, have fun!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "CASUAL,ACTION,3D"
        }, {
            "gameId": 53,
            "Name": "Mini Train",
            "Url": "https://www.gugoplay.com/gcenter/url/MiniTrain/",
            "iconUrl": MiniTrain,
            "desc": "Mini Train is a puzzle game where you drag blocks and shapes that are scattered around the platform in order to make way for the oncoming train. These pieces are the necessary pieces that form the train track, and only you can help the train arrive its destination. Use the mouse or long-press with your finger to grab a block and move it wherever you want by dragging it across the screen. ",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,PUZZLE"
        }, {
            "gameId": 54,
            "Name": "Monkey Mart",
            "Url": "https://www.gugoplay.com/gcenter/url/MonkeyMart/",
            "iconUrl": MonkeyMart,
            "desc": "Monkey Mart is an idle/management game where you control a cute monkey character who is in charge of a supermarket. Plant fruits, harvest produce, move around from station to station to fill the stands with various food items. Sell bananas, corn, eggs, peanuts, coffee beans, chocolate, wheat etc. Your customers will pick them up and wait for you at the cashier desk - simply stand next to the cash register to collect your money. ",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL"
        }, {
            "gameId": 55,
            "Name": "Moto X3M",
            "Url": "https://www.gugoplay.com/gcenter/url/MotoX3M/",
            "iconUrl": MotoX3M,
            "desc": "Moto X3M is an online bike racing game. The goal is to race your motorbike through levels with massive, moving obstacles that you have to jump over or avoid. You can flip in the air to decrease your final time and earn a perfect score. Know when to stop, or crash and respawn. Try to complete the levels in as little time as possible.",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 1,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,ACTION,RACING"
        }, {
            "gameId": 56,
            "Name": "Noet Master",
            "Url": "https://www.gugoplay.com/gcenter/url/NoetMaster/",
            "iconUrl": NoetMaster,
            "desc": "Find two identical tiles and connect them with three or less straight lines! Connecting tiles open up new options to further clear the level. Try to beat all the new levels. Got stuck? You can use a hint on the top of the page to get you going again. Will you become the true Onet Master?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 57,
            "Name": "Noob Drive",
            "Url": "https://www.gugoplay.com/gcenter/url/NoobDrive/",
            "iconUrl": NoobDrive,
            "desc": "Noob Drive is a fast-paced car game with blocky aesthetics. Your objective is to drive your to the destination point as fast as you can. Go full speed while using the steering buttons to balance yourself on air, and always try to land on your wheels! Time your stunts carefully so you don't lose speed, otherwise you can't fly over the dangerous cliffs and treacherous gaps that could destroy your vehicle. ",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 1,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,RACING"
        }, {
            "gameId": 58,
            "Name": "One Button Bounce",
            "Url": "https://www.gugoplay.com/gcenter/url/OneButtonBounce/",
            "iconUrl": OneButtonBounce,
            "desc": "One Button Bounce is a puzzle game where you control a character who is constantly running back and forth on a platform. Unable to stop, your job is to time the character's jumps right so that your curse turns into a way to solve the puzzle. Use the W, space bar or up arrow to jump and bounce off of walls. Hop from one platform to the other until you get to the portal to take you to the next one. There are many creative obstacles standing in the way of the portal, so you will discover many surprising and satisfying puzzles to solve. Don't worry if you get stuck - you can always use a hint to show you how to pass the level.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 59,
            "Name": "Penalty Shooters 2",
            "Url": "https://www.gugoplay.com/gcenter/url/PenaltyShooters2/",
            "iconUrl": PenaltyShooters2,
            "desc": "Penalty Shooters 2 is a soccer game where you score goals to win the soccer tournament! Penalty Shooters 2 features hundreds of teams from around the globe. Choose a fantasy league with clubs from England, France, or North America. Each round consists of 5 turns. Score and make saves in this fun penalty simulator game!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "BALL,ACTION,3D"
        }, {
            "gameId": 60,
            "Name": "Penalty Superstar",
            "Url": "https://www.gugoplay.com/gcenter/url/PenaltySuperstar/",
            "iconUrl": PenaltySuperstar,
            "desc": "Here you can play Penalty Superstar. Penalty Superstar is one of our selected Sports Games.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "BALL,ACTION,3D"
        }, {
            "gameId": 61,
            "Name": "Ping Pong",
            "Url": "https://www.gugoplay.com/gcenter/url/PingPong/",
            "iconUrl": PingPong,
            "desc": "Grab one of the digital paddles and enjoy an exciting Ping Pong experience. In this simple yet challenging sports game, you need to hit the ball to your opponent's side of the table. First player to reach 10 wins the match! So be quick on your feet and confuse your opponent with tricky shoots. You can even control the speed of your hits by paying attention to the intensity of your flick. Go ahead and beat the clever AI opponents this game has!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,ACTION"
        }, {
            "gameId": 62,
            "Name": "Power Badminton",
            "Url": "https://www.gugoplay.com/gcenter/url/PowerBadminton/",
            "iconUrl": PowerBadminton,
            "desc": "Power Badminton is a single player sports game, where the player must earn more points than his opponent to win the match. Choose a character, hop on the court and demonstrate your bandmintong skills by defeating all of the other contestants!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,ACTION"
        }, {
            "gameId": 63,
            "Name": "Rhomb",
            "Url": "https://www.gugoplay.com/gcenter/url/Rhomb/",
            "iconUrl": Rhomb,
            "desc": "In this relaxing minimalistic puzzle experience, you need to untie a knot of rhombuses following the right order. Examine each line and its connection to determine which rhombus you need to release first, and avoid colliding with other rhombuses. A level is completed when you release all of the rhombuses successfully. If you're stuck, use the hint feature by tapping the three dots button that's above the puzzle. Can you finish all the levels in Rhomb? Go ahead and give it a try!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 64,
            "Name": "Sling World Cup",
            "Url": "https://www.gugoplay.com/gcenter/url/SlingWorldCup/",
            "iconUrl": SlingWorldCup,
            "desc": "Choose your dream team and get into the fast-paced football action where you control all three teammates. You can score goals with just a swipe of your finger or mouse. You are in charge of both the offense and the defense in this game, so you have to be quick to gain the upper hand. There are 18 teams and 7 rounds to reach the finals. So go ahead and win them all so everyone can see that you have what it takes to be the champion!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,ACTION"
        }, {
            "gameId": 65,
            "Name": "Sniper Code 2",
            "Url": "https://www.gugoplay.com/gcenter/url/SniperCode2/",
            "iconUrl": SniperCode2,
            "desc": "Sniper Code 2 is a puzzle game where you shoot enemies and complete various tasks from a distance using your sniper rifle. There are many challenging levels with creative missions where you won't be just shooting people, but you will be taking part in tactical missions. Sometimes only shooting the lamps and objects around the environment is enough to solve the situation without bloodshed. Also, use your bullets creatively in order not to run out of ammo in the middle of the mission. Your accuracy matters a great deal in this game, so does your stealth ability. Don't forget to spend the money you earned in the store to improve your skills. Do you have what it takes to finish every mission in Sniper Code 2?",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "SHOOTING"
        }, {
            "gameId": 66,
            "Name": "Soccer All Stars",
            "Url": "https://www.gugoplay.com/gcenter/url/SoccerAllStars/",
            "iconUrl": SoccerAllStars,
            "desc": "Use your big head to knock the ball into the goal! Heads Arena: Soccer All Stars lets you play for 13 world-class teams with outstanding soccer heads. You can compete in solo, 1-on-1, or 2-on-2 match-ups. In this head soccer game, you can choose your favorite football club, and try to win the tournament!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,ACTION"
        }, {
            "gameId": 67,
            "Name": "Space Bubbles",
            "Url": "https://www.gugoplay.com/gcenter/url/SpaceBubbles/",
            "iconUrl": SpaceBubbles,
            "desc": "Space Bubbles is a high quality bubble shooting game based on the golden oldie bubble-shooters. This game is set in a space environment and it contains 80 levels with increasing difficulties, so don't worry about finishing this game any time soon!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 68,
            "Name": "Stick Defenders",
            "Url": "https://www.gugoplay.com/gcenter/url/StickDefenders/",
            "iconUrl": StickDefenders,
            "desc": "Stick Defenders is an action and merging game where you combine stickman units into stronger ones, so that they can protect your base from phases of enemies. Merge identical gunmen, enhance your offensive abilities, improve your walls, and much more. There are fun side activities like \"spin the wheel\" where you can get surprising items to help you become stronger and unlock new possibilities. Make sure to use your skills on the oncoming horde of enemies as soon as their cooldown's over, so you don't get overwhelmed by them. How long can you hold down the fort in Stick Defenders?",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "SHOOTING,CASUAL"
        }, {
            "gameId": 69,
            "Name": "Stickman Climb 2",
            "Url": "https://www.gugoplay.com/gcenter/url/StickmanClimb2/",
            "iconUrl": StickmanClimb2,
            "desc": "Stickman Climb 2 is a stickman platform game where you must balance yourself using a pickaxe and reach the flag at the end of the level. There are dangerous traps and spikes on your way, so be careful and pay attention to checkpoints. You can customize your stickman avatar by unlocking new colors, vessels, and weapons. You can play Stickman Climb 2 by yourself or race against your friend locally!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 70,
            "Name": "Stickman Hook",
            "Url": "https://www.gugoplay.com/gcenter/url/StickmanHook/",
            "iconUrl": StickmanHook,
            "desc": "Stickman Hook is a skill game where you play as a swinging stickman through hundreds of challenging levels. This fun, colorful stickman game offers over 100 challenging levels. Unlock unique characters along the way to switch things up while you swing. Pay attention to the angle and direction of your swing to make it to the finish line! Can you control your swing?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 71,
            "Name": "Stickman War",
            "Url": "https://www.gugoplay.com/gcenter/url/StickmanWar/",
            "iconUrl": StickmanWar,
            "desc": "Come battle the mighty army of Stickmen! In this stickman game you’ll be challenged level after level to shoot down as many stickmen as you can. But be careful, they’ll come at you from all sides. Kill them all and you’ll pass to the next level!",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "SHOOTING,3D"
        }, {
            "gameId": 72,
            "Name": "Stick Merge",
            "Url": "https://www.gugoplay.com/gcenter/url/StickMerge/",
            "iconUrl": StickMerge,
            "desc": "Your aim is to combine various types of weapons to create more powerful guns, and ultimately use them on the moving stick figures in the shooting range. Prepare your arsenal, upgrade your pistol, explore all the power-ups and become the best shooter in town. How powerful can you get in Stick Merge? Stick around to find out!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL"
        }, {
            "gameId": 73,
            "Name": "Stupid Zombies 2",
            "Url": "https://www.gugoplay.com/gcenter/url/StupidZombies2/",
            "iconUrl": StupidZombies2,
            "desc": "Stupid Zombies 2 is a puzzle game that lets you fight against hordes of zombies by shooting them with as few bullets as possible. Your bullets will go through zombies and hit every one of them on the way. Your bullets also bounce back, so we advise you to think outside the box with your shots and be creative. Work on your angles to score the highest number of zombie kills. Are you ready to hit two birds with one stone… or two zombies with one gun… or something like that…?",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "SHOOTING,CASUAL,PUZZLE"
        }, {
            "gameId": 74,
            "Name": "Super Bubble Shooter",
            "Url": "https://www.gugoplay.com/gcenter/url/SuperBubbleShooter/",
            "iconUrl": SuperBubbleShooter,
            "desc": "SUPERHOT Prototype is a first-person shooter game where time moves once you move. Shoot and move around to see your bullets fly off. Stand still and your bullets will stop moving too. This counts for enemy fire as well! Move around and shoot your enemies. Stand still and look for the best ways to move and dodge incoming fire. Your gun only has a couple bullets, so make sure to pick up another one to continue. The game features 5 cool levels. Can you defeat the final boss in SUPERHOT Prototype? ",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 75,
            "Name": "Super Fowlst",
            "Url": "https://www.gugoplay.com/gcenter/url/SuperFowlst/",
            "iconUrl": SuperFowlst,
            "desc": "Super Fowlst is a skill-based action game where you swipe-attack enemies to save the world. Do you miss Fowlst after finishing Super Fowlst? Well, Fowlst returns in a new adventure that’s all about squashing bad guys with a swipe. The demons are meaner, the bosses are bigger and there’s still only one chicken that can stop them! There are sprawling, procedurally-generated stages to conquer, huge bosses to defeat, and all manner of gadgets and gizmos to interact with. Trade your treasure for cool powers like egg bombs and rockets so you can really show those demons who’s boss! Super Fowlst 2 has everything: Portals! Cannons! Buzz saws! Spiky things! Fire!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 76,
            "Name": "Super Fowlst 2",
            "Url": "https://www.gugoplay.com/gcenter/url/SuperFowlst2/",
            "iconUrl": SuperFowlst2,
            "desc": "Super Fowlst 2 is a skill-based action game where you swipe-attack enemies to save the world. Do you miss Fowlst after finishing Super Fowlst? Well, Fowlst returns in a new adventure that’s all about squashing bad guys with a swipe. The demons are meaner, the bosses are bigger and there’s still only one chicken that can stop them! There are sprawling, procedurally-generated stages to conquer, huge bosses to defeat, and all manner of gadgets and gizmos to interact with. Trade your treasure for cool powers like egg bombs and rockets so you can really show those demons who’s boss! Super Fowlst 2 has everything: Portals! Cannons! Buzz saws! Spiky things! Fire!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 77,
            "Name": "Super Nova",
            "Url": "https://www.gugoplay.com/gcenter/url/SuperNova/",
            "iconUrl": SuperNova,
            "desc": "Hey there Super Shopper! Race your shopping cart through the grocery store to collect the products on your shopping list. Navigate between the aisles and dodge the promotional stands in order to finish your groceries in time. Finish all the levels or try to fill up your cart in the endless mode of this fast paced grocery game hit!",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 1,
            "3D": 1,
            "Type": "CAR,ACTION,PARKOUR,3D"
        }, {
            "gameId": 78,
            "Name": "Swingers",
            "Url": "https://www.gugoplay.com/gcenter/url/Swingers/",
            "iconUrl": Swingers,
            "desc": "Swingers is a skill game where you have to cross the finish line by swinging through the level. As soon as you hit the borders of the level, or the blocks that are thrown in your way, it's a game-over. Make sure you can quickly adapt to moving blocks, and make your way around them. Swingers builds up in difficulty, and tests your skills. Be sure to collect some coins along the way, as there are a ton of unlockable characters.\nAre you skilled enough to get through all the levels? Swing your way and see how far you get in Swingers!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 1,
            "3D": 0,
            "Type": "CASUAL,ACTION,PARKOUR"
        }, {
            "gameId": 79,
            "Name": "Swingo",
            "Url": "https://www.gugoplay.com/gcenter/url/Swingo/",
            "iconUrl": Swingo,
            "desc": "Swingo is an arcade game that combines the platform and action genres into one fun package. You control a cute bouncy character that can only move around using a grappling hook. Fire the hook and pull yourself in the direction you want to go ! Your character will swing around and bounce around until you reach the fruit at the end of each level. Every successfully finished level awards you some points which add up to unlock cool new characters. The first one is a frog, will you be able to unlock all animals? You will love exploring the vibrant and creative levels full of surprises in Swingo!",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "SHOOTING,GIRLS,ACTION"
        }, {
            "gameId": 80,
            "Name": "Tetra Blocks",
            "Url": "https://www.gugoplay.com/gcenter/url/TetraBlocks/",
            "iconUrl": TetraBlocks,
            "desc": " Breathing new life into the famous arcade classic, this game improves the nostalgic experience by introducing an original game mechanic where matching stars gives you an extra boost of points. Its groovy neon colors create a mesmerizing atmosphere that induces you in a game-flow mental state where time fades away. Block out some time and try out Tetra Blocks!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 81,
            "Name": "Thumb Fighter Christmas",
            "Url": "https://www.gugoplay.com/gcenter/url/ThumbFighterChristmas/",
            "iconUrl": ThumbFighterChristmas,
            "desc": "Get those thumbs ready! The classic Thumb Fighter game is here and ready for the holiday season. Battle it out in classic thumb war fashion against your friends or play against the computer for ultimate Christmas bragging rights.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 82,
            "Name": "Tiny Town Racing",
            "Url": "https://www.gugoplay.com/gcenter/url/TinyTownRacing/",
            "iconUrl": TinyTownRacing,
            "desc": "Tiny Fishing is a fishing game where you have to upgrade your gear to get bigger fish! Each fish you catch will earn you some money, which you can then spend on better equipment to fish deeper and deeper. The deeper you go, the more rare the fish become. Can you catch the biggest fish?",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 1,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "CAR,RACING,3D"
        }, {
            "gameId": 83,
            "Name": "Turn Right",
            "Url": "https://www.gugoplay.com/gcenter/url/TurnRight/",
            "iconUrl": TurnRight,
            "desc": "Take control of one of the many cars and try to complete as many laps as possible on an oval-shaped racetrack. You can only turn right in this game and can't reposition the car again by turning left, so you have to be careful with the precision of your drift. Are you ready for the best minimalistic car game on the web?",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,ACTION"
        }, {
            "gameId": 84,
            "Name": "Who Is Lying",
            "Url": "https://www.gugoplay.com/gcenter/url/WhoIsLying/",
            "iconUrl": WhoIsLying,
            "desc": "This is a fun riddle game that presents you with over a hundred tricky scenarios and you have to think outside the box to solve them. Every level brings something new to the table so you will never get bored. There are choice-based scenarios such as \"Who is an imposter?\" or \"Who is lying?\", but there are also riddles where you must find the hidden object, and much more. You can use the help system if you get stuck and even skip levels. Who is having fun? You, if you play this game and share it with your friends.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,PUZZLE"
        }, {
            "gameId": 85,
            "Name": "Yokai Dungeon",
            "Url": "https://www.gugoplay.com/gcenter/url/YokaiDungeon/",
            "iconUrl": YokaiDungeon,
            "desc": "Explore an ever-changing beautiful land inspired by Japanese folklore. Help our friend Tanuki (and 19 additional characters) clear randomly generated dungeons of treasures and foes. Smash movable objects against your enemies and collect loot. Use the cash you've earned to unlock more characters and explore their unique story and abilities. Yokai Dungeon contains six different areas that are divided into separate rooms. Explore these rooms to find special surprises such as a singular shop room and a boss room! You will find many surprises in this game. Can you unlock every character in Yokai Dungeon?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,PUZZLE"
        }, {
            "gameId": 86,
            "Name": "Zen Blocks",
            "Url": "https://www.gugoplay.com/gcenter/url/ZenBlocks/",
            "iconUrl": ZenBlocks,
            "desc": "Zen Blocks is a puzzle game where you stack blocks of different materials and shapes to create beautiful shapes. Each level contains a set of blocks that must be stacked in a way that it will stay still for three seconds. There is no right way to stack these blocks, so feel free to play it safe or take risks if you're feeling adventurous. Use the rules of physics to your advantage and don't let any of the pieces fall into the water, as it will cost you a life. But don't worry, you can always replay it and try different techniques! Like its name, Zen Blocks offers a relaxing, stress-free gaming experience.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "PUZZLE,3D"
        },{
            "gameId": 87,
            "Name": "Adventure Drivers",
            "Url": "https://www.gugoplay.com/gcenter/url/AdventureDrivers/",
            "iconUrl": AdventureDrivers,
            "desc": "Go on an exciting adventure and compete in thrilling car races for fame, glory and treasure! Explore 30 obstacle courses on a mysterious island and try to be the first to cross the finish line. Race against opponents, perform cool stunts, and collect coins, treasure chests, and power-ups that can give you a decisive edge over your competition.",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 1,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,RACING"
        }, {
            "gameId": 88,
            "Name": "Amazing Bubble Breaker",
            "Url": "https://www.gugoplay.com/gcenter/url/AmazingBubbleBreaker/",
            "iconUrl": AmazingBubbleBreaker,
            "desc": "Are you looking for a challenge? marvelous! In addition to the easy mode, Amazing Bubble Breaker has medium and hard modes for anyone who wants to test their skills.Four amazing bubble themes and two awesome backgrounds with awesome animations. Compare your score with others thanks to online player rankings.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL"
        }, {
            "gameId": 89,
            "Name": "Avoid Dying",
            "Url": "https://www.gugoplay.com/gcenter/url/AvoidDying/",
            "iconUrl": AvoidDying,
            "desc": "With bow and arrow you have to hit the target. Don't get frustrated when little stickman dreams of avoiding death.",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "SHOOTING,CASUAL"
        }, {
            "gameId": 90,
            "Name": "Basket Ball",
            "Url": "https://www.gugoplay.com/gcenter/url/BasketBall/",
            "iconUrl": BasketBall,
            "desc": "Basketball Battle has powerful yet simple controls that give you total control over your players on the basketball court. Use feints and clever footwork to drive to the rim and score, breaking opponents' angles and leaving them behind for big rewards. Score three barrels in a row to catch fire and take your game to the next level",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,ACTION"
        }, {
            "gameId": 91,
            "Name": "Bear SUS",
            "Url": "https://www.gugoplay.com/gcenter/url/BearSUS/",
            "iconUrl": BearSUS,
            "desc": "Bear Sus is an action game where you play as a brawler bear going against other bears in various fighting arenas. Fight with ease thanks to the classic, unbearably simple two-button control scheme! Choose from 8 playable wrestling bears with mix-and-matching moves, so you can come up with your own unique style. Sharpen your claws and jump into the Arcade Mode where you play against 5 grizzly bears and unlock new fighters and color pawlettes. ",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "ACTION"
        }, {
            "gameId": 92,
            "Name": "Big Tower Tiny Square 2",
            "Url": "https://www.gugoplay.com/gcenter/url/BigTowerTinySquare2/",
            "iconUrl": BigTowerTinySquare2,
            "desc": "Big Tower Tiny Square 2 is a puzzle platform game where you jump and pass dangerous obstacles and traps. Our square character is back for more adventure in the pursuit of finding the famous pineapple! Move up the carefully-designed tower while dodging spikes, traps, and other hazards. Touch every checkpoint in order to save your progress in this relentless multi-level platform. ",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CASUAL,ACTION"
        }, {
            "gameId": 93,
            "Name": "Block Blast",
            "Url": "https://www.gugoplay.com/gcenter/url/BlockBlast/",
            "iconUrl": BlockBlast,
            "desc": "Welcome to Block Blast! This is a sliding block puzzle game that is fun, addictive and easy to play.\nThe game is both fun and strategic. Unique gameplay and endless fun, take a break anytime!",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
        }, {
            "gameId": 94,
            "Name": "Blumgi Ball",
            "Url": "https://www.gugoplay.com/gcenter/url/BlumgiBall/",
            "iconUrl": BlumgiBall,
            "desc": "You aim is to simply get the ball through the hoop like the good old classic basketball. Blumgi Ball is a sports game that combines the platform and puzzle genres into one fun package. You do this using a slingshot system where you pull the indicator in accordance with the intensity at which you want to throw the ball, and release it to throw. Get the ball through the net using a slingshot system where you pull the indicator in accordance with the intensity at which you want to throw the ball, and release it to throw.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 1,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "BALL,GIRLS,ACTION"
        }, {
            "gameId": 95,
            "Name": "Blumgi Castle",
            "Url": "https://www.gugoplay.com/gcenter/url/BlumgiCastle/",
            "iconUrl": BlumgiCastle,
            "desc": "Blumgi Castle is a skill game where you equip various explosives and special weapons in order to sink your enemies into the water. Blow your foes up, or demolish the ground that they are standing on! Use the indicator around your character to aim, hold down the action button to set intensity, and release to rain bombs upon monsters. You will finish a level successfully if every creature in the level is defeated. You will unlock a brand new cool character every few levels, so make sure you play as every single one of them! Make sure to check the special weapons at the top - as there are really entertaining ones like bigger explosions, buzzsaw, dynamites, laser beams, and even the famous teleporting basketball from its sibling game Blumgi Ball! There is no one right way to clear a level, so feel free to create destruction and enjoy this addictive skill game to the fullest!",
            "SHOOTING": 1,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "SHOOTING,ACTION"
        }, {
            "gameId": 96,
            "Name": "Blumgi Rocket",
            "Url": "https://www.gugoplay.com/gcenter/url/BlumgiRocket/",
            "iconUrl": BlumgiRocket,
            "desc": "Blumgi Rocket is a platform game where you drive a rocket-fast car in colorful levels filled with obstacles. Go up hills, down slopes, through tunnels, mountains, and more in absolute full speed! Experience the thrill of the cool slow motion animation as you fire your rockets. The longer you hold down the rocket button, the more powerfully you will be propelled. When you're mid-air, perform stunts to finish the level quicker and impress your fans. Unlock new vehicle skins by progressing through the game and finishing every level. How quickly can you finish Blumgi Rocket and master this game?",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,ACTION"
        }, {
            "gameId": 97,
            "Name": "Blumgi Slime",
            "Url": "https://www.gugoplay.com/gcenter/url/BlumgiSlime/",
            "iconUrl": BlumgiSlime,
            "desc": "Blumgi Slime is an arcade game that will put your timing and aiming skills to the test by jumping to the finish line. You control a cute bouncy character that can only move around by jumping. Hold down the action button to channel your strength - the longer you hold it down, the higher and more intensely you will jump. Pass over various types of obstacles to touch the checkered platform. Each stage will introduce something fun and quirky in this game from new colors to obstacle types. You'll appreciate the perfect blend of challenge and colorful atmosphere when playing Blumgi Slime. Can you finish all of the levels?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,ACTION"
        }, {
            "gameId": 98,
            "Name": "Bowling Stars",
            "Url": "https://www.gugoplay.com/gcenter/url/BowlingStars/",
            "iconUrl": BowlingStars,
            "desc": "Bowling Stars is a realistic bowling game with stunning graphics, smooth controls and customizable items. Choose your favorite ball among more than a dozen styles and hit the bowling alley! You need to aim very carefully, considering the speed at which you throw is directly related to how hard you flick the ball. Go ahead and practice your real-life bowling skills in Bowling Stars! How many strikes were you able to score this time?",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 1,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 0,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 1,
            "Type": "BALL,GIRLS,CASUAL,3D"
        }, {
            "gameId": 99,
            "Name": "Box Rob",
            "Url": "https://www.gugoplay.com/gcenter/url/BoxRob/",
            "iconUrl": BoxRob,
            "desc": "In the puzzle platformer BoxRob, you can load goods onto your truck with the most adaptable and mobile forklift ever! You must collect each box and place it in the correct slot in order to mark it as completed. The stages become harder and harder as the game progresses. At first, you just run around collecting boxes in simple levels. To crack the code and complete the level, perform special actions or follow the sequence. Compare your high scores with your friends and share BoxRob 2 with them. Don't forget to play BoxRob, the first game in the series!",
            "SHOOTING": 0,
            "CAR": 1,
            "BALL": 0,
            "GIRLS": 0,
            "CASUAL": 0,
            "PUZZLE": 1,
            "ACTION": 1,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "CAR,PUZZLE,ACTION"
        }, {
            "gameId": 100,
            "Name": "Brain Test Tricky Puzzles",
            "Url": "https://www.gugoplay.com/gcenter/url/BrainTestTrickyPuzzles/",
            "iconUrl": BrainTestTrickyPuzzles,
            "desc": "Brain Test  brings a host of new characters, new customization mechanics, and most importantly, a brand new brain teaser. We're going \"back to basics\" by updating the original Brain Test 1 formula in tons of tricky ways. Brain Test is an addictive free tricky puzzle game with a series of tricky brain teasers. Different riddles and tricky tests will challenge your mind. Join the Tricky Club, unlock all its members, and help them overcome tricky situations.",
            "SHOOTING": 0,
            "CAR": 0,
            "BALL": 0,
            "GIRLS": 1,
            "CASUAL": 1,
            "PUZZLE": 1,
            "ACTION": 0,
            "RACING": 0,
            "PARKOUR": 0,
            "3D": 0,
            "Type": "GIRLS,CASUAL,PUZZLE"
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