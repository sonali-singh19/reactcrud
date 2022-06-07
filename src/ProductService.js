import axios from "axios";
const PRODUCT_API_BASE_URL = 'http://localhost/api/product'

class ProductService {
   
    getAllProducts(){
        return axios.get(PRODUCT_API_BASE_URL+'/read.php');
    }
    
    createProduct(product){
        return axios.post(PRODUCT_API_BASE_URL+'/create.php', product);
    }

    deleteProduct(deleteObj){
        return axios.post(PRODUCT_API_BASE_URL+'/delete.php', deleteObj)
    }
}

export default new ProductService();
