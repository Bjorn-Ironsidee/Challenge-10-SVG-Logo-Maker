const Shape = require('./shapes');

describe('Shape class', () => {
  describe('generateSVG method', () => {
    it('should generate SVG for triangle', () => {
      const textColor = 'blue';
      const shape = 'triangle';
      const text = '123';
      const shapeColor = 'red'; // Define shapeColor for the triangle
      const svg = Shape.generateSVG(textColor, shape, text, shapeColor);
      expect(svg).toContain(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`);
      expect(svg).toContain(`<polygon points="50,200 250,200 150,50" style="fill:${shapeColor};stroke:black;stroke-width:1" />`);
    });

    it('should generate SVG for circle', () => {
      const textColor = 'blue';
      const shape = 'circle';
      const text = '123';
      const shapeColor = 'blue'; // Pass color as shapeColor for the circle
      const svg = Shape.generateSVG(textColor, shape, text, shapeColor);
      expect(svg).toContain(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`);
      expect(svg).toContain(`<circle cx="150" cy="100" r="80" style="fill:${shapeColor};stroke:black;stroke-width:1" />`);
    });

    it('should generate SVG for square', () => {
      const textColor = 'green';
      const shape = 'square';
      const text = '123';
      const shapeColor = 'green'; // Pass color as shapeColor for the square
      const svg = Shape.generateSVG(textColor, shape, text, shapeColor);
      expect(svg).toContain(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`);
      expect(svg).toContain(`<rect x="50" y="20" width="180" height="180" style="fill:${shapeColor};stroke:black;stroke-width:1" />`);
    });

    it('should throw error for invalid shape', () => {
      const color = 'red';
      const shape = 'invalid';
      expect(() => Shape.generateSVG(color, shape)).toThrow('Invalid shape');
    });
  });
});
