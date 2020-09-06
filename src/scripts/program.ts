import Canvas from "./canvas";
import {Polygon} from "./shapes/polygon";
import {Animator} from "./animator";
import { Rectangle } from "./shapes/rectangle";

export class Program {
	public static async main(args: string[]): Promise<void> {
		const c = await Canvas.create();

		const polygon = new Rectangle(100, 100, 100, 200);

		const animator =
			new Animator(c, polygon)
				.translate(-150, -150)
				.rotate(Math.PI / 2)
				.translate(150, 150)
				.showPreview()
				.animate(2)
				.finalize();
	}
}