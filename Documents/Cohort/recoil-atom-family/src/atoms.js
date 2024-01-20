import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { TODOS } from "./todo";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});


export const productsSelector = atom({
  key : "productsAtom",
  default : selector({
    key: 'getProducts',
    get : async () => {
      const products = await fetch("https://fakestoreapi.com/products/");
      const json = await products.json()
      return json;
    }
   
  })
})


export const poductByIdAtomFamily = atomFamily({
  key : "productById",
  // we can also use selectorFamily here for async operation //please read //btw both the codes are working
  // default :  async (id) => {
      // const products = await fetch(`https://fakestoreapi.com/products/${id}`);
      // const json = await products.json()
      // return json;
  //   } 
  default: selectorFamily({
    key: 'UserInfo/Default',
    get: (id) => async ({get}) => {
      // throw new Error();
      const products = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await products.json()
      return json;
    },
  }), 
})

// export const productSelector = atom({
//   key : "productAtom",
//   default : selector({
//     key: 'getProductById',
//     get : async () => {
//       const products = await fetch("https://fakestoreapi.com/products/1");
//       const json = await products.json()
//       return json;
//     }
//   })
// })