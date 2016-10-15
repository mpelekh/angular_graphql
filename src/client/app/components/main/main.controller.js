class MainController {
    constructor($scope, MainService) {
        'ngInject';

        this._$scope = $scope;
        this._MainService = MainService;

        this.todoesItems = [];
    }

    async $onInit(){
        const self = this;
        const response = await self._MainService.getTodoesList('{items}');

        self.todoesItems = response.data.items;

        self._$scope.$apply();
    }
}

export default MainController;