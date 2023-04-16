export default function reducer(state, action) {
  console.log(state,action)
  switch (action.type) {
    case "TOGGLE_LANGUAGE":
        const language = state.language == "tr" ? "en" : "tr"
        localStorage.setItem('language', language)
      return {
        ...state,
        language
      };
  }
}

