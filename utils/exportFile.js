/**
* @author: 半醉半醒半浮生
* @age: 永远18岁的美少年
* @Email： Genejob@163.com
* @date: 2020-08-28 10:45:11
* @description:
*/

/**
 *
 * @param result: 元数据, 必选,    根据后端请求回来的二进制数据流结果
 * @param options: 配置选项,可选, 文件相关参数配置
 */
// 默认下载文件类型是 excel 文件, 可通过 options 的 type修改 MIME类型 指定下载哪种格式的文件
export function exportFile(result, options = {}) {
    let filename = options.filename
    let type = options.type ? options.type : 'application/vnd.ms-excel'

    const a = document.createElement('a')
    const blob = new Blob([result.data], {type})
    a.style.display = 'none'
    a.href = URL.createObjectURL(blob)

    // 如果有指定文件名称,则下载对应的文件名称, 没有指定文件名称,则由浏览器自动生成随机文件名
    filename ? a.download = filename : a.download
    document.body.appendChild(a)
    a.click() // 触发click 事件下载文件
    document.body.removeChild(a) // 释放 a 链接对象
}

// 下载文件
export const downloadFile = exportFile
