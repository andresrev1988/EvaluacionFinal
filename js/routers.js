var RouterPrincipal = Backbone.Router.extend({
	initialize: function(el){
			this.clientes = new Clientes();
			this.vistaInicio = new VistaInicio();
			this.vistaRegistroCliente = new VistaRegistroCliente();
			this.vistaListadoClientes = new VistaListadoClientes({
				collection: this.clientes
			});
	},
	routes: {
		"": "inicio",		
		"registrarCliente":"mostrarRegistroCliente",		
		"listarClientes":"mostrarListadoClientes",
		"mostrarCliente/:idCliente": "mostrarCliente",
		"eliminarCliente/:idCliente": "eliminarCliente"
	},
	inicio : function(){
		this.vistaInicio.render();
	},
	mostrarRegistroCliente : function(){
		this.vistaRegistroCliente.render();
		$("#id").val(cont_id);
	},
	mostrarListadoClientes : function(){
		this.vistaListadoClientes.render();
	},
	mostrarCliente : function(idCliente){
		var cliente = this.vistaListadoClientes.collection.findWhere({
			id: idCliente
		});
		$("#detalleID").val(cliente.get('id'));
		$("#detalleNOMBRE").val(cliente.get('nombre'));
		$("#detalleAPELLIDO").val(cliente.get('apellido'));
		$("#detalleEDAD").val(cliente.get('edad'));
		$("#detalleTELEFONO").val(cliente.get('telefono'));
		$("#detalleEMAIL").val(cliente.get('email'));
		$("#modalMostrarCliente").modal('show');
	},
	eliminarCliente : function(idCliente){
		this.model.destroy();
	}

});

