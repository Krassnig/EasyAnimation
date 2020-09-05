class Task {
	public static async delay(milliseconds: number): Promise<void> {
		return new Promise<void>(e => setTimeout(() => e(), milliseconds));
	}
}

export default Task;