import { ReactP5Wrapper, Sketch } from "@p5-wrapper/react";

let img: any;
let sketch: Sketch = (p5) => {
    p5.setup = () => p5.createCanvas(500, 600);

    p5.preload = () => {
        img = p5.loadImage('/assets/kertas/kertas-1.jpg')
    }

    p5.draw = () => {
        p5.background(250);
        p5.image(img, 0, 0, 400, 200);
    };
};
const Result = () => {
    return (
        <ReactP5Wrapper sketch={sketch} />
    )
}

export default Result