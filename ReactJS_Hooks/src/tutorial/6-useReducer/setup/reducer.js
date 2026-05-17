export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }
  if (action.type === "NO_VALUE")
    return { ...state, isModalOpen: true, modalContent: "Please Enter value" };

  if (action.type === "CLOSE_MODAL") return { ...state, isModalOpen: false };

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item is Removed",
    };
  }
  if (action.type === "CLEAR_LIST")
    return {
      ...state,
      people: [],
      isModalOpen: true,
      modalContent: "List is Empty",
    };
  // return state; //We always need to return the state from reducer function!!!Important
  throw new Error("No matching type found");
};
