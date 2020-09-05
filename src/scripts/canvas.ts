class Canvas {
    private constructor(
        public readonly canvas: HTMLCanvasElement,
        public readonly c: CanvasRenderingContext2D
    ) {
	}
	
	public clear(): void {
		const fillStyle = this.c.fillStyle;
		this.c.fillStyle = '#FFFFFF';
		this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.c.fillStyle = fillStyle;
	}

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

export interface Drawable {
    draw(canvas: Canvas): void;
}

export default Canvas;