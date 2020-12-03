module.export = {
	roots: ["./src"],
	transform: {
		"\\.(js|jsx)?$": "babel-jest",
	},
	testMatch: ["./src/(*.)test.{js, jsx}"],
	moduleFileExtension: ["js", "jsx", "json", "node"],
	testPathIgnorePatterns: ["/node_modules", "/public/"],
	setupFilesAfterEnv: [
		"@testing-library/jest-dom/extend-expect",
		"@testing-library/react/cleanup-after-each",
	],
};
