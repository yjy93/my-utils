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
            // 下载文件
            $downloadFile: {
                writable: false,
                value: downloadFile
            },
            // 导出文件
            $exportFile: {
                writable: false,
                value: exportFile
            }
        })
    }
}
