var App = angular.module("SgRulesApp", ['ngSanitize']);

App.controller("SgRulesController", function($scope, $timeout)
{
	//$scope.allowed = ["a", "b"];
});


App.directive("calloutAllowDisallow", function()
{
	return {
		restrict: 'E',
		templateUrl: "controls/callout-allow-disallow.html",
		scope: true, // magic opaque config - without this all instances share the same scope which is clobbered by the final instance's init!
	};
});

App.directive("darkrpJobHeaderLine", function()
{
	return {
		restrict: 'E',
		templateUrl: "controls/darkrp-job-header-line.html",
		scope: true, // magic opaque config - without this all instances share the same scope which is clobbered by the final instance's init!
	};
});

App.directive("darkrpJobBubbleStrip1", function()
{
	return {
		restrict: 'E',
		templateUrl: "controls/darkrp-job-bubble-strip-1.html",
		scope: true, // magic opaque config - without this all instances share the same scope which is clobbered by the final instance's init!
	};
});
App.directive("darkrpJobBubbleStrip2", function()
{
	return {
		restrict: 'E',
		templateUrl: "controls/darkrp-job-bubble-strip-2.html",
		scope: true, // magic opaque config - without this all instances share the same scope which is clobbered by the final instance's init!
	};
});

App.directive("calloutBasicTable", function()
{
	return {
		restrict: 'E',
		templateUrl: "controls/callout-basic-table.html",
		scope: true, // magic opaque config - without this all instances share the same scope which is clobbered by the final instance's init!
		/*
		controller: function($scope)
		{
			var columnsHost = $("#ColumnsHost");
			
			function ManualLayout()
			{
				// irregular array transpose from: https://stackoverflow.com/a/53819317
				// babel-processed to es5 + requires Array.from polyfill
				// fuck javascript
				function transpose(input) {
					// get the length of the longest array
					var maxLen = input.reduce(function (max, _ref) {
						var length = _ref.length;
						return Math.max(max, length);
					}, 0);

					// make a new set of arrays
					return result = Array.from({
						length: maxLen
					}, function (_, i) {
						return input.map(function (col) {
							return col[i];
						});
					});
				}

				// Map col-major layout into row-major layout
				var cols = [];
				columnsHost.find("._calloutBasicTable_Col").each(function()
				{
					var rows = [];
					$(this).find("._calloutBasicTable_Row").each(function()
					{
						rows.push($(this));
					});
					cols.push(rows);
				});
				var rows = transpose(cols);
				
				// Resize all cells in each row to have the same height as the tallest cell
				rows.forEach(function(cols, index)
				{
					var maxHeight = 0;
					cols.forEach(function(cell, index)
					{
						maxHeight = Math.max(maxHeight, cell.height());
						console.log(cell.height(), cell.innerHeight());
					});
					cols.forEach(function(cell, index)
					{
						cell.height(maxHeight + "px");
					});
				});
				
			}
			
			// https://benalman.com/projects/jquery-resize-plugin/
			columnsHost.ready(function()
			{
				ManualLayout();
			});
			columnsHost.resize(function()
			{
				ManualLayout();
			});
		},*/
	};
});
