import App from '@/App.vue';
import { mount } from '@vue/test-utils';

describe('App', () => {
    it('should find the button on the page', () => {
        const wrapper = mount(App);
        (wrapper.vm as any).setTitle();
        expect(wrapper.find('button').exists()).toBe(true);
    });
});
