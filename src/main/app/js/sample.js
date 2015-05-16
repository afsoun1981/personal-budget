define(['angular'], function(angular) {
    console.log('sample');

	var module = angular.module('tutorial4.sample', [])
	.controller('SampleCtrl', [function() {
		this.value = 'reza';

        this.gridOptions1 = {
            enableSorting: false,
            columnDefs: [
                { field: 'firstName' },
                { field: 'lastName' },
                { field: 'company' },
                { field: 'employed' }
            ],
            onRegisterApi: function( gridApi ) {
                this.grid1Api = gridApi;
            }
        };

        this.gridOptions1.data = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "employed": true
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "employed": false
            }
        ];
	}]);
	
	return module;
});