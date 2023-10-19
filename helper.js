function powOnClick() {
    let x = document.getElementById("pow_x").value
    let n = document.getElementById("pow_n").value
    document.getElementById("pow_result").innerHTML = pow(x,n)

}

function pow(x, n) {
    let result = 1
    for (let i = 0; i < n; i++) {
        result*=x
    }
    return result
}