-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 28 déc. 2022 à 17:36
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `foot-2022`
--

-- --------------------------------------------------------

--
-- Structure de la table `club`
--

DROP TABLE IF EXISTS `club`;
CREATE TABLE IF NOT EXISTS `club` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `Surnom` varchar(255) NOT NULL,
  `Pays` varchar(255) NOT NULL,
  `Championnat` varchar(255) NOT NULL,
  `Continent` varchar(255) NOT NULL,
  `logo_team` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `club`
--

INSERT INTO `club` (`id`, `nom`, `Surnom`, `Pays`, `Championnat`, `Continent`, `logo_team`) VALUES
(1, 'Paris Saint-Germain', 'Les Parisiens', 'France ', 'Ligue 1', 'Europe', 'https://upload.wikimedia.org/wikipedia/fr/archive/8/86/20180528182813%21Paris_Saint-Germain_Logo.svg');

-- --------------------------------------------------------

--
-- Structure de la table `competition`
--

DROP TABLE IF EXISTS `competition`;
CREATE TABLE IF NOT EXISTS `competition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `Annee` int(11) NOT NULL,
  `nb_equipe` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `url_info` varchar(255) NOT NULL,
  `url_image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `competition`
--

INSERT INTO `competition` (`id`, `nom`, `Annee`, `nb_equipe`, `type`, `region`, `url_info`, `url_image`) VALUES
(1, 'Coupe du monde au Qatar', 2022, 32, 'Interationale', 'World', 'https://fr.wikipedia.org/wiki/Coupe_du_monde_de_football_2022', 'https://www.topmercato.com/wp-content/uploads/2021/03/coupe-du-monde-2022-mondial-ilustration-qatar-1.jpg'),
(2, 'Ligue 1 - Uber Eats', 2022, 20, 'Nationale', 'Europe', 'https://www.ligue1.fr/', 'https://www.asse.fr/img/content/2020/06/nouvelle-identite-pour-la-ligue-1--652623868.jpg'),
(3, 'Ligue 2 BKT', 2022, 20, 'Nationale', 'Europe', 'https://www.ligue2.fr/', 'https://fmslife.fr/uploads/default/original/3X/d/d/dd885b4d075a01ab2b3e7aeb9ee3851eb64fc544.png');

-- --------------------------------------------------------

--
-- Structure de la table `equipe_nationale`
--

DROP TABLE IF EXISTS `equipe_nationale`;
CREATE TABLE IF NOT EXISTS `equipe_nationale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `Surnom` varchar(255) NOT NULL,
  `Pays` varchar(255) NOT NULL,
  `Continent` varchar(255) NOT NULL,
  `id_fifa` varchar(4) NOT NULL,
  `logo_team` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `equipe_nationale`
--

INSERT INTO `equipe_nationale` (`id`, `nom`, `Surnom`, `Pays`, `Continent`, `id_fifa`, `logo_team`) VALUES
(1, 'Equipe de France', 'Les bleus', 'France', 'Europe', 'FRA', 'https://static.weezbe.com/planetbonbons/Images/products/p_564G_220130220504.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `matchs`
--

DROP TABLE IF EXISTS `matchs`;
CREATE TABLE IF NOT EXISTS `matchs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Adv1` varchar(255) NOT NULL,
  `Adv2` varchar(255) NOT NULL,
  `competition` varchar(255) NOT NULL,
  `stade_competition` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `heure` int(11) NOT NULL,
  `img_match` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `matchs`
--

INSERT INTO `matchs` (`id`, `Adv1`, `Adv2`, `competition`, `stade_competition`, `date`, `heure`, `img_match`) VALUES
(1, 'France ', 'Angleterre ', 'Coupe du monde', 'Quart de finale', '2022-12-10', 20, 'https://www.stakecheia.com/wp-content/uploads/2022/11/Copa-do-Mundo-1.jpg'),
(2, 'Maroc', 'Portugal', 'Coupe du monde', 'Quart de finale', '2022-12-10', 16, 'https://www.stakecheia.com/wp-content/uploads/2022/11/Copa-do-Mundo-1.jpg'),
(3, 'Argentine ', 'Croatie', 'Coupe du monde', 'Demi-finale', '2022-12-13', 20, 'https://www.stakecheia.com/wp-content/uploads/2022/11/Copa-do-Mundo-1.jpg'),
(4, 'France', 'Maroc', 'Coupe du monde', 'Demi-Finale', '2022-12-14', 20, 'https://www.stakecheia.com/wp-content/uploads/2022/11/Copa-do-Mundo-1.jpg'),
(5, 'Croatie', 'Maroc', 'Coupe du monde', 'Petite Finale', '2022-12-17', 16, 'https://www.stakecheia.com/wp-content/uploads/2022/11/Copa-do-Mundo-1.jpg'),
(6, 'Argentine', 'France', 'Coupe du monde', 'Finale ', '2022-12-18', 16, 'https://www.stakecheia.com/wp-content/uploads/2022/11/Copa-do-Mundo-1.jpg'),
(7, 'Uruguay', 'Ghana', 'Coupe_du_monde', 'Match de Poule', '2022-12-27', 18, 'https://www.stakecheia.com/wp-content/uploads/2022/11/Copa-do-Mundo-1.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

DROP TABLE IF EXISTS `player`;
CREATE TABLE IF NOT EXISTS `player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `club` varchar(255) DEFAULT NULL,
  `equipe_nationale` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `player`
--

INSERT INTO `player` (`id`, `nom`, `prenom`, `age`, `club`, `equipe_nationale`) VALUES
(1, 'Mbappé', 'Kylian', 23, 'Paris Saint-Germain', 'Equipe de France');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
