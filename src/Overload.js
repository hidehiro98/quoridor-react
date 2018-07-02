export const overload = (overloadDefinitions) => {

    // typeOf http://qiita.com/Hiraku/items/87e5d1cdaaa475c80cc2
    const typeOf = (x) => {
      if (x === null) return 'null'
      if (x == null) return 'undefined'
      const type = typeof x, c = x.constructor
      if (type === 'number') {
        if (isNaN(x)) return 'NaN'
        if (!isFinite(x))
          return x === Infinity ? 'Infinity' : '-Infinity'
      }
      if (type === 'object') {
        return c && c.name ? c.name :
          Object.prototype.toString.call(x).slice(8, -1)
      }
      return type
    }
  
    if (typeOf(overloadDefinitions) !== 'Object') {
        throw new TypeError('overloadDefinitions must be an Object.')
    }
  
    // オーバーロード関数の引数の型を配列に代入
  
    return (...args) => {
      // 引数の型を配列に代入
      const argTypes = args.map(arg => typeOf(arg))
  
      // オーバーロードの定義の中から引数の型とマッチするものを探す
      for (const key of Object.keys(overloadDefinitions)) {
        const overloadDefinitionArgTypes = key.split(',').map(type => type.trim())
  
        if (argTypes.toString() === overloadDefinitionArgTypes.toString()) {
          return overloadDefinitions[key](...args);
        }
      }
  
      // どの定義ともマッチしなかった場合
      if (overloadDefinitions['default']) {
        return overloadDefinitions['default'](...args)
      } else {
        throw new TypeError('Argument type does not match. Expected: ' +
            Object.keys(overloadDefinitions).map(val => '(' + val + ')').join(', '))
      }
    }
  }
