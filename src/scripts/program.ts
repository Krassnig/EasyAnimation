import Canvas from "./canvas";
import {Polygon} from "./shapes/polygon";

export class Program {
	public static async main(args: string[]): Promise<void> {
		const c = await Canvas.create();
		const polygon = new Polygon([[100,100],[200,200],[300,300]]);
		polygon.draw(c);
	}
}