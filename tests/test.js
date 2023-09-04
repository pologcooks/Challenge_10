const { SVGCreator } = require('../shapes');

test('Triangle', () => {
    const triangle = SVGCreator.createSVG("triangle", { shapeColor: "red", color: "blue", text: "Tes" });
    expect(triangle.getSVG()).toContain('polygon');
    expect(triangle.getSVG()).toContain(`stroke:${triangle.shapeColor}`);
    expect(triangle.getSVG()).toContain(`fill:${triangle.color}`);
    expect(triangle.getSVG()).toContain(`${triangle.text}</text>`);
});

test('Square', () => {
    const Square = SVGCreator.createSVG("square", { shapeColor: "red", color: "blue", text: "Tes" });
    expect(Square.getSVG()).toContain('rect');
    expect(Square.getSVG()).toContain(`stroke:${Square.shapeColor}`);
    expect(Square.getSVG()).toContain(`fill:${Square.color}`);
    expect(Square.getSVG()).toContain(`${Square.text}</text>`);
});

test('Circle', () => {
    const Circle = SVGCreator.createSVG("circle", { shapeColor: "red", color: "blue", text: "Tes" });
    expect(Circle.getSVG()).toContain('circle');
    expect(Circle.getSVG()).toContain(`stroke="${Circle.shapeColor}"`);
    expect(Circle.getSVG()).toContain(`fill:${Circle.color}`);
    expect(Circle.getSVG()).toContain(`${Circle.text}</text>`);
});