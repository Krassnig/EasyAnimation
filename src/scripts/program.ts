import Canvas from "./canvas";
import {Polygon} from "./shapes/polygon";
import Matrix from "./matrix";
import {Animator} from "./animator";

export class Program {
	public static async main(args: string[]): Promise<void> {
		const c = await Canvas.create();
		const polygon = new Polygon([[100,100],[100,300],[600,300],[600,100]]);
		//console.log(polygon.toMatrix().toString());
		//polygon.draw(c, polygon.toMatrix());
		const animator = new Animator(c, polygon);
		animator.translate(100,100);
		animator.animate(10);
		await animator.finalize();
		//polygon.draw(c,Matrix.createNull(0,0));
	}
}