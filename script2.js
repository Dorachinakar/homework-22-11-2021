/* first way */
function names(name1, name2, cb) {
    if (name1.length > name2.length)
        cb(name1)
    else {
        cb(name2);
    };
}

names("vfnsajdkbvkjdvbjsdk", "ricardo", (print) => {
    console.log(print);
})

/* secend way */
function names2(name1, name2, cb) {
    if (name1.length > name2.length)
        cb(name1)
    else {
        cb(name2)
    }
}
let printer = (print) => {
    console.log(print);
}
names("dor", "salvdo", printer)

/* thired way */
function names3(name1, name2, cb) {
    if (name1.length > name2.length)
        cb(name1)
    else {
        cb(name2);
    };
}
names3("dor", "d", prin)

function prin(prin) {
    console.log(prin);
}
/* the bigger number */
function dor(num, num2, cb) {
    let greater = getGreater(num, num2)
    for (let i = 0; i < greater; i++) {
        cb();
    }
    return cb
}

function getGreater(num, num2) {
    // return num > num2 ? num : num2
    if (num > num2) {
        return num;
    }
    return num2;
}

dor(1, 4, function () {
    console.log("hi");
})()