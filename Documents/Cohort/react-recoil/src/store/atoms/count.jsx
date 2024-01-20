import { atom, selector } from "recoil"
const countAtom = atom({
    key : "countAtom",   // should be unique for every atom
    default : 0
})

export default countAtom;


export const evenSelector = selector({
    key : "evenSelector",
    get : ({get}) => {
        const count = get(countAtom);
        return count % 2 === 0;
    }
})