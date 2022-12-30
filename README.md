# API-rest-Foot

# Comment installer l'API NESTJS
# Comment cloner cette application ReactJS sur votre machine
    Faites un clique droit dans vos documents puis selectionner `git bash here` 
    Copier/Coller ce lien (https://github.com/Stanchpt/API-rest-Foot.git) sur l'invite de commande
    précéder de git clone.
    Ce qui donnerait "git clone https://github.com/Stanchpt/API-rest-Foot.git"

# Installer l'environnement de travail
    Avant tout chose, il vous faut un logiciel de gestion de base de donnée comme 
    WAMP, XAMPP, etc...
    Créer une table "foot-2022" et importer le fichier SQL situé dans le fichier 'bdd'.
    Une fois ceci fait vous  pouvez passer à la prochine étape.

### `npm install | npm update`  
    Ouvrer le dossier sur un editeur de code (ex : Visual studio code)
    Ouvrer une invite de commande et utiliser la commande `npm install` ou `yarn install` 
    afin d'installer les modules/dépendances node. Une fois celle-ci terminé...
    Vous pouvez lancer le project grâce à cette même invite de commande en utilisant la commande 
    `npm start` ou `yarn start` 

# Bonne utilisation de l'API. 
    Celle-ci une fois lancée, est utilisable avec mon application ReactJS.
    Cliquez-ici pour l'installer :
    (https://github.com/Stanchpt/Appli-React-Foot)

# Les routes disponibles sur cette API

### `http://localhost:3000`  
    
    ### 'Equipe_nationale'
        /Equipe_nationale, POST
        /Equipe_nationale, GET
        /Equipe_nationale/:id, GET
        /Equipe_nationale/:id, PUT
        /Equipe_nationale/:id, DELETE

    ### 'Club'
        /Club, POST
        /Club, GET
        /Club/:id, GET
        /Club/:id, PUT
        /Club/:id, DELETE

    ### 'Players'
        /players, POST
        /players, GET
        /players/:id, GET
        /players/:equipe, GET
        /players/:id, PUT
        /players/:id, DELETE
    
    ### 'Competition'
        /competition, POST
        /competition, GET
        /competition/:id, GET
        /competition/:nom, GET
        /competition/:id, PUT
        /competition/:id, DELETE

    ### 'Matchs'
        /matchs, POST
        /matchs, GET
        /matchs/:id, GET
        /matchs/:competition, GET
        /matchs/:id, PUT
        /matchs/:id, DELETE
    