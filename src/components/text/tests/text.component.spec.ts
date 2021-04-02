import Text from '../text.component.vue';
import { mount } from '@vue/test-utils';

describe('Text', () => {
    it('should find the text on the page', () => {
        const wrapper = mount(Text);
        (wrapper.vm as any).setText();
        expect(wrapper.find('div').exists()).toBe(true);
    });
});
