import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/v1/producto';

class ProductoService {
    getAllProducts() {
        return axios.get(BASE_URL);
    }
    getProductById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }
    createProduct(producto) {
        return axios.post(BASE_URL, producto);
    }
    updateProduct(id, producto) {
        return axios.put(`${BASE_URL}/${id}`, producto);
    }
    deleteProduct(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}
export default new ProductService();