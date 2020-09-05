import Canvas from "./canvas";

export class Program {
	public static async main(args: string[]): Promise<void> {
		
		const c = await Canvas.create();

		c.testRect();

	}
}