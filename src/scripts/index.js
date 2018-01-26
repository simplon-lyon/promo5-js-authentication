import '../scss/index.scss';
import { User } from "./user";
import { UserModel } from "./user-model";
//Pour tester notre modèle :
//on crée une instance de User
let mrToto = new User("toto", "tata", new Date(), "toto@gmail.com", "pass");
//On crée une intance de UserModel
let model = new UserModel();

console.log(localStorage);
//On ajoute le user via la méthode addUser du UserModel
model.addUser(mrToto);

console.log(localStorage);
// On récupère notre user fraichement créé.
console.log(model.getUserByLogin(mrToto.email,mrToto.password));

// Lorsqu'on n'a pas d'user correspondant à l'email et au mot de passe, on reçoit undefined.
console.log(model.getUserByLogin("no@boby.com", "securepassword"));
// on change les données de l'user
model.updateUser(mrToto.email, "hello", "world", new Date("12/30/2010"), "newPassword");
console.log(model.getUserByLogin(mrToto.email, "newPassword"));
// on supprime l'user
model.deleteUser(mrToto.email);
console.log(model.getUserByLogin(mrToto.email, "newPassword"));

