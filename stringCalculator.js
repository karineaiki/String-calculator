function add(values) {
    if ( values.includes(",\n") || values.includes("\n,") ){
        throw new Error("Not allowed");
    }

    let delimiter = /,|;|\n/;

    if (values.startsWith("//")) {
        let delimiterMatch = values.match(/^\/\/(.+)\n/);
        delimiter = new RegExp(`[/,|;|\n|${delimiterMatch[1]}/]`) ;
        values = values.split("\n").slice(1).join()
        console.log(delimiter)
        console.log(values)
    };

    if (values.includes("-")){
        throw new Error("you cannot enter negative numbers")
    }
    let result = 0;

    if ( values === "" || values === undefined ){
        return 0;
    };

    let numbers = values.split(delimiter);


    for (let number of numbers) {
        result += parseInt(number);

    }

    return result;
};

module.exports = add;