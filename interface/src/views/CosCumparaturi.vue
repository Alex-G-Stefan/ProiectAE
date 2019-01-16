<template>
<div class="container">
	<table id="cart" class="table table-hover table-condensed">
    				<thead>
						<tr>
							<th style="width:50%">Product</th>
							<th style="width:10%">Price</th>
							<th style="width:8%">Quantity</th>
							<th style="width:22%" class="text-center">Subtotal</th>
							<th style="width:10%"></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in order" :key=item.id>
							<td data-th="Product">
								<div class="row">
									<div class="col-sm-2 hidden-xs"><img :src="item.link" alt="..."/></div>
									<div class="col-sm-10 d-flex justify-content-center align-items-center">
										<h4 class="nomargin">{{item.nume}}</h4>
									</div>
								</div>
							</td>
							<td data-th="Price">{{item.pret}}</td>
							<td data-th="Quantity">
								<input type="number" class="form-control text-center" value="1">
							</td>
							<td data-th="Subtotal" class="text-center">{{item.pret}}</td>
							<td class="actions" data-th="">
								<button class="btn btn-info btn-sm"><i class="fas fa-sync"></i></button>
								<button class="btn btn-danger btn-sm" @click="deleteItemFromCart(item)"><i class="fas fa-trash-alt"></i></button>								
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="3" class="hidden-xs"></td>
							<td class="hidden-xs text-center"><strong>Total: {{total}}</strong></td>
							<td><a href="#" class="btn btn-success btn-block" @click="checkoutAction">Checkout<strong>></strong></a></td>
						</tr>
					</tfoot>
				</table>
</div>
</template>

<script>
	import { mapState, mapActions } from "vuex"
	export default {
    computed: { 
    	...mapState(['order','user']),
    	total() {
		return this.order.reduce((acc,val) => acc+val.pret, 0)
		},
    },
    methods: {
    	...mapActions(['checkout','deleteItemFromCart']),
    	checkoutAction()
    	{
    		this.checkout({ totalFactura: this.total, userRef: this.user.id, detaliiFactura: this.order });
			alert("Factura a fost salvata!");
		}
    }
};
</script>

<style scoped>
.table>tbody>tr>td, .table>tfoot>tr>td{
    vertical-align: middle;
}
@media screen and (max-width: 600px) {
    table#cart tbody td .form-control{
		width:20%;
		display: inline !important;
	}
	.actions .btn{
		width:36%;
		margin:1.5em 0;
	}
	
	.actions .btn-info{
		float:left;
	}
	.actions .btn-danger{
		float:right;
	}
	
	table#cart thead { display: none; }
	table#cart tbody td { display: block; padding: .6rem; min-width:320px;}
	table#cart tbody tr td:first-child { background: #333; color: #fff; }
	table#cart tbody td:before {
		content: attr(data-th); font-weight: bold;
		display: inline-block; width: 8rem;
	}
	
	
	
	table#cart tfoot td{display:block; }
	table#cart tfoot td .btn{display:block;}
	
}
</style>
