type Mods = Record<string, string | boolean>

export const classNames = (...arg: Array<string | Mods>) => 
    arg.filter(Boolean).map(
        (el) => typeof el === "string" 
            ? el 
            : Object.entries(el).map(([key, val]) => val ? key : false).join("")
    ).join(" ");
