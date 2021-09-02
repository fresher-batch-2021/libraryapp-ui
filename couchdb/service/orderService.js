
class OrderService {
    static collectionName = "libraryapp_orders";

    static getDueDate() {

        const NO_OF_DAYS = 6;
        let dueDate = dayjs().add(NO_OF_DAYS, 'days').format('YYYY-MM-DD');
        return dueDate;
    }
    static async placeOrder(Obj) {
        const userObj = { _id: Obj.user._id, name: Obj.user.name };
        const bookObj = { _id: Obj.book._id, bookTitle: Obj.book.bookName };

        const data = {
            user: userObj,
            book: bookObj,
            orderDate: dayjs(),
            dueDate: this.getDueDate(),
            returnDate: null,
            status: 'ordered',
            fine:0

        }
        console.log(data);
        return await OrderDao.save(this.collectionName, data)
    }
    static async getAllOrders() {
        return OrderDao.findAll(this.collectionName);
    }
    //static async returnDate(orderId) {
    static async returnDate(obj) {
        const findOrder=await OrderDao.findOne(this.collectionName,obj)
        console.log(findOrder)
        let returnDate = dayjs();
        findOrder.returnDate=returnDate
        return await OrderDao.updateOne(this.collectionName, findOrder)
    }
    static getDiff(dueDate) {
        return dayjs().diff(dueDate, 'days')
    }

    static getRenewalDueDate(currentDueDate) {
        const RENEWAL_DAYS =3;
        return dayjs(currentDueDate).add(RENEWAL_DAYS, 'days').format('YYYY-MM-DD');
    }
    static async renewDate(Obj) {
        const findOrder=await OrderDao.findOne(this.collectionName,Obj)
        console.log(findOrder)
        const dif = this.getDiff(findOrder.dueDate)
        console.log(dif)
        if (dif <= 0) {
            findOrder.dueDate = this.getRenewalDueDate(findOrder.dueDate)
            findOrder.status = 'renewed'
        } else {
            console.log("you cant renew")
            //throw new Error("You cannot renew");
        }
        return await OrderDao.updateOne(this.collectionName, findOrder)

    }
    static async bookTaken(bookId){
       
        return OrderDao.isBookTaken(this.collectionName,bookId)
    }

   
}
