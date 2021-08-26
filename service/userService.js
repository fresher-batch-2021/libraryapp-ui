class UserService{
    static register(data){
        const url = "https://libraryapp-node-api.herokuapp.com/users/addUser";
return axios.post(url,data);
    }
    static login(data){
        const url ='https://libraryapp-node-api.herokuapp.com/users/login';
        return axios.post(url,data);
    }
    static allBooks(){
        const url ='https://libraryapp-node-api.herokuapp.com/book/get-all-books?status=Active';
        return axios.post(url)
    }

    static loadBook(id){
        const url =('https://libraryapp-node-api.herokuapp.com/book/get-book-by-id/' + id);
        return axios.get(url);
    }
    static orderBook(Obj){
        const url='https://libraryapp-node-api.herokuapp.com/order/place-orders/'
        return axios.post(url,Obj)
    }
    static orderDetails(userId){
        const url=('https://libraryapp-node-api.herokuapp.com/order/order-details/'+userId)
        return axios.get(url);
    }
    static returnBook(bid,uid){
        const url=`https://libraryapp-node-api.herokuapp.com/order/return-book/${uid}/${bid}`
        return axios.patch(url)
    }
    static renewBook(bid,uid){
        const url=`https://libraryapp-node-api.herokuapp.com/order/renew-date/${uid}/${bid}`
        return axios.patch(url)
    }
    static addRequest(obj){
        const url='http://localhost:8000/request/add-request'
        return axios.post(url)
    }
    static getRequestedBooks(){
    const url='http://localhost:8000/request/all-requests'
return axios.get(url)
    }
    static userDetails(){
        const userStr = localStorage.getItem("user");
        const user = JSON.parse(userStr);
        return user
    }
}