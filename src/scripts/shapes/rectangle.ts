import Canvas, {Drawable} from "../canvas";
import Shape from "./shape";
import Matrix from "../matrix";
import { Config } from "../config";

export class Rectangle implements Shape {
    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
	}
	
    private x: number;
    private y: number;
    private width: number;
	private height: number;

	preview(canvas: Canvas, vectorList: Matrix): void{
		const c = canvas.c;
		c.fillStyle = Config.color;

		c.beginPath();
		c.moveTo(vectorList.get(0, 0), vectorList.get(1, 0));

		for (let i = 0; i < vectorList.cols; i++) {
			c.lineTo(vectorList.get(0, i), vectorList.get(1, i));
		}

		c.closePath();
		c.stroke();
	}
	draw(canvas: Canvas, vectorList: Matrix): void {
		const c = canvas.c;
		c.fillStyle = Config.color;
		
        c.beginPath();
		c.moveTo(vectorList.get(0, 0), vectorList.get(1, 0));
		
        for (let i = 0; i < vectorList.cols; i++) {
            c.lineTo(vectorList.get(0, i), vectorList.get(1, i));
		}
		
        c.closePath();
        c.fill();
	}

	toVectorList(): Matrix {
		return Matrix.create([
			[this.x, this.y],
			[this.x + this.width, this.y],
			[this.x + this.width, this.y + this.height],
			[this.x, this.y + this.height ]
		]).transpose().normalizeAsVectorList();
	}
}