/**
 * @author: 半醉半醒半浮生
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2020-08-28 12:28:34
 * @description: 格式化日期的相关操作
 */

/**
 *  时间格式化
 * 将 2020-08-28T12:55:11.000+0000 格式化成 2020/08/28 12:55:11
 * @param datetime 国际化日期格式
 * @returns {*}
 */
export function format(datetime) {
    return formatWithSeparator(datetime, "/", ":")
}

/**
 * 时间格式化
 * 将 2020-08-28T12:55:11.000+0000 格式化成 2020/08/28 12:55:11
 * @param datetime 国际化日期格式
 */
export function formatWithSeparator(datetime, dateSeparator, timeSeparator) {
    if (datetime != null) {
        const dateMat = new Date(datetime)
        const year = dateMat.getFullYear()
        const month = dateMat.getMonth() + 1
        const day = dateMat.getDate()
        const hh = dateMat.getHours()
        const mm = dateMat.getMinutes()
        const ss = dateMat.getSeconds()
        const formattedTime = year + dateSeparator + month + dateSeparator + day + " " + hh + timeSeparator + mm + timeSeparator + ss
        return formattedTime;
    }
}
