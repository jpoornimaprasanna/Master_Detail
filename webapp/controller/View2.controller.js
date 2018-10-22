sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.Masterdetails.controller.View2", {

		noEmpAdded: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View1");
		},

		empAdded: function (oEvent) {

			var oName = this.getView().byId("name").getValue();
			var oStreetNo = this.getView().byId("streetNo").getValue();
			var oZip = this.getView().byId("zip").getValue();
			var oCountry = this.getView().byId("country").getValue();
			var oEmpId = this.getView().byId("empId").getValue();
			var oCurrency = this.getView().byId("currency").getValue();
			var oSalary = this.getView().byId("salary").getValue();
			//this.getView().byId()

			var obj = {
				name: oName,
				stretno: oStreetNo,
				zip: oZip,
				country: oCountry,
				empid: oEmpId,
				currency: oCurrency,
				salary: oSalary
			};
			var myArray = [];

			var oModel = this.getView().getModel("data1");
			for (var i = 0; i < oModel.oData.details.length; i++) {
				myArray.push(oModel.oData.details[i]);
			}
			myArray.push(obj);
			oModel.setProperty("/details", myArray);

			myArray = oModel.getProperty("/details", myArray);

			this.reset();

		},
		reset: function () {
			this.getView().byId("name").setValue('');
			this.getView().byId("streetNo").setValue('');
			this.getView().byId("zip").setValue('');
			this.getView().byId("country").setValue('');
			this.getView().byId("empId").setValue('');
			this.getView().byId("currency").setValue('');
			this.getView().byId("salary").setValue('');
		}

	});

});