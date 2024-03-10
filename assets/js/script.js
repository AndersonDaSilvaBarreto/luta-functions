const char = createKnight("King Kong")
const monster = createLittleMonster()

stage.start(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
)
