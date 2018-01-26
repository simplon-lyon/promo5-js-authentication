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
        if (allUsers) {
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
    /**
     * La méthode getuserByLogin retourne un utilisateur à partir de ses infos de login.
     * @param {String} email 
     * @param {String} password 
     */
    getUserByLogin(email, password) {
        // on récupère le contenu du localStorage puis on parse le JSON pour obtenir le tableau JS contenant les users
        let userList = JSON.parse(localStorage.getItem('users'));
        // pour chaque user...
        for (let index = 0; index < userList.length; index++) {
            // ... on vérifie que l'email et le mot de passe correspond à ceux passés à la méthode.
            if (userList[index].email === email && userList[index].password === password) {
                // si on trouve un user qui correspond à l'email et au mot de passe, on le retourne.
                return userList[index];
            }
        }
        // si aucun user n'a été trouvé, on retourne undefined
        return undefined;
    }
    deleteUser(email){
        let userList = JSON.parse(localStorage.getItem('users'));
        
        for (let index = 0; index < userList.length; index++) {
           
            if (userList[index].email === email){
                userList.splice(index,1);
                break;
            }
        }
        localStorage.setItem('users',JSON.stringify(userList));
    }
}