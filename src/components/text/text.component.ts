// import { Options, Vue } from 'vue-class-component';
import Component from 'vue-class-component';
import Vue from 'vue';

// @Options({})
@Component
export default class Text extends Vue {
    text = '';
    setText() {
        this.text = 'Some text';
    }
}
