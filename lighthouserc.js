module.exports = {
	ci: {
		collect: {
			staticDistDir: './__sapper__/export'
		},
		upload: {
			target: "temporary-public-storage"
		}
	}
}