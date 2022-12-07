sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("Quickstart.App", {
      onPress: function () {
        MessageToast.show("Olá UI5!!!!");
        this.byId("app").to(this.byId("intro"));
      },

      onInit: function () {
        this.getView().setModel(
          new JSONModel({
            features: [
              "Kit de ferramentas da Web pronto para empresas",
              "Poderosos Conceitos de Desenvolvimento",
              "Controles de IU ricos em recursos",
              "Experiência de usuário consistente",
              "Código Livre e Aberto",
              "Responsivo em navegadores e dispositivos",
            ],
          })
        );
      },

      onChange: function (oEvent) {
        var bState = oEvent.getParameter("state");
        this.byId("ready").setVisible(bState);
      },
    });
  }
);
