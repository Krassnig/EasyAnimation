class Canvas {
	private constructor(
		private canvas: HTMLCanvasElement,
		private c: CanvasRenderingContext2D
	) { }

	public testRect(): void {
		this.c.fillStyle = '#000000';
		this.c.fillRect(100, 100, 100, 100);
	}

	public static async create(): Promise<Canvas> {
		return new Promise<Canvas>(e => window.onload = () => {
			const canvas = document.createElement('canvas');
			
			canvas.setAttribute('width', '800');
			canvas.setAttribute('height', '800');
			canvas.setAttribute('id', 'canvas');
			canvas.setAttribute('class', 'canvas');

			const c = canvas.getContext('2d');

			if (c === null) throw new Error('Canvas context is null.');

			e(new Canvas(canvas, c));
		});
	}
}

export default Canvas;