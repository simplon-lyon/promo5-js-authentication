import { User } from "./user";


/**
 * La classe UserModel a pour seul rôle d'aller chercher les User dans 
 * le localStorage et de stocker de nouveau User dans le localStorage
 */
export class UserModel {
    /**
     * La méthode addUser ajoute un nouvel utilisateur dans le localStorage
     * @param {User} user le nouvel utilisateur à ajouter
     */
    addUser(user) {
        //On crée un tableau vide
        let users = [];
        //On va chercher le contenu actuel du localStorage sous la clef users
        let allUsers = localStorage.getItem("users");
        //Si il y a quelque chose à cette clef du localStorage
        if(allUsers) {
            //On le parse et on le met dans la variable users
            users = JSON.parse(allUsers);
        }
        //Qu'on ait le tableau vide ou celui du localStorage, on push
        //le nouvel utilisateur dedans
        users.push(user);
        //On stock dans le localStorage la nouvelle valeur du tableau
        //à la clef users
        localStorage.setItem("users", JSON.stringify(users));
    }
}