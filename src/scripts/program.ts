import Canvas from "./canvas";
import {Polygon} from "./shapes/polygon";
import {Animator} from "./animator";

export class Program {
	public static async main(args: string[]): Promise<void> {
		const c = await Canvas.create();

		const polygon = new Polygon([[100,100],[100,300],[600,300],[600,100]]);
		const animator =
			new Animator(c, polygon)
				.translate(0, 100)
				.animate(5)
				.finalize();

		const animator2 =
			new Animator(c, polygon)
				.animate(5)
				.finalize();
	}
}