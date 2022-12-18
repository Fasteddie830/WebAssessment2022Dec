//wanted to make a file for all the mathematics function, ended up with only this one here. 

const mean = (x) => {
    let total = 0;
    let count = 0
    for (let i in x) {
        count++;
        total = total + x[i];
    }
    return total / count
}

export default mean;