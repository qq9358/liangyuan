<template>
	<view class="view-index">
		<view class="view-nav">
			<view class="nav-left">
				<view class="nav-logo"><img :src="logoUrl" class="logo-img" /></view>
				<view class="place-title">
					<view class="place-title-name">佛 山 梁 园</view>
					<view class="place-title-explain">清代粤中四大名园之一</view>
				</view>
			</view>
			<view class="nav-right">{{ langName }}</view>
		</view>
		<view class="gradient-view">
			<view class="tui-banner-box" :style="{ height: swipeHeight + 'px' }">
				<swiper
					:autoplay="true"
					:interval="5000"
					:duration="150"
					class="tui-banner-swiper"
					:circular="true"
					indicator-color="rgba(255, 255, 255, 0.8)"
					indicator-active-color="#fff"
				>
					<swiper-item v-for="(item, index) in images" :key="index"><image :src="item" class="tui-slide-image" mode="scaleToFill" /></swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
import dayjs from 'dayjs';
import { mapState, mapMutations } from 'vuex';
import { mobileMixin } from '@/mixins/mobileMixin.js';
import ticketTypeService from '@/services/ticketTypeService.js';
import scenicService from '@/services/scenicService.js';
import settingService from '@/services/settingService.js';
import memberService from '@/services/memberService.js';
import toastHelper from '@/utils/toastHelper.js';
import iLogo from './image/logo.png';

const today = dayjs();
const tomorrow = dayjs().addDays(1);
export default {
	mixins: [mobileMixin],
	props: {
		publicSaleFlag: {
			type: [Boolean, String],
			default: true
		}
	},
	data() {
		return {
			swiper: {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			},

			scenic: {},
			origin: 'http://localhost:8080',
			shareImgUrl: '',
			groundId: 1,
			swipeHeight: 150,
			images: [],
			logoUrl: iLogo,
			langName: 'English'
		};
	},
	computed: {
		i18nText() {
			return this.$t('tabBar.index0');
		}
	},
	async onLoad(option) {
		this.$i18n.locale = 'en';

		if (process.env.NODE_ENV === 'development') {
			option = {
				code: ''
			};
		}
		/* #ifndef MP */
		await memberService.loginFromWeChatAsync({
			code: option.code,
			state: ''
		});
		/* #endif */
		/* #ifdef MP */
		await memberService.loginFromMiniAsync();
		/* #endif */
		let systemInfo = uni.getSystemInfoSync();
		this.swipeHeight = (systemInfo.screenWidth / 640) * 360;

		await settingService.getSettingsFromWeChatAsync();

		const getScenicTask = scenicService
			.getScenicAsync()
			.then(scenic => {
				if (scenic.photoList && scenic.photoList.length > 0) {
					this.images = scenic.photoList.map(p => p.url);
					this.shareImgUrl = this.images[0];
				}

				if (scenic.openTime && scenic.closeTime) {
					const today = dayjs().toDateString();
					const openTime = dayjs(`${today} ${scenic.openTime}:00`);
					const closeTime = dayjs(`${today} ${scenic.closeTime}:00`);
					const now = dayjs();
					if (now.isBefore(openTime)) {
						scenic.openText = `未开园 ${scenic.openTime}开园`;
					} else if (now.isBetween(openTime, closeTime)) {
						scenic.openText = `开放中 ${scenic.closeTime}闭园`;
					} else {
						scenic.openText = `已闭园 明日${scenic.openTime}开园`;
					}
				}

				this.scenic = scenic;
				this.setPageLabelMainText(this.scenic.pageLabelMainText);
			})
			.then(() => {
				let shareUrl = `${this.origin}/tickettype/${this.publicSaleFlag}`;
				if (this.groundId) {
					shareUrl += `?groundId=${this.groundId}`;
				}
				// settingService.configWxJsApi().then(() => {
				// 	settingService.configWxShareUrl(shareUrl, this.shareImgUrl);
				// });
			});

		try {
			await Promise.all([getScenicTask]);
			this.pageLoaded = true;
		} finally {
		}
	},
	methods: {
		onBook() {
			uni.navigateTo({
				url: '../ticket/buy-ticket'
			});
		},
		...mapMutations(['setGroundId', 'setPageLabelMainText'])
	}
};
</script>

<style lang="scss">
.view-index {
	font-size: 14px;
	background-color: #efefef;

	.view-nav {
		background: #d7ab7e;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #ffffff;
		.nav-left {
			display: flex;
			align-items: center;
			.place-title {
				line-height: 1;
				.place-title-name {
					font-size: 17px;
					font-weight: bold;
					padding: 0px 0px 3px 12px;
				}
				.place-title-explain {
					font-size: 12px;
					transform: scale(0.8);
				}
			}
			.nav-logo {
				width: 31px;
				height: 31px;
				padding: 0px 0px 0px 10px;
				.logo-img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.nav-right {
			padding: 0px 22px 0px 0px;
			font-size: 20px;
		}
	}
}
</style>

<style>
.tui-banner-box {
	width: 100%;
	/* padding: 0 30rpx; */
	box-sizing: border-box;
	// position: absolute;
	/* overflow: hidden; */
	z-index: 99;
	bottom: -80rpx;
	left: 0;
}

.tui-slide-image {
	width: 100%;
	height: 100%;
	display: block;
	/* padding: 16rpx 30rpx 0px 30rpx; */
}

.tui-banner-swiper {
	width: 100%;
	height: 100%;
	/* border-radius: 12rpx; */
	overflow: hidden;
	transform: translateY(0);
}

/* #ifdef MP-WEIXIN */
.tui-banner-swiper .wx-swiper-dot {
	width: 8rpx;
	height: 8rpx;
	display: inline-flex;
	background: none;
	justify-content: space-between;
}

.tui-banner-swiper .wx-swiper-dot::before {
	content: '';
	flex-grow: 1;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 16rpx;
	overflow: hidden;
}

.tui-banner-swiper .wx-swiper-dot-active::before {
	background-color: #fff;
}

.tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
	width: 16rpx;
}

/* #endif */

/* #ifndef MP-WEIXIN */
>>> .tui-banner-swiper .uni-swiper-dot {
	width: 8rpx;
	height: 8rpx;
	display: inline-flex;
	background-color: none;
	justify-content: space-between;
}

>>> .tui-banner-swiper .uni-swiper-dot::before {
	content: '';
	flex-grow: 1;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 16rpx;
	overflow: hidden;
}

>>> .tui-banner-swiper .uni-swiper-dot-active::before {
	background-color: #fff;
}

>>> .tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
	width: 16rpx;
}

/* #endif */
</style>
