export const AddItem = item => { return { type: 'AddItem', payload: item } }
export const RemoveItem = item => { return { type: 'RemoveItem', payload: item } }
export const UpdateLabel = value => {return {type: 'UpdateLabel', payload: value}}