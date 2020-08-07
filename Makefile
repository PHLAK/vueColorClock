dev development: # Install development dependencies
	@npm install && npm run dev

prod production: # Install production dependencies
	@npm install --no-save && npm run production && npm prune --production

update upgrade: # Update application dependencies
	@npm update && npm install && npm audit fix
