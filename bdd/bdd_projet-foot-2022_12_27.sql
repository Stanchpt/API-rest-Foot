-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 27 déc. 2022 à 12:28
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
-- Structure de la table `competition`
--

DROP TABLE IF EXISTS `competition`;
CREATE TABLE IF NOT EXISTS `competition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `Annee` int(11) NOT NULL,
  `nb_equipe` int(11) NOT NULL,
  `region` varchar(255) NOT NULL,
  `url_info` varchar(255) NOT NULL,
  `url_image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `competition`
--

INSERT INTO `competition` (`id`, `nom`, `Annee`, `nb_equipe`, `region`, `url_info`, `url_image`) VALUES
(1, 'Coupe du monde au Qatar', 2022, 32, 'World', 'https://fr.wikipedia.org/wiki/Coupe_du_monde_de_football_2022', 'https://www.topmercato.com/wp-content/uploads/2021/03/coupe-du-monde-2022-mondial-ilustration-qatar-1.jpg'),
(2, 'Ligue 1 - Uber Eats', 2022, 20, 'Europe', 'https://www.ligue1.fr/', 'https://www.asse.fr/img/content/2020/06/nouvelle-identite-pour-la-ligue-1--652623868.jpg'),
(3, 'Ligue 2 BKT', 2022, 20, 'Europe', 'https://www.ligue2.fr/', 'https://fmslife.fr/uploads/default/original/3X/d/d/dd885b4d075a01ab2b3e7aeb9ee3851eb64fc544.png');

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
  `equipe` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `team`
--

DROP TABLE IF EXISTS `team`;
CREATE TABLE IF NOT EXISTS `team` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `Surnom` varchar(255) NOT NULL,
  `Pays` varchar(255) NOT NULL,
  `Continent` varchar(255) NOT NULL,
  `id_fifa` varchar(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;