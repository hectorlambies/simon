'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function ($scope) {
  	$scope.colores = [];
  	$scope.titulo = 'simon'
  	$scope.play = function(color){
  		$scope.colores.push(color);
  	}
  	$scope.limpiar = function(clear){
  		$scope.colores = [];
  	}
  	
			
			
		})
;

