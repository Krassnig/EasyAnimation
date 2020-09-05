import Canvas from "./canvas";

export class Program {
	public static async main(args: string[]): Promise<void> {
		
		console.log('1');

		const c = await Canvas.create();

		console.log('2');

		c.testRect();

		console.log('3');
	}
}