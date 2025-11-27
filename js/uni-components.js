// Компоненты как в вашем приложении
const UniComponents = {
    install(Vue) {
        // Навбар компонент
        Vue.component('u-navbar', {
            props: ['title', 'bgColor', 'leftIcon', 'titleStyle', 'placeholder', 'autoBack'],
            template: `
                <div class="u-navbar">
                    <div v-if="placeholder" class="u-navbar__placeholder"></div>
                    <div class="u-navbar--fixed">
                        <div class="u-navbar__content" :style="{ backgroundColor: bgColor }">
                            <div class="u-navbar__content__left" @click="leftClick">
                                <slot name="left">
                                    <u-icon v-if="leftIcon" :name="leftIcon" :color="leftIconColor" :size="leftIconSize"></u-icon>
                                    <span v-if="leftText" class="u-navbar__content__left__text">{{ leftText }}</span>
                                </slot>
                            </div>
                            <div class="u-navbar__content__title" :style="titleStyle">{{ title }}</div>
                            <div class="u-navbar__content__right" @click="rightClick">
                                <slot name="right"></slot>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            methods: {
                leftClick() {
                    if (this.autoBack) history.back();
                    this.$emit('leftClick');
                },
                rightClick() {
                    this.$emit('rightClick');
                }
            }
        });

        // Иконка компонент
        Vue.component('u-icon', {
            props: ['name', 'color', 'size'],
            template: `<i class="u-icon" :style="{ color: color, fontSize: size + 'px' }">{{ getIconChar(name) }}</i>`,
            methods: {
                getIconChar(name) {
                    const icons = {
                        'order': '📋',
                        'clock-fill': '⏰',
                        'lock-opened-fill': '🔓',
                        'lock-fill': '🔒'
                    };
                    return icons[name] || '●';
                }
            }
        });

        // Loading компонент
        Vue.component('u-loading-icon', {
            props: ['textSize', 'color'],
            template: `
                <div class="u-loading-icon">
                    <div class="u-loading-icon__spinner" :style="{ borderTopColor: color }"></div>
                    <span class="u-loading-icon__text" :style="{ fontSize: textSize + 'px', color: color }">
                        <slot>加载中...</slot>
                    </span>
                </div>
            `
        });

        // Swiper компонент
        Vue.component('u-swiper', {
            props: ['current', 'vertical', 'autoplay', 'nextMargin'],
            template: `
                <div class="u-swiper">
                    <div class="u-swiper__wrapper">
                        <slot></slot>
                    </div>
                </div>
            `
        });

        Vue.component('u-swiper-item', {
            template: `<div class="u-swiper-item"><slot></slot></div>`
        });

        // Tabbar компонент
        Vue.component('tabbar', {
            props: ['thisPage'],
            template: `
                <div class="uni-tabbar">
                    <div class="uni-tabbar__bd">
                        <div v-for="tab in tabs" :key="tab.page" 
                             :class="['uni-tabbar__item', { 'uni-tabbar__item--active': thisPage === tab.page }]"
                             @click="$emit('change', tab.page)">
                            <div class="uni-tabbar__icon">
                                <i :class="tab.icon"></i>
                            </div>
                            <div class="uni-tabbar__label">{{ tab.text }}</div>
                        </div>
                    </div>
                </div>
            `,
            data() {
                return {
                    tabs: [
                        { page: 't1', text: '首页', icon: 'icon-home' },
                        { page: 't2', text: 'VIP', icon: 'icon-vip' },
                        { page: 't3', text: '赚钱', icon: 'icon-money' },
                        { page: 't4', text: '资金', icon: 'icon-fund' },
                        { page: 't5', text: '我的', icon: 'icon-mine' }
                    ]
                }
            }
        });

        // Popup компонент
        Vue.component('pop', {
            props: ['obj'],
            template: `
                <div v-if="obj && obj.show" class="pop-overlay">
                    <div class="pop-content">
                        <div class="pop-header">{{ obj.title }}</div>
                        <div class="pop-body">{{ obj.content }}</div>
                        <div class="pop-footer">
                            <button @click="$emit('close')">关闭</button>
                        </div>
                    </div>
                </div>
            `
        });
    }
};
