import request from '@/utils/request.js'
import { getJson } from '/public/gameList'
console.info(process.env.NODE_ENV,"=====");
console.log(window.location,"=====");
// 域名
let origin = process.env.NODE_ENV === 'production' ? window.location.origin.split('.')[1] : 'gugoplay'

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

// 常玩游戏列表替换
export function recentGame(element) {
    let recentGame = JSON.parse(localStorage.getItem('recentGame')) || []
    if (recentGame.length) {
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
}

// 获取游戏类型
import shooting from '@/assets/01shooting.png';
import car from '@/assets/02car.png';
import ball from '@/assets/03ball.png';
import girls from '@/assets/04girls.png';
import casual from '@/assets/05casu.png';
import puzzle from '@/assets/06puzzle.png';
import action from '@/assets/07action.png';
import racing from '@/assets/08racing.png';
import parkour from '@/assets/09parkour.png';
import sand from '@/assets/093d.png';
import adventure from '@/assets/Adventure.png';
import arcade from '@/assets/Arcade.png';
import sports from '@/assets/sports.png';

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

// 获取指定地址栏参数
export function getUrlParams(key) {
    let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    let r = window.location.hash.split('?')[1] && window.location.hash.split('?')[1].match(reg);
    if (r != null)
        return decodeURIComponent(r[2]);
    return null;
}

// 埋点相关
let beylaInstance = null
try {
    if (window.Beyla) {
        beylaInstance = new window.Beyla({
            appId: "gamerplay.bio", // 待确定
            strict: false,
        });
    }
} catch (e) {
    console.log(e);
}
// 页面进入埋点
let startTime = null

export function pageInitLog(portal) {
    const pveCur = getUrlParams('channel') ? `/${origin}_${portal}_${getUrlParams('channel')}/GameMain` : `/${origin}_${portal}/GameMain`;
    startTime = new Date().getTime();
    try {
        beylaInstance.report({
            pveCur: pveCur,
            eventName: "in_page",
        });
    } catch (e) {
        console.log(e, "in_page_error");
    }
}

// 页面销毁埋点
export function pageOutLog(portal) {
    try {
        let endTime = new Date().getTime();
        let stayTime = endTime - startTime;
        beylaInstance.report({
            pveCur: getUrlParams('channel') ? `/${origin}_${portal}_${getUrlParams('channel')}/GameMain` : `/${origin}_${portal}/GameMain`,
            eventName: "out_page",
            extras: JSON.stringify({
                time: stayTime,
            }),
        });
    } catch (e) {
        console.log(e);
    }
}

// 点击游戏icon埋点
export function clickGameLog(portal, item) {
    const {gameId, Name} = item || {};
    const pveCur = getUrlParams('channel') ? `/${origin}_${portal}_${getUrlParams('channel')}/GameMain/Main/game` : `/${origin}_${portal}/GameMain/Main/game`;
    try {
        beylaInstance.report({
            pveCur: pveCur,
            eventName: "click_ve",
            extras: JSON.stringify({
                game_id: gameId,
                game_name: Name,
                game_url: `${window.location.href}`,
            }),
        });
    } catch (e) {
        console.log(e);
    }
}

export function showGameLog(portal, item) {
    const {gameId, Name} = item || {};
    const pveCur = getUrlParams('channel') ? `/${origin}_${portal}_${getUrlParams('channel')}/GameMain/Main/game` : `/${origin}_${portal}/GameMain/Main/game`;
    return JSON.stringify({
        isOutside: true,
        params: {
            pveCur: pveCur,
            eventName: "show_ve",
            extras: JSON.stringify({
                game_id: gameId,
                game_name: Name,
                game_url: `${window.location.href}`
            })
        }
    })
}

// 曝光
export function Observer(portal) {
    let observer = new IntersectionObserver((entries) => {
        //entries 为 IntersectionObserverEntry对像数组
        entries.forEach((item) => {
            //item 为 IntersectionObserverEntry对像
            // isIntersecting是一个Boolean值，判断目标元素当前是否可见
            if (item.isIntersecting) {
                //div 可见时 进行相关操作
                getJson() && getJson().map((items) => {
                    if (items.Name == item.target.innerText) {
                        // console.log(items);
                        const {isOutside, params} = JSON.parse(showGameLog(portal, items)) || {}
                        if (isOutside) {
                            if (window.Beyla) {
                                let beylaInstance = new window.Beyla({
                                    appId: "gamerplay.bio", // 待确定
                                    strict: false,
                                });
                                beylaInstance.report(params)
                            }
                        }
                    }
                })
                // console.log(item.target.innerText);
                observer.unobserve(item.target); //停止监听该div DOM节点
            }
        })
    })
    return observer
}

// 点击搜索埋点
export function clickSearchLog(portal) {
    const pveCur = getUrlParams('channel') ? `/${origin}_${portal}_${getUrlParams('channel')}/GameMain/Main/search` : `/${origin}_${portal}/GameMain/Main/search`;
    try {
        beylaInstance.report({
            pveCur: pveCur,
            eventName: "click_ve",
        });
    } catch (e) {
        console.log(e);
    }
}

// 点击搜索埋点
export function clickClassificationLog(portal, type) {
    const pveCur = getUrlParams('channel') ? `/${origin}_${portal}_${getUrlParams('channel')}/GameMain/Main/category` : `/${origin}_${portal}/GameMain/Main/category`;
    try {
        beylaInstance.report({
            pveCur: pveCur,
            eventName: "click_ve",
            extras: JSON.stringify({
                name: type
            })
        });
    } catch (e) {
        console.log(e);
    }
}

export function showClassificationLog(portal, type) {
    const pveCur = getUrlParams('channel') ? `/${origin}_${portal}_${getUrlParams('channel')}/GameMain/Main/category` : `/${origin}_${portal}/GameMain/Main/category`;
    return JSON.stringify({
        isOutside: true,
        params: {
            pveCur: pveCur,
            eventName: "show_ve",
            extras: JSON.stringify({
                name: type
            })
        }
    })
}

// 曝光
export function ClassificationObserver(portal) {
    let observer = new IntersectionObserver((entries) => {
        //entries 为 IntersectionObserverEntry对像数组
        entries.forEach((item) => {
            //item 为 IntersectionObserverEntry对像
            // isIntersecting是一个Boolean值，判断目标元素当前是否可见
            if (item.isIntersecting) {
                //div 可见时 进行相关操作
                getGameTypeList() && getGameTypeList().map((items) => {
                    if (items.type == item.target.id) {
                        // console.log(items);
                        const {isOutside, params} = JSON.parse(showClassificationLog(portal, items.type)) || {}
                        if (isOutside) {
                            if (window.Beyla) {
                                let beylaInstance = new window.Beyla({
                                    appId: "gamerplay.bio", // 待确定
                                    strict: false,
                                });
                                beylaInstance.report(params)
                            }
                        }
                    }
                })
                // console.log(item.target.innerText);
                observer.unobserve(item.target); //停止监听该div DOM节点
            }
        })
    })
    return observer
}

// 点击浏览器安装埋点
export function clickInstallLog(portal) {
    const pveCur = getUrlParams('channel') ? `/${origin}_${portal}_${getUrlParams('channel')}/GameMain/Main/downloadClient` : `/${origin}_${portal}/GameMain/Main/downloadClient`;
    try {
        beylaInstance.report({
            pveCur: pveCur,
            eventName: "click_ve",
        });
    } catch (e) {
        console.log(e);
    }
}

// 从桌面快捷方式进入
export function followShortcutsLog(portal) {
    const pveCur = `/${origin}_${portal}_client/GameMain/Main/clickClient`;
    try {
        beylaInstance.report({
            pveCur: pveCur,
            eventName: "click_ve",
        });
    } catch (e) {
        console.log(e);
    }
}