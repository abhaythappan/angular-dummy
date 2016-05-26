/**
 * 
 */
var vehicle_manager = angular.module("vehicle-manager",["ngResource"]);
vehicle_manager.controller("vehicleCtrl",["$scope","$resource","$window",vehicleCtrl]);
function vehicleCtrl($scope, $resource, $window){
	this.vehicleId = "";
	this.vehicleName = "";
	this.vehicleType = "";
	
	this.getAllVehicles =  function(){
		var url = $window.location.href + "rest/vehicle-manager/vehicles"
		
		 var resource = $resource(url, null,
				    {
				        'fetch': { method:'GET' }
				    });
		
		return resource.fetch().$promise.then(function(data){
			console.log(data);
		},function(error){
			
		});
	};
	
	this.addVehicle = function() {
		var url = $window.location.href + "rest/vehicle-manager/vehicles"
		
		 var resource = $resource(url, null,
				    {
				        'add': { method:'POST' }
				    });
		var postData = { 'vehicleId' : this.vehicleId,
				         'vehicleName' : this.vehicleName,
				         'vehicleType' : this.vehicleType
				       };
		 resource.add(postData).$promise.then(function(data){
			console.log(data);
		});
		console.log("abhay");
		
	};
	
	this.updateVehicle = function(vehicleId) {
		var url = $window.location.href + "rest/vehicle-manager/vehicles/:vehicleId"
		var urlParams ={};
		urlParams.vehicleId = vehicleId;
		 var resource = $resource(url, null,
				    {
				        'update': { method:'PUT' }
				    });
		var postData = { 'vehicleId' : this.vehicleId,
				         'vehicleName' : this.vehicleName,
				         'vehicleType' : this.vehicleType
				       };
		return resource.update(urlParams,postData).$promise.then(function(data){
			console.log(data);
		});
	};
}