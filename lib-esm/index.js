import { indexesOf, isQuote, pushOne, replaceAll } from "ambients-utils";
function isDelimiter(str) {
    return str === ';' || str === ':' || isQuote(str);
}
export default function (html, replacement = 'currentColor') {
    const colors = [];
    for (const index of indexesOf(html, '#')) {
        if (isDelimiter(html[index - 1])) {
            if (isDelimiter(html[index + 7]))
                pushOne(colors, html.substring(index, index + 7));
            else if (isDelimiter(html[index + 4]))
                pushOne(colors, html.substring(index, index + 4));
        }
    }
    for (const index of indexesOf(html, 'rgba(')) {
        let indexEnd = -1;
        for (let i = index + 5; i < html.length; ++i)
            if (html[i] === ')') {
                indexEnd = i + 1;
                break;
            }
        if (indexEnd !== -1)
            pushOne(colors, html.substring(index, indexEnd));
    }
    for (const index of indexesOf(html, 'rgb(')) {
        let indexEnd = -1;
        for (let i = index + 4; i < html.length; ++i)
            if (html[i] === ')') {
                indexEnd = i + 1;
                break;
            }
        if (indexEnd !== -1)
            pushOne(colors, html.substring(index, indexEnd));
    }
    for (const color of colors.sort((a, b) => { return b.length - a.length; })) {
        html = replaceAll(html, color, replacement);
    }
    return html;
}
