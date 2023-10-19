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
    if ((typeof x !== 'number') || (typeof n !== 'number')) {
        alert("ввод должен быть числом")
        return "";
    }
    if (a < b) {
        a, b = b, a
    }
    for (let i = b; i > 0; i--) {
        if (a % i == 0 && b % i == 0) {
            return i;
        }
    }
}

function minDigitOnClick() {
    let x = document.getElementById("min_digit_x").value
    let result_label = document.getElementById("min_digit_result")
    result_label.innerHTML = "Результат: " + minDigit(x)
}

function minDigit(x) {
    let splt = x.split('')
    let splt_int = splt.map(Number)
    return Math.min(...splt_int)
}