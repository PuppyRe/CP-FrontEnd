import configs from './configs.js';

// HTTP 请求助手
export const requestAsync = (url, data = {}, method = 'post', isLoading = false, type = 'json') => {
	if (isLoading) {
		uni.showLoading({
			title: '加载中',
			mask: true
		});
	}
	// 从前端缓存中获取用户令牌
	const token = uni.getStorageSync('token');
	const urlText = configs.apiurl + url;

	return new Promise((resolve, reject) => {
		uni.request({
			url: urlText,
			method: method,
			data: data,
			header: {
				token,
			},
			dataType: type,
			success: function(resp) {
				if (isLoading) uni.hideLoading();
				if (resp.statusCode === 200) {
					if (type !== 'json') {
						resolve(resp.data);
					} else {
						if (resp.data.code === 1) {
							resolve(resp.data.data);
							return;
						}
						uni.showToast({
							title: resp.data.msg
						});
						reject(resp.data.msg);
					}
					return;
				}
				if (resp.statusCode === 401) {
					uni.removeStorageSync('token');
					console.log("!!!!!!!!!!!!!!!!!!!!!!!! 请先登录");
					// TODO：强制返回首页或者登录页
					uni.reLaunch({
						url: configs.defaultPage
					});
				}
				if (typeof resp.data == 'string') {
					const msg = JSON.parse(resp.data).msg;
					uni.showToast({
						title: msg,
						icon: 'none'
					});
					reject(msg);
					return;
				}
				uni.showToast({
					title: resp.data.msg,
					icon: 'none'
				});
			},
			fail: function (resp) {
				resp.errMsg = "REQUEST FAILURED: HTTP CODE IS NOT EQUALS 200";
				if (isLoading) uni.hideLoading();
				if (resp.data.code === 401) {
					console.log("!!!!!!!!!!!!!!!!!!!!!!!! 请先登录");
					// TODO: 跳转到首页或登录页
					uni.reLaunch({
						url: configs.defaultPage
					})
				}
			}
		})
	});




};