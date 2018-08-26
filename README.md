# eleven-react - REACT

## Note :

Ce projet est destiné à être utilisé avec l' [API REST Symfony 4](https://github.com/Vubs/eleven-react)
Vous trouverez les informations pour installer ce second projet sur son Repo.

## Installation

Pour utiliser vous devez d'abord installer docker

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

Après avoir cloné le projet, utiliser la commande suivante à la racine du projet:

```
docker image build -t react:app .
```
ne pas oublier le "."

Une fois le Dockerfile du projet buildé, nous avons besoin d'un port de Websocket pour le Warm realoading du projet

```
docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd):/app react:app
```

## Accès au projet:
On peut maintenant accéder au projet avec localhost:3000


## Endpoints

L'application fetch les données du projet Symfony qui doit lui aussi être buildé.
* La page d'accueil fait une rêquete GET sur la route **/api/characters** et affiche tous les personnages.
* Cliquer sur le bouton d'une card permet d'effectuer une requete GET sur **/api/characters/[idDuPerso]** et affiche le perso.
* Le formulaire permet quand à lui d'effectuer une requete POST sur **/api/characters** qui a pour effet d'ajouter un perso dans la liste
