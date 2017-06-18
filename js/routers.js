var RouterPrincipal = Backbone.Router.extend({
	initialize: function(el){
			this.clientes = new Clientes();
			this.vistaInicio = new VistaInicio();
			this.vistaRegistroCliente = new VistaRegistroCliente();
	},
	routes: {
		"": "inicio",		
		"registrarCliente":"mostrarRegistroCliente"
	},
	inicio : function(){
		this.vistaInicio.render();
	},
	mostrarRegistroCliente : function(){
		this.vistaRegistroCliente.render();
		$("#id").val(cont_id);
	}
});

