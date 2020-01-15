'use strict'

function sortAnagrams (array) {
  const out = []
  const set = new Set()
  const aux = new Set(array.map(s => {
    const obj = {
      string: s,
      map: new Map(),
      set: new Set(),
      length: s.length,
      anagrams: []
    }

    for (let i = 0; i < obj.length; i++) {
      obj.map.set(s[i], (obj.map.get(s[i]) || 0) + 1)
      obj.set.add(s[i])
    }

    return obj
  }))

  aux.forEach(a => {
    set.add(a)

    aux.delete(a)
    aux.forEach(b => {
      if (a.length === b.length) {

        const _set = new Set([...a.set, ...b.set])
        for (let [_, char] of _set.entries()) {
          if (!a.map.has(char) || !b.map.has(char) || a.map.get(char) !== b.map.get(char)) return

        }
        a.anagrams.push(b.string)
        aux.delete(b)
      }
    })
  })

  set.forEach(element => out.push(element.string, ...element.anagrams))

  return out
}

function test () {
  console.log(['das','lala', 'rolel', 'asd', 'des', 'lerol'])

  console.log(sortAnagrams(['das','lala', 'rolel', 'asd', 'des', 'lerol']))
}

test()

