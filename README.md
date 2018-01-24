# promo5-js-authentication
A javascript project using Webpack, OOP and MVC structure for a client side authentication (not secured)


Le but du projet est de faire une petite page d'inscription et une page de connexion avec stockage des utilisateurs en localStorage, en utilisant webpack, bootstrap et moment.js

Commencez par récupérer le starter-webpack-sass sur simplon-lyon pour l'utiliser comme base de travail.

I. Le Modèle
1) Créer un fichier user.js dans lequel mettre la classe User qui aura en propriété un name, un surname, une birthdate, un mail et un password
2) Créer un autre fichier model-user.js dans lequel mettre la classe ModelUser qui aura comme méthode getUserByLogin(mail, pass) et addUser(user) (ce fichier devra faire un import de la classe User)
3) Faire les méthode en question, le get by login doit en gros aller chercher la liste d'utilisateurs stockée dans le localStorage (si celle ci existe), convertir cette liste en objet javascript via un JSON.parse puis vérifier dans la liste si un utilisateur correspond au couple mail / pass donné en argument de la méthode
4) La méthode addUser va récupérer la liste des utilisateurs stockée en localStorage,  si elle existe, la parse avec JSON.parse, puis ajoute le nouvel utilisateur au tableau, avant de faire un JSON.stringify du tableau puis de le remettre dans le localStorage
5) Testez ces méthodes sans affichage via le index.js (faire dans ce fichier une instance de ModelUser, et faire un addUser d'une instance de User etc.)

Bonus optimisation : 
On remarque que les deux méthodes du ModelUser commencent par aller chercher le contenu du localStorage puis le convertissent en tableau javascript, ce comportement peut sans doute être externalisée dans une autre méthode voir même être fait au moment de l'instanciation du Model ?