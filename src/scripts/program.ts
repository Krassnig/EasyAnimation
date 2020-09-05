import Canvas from "./canvas";
import {Polygon} from "./shapes/polygon";
import Matrix from "./matrix";

export class Program {
	public static async main(args: string[]): Promise<void> {
		const c = await Canvas.create();
		const polygon = new Polygon([[100,100],[100,300],[600,300],[600,100]]);
		polygon.draw(c,Matrix.createNull(0,0));
	}
}