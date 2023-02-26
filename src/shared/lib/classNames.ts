type Mods = Record<string, boolean | undefined>

export const classNames = (...arg: Array<string | undefined | Mods>): string =>
  arg.filter(Boolean).map(
    (el) => typeof el === 'string'
      ? el
      : Object.entries(el !== undefined ? el : {})
        .map(([key, val]) => val !== undefined && val ? key : false)
        .filter(Boolean).join('')
  ).join(' ')
