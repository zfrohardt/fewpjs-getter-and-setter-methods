// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    get diameter() {
        return this.radius * 2;
    }

    set diameter(d) {
        this.radius = d/2;
    }

    get circumference() {
        return Math.PI * 2 * this.radius;
    }

    set circumference(c) {
        this.radius = (c / 2) / Math.PI;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

    set area(a) {
        this.radius = Math.sqrt(a / Math.PI);
    }
}