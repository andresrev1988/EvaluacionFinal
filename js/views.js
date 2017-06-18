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
var VistaRegistroCliente = Backbone.View.extend({
	el: $('#contenedorVistas'),
	template: _.template($("#plantillaRegistroCliente").html()),
	events: {
		"click #btnSalir": function(evt){
			routerPrincipal.navigate("",{
				trigger:true
			});
		},
		"click #btnRegistrarCliente":function(evt){
			evt.preventDefault();
			var cliente = new Cliente();
			cliente.set({
				id:$("#id").val()
			});
			cliente.set({
				id:$("#nombre").val()
			});
			cliente.set({
				id:$("#apellido").val()
			});
			cliente.set({
				id:$("#edad").val()
			});
			cliente.set({
				id:$("#telefono").val()
			});
			cliente.set({
				id:$("#email").val()
			});
			routerPrincipal.clientes.add(cliente);
			alert("Cliente registrado con Exito!!!");
			cont_id++;
			$("#id").val(cont_id);
			$("#nombre").val("");
			$("#apellido").val("");
			$("#edad").val("");
			$("#telefono").val("");
			$("#email").val("");
		}
	},
	render: function(){
		$(this.el).html(this.template());
		return this;
	}
});