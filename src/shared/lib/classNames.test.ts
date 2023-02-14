import { classNames } from "./classNames"

describe("classNames", () => {
    test("test", () => {
        expect(classNames("test", "", "test2", { "test": true })).toBe("test test2 test")
    })
})