import Button from '../button.component.vue';
import { mount } from '@vue/test-utils';

describe('Button', () => {
    it('should find the button on the page', () => {
        const wrapper = mount(Button);
        (wrapper.vm as any).setTitle();
        expect(wrapper.find('button').exists()).toBe(true);
    });
});
