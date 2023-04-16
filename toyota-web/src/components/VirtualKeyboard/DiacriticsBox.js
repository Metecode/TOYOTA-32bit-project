function DiacriticsBox(keyboard) {
    const accentChars = {
    a: "ä à á â ã å ǎ ą ă æ ā",
    A: "Ä À Á Â Ã Å Ǎ Ą Ă Æ Ā",
    c: "ç ć ĉ č",
    C: "Ç Ć Ĉ Č",
    d: "đ ď ð",
    D: "Ď Đ",
    e: "è é ê ë ě ę ė ē",
    E: "È É Ê Ë Ě Ę Ė Ē",
    g: "ĝ ģ ğ",
    G: "Ĝ Ģ Ğ",
    h: "ĥ",
    H: "Ĥ",
    i: "ì í î ï ı ī į",
    I: "Ì Í Î Ï İ Ī Į",
    j: "ĵ",
    J: "Ĵ",
    k: "ķ",
    K: "Ķ",
    l: "ĺ ļ ł ľ ŀ",
    L: "Ĺ Ļ Ł Ľ Ŀ",
    n: "ñ ń ň ņ",
    N: "Ñ Ń Ň Ņ",
    o: "ö ò ó ô õ ő ø œ",
    O: "Ö Ò Ó Ô Õ Ő Ø Œ",
    r: "ŕ ř",
    R: "Ŕ Ř",
    s: "ß ś ŝ ş š ș",
    S: "ẞ Ś Ŝ Ş Š Ș",
    t: "ť ţ þ ț",
    T: "Ť Ţ Þ Ț",
    u: "ü ù ú û ű ũ ų ů ū μ",
    U: "Ü Ù Ú Û Ű Ũ Ų Ů Ū",
    w: "ŵ",
    W: "Ŵ",
    y: "ý ÿ ŷ",
    Y: "Ý Ÿ Ŷ",
    z: "ź ž ż",
    Z: "Ź Ž Ż",
    "?": "¿",
    "!": "¡"
    };
    
    const initVars = () => {
    let keyboardDOMClass = keyboard.keyboardDOMClass;
    keyboard.keyboardDOM = document.querySelector(`.${keyboardDOMClass}`);
    };
    
    const handleButtonHold = (button) => {
    if (button.startsWith("{")) return keyboard.handleButtonHold(button);
    const candidates = accentChars[button];
    if (button === "?") button = "\?";
    keyboard.showCandidatesBox(button, candidates, keyboard.keyboardDOM);
    };
    
    const init = () => {
    keyboard.registerModule("taphold", (module) => {
    module.initVars = initVars;
    module.handleButtonHold = handleButtonHold;
    module.initVars();
    });
    };
    
    return {
    init
    };
    }
    
    export default DiacriticsBox;