/**
 * @author: 半醉半醒半浮生
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2020-08-28 11:07:13
 * @description: 生成随机数的相关方法
 */

/**
 *  生成一个随机数
 * @param hashLength
 * @returns {string}
 */
export function randomHash(hashLength) {
    if (!hashLength || typeof (Number(hashLength)) != 'number') {
        return;
    }
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const newArr = [];
    for (let i = 0; i < Number(hashLength); i++) {
        newArr.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return newArr.join('');
}


