sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.logaligroup.MyFirstProject.controller.View1", {
		onInit: function () {

		},

		onValidate: function () {

			var inputEmployee = this.byId("inputEmployee");
			var valueEmployee = inputEmployee.getValue();
            
            //var varName = this.byId("inputEmployee").getValue().length;
            
			if (valueEmployee.length === 6) {
				inputEmployee.setDescription("OK");
			} else {
				inputEmployee.setDescription("KO");
			}
		}
	});
});