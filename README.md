# elsap-autoComplete
Directive for angularjs to add auto complete function in input text fields.

## Dependencies
The dependencies for this module are jQuery and [devbridge/jQuery-Autocomplete](https://github.com/devbridge/jQuery-Autocomplete). To make it easy, it is possible to download the [elsap-autocomplete.all.min.js](elsap-autocomplete.all.min.js) - the minified version of the module with the [jQuery-Autocomplete](https://github.com/devbridge/jQuery-Autocomplete) file from [devbridge](https://github.com/devbridge).

## How it works
The best way I found to transform the jQuery way into a more easy way for angular use was to make a directive that has as template a input text field and a div. The div is for the jQuery-Autocomplete use. 

## Parameters
These are the "parameters" that elsap-autoComplete accepts:

#### inputname 
* Description: The name of the input 
* Required: yes

### source
* Description: It can be either a object or a function that must follow the format bellow:
```
[{
  value: 'Suggestion 1',
  data: 1, // value to be submitted
},{
  value: 'Suggestion 1',
  data: 2, // value to be submitted
}]
```
The function doesn't receive any parameters and must return the object in the format above.
* Required: yes

### ng-model
* Description: You can use ng-model as if it was a normal input field. 
* Required: no

### isrequired
* Description: True/false value to validation purposes (it makes the input field of the directive's template required)
* Required: no

### inputclass
* Description: Class or classes to make the input field pretty
* Required: no 

### onselect
* Description: You can use this parameter to do something when the user selects a suggestion. 
```
function select(suggestion) {
  // suggestion is a object: {value: "Suggestion 1", data: 1}
}
``` 
* Required: no

### divstyle
* Description: Style to the div. The default is `position: relative; float: left; width: 400px;`
* Required: no

Add the module elsap-autoComplete to your angular module and use the auto-complete directive on a div or as a element. 

```
<div auto-complete inputname="Example" source="ObjSource" ng-model="Example" 
isrequired="true" inputclass="form-control col-md-10" onselect="selectFunc"></div>
```
```
<auto-complete inputname="Example" source="ObjSource" ng-model="Example" 
isrequired="true" inputclass="form-control col-md-10" onselect="selectFunc"></auto-complete>
```
