function FindProxyForURL(url, host) {
	if (shExpMatch(url, "nkn.backlog.jp") ||
		shExpMatch(url, "esol1975.sharepoint.com")) {
		return 'PROXY 192.168.0.5:8080'
	}
	return 'DIRECT';
}