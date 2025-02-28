import "./index.css";

it("should not contain BOM", async () => {
	const fs = __non_webpack_require__("fs");
	const path = __non_webpack_require__("path");
	const js = await fs.promises.readFile(
		path.resolve(__dirname, "bundle0.js"),
		"utf-8"
	);
	const css = await fs.promises.readFile(
		path.resolve(__dirname, "bundle0.css"),
		"utf-8"
	);
	expect(js).not.toContain("\uFEFF");
	expect(css).not.toContain("\uFEFF");
});
