class UserServices {

    static collectionName = "libraryapp_users";

    static async getUsers() {
        return RestService.findAll(this.collectionName);
    }

    static async register(userObj) {
        //assign role
        if (!userObj.role) {
            userObj.role = "USER";
        }
        return RestService.save(this.collectionName, userObj);
    }

    static async register(userObj) {
        const criteria = {
            selector: {
                email: userObj.email
            },
            fields: ["_id", "name", "email", "role"]
        }
        const results = await RestService.query(this.collectionName, criteria);
        console.log(results.length)
        if(results.length!=1){
        return RestService.save(this.collectionName, userObj);
        }
        else{
            throw new Error('Already existing user')
        }
    }
    static async login(email, password, role = "USER") {
        const criteria = {
            selector: {
                email: email,
                password: password,
                role: role
            },
            fields: ["_id", "name", "email", "role"]
        }
        const results = await RestService.query(this.collectionName, criteria);
        console.log(results)
        return results.length > 0 ? results[0] : null;
    }

    static async getUser(id) {

        return RestService.findOne(this.collectionName, id);

    }

    static async deleteUser(id) {

        return RestService.deleteOne(this.collectionName, id);

    }

    static async updatePassword(userObj) {
        let updateObj = {
            _id: userObj._id,
            password: userObj.password
        }
        return RestService.update(this.collectionName, updateObj);
    }
    static userDetails(){
        const userStr = localStorage.getItem("user");
        return JSON.parse(userStr);
    
    }
}