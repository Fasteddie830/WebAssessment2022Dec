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