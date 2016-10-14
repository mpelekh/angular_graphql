import angular from 'angular';
import MainComponent from './main.component';
import TodoesListComponent from './todoes.list/todoes.list.component';

const mainModule = angular
    .module('app.main', [])
    .component('main', MainComponent)
    .component('todoesList', TodoesListComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url     : '/',
                component: 'main'
            });
    })
    .name;

export default mainModule;
