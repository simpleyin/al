
// 无限网格上的机器人从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：

// -2：向左转 90 度
// -1：向右转 90 度
// 1 <= x <= 9：向前移动 x 个单位长度
// 有一些网格方块被视作障碍物。 

// 第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])

// 如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。

// 返回从原点到机器人的最大欧式距离的平方。

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    var rc = [0, 0], cp = 0;
    var find = function(rc) {
        for (let i = 0; i < obstacles.length; i++) {
            if (obstacles[i][0] === rc[0] && obstacles[i][1] === rc[1]) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0, l = commands.length; i < l; i++) {
        if (commands[i] === -2) {
            cp = cp - 1 < 0 ? 3 : cp - 1;
        }
        else if (commands[i] === -1) {
            cp = cp + 1 > 3 ? 0 : cp + 1;
        }
        else {
            let m = commands[i];
            if (cp === 0) {
                let x = rc[0], y = rc[1];
                for (let i = 1; i <= m; i++) {
                    let pathPoint = y + i;
                    if (find([x, pathPoint])) {
                        rc = [x, pathPoint - 1];
                        break;
                    } else {
                        rc = [x, pathPoint];
                    }
                }
            }
            if (cp === 1) {
                let x = rc[0], y = rc[1];
                for (let i = 1; i <= m; i++) {
                    let pathPoint = x + i;
                    if (find([pathPoint, y])) {
                        rc = [pathPoint - 1, y];
                        break;
                    }else {
                        rc = [pathPoint, y];
                    }
                }
            }
            if (cp === 2) {
                let x = rc[0], y = rc[1];
                for (let i = 1; i <= m; i++) {
                    let pathPoint = y - i;
                    if (find([x, pathPoint])) {
                        rc = [x, pathPoint + 1];
                        break;
                    }else {
                        rc = [x, pathPoint];
                    }
                }
            }
            if (cp === 3) {
                let x = rc[0], y = rc[1];
                for (let i = 1; i <= m; i++) {
                    let pathPoint = x - i;
                    if (find([pathPoint, y])) {
                        rc = [pathPoint + 1, y];
                        break;
                    }else {
                        rc = [pathPoint, y];
                    }
                }
            }
        }
    }
    console.log(rc);

    return rc[0] * rc[0] + rc[1] * rc[1];
};

