class Shape {
  constructor(color) {
    this.color = color;
  }

  static generateSVG(textColor, shape, text, shapeColor) {
    switch (shape) {
      case 'triangle':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <polygon points="50,200 250,200 150,50" style="fill:${shapeColor};stroke:black;stroke-width:1" />
                  <text x="150" y="165" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>`;
      case 'circle':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <circle cx="150" cy="100" r="80" style="fill:${shapeColor};stroke:black;stroke-width:1" />
                  <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>`;
      case 'square':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                  <rect x="50" y="20" width="180" height="180" style="fill:${shapeColor};stroke:black;stroke-width:1" />
                  <text x="135" y="135" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>`;
      default:
        throw new Error('Invalid shape');
    }
  }
}

module.exports = Shape;
