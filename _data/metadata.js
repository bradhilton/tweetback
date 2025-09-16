let data = {
	username: "bradthilton", // No leading @ here
	homeLabel: "bradthilton.com",
	homeUrl: "https://bradthilton.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;