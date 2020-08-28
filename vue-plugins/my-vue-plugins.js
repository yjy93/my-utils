/**
 * @author: 半醉半醒半浮生
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2020-08-28 10:44:19
 * @description:
 */

import {exportFile, downloadFile} from '../utils/exportFile'

export default {
    install(Vue) {
        Object.defineProperties(Vue.prototype, {
            $downloadFile: {
                writable: false,
                value: downloadFile
            },
            $exportFile: {
                writable: false,
                value: exportFile
            }
        })
    }
}
