export default function reducer(state, action) {
  console.log(state,action)
  switch (action.type) {
    case "TOGGLE_IMAGE":
      let image = "./assets/img/car.jpg" ;
      if(action.value){
        image= `/assets/img/${action.value}.jpg`;
      }
      
      // localStorage.setItem('image', image)
      return {
        ...state,
        image
      };
    case "TOGGLE_LANGUAGE":
        const language = state.language == "tr" ? "en" : "tr"
        localStorage.setItem('language', language)
      return {
        ...state,
        language
      };
  }
}

