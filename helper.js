function powOnClick() {
    let x = document.getElementById("pow_x").value
    let n = document.getElementById("pow_n").value
    document.getElementById("pow_result").innerHTML = pow(x, n)
}

function pow(x, n) {
    if ((typeof x !== 'number') || (typeof n !== 'number')) {
        alert("ввод должен быть числом")
        return "";
    }

    let result = 1
    for (let i = 0; i < n; i++) {
        result *= x
    }
    return result
}

function gcdOnClick() {
    let a = document.getElementById("gcd_a").value
    let b = document.getElementById("gcd_b").value
    document.getElementById("gcd_result").innerHTML = gcd(a, b)
}

function gcd(a, b) {

}