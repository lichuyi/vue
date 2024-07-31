
export default {

  /**
   *  通过每次调用Object.keys方法
   *  检测这次比上次新增的key
   *
   * @returns {(vm: any, str?: string) => any}
   */
  generatedDebugkeys: function generatedDebugkeys() {
    let allKeys = [] as string[]
    return function (vm, str = '这次') {
      let currentKeys = Object.keys(vm)
      let addKeys = currentKeys.filter(v => !(allKeys.includes(v)))
      allKeys = [...allKeys, ...addKeys] as string[]
      console.log(str + '增加的key', addKeys)
      return addKeys
    }
  }
}
