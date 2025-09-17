let data = {
	username: "bradthilton", // No leading @ here
	homeLabel: "x.com/bradthilton",
	homeUrl: "https://x.com/bradthilton",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;