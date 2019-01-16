<template>
    <div class="container display:block justify-content-center" >
    <div class="display:block;">
    <div class="col-12">
        <div class="invoice-title text-left">
            	<h2>Invoice </h2>
            <h3 class="float-right">Order # {{id}}</h3>
        </div>
        <hr>
        <div class="row">
            <div class="col-6 text-left">	<address>
    				<strong>Billed To:</strong><br>
    					{{userRef.nume}}<br>
    					{{userRef.adresa}}<br>
    				</address>
            </div>
            <div class="col-6 text-right">	<address>
        			<strong>Shipped To:</strong><br>
    					{{userRef.nume}}<br>
    					{{userRef.adresa}}<br>
    				</address>
            </div>
        </div>
        <div class="row">
            <div class="col-6 text-left">	<address>
    					<strong>Payment Method:</strong><br>
    					Visa ending **** 4242<br>
    					{{userRef.email}}
    				</address>
            </div>
            <div class="col-6 text-right">	<address>
    					<strong>Order Date:</strong><br>
    					{{dataFactura}}<br><br>
    				</address>
            </div>
        </div>
    </div>
</div>
    
    <div class="display:block;">
    	<div class="col-md-12">
    		<div class="panel panel-default">
    			<div class="panel-heading">
    				<h3 class="panel-title text-left"><strong>Order summary</strong></h3>
    			</div>
    			<div class="panel-body">
    				<div class="table-responsive">
    					<table class="table table-condensed">
    						<thead>
                                <tr>
        							<td class="text-left"><strong>Item</strong></td>
        							<td class="text-center"><strong>Price</strong></td>
        							<td class="text-center"><strong>Quantity</strong></td>
        							<td class="text-right"><strong>Totals</strong></td>
                                </tr>
    						</thead>
    						<tbody>
    							<!--<div style="width:100%" v-for="item in detaliiFactura" :key="item.id">-->
    							<tr style="width:100%" v-for="item in detaliiFactura" :key="item.id">
    								<td class="text-left">{{item.nume}}</td>
    								<td class="text-center">{{item.pret}} RON</td>
    								<td class="text-center">1</td>
    								<td class="text-right">{{item.pret}} RON</td>
    							</tr>
    							<!--</div>-->
    						</tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</div>
</template>

<script>
export default {
  name: "Factura",
  props: {
    id: Number,
    dataFactura: String,
    totalFactura: Number,
    userRef: Object,
    detaliiFactura: Array
  }
};
</script>

<style scoped type="text/css">
    .invoice-title h2, .invoice-title h3 {
    display: inline-block;
}

.table > tbody > tr > .no-line {
    border-top: none;
}

.table > thead > tr > .no-line {
    border-bottom: none;
}

.table > tbody > tr > .thick-line {
    border-top: 2px solid;
}

</style>