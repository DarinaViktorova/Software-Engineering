function solveQuadraticEquation (a, b, c) {
    
    if (a == 0) return " ERROR: a = 0 is invalid value!";

    let D = (b ** 2) - 4 * a * c;
    let x1, x2;

    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return ` a = ${a}, b = ${b}, a = ${c} \n x1 = ${x1}, x2 = ${x2}, D = ${D}`
    }
    else if (D == 0) {
        x1 = -b / (2 * a);
        return ` a = ${a}, b = ${b}, a = ${c} \n x1 = ${x1}, D = ${D}`;
    } 
    else return ` a = ${a}, b = ${b}, a = ${c} \n No roots \n D = ${D}`
}

function showResults () {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    let result = solveQuadraticEquation (a, b, c);

    document.getElementById('result').textContent = "Result: \n" + result;
    document.getElementById('answer').style.margin = '20px 400px';
    document.getElementById('answer').style.display = 'block';
    document.getElementById('answer').style.border = '1px solid #ffc222';
}