

function search(){
    var input = document.getElementById('startSearch').value;
    var products = document.querySelectorAll(".product");
    
    for (var i=0; i<products.length; i++){
        var item = products[i].getElementsByTagName('h2')[0];
        var productName = item.innerHTML || item.textContent;
        if (productName.replace(" ", '').toLowerCase().indexOf(input.replace(" ", '').toLowerCase()) > -1){
            products[i].style.display = "";
        }
        else{
            products[i].style.display = "none";
        }
    }
}
