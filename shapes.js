class Shape {
    constructor(LogoAnswers) {
        this.color = LogoAnswers.color;
        this.text = LogoAnswers.text;
        this.shapeColor = LogoAnswers.shapeColor;
    }

    getSVG() {
        return '';
    }
}

class Triangle extends Shape {
    getSVG() {
        return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,50 200,150 100,150" style="fill:none;stroke:${this.shapeColor};stroke-width:2" />
      <text x="150" y="100" text-anchor="middle" style="fill:${this.color};font-size:22">${this.text}</text>
    </svg>
    `;
    }
}

class Square extends Shape {
    getSVG() {
        return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="50" width="100" height="100" style="fill:none;stroke-width:2;stroke:${this.shapeColor}" />
      <text x="150" y="100" text-anchor="middle" style="fill:${this.color};font-size:22">${this.text}</text>
    </svg>
    `;
    }
}

class Circle extends Shape {
    getSVG() {
        return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="50" stroke="${this.shapeColor}" stroke-width="2" fill="none" />
      <text x="150" y="100" text-anchor="middle" style="fill:${this.color};font-size:22">${this.text}</text>
    </svg>
    `;
    }
}

class SVGCreator {
    static createSVG(shapeType, LogoAnswers) {
        switch (shapeType) {
            case 'circle':
                return new Circle(LogoAnswers);
            case 'square':
                return new Square(LogoAnswers);
            default:
                return new Triangle(LogoAnswers);
        }
    }
}

module.exports = { Shape, Triangle, Square, Circle, SVGCreator }