var Cliente = Backbone.Model.extend({
	defaults: {
		id:0,
		nombre:"",
		apellido:"",
		edad:0,
		telefono:"",
		email:""
	}
});
var cont_id=1;