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
		"click #btnVistaListadoClientes": function(evt){
			routerPrincipal.navigate("listarClientes", {
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
				nombre:$("#nombre").val()
			});
			cliente.set({
				apellido:$("#apellido").val()
			});
			cliente.set({
				edad:$("#edad").val()
			});
			cliente.set({
				telefono:$("#telefono").val()
			});
			cliente.set({
				email:$("#email").val()
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
var VistaListadoClientes = Backbone.View.extend({
	el: $('#contenedorVistas'),
	template: _.template($("#plantillaListadoClientes").html()),
	events: {
		"click #btnSalir":function(evt){
			routerPrincipal.navigate("",{
				trigger:true
			});
		}
	},
	render:function(){
		$(this.el).html(this.template());
		this.collection.each(function(cliente){
			$("#listaClientes").append(
				'<tr><td>'+cliente.get("id")+'</td><td>'+
				cliente.get("nombre")+'</td><td>'+
				cliente.get("apellido")+'</td><td>'+
				'<a href=#mostrarCliente/'+cliente.get("id")+'>Mostrar</a></td><td>'+
				'<a href=#eliminarCliente/'+cliente.get("id")+'>Eliminar</a></td></tr>'
				);
		},this);
		return this;
	}
});