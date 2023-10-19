function powOnClick() {
    let x = document.getElementById("pow_x").value
    let n = document.getElementById("pow_n").value
    document.getElementById("pow_result").innerHTML = pow(x, n)
}

function isNumber(string) {
    return /^-?[0-9]+$/.test(string)
}

function pow(x, n) {
    if (!isNumber(x) || !isNumber(n)) {
        alert("ввод должен быть числом")
        return "";
    }
    let result = 1
    for (let i = 0; i < n; i++) {
        result *= x
    }
    return result;
}

function gcdOnClick() {
    let a = document.getElementById("gcd_a").value
    let b = document.getElementById("gcd_b").value
    document.getElementById("gcd_result").innerHTML = gcd(a, b)
}

function gcd(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
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
    if (!isNumber(x)) {
        alert("ввод должен быть числом")
        return ""
    }
    let splt = x.split('')
    let splt_int = splt.map(Number)
    return Math.min(...splt_int)
}

function pluralizeOnClick() {
    let n = document.getElementById("pluralize_n").value
    let result_label = document.getElementById("pluralize_result")
    result_label.innerHTML = "Результат: " + pluralizeRecords(n)
}

function pluralizeRecords(n) {
    if (!isNumber(n)) {
        alert("ввод должен быть числом")
        return ""
    }
    if (n < 0) {
        alert("число не может быть отрицательным")
        return ""
    }
    let base = "В результате выполнения запроса "
    let tail = ""
    if (n % 10 == 1 && n % 100 != 11)
        tail = `была найдена ${n} запись`
    else if ([2, 3, 4].includes(n % 10) &&
        ![12, 13, 14].includes(n % 100))
        tail = `было найдено ${n} записи`
    else if ([0, 5, 6, 7, 8, 9].includes(n % 10) || [11, 12, 13, 14].includes(n % 100))
        tail = `было найдено ${n} записей`
    return base + tail
}