function parseCount(value) {
    let result = Number.parseInt(value);
    if(isNaN(result)) {
        throw new Error ('Невалидное значение')
    }
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }catch (e){
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (c + b) < a) {
            throw new Error ('Треугольник с такими сторонами не существует')
        }
    }

    getPerimeter() {
        let p = this.a + this.b + this.c;
        return p;
    }

    getArea () {
        let newPerimeter = this.getPerimeter() / 2;
        let geron = +Math.sqrt(newPerimeter * (newPerimeter - this.a) * (newPerimeter - this.b) * (newPerimeter - this.c)).toFixed(3);
        return geron;
    }
}
    function getTriangle(a, b, c) {
        try {
            return new Triangle(a, b, c)
        } catch (e) {
            return {
               getArea() {
                return 'Ошибка! Треугольник не существует';
               },
               getPerimeter() {
                return 'Ошибка! Треугольник не существует'
               }
            }
        }
    }
   