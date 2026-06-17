// \b matches before or after a word
let text = "Hey, how is she today?"
console.log(text.match(/\bis/gi))

let greet= "What's up bro?"
console.log(greet.match(/up\b/gi))

// x(?=y) matches x if "x" is followed by y
let tutor = "W3schools tutorials"
let pat =/W3schools(?= tutorials)/gi
console.log(pat.test(tutor))

//x(?!y) matches x if "x"  is NOT followed by y
let note = ("Scotts and Cowboii")
let ama = /Scotts(?! and)/gi
console.log(ama.test(note))

// (?<=y)x matches x if "x" is preceded by y
let ba = ("He always listens to amapiano")
let straata = /(?<=listens to )amapiano/gi
console.log(straata.test(ba))

// (?<!y)x matches "x" only if "x" is NOT preceded by "y"
let pray = ("Forgive our Trespasses")
let song =/(?<!our Trespasses)Forgive/gi
console.log(song.test(pray))