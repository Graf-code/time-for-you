import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice ({
    name:"cart",
    initialState: {
        user: "UserLogged",
        updatedAt: Date.now().toLocaleString(),
        total: 0,
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const isProductInCart = state.items.find(item => item.id === action.payload.id)

            if(!isProductInCart){
                state.items.push(action.payload)
                const total = state.items.reduce(
                    (acc, current) => acc+= current.price*current.quantity,0
                );

                state.total = total
                state.updatedAt = Date.now().toLocaleString()

            }else{
                const itemsUpdate = state.items.map(item=>{
                   if(item.id === action.payload.id) {
                    item.quantity+=action.payload.quantity
                    return item
                   }
                   return item
                })
                const total = itemsUpdate.reduce(
                    (acc,current) => acc+= current.price*current.quantity,0
                )
                state.total = total
                state.updatedAt = Date.now().toLocaleString()
                state = {
                    ...state,
                    items: itemsUpdate,
                    total,
                    updatedAt
                }
            }
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter((item) => item.id !== itemIdToRemove);
            const total = state.items.reduce(
              (acc, current) => acc + current.price * current.quantity,
              0
            );
            state.total = total;
            state.updatedAt = Date.now().toLocaleString();
          },
        },
      });

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer