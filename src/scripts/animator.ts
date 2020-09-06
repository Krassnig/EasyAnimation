import Canvas from "./canvas";
import Shape, {DrawType} from "./shapes/shape";
import Matrix from "./matrix";
import {Config} from "./config";
import Task from "./task";
import {Vector, Vector2D} from "./vector";

export class Animator {
    public constructor(canvas: Canvas, shape: Shape) {
        this.canvas = canvas;
        this.shape = shape;
        this.tstack = [];
        this.mnext = Matrix.createIdentity(3);
    }

    private canvas: Canvas;
    private shape: Shape;
    private tstack: [Matrix, number][];
    private mnext: Matrix;
    private preview: Boolean = false;
    private start: Boolean = false;

    public translate(x: number, y: number): Animator {
        this.mnext = Matrix.mult(Matrix.create([
            [1, 0, x],
            [0, 1, y],
            [0, 0, 1]
        ]), this.mnext);
        return this;
    }

    public rotate(a: number, rotationPoint: Vector2D = Vector2D.createVector2D(this.shape.toVectorList().get(0, 0), this.shape.toVectorList().get(0, 1))): Animator {
        /*  const startx = rotationPoint.get(0);
          const starty = rotationPoint.get(1);
          console.log(this.shape.toVectorList());
          console.log(startx, starty);
          this.translate(-startx, -starty);*/
        this.mnext = Matrix.mult(Matrix.create([
            [Math.cos(a), -Math.sin(a), 0],
            [Math.sin(a), Math.cos(a), 0],
            [0, 0, 1]
        ]), this.mnext);
        // return this.translate(startx, starty);
        return this;
    }

    public scale(k: number): Animator {
        this.mnext = Matrix.mult(Matrix.create([
            [k, 0, 0],
            [0, k, 0],
            [0, 0, 1]
        ]), this.mnext);
        return this;
    }

    public showPreview(): Animator {
        this.preview = true;
        return this;
    }

    public showStart(): Animator {
        this.start = true;
        return this;
    }

    public animate(seconds: number): Animator {
        this.tstack.push([this.mnext, seconds]);
        this.mnext = Matrix.createIdentity(3);
        return this;
    }

    public async finalize(): Promise<Animator> {
        const step = this.tstack[0];
        await this.doStep(this.shape.toVectorList(), step);
        return this;
    }

    private async doStep(start: Matrix, step: [Matrix, number]): Promise<Matrix> {
        const framecount = step[1] * Config.frameRate;
        const waitframe = 1000 / Config.frameRate;

        const endstep = Matrix.specialMult(step[0], start);
        console.log("End pos : ", endstep)
        const b = Matrix.sub(endstep, start);
        const unit = Matrix.div(b, framecount);
        let next = start;

        for (let f = 0; f <= framecount; f++) {
            this.canvas.clear();
            this.shape.draw(this.canvas, next);
            if (this.preview) this.shape.draw(this.canvas, endstep, "#0F0", DrawType.STROKE);
            if (this.start) this.shape.draw(this.canvas, start, "#F00", DrawType.STROKE);
            next = Matrix.add(next, unit);

            await Task.delay(waitframe);
        }

        return next;
    }
}