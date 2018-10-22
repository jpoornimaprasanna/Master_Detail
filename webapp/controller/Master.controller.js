sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.Masterdetails.controller.Master", {
		onPressItem: function(oEvent){
			var oValue = this.getView();
			var obj = oEvent.getParameters().listItem.getBindingContext("fruits").getObject();
			var oDetails = this.getView().getModel("fruits");
			oDetails.setProperty("/fruitData", obj);
			//this.getView.byId("combo").setSelcetedItem("/oForm/marriatalstate");
		}
			
	
	});

});