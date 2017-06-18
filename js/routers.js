var RouterPrincipal = Backbone.Router.extend({
	initialize: function(el){
			this.vistaInicio = new VistaInicio();
	},
	routes: {
		"": "inicio"
	},
	inicio : function(){
		this.vistaInicio.render();
	}
});

