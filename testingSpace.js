function cleanNames(studentNames){
    return [...new Set(
        map(name => name.trim()),
        filter(name => name !== ""),
        map(name => name.replace(/\d+/g, "")),
        filter(name => name !== "")
    )].sort();
}

const studentName = ["John", "Mary",  "John",  "",  "Peter123",  "  Alice  ",  "Mary",  "Tom45",  "   "]

const clean =cleanNames(studentName)
console.log(clean)