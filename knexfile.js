module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres:///memory_v1'
	},
	production: {
		client: 'pg',
		connection:
			process.env.DATABASE_URL ||
			'postgres://egskgmehdrptea:3dd16e5d9b459367908b29411da0e1a36c85cbd8b45681cb7553a5cedefdbf0f@ec2-54-235-252-137.compute-1.amazonaws.com:5432/d1djqcekbr9rfp'
	}
}
