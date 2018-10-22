sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageToast"
], function (Controller, JSONModel,Filter,FilterOperator,MessageToast) {
	"use strict";

	return Controller.extend("demo.Masterdetails.controller.View1", {
		onInit:function(){
			this.getView().setModel(new JSONModel(),"oDetail");
			this.getView().setModel(new JSONModel(),"oStateList");
			this.getView().getModel("oDetail").setProperty("/editable", false);
		},
	
		item: function(oevent){
			var obj = oevent.getParameters().listItem.getBindingContext("data1").getObject(),
			oDetails = this.getView().getModel("data1");
			oDetails.setProperty("/oForm", obj);
			this.getView.byId("combo").setSelcetedItem("/oForm/marriatalstate");
			
		},
		onChange : function(oEvent){
			var oitem= this.getView().getModel("list");
			var key = oEvent.getSource().getProperty("selectedKey");
			var oModel = this.getView().getModel("list").oData.stateList;
			for(var i=0;i< oModel.length;i++){
				if(key ===oModel[i].state ){
				 this.getView().byId("dist").setProperty("text","{list>/oModel[i].districts}") ;
					// this.getView().byId("dist").setProperty("key","{oModel[i].districts}") ;
				}
			}
		},
		
		cancel: function(){
			this.getView().byId("button3").setVisible(false);
			this.getView().byId("button1").setVisible(true);
			this.getView().byId("button2").setVisible(false);
		},
		 onSearch: function (event) {
            var olist = this.getView().byId("list1"),
            arr = [],
            binding,
            filters;
          
            filters = new Filter({
            	 filters : [ new Filter("name", FilterOperator.Contains,event.getSource().getValue()),
            		         new Filter("id", FilterOperator.Contains,event.getSource().getValue())
            		   ],
            		   and : false
            });
            
          //  var empId = new Filter("number", FilterOperator.Contains,event.getSource().getValue());
            binding = olist.getBinding("items");
            arr.push(filters);
           // arr.push(empId);
            binding.filter(arr);
            binding.filter(arr);
        },
        
        edit:function(oEvent){
        
			this.getView().getModel("oDetail").setProperty("/editable", true);
        	this.getView().byId("button1").setVisible(false);
			this.getView().byId("button2").setVisible(true);
			this.getView().byId("button3").setVisible(true);
		},
		
		addEmployee:function(oEvent){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2");
			
		},
		/*marriatalstate:function(){
			this.getView().getModel("oDetail").getProperty("details");
		},*/
		defaultDisplay: function () {
            var firstItem = this.getView().getModel("data1").getProperty("/details")[1];
                            // this.getView().byId("list1").setSelectedItem(firstItem,true);
            var jmodel = this.getView().getModel("data1");
                jmodel.setProperty("/oForm", firstItem);
        },
        onPressMoveToMasterAndDetail:function(){
        	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("employeeoverview");
        },
		
        Save: function(){
        	this.getView().byId("button3").setVisible(false);
			this.getView().byId("button1").setVisible(true);
			this.getView().byId("button2").setVisible(false);
            this.getView().getModel("oDetail").setProperty("/editable", false);
            
           // MessageToast.show(msg);
      
         var id = this.createId("abc");
        
         // create dialog lazily
         if (!this.oDialog) {
            // create dialog via fragment factory
            this.oDialog = sap.ui.xmlfragment(id, "demo.Masterdetails.fragement.life",this);
            this.getView().addDependent(this.oDialog);
         }
         this.oDialog.open();
      },
      popup:function(){
      	this.oDialog.close();
      	
      }
        
	});
});