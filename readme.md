# svg-color

Replace all colors of an svg string

```javascript
import svgColor from 'svg-color';

const svg = `
    <?xml version="1.0" standalone="no"?>
    <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="#000"
        stroke-linecap="round" stroke-dasharray="5,10,5" fill="#CCCCCC"/>
    <path d="M 10 75 L 190 75" stroke="#ededed"
        stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="rgba(255, 0, 0)"/>
    </svg>
`;

const svgNew = svgColor(svg, 'white');
```