var autoComplete = angular.module('elsap-autoComplete',[]);

autoComplete.directive('autoComplete', function() {
    return {
        restrict: 'AE',
        require: '?ngModel',
        template: '<input type="text" name="{{inputname}}" class="{{inputclass}}" ng-model="inputField" style="float: left;" ng-required="{{isrequired}}" placeholder="{{placeholder}}"/> ' + 
                  '<div style="{{(divstyle) ? divstyle : \'position: relative; float: left; width: 400px;\'}}"></div>',
        scope: {
            inputname: '@',
            source: '=',
            isrequired: '@',
            inputclass: '@',
            divstyle: '@',
            placeholder: '@',
            onselect: '=',
            ngModel: '=',
            reset: '='
        },
        controller: function($scope) {
        },
        link: function(scope, elem, attr, ngModel) {
            if(typeof scope.source == 'function') {
                scope.lookup = scope.source();
            }

            if(typeof scope.source == 'object') {
                scope.lookup = scope.source;
            }

            scope.reset = function() {
                if(attr.ngModel) {
                    ngModel.$setViewValue('');
                }
                elem.find('input').val('');
            }

            elem.find('input').autocomplete({
                lookup: scope.lookup,
                appendTo: elem.find('div'),
                onSelect: function (suggestion) {
                    if(attr.ngModel) {
                        ngModel.$setViewValue(suggestion.data);
                    }

                    if(typeof scope.onselect == 'function') {
                        scope.onselect(suggestion);
                    }
                }
            });
        }
    };
});