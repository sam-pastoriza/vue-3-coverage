// import { Options, Vue } from 'vue-class-component';
import Component from 'vue-class-component';
import Vue from 'vue';

// @Options({})
@Component
export default class Button extends Vue {
    title = '';
    setTitle() {
        this.title = 'Some title';
    }
}
