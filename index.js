var userdata = [{
        name: "a"
    },
    {
        name: "b"
    },
    {
        name: "c"
    },
    {
        name: "d"
    },
    {
        name: "e"
    },
    {
        name: "f"
    },
    {
        name: "g"
    },
    {
        name: "h"
    },
]
var users = [];

function myfun() {

    var newArray = userdata.map(element => element.name);

    randamization(newArray, newArray);
}



function randamization(par_input, chil_input) {
    var parent_array = Array.from(par_input);
    var child_array = Array.from(chil_input);

    var ran_par = Math.floor((Math.random() * parent_array.length - 1) + 1);
    var ran_chil = Math.floor((Math.random() * child_array.length - 1) + 1);
    console.log(parent_array[ran_par]);

    if (parent_array[ran_par] == child_array[ran_chil]) {

        randamization(parent_array, child_array);

    } else {

        var json = {
            parent: parent_array[ran_par],
            child: child_array[ran_chil]
        }

        users.push(json);

        parent_array.splice(ran_par, 1);
        child_array.splice(ran_chil, 1);
        console.log(parent_array);
        console.log(child_array);
        console.log(child_array);
        if (parent_array.length) {
            randamization(parent_array, child_array);
        } else {
            return console.log(users);
        }
    }
}