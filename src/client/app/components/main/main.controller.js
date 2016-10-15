class MainController {
    constructor(MainService) {
        'ngInject';

        this._MainService = MainService;
    }

    async $onInit(){
        const self = this;
        const response = await self._MainService.getTodoesList('{items}');

        console.log('--- response', response);
    }
}

export default MainController;