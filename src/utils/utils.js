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

// 获取游戏类型
import shooting from '@/assets/01shooting.jpg';
import car from '@/assets/02car.jpg';
import ball from '@/assets/03ball.jpg';
import girls from '@/assets/04girls.jpg';
import casual from '@/assets/05casu.jpg';
import puzzle from '@/assets/06puzzle.jpg';
import action from '@/assets/07action.jpg';
import racing from '@/assets/08racing.jpg';
import parkour from '@/assets/09parkour.jpg';
import sand from '@/assets/093d.jpg';
import adventure from '@/assets/Adventure.jpg';
import arcade from '@/assets/Arcade.jpg';
import sports from '@/assets/sports.jpg';

export function getGameTypeList() {
    let game_type = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    game_type && game_type.map(() => {
        game_type[0].iconUrl = shooting
        game_type[0].type = "SHOOTING"
        game_type[1].iconUrl = car
        game_type[1].type = "CAR"
        game_type[2].iconUrl = ball
        game_type[2].type = "BALL"
        game_type[3].iconUrl = girls
        game_type[3].type = "GIRLS"
        game_type[4].iconUrl = casual
        game_type[4].type = "CASUAL"
        game_type[5].iconUrl = puzzle
        game_type[5].type = "PUZZLE"
        game_type[6].iconUrl = action
        game_type[6].type = "ACTION"
        game_type[7].iconUrl = racing
        game_type[7].type = "RACING"
        game_type[8].iconUrl = parkour
        game_type[8].type = "PARKOUR"
        game_type[9].iconUrl = sand
        game_type[9].type = "3D"
        game_type[10].iconUrl = adventure
        game_type[10].type = "ADVENTURE"
        game_type[11].iconUrl = arcade
        game_type[11].type = "ARCADE"
        game_type[12].iconUrl = sports
        game_type[12].type = "SPORTS"
    })
    return game_type
}

// 常玩游戏列表替换
export function recentGame(element) {
    let recentGame = JSON.parse(localStorage.getItem('recentGame'))
    let index = recentGame.findIndex((item) => item.filterStatus == 0)
    if (recentGame.findIndex((item) => item.gameId == element.gameId) != -1) {
        recentGame.map((item, index) => {
            if (item.gameId == element.gameId) {
                recentGame.splice(index, 1)
                item.filterStatus = 1
                recentGame.unshift(item)
            }
        })
        localStorage.setItem('recentGame', JSON.stringify(recentGame))
        return
    }
    if (index == -1) {
        recentGame.map((item) => {
            item.filterStatus = 0
        })
        recentGame[0] = {...element, filterStatus: 1}
        localStorage.setItem('recentGame', JSON.stringify(recentGame))
    } else {
        let arr = []
        recentGame.map((item) => {
            if (item.filterStatus == 0) {
                arr.push(item)
            }
        })
        recentGame.map((item, idx) => {
            if (item.gameId == arr[arr.length - 1].gameId) {
                recentGame.splice(idx, 1)
                recentGame.unshift({...element, filterStatus: 1})
            }
        })
        localStorage.setItem('recentGame', JSON.stringify(recentGame))
    }
}