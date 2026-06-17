let text = "Visit W3schools"
let n = text.search(/W3schools/i)
console.log(n)

const me = "Kazooba Tyl3r Mabweijano"
let nb = me.match(/Tyl3r/)
console.log(nb)

const you = "Laker Shalom Torach"
let mine = you.replace(/Torach/i, "Mabweijano")
console.log(mine)

let colours = "black, green, red, blue, white"
let mad = colours.match(/black|red|blue/g)
console.log(mad)

let sd = "Is that all that is available?"
const pt = /is|that/g

let result = sd.match(pt)
console.log(result)

let mn = "Expecto Patronum"
const mk = /patronum/i
let yg =mn.match(mk)
console.log(yg)

const mo = "Oboma Joshua 85%"
let nn = /\d/g
console.log(mo.match(nn))

const dd = "Mulumba Jonathan 14 points"
let ty  = /\w/g
console.log(dd.match(ty))

