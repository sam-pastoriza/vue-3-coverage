import { Options, Vue } from 'vue-class-component';
// import Component from 'vue-class-component';
// import Vue from 'vue';
import Button from './components/button/button.component.vue';

@Options({
    components: {
        Button,
    },
})
// @Component({
//     components: {
//         Button,
//     },
// })
export default class App extends Vue {
    text = '';
    setText() {
        this.text = 'Some text';
    }
}
