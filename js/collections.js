var Clientes = Backbone.Collection.extend({
	model:Cliente,
	localStorage: new Backbone.LocalStorage("#listaClientes"),	
	sort_key: 'apellido',
	comparator: function(item){
		return item.get(this.sort_key);		
	},
	sortByField: function(fieldName){
		this.sort_key = fieldName;
		this.sort();
	}	
}); 
