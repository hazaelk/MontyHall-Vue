/* entry point do webpack do vue, nome: "main" do arquivo obrigatório */
import Vue from 'vue';
import App from './App';

// Vue instance
new Vue({
    /* FORMA NORMAL */
        // vai no arquivo index, na pasta public e injeta lá
        //el: '#app',
        // render(createElement) {
        //     return createElement(App)
        // }
    /* FORMA PRO */
    render: h => h(App)
}).$mount("#app")