import App from '@/App.vue';
import { mount } from '@vue/test-utils';

describe('App', () => {
    it('should find the text on the page', () => {
        const wrapper = mount(App);
        (wrapper.vm as any).setText();
        expect(wrapper.find('div.text').exists()).toBe(true);
    });
});
