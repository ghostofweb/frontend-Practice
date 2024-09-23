import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client) 
    }
    async createAccount({email,password,name}){
        try {
        const userAccount = await this.account.create(ID.unique(),email,password,name)
        if (userAccount) {
            //call another method if he create account successfully
            //then login
            return this.login({email,password})
        } else {
            return userAccount
        }
        } catch (error) {
            console.log("got error here", error);
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log("got error here", error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("got error here", error);
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("got error here", error);
        }
    }
}


const AuthService = new AuthService();

export default AuthService;
