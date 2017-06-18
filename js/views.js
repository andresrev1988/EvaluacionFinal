var routerPrincipal;
var VistaInicio = Backbone.View.extend({
	el: $('#contenedorVistas'),
	template: _.template($("#plantillaInicio").html()),
	events: {
		"click #btnVistaRegistrarCliente": function(evt){
			routerPrincipal.navigate("registrarCliente",{
				trigger: true
			});
		},
		"click #btnVistaListarClientes": function(evt){
			routerPrincipal.navigate("listarCliente", {
				trigger: true
			});
		}
	},
	render: function(){
		$(this.el).html(this.template());
		return this;
	}
});