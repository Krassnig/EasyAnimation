class Canvas {
	private constructor(
		public readonly canvas: HTMLCanvasElement,
		public readonly c: CanvasRenderingContext2D
	) { }

	public static async create(): Promise<Canvas> {
		return new Promise<Canvas>(e => window.onload = () => {
			const canvas = document.createElement('canvas');
			
			canvas.innerHTML = 'Please enable javascript and canvas';
			canvas.setAttribute('width', '800');
			canvas.setAttribute('height', '800');
			canvas.setAttribute('id', 'canvas');
			canvas.setAttribute('class', 'canvas');

			document.body.appendChild(canvas);

			const c = canvas.getContext('2d');

			if (c === null) throw new Error('Canvas context is null.');

			e(new Canvas(canvas, c));
		});
	}
}

export default Canvas;