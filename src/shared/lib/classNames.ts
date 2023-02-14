type Mods = Record<string, boolean>

export const classNames = (...arg: Array<string | undefined | Mods>): string =>
  arg.filter(Boolean).map(
    (el) => typeof el === 'string'
      ? el
      : Object.entries(el !== undefined ? el : {}).map(([key, val]) => val ? key : false).join('')
  ).join(' ')
