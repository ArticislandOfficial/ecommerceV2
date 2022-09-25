const reducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS_TOP":
      return {
        ...globalState,
        products: action.payload,
      };
 
    default:
      return globalState;
  }
};
export default reducer