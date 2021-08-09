const KEYS_TO_EXCLUDE = ["page", "requirements", "createdBy"];
function getQuery(params) {
	const keys = Object.keys(params).filter(
		(key) => !KEYS_TO_EXCLUDE.includes(key)
	);
	const query = {};

	keys.forEach((key) => {
		query[key] = { $eq: params[key] };
	});
	if (params.requirements) {
		query["requirements"] = { $all: params.requirements };
	}

	if (params.createdBy) {
		query["createdBy.id"] = { $eq: params.createdBy };
	}
	return query;
}
module.exports = { getQuery };
