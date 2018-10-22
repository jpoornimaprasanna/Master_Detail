sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.Masterdetails.controller.ParentView", {

		onClick: function (oEvent) {
			
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("View1");          
		},
		onAfterRendering: function(){
			//this.byId("height").setWidth("200");
		}

	});

});