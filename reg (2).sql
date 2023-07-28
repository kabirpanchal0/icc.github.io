-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2023 at 03:14 PM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `reg`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
`id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phoneno` int(12) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `phoneno`, `password`) VALUES
(1, 'kabir', 'kabirpanchal5@gmail.', 0, 'kabir@123'),
(3, 'raj', 'raj123@gmail.com', 0, 'raj@123'),
(5, 'chiku', 'chiku@gmail.com', 0, 'chiku@123'),
(6, 'chiku', 'chiku@gmail.com', 2147483647, 'chiku@123'),
(7, 'chiku', 'chiku@gmail.com', 123, 'chiku@123'),
(11, 'chiku', 'chiku@gmail.com', 992468184, 'chiku@123'),
(12, 'catu', 'catu', 1234, 'catu'),
(13, 'Kabir ', 'boys12@gmail.com', 1234, '1234'),
(14, 'chik', 'chiku@gmail.com', 2147483647, 'chiku@123');

-- --------------------------------------------------------

--
-- Table structure for table `auscolleges`
--

CREATE TABLE IF NOT EXISTS `auscolleges` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `auscolleges`
--

INSERT INTO `auscolleges` (`id`, `name`, `description`, `link`, `location`) VALUES
(1, 'University of Melbourne', 'The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is Australia''s second oldest university and the oldest in Victoria. ', 'https://www.unimelb.edu.au/', 'Parkville VIC 3010, Australia'),
(2, 'Monash University Clayton Campus', 'Monash University is a public research university based in Melbourne, Victoria, Australia. Named after prominent World War I general Sir John Monash, it was founded in 1958 and is the second oldest university in the state. The university has a number of c', 'https://www.monash.edu/', 'Wellington Rd, Clayton VIC 3800, Australia'),
(3, 'The University of Sydney', 'The University of Sydney, also known as Sydney University, or informally Sydney Uni, is a public research university located in Sydney, Australia. Founded in 1850, it is the oldest university in Australia and is one of the country''s six sandstone universi', 'https://www.sydney.edu.au/', ' Camperdown NSW 2006, Australia'),
(4, 'The University of Queensland', 'The University of Queensland is a public research university located primarily in Brisbane, the capital city of the Australian state of Queensland. Founded in 1909 by the Queensland parliament, UQ is one of the six sandstone universities, an informal desi', 'https://www.uq.edu.au/', ' St Lucia QLD 4072, Australia\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `cancolleges`
--

CREATE TABLE IF NOT EXISTS `cancolleges` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cancolleges`
--

INSERT INTO `cancolleges` (`id`, `name`, `description`, `link`, `location`) VALUES
(1, 'University of Toronto', 'The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen''s Park. It was founded by royal charter in 1827 as King''s College, the first institution of higher learning in Upper Canada. ', 'https://www.utoronto.ca/', '27 King''s College Cir, Toronto, ON M5S, Canada'),
(2, 'Merchant logo\r\nThe University of British Columbia', 'The University of British Columbia is a public research university with campuses near Vancouver and in Kelowna, British Columbia. Established in 1908, it is British Columbia''s oldest university. The university ranks among the top three universities in Can', 'https://www.ubc.ca/', 'Vancouver, BC V6T 1Z4, Canada'),
(3, 'University Canada West', 'University Canada West is a private, for-profit university in British Columbia, Canada. It was founded in 2005 by David F. Strong, the former president of the University of Victoria. UCW was purchased in 2008 by the Eminata Group and in 2014 sold to Globa', 'https://www.ucanwest.ca/', '626 W Pender St #100, Vancouver, BC V6B 1V9, Canada'),
(4, 'University of Alberta', 'The University of Alberta is a public research university located in Edmonton, Alberta, Canada. It was founded in 1908 by Alexander Cameron Rutherford, the first premier of Alberta, and Henry Marshall Tory, the university''s first president. It was enabled', 'https://www.ualberta.ca/index.html', '116 St & 85 Ave, Edmonton, AB T6G 2R3, Canada'),
(5, 'conestoga', '', 'https://www.conestogac.on.ca/', 'canada\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `changepassword`
--

CREATE TABLE IF NOT EXISTS `changepassword` (
  `old_password` varchar(20) NOT NULL,
  `new_password` varchar(20) NOT NULL,
  `c_password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `changepassword`
--

INSERT INTO `changepassword` (`old_password`, `new_password`, `c_password`) VALUES
('111', '11', '11'),
('111', '11', '11'),
('111', '11', '11'),
('111', '11', '11'),
('111', '11', '11'),
('111', '11', '11'),
('111', '11', '11'),
('111', '11', '11'),
('111', '1111', '1111'),
('111', '1111', '1111'),
('1111', '111', '111'),
('noname', '111', '111'),
('111', '1111', '1111'),
('1111', '111', '111'),
('rishit', '2000', '2000'),
('2000', 'harish', 'harish'),
('harish', '2000', '2000'),
('2000', 'harish', 'harish'),
('harish', '2000', '2000'),
('2000', 'harish', 'harish'),
('harish', '2000', '2000'),
('2000', 'harish', 'harish'),
('harish', '2000', '2000');

-- --------------------------------------------------------

--
-- Table structure for table `collages`
--

CREATE TABLE IF NOT EXISTS `collages` (
`id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `location` varchar(100) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `countries_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `collages`
--

INSERT INTO `collages` (`id`, `name`, `description`, `location`, `link`, `countries_id`) VALUES
(5, 'TUM. The Entrepreneurial University', ' Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so.', 'Technical University of Munich Arcisstraße 21 80333 München', 'https://www.tum.de/en/', 1),
(6, 'france clg', '', '', '', 2),
(7, 'italy clg', '', '', '', 3),
(8, 'australia', '', '', '', 4),
(9, 'new zee land clg', '', '', '', 5),
(10, 'uk', '', '', '', 6),
(11, 'usa ', '', '', '', 7),
(12, 'canada', '', '', '', 8),
(13, 'Home Ludwig-Maximilians-Universität München Routing Plan section LMU main building', 'LMU is one of Europe’s leading research institutions. With its highly diversified array of disciplines, it has outstanding potential for pioneering research.', 'Geschwister-Scholl-Platz 1 D-80539 München', '', 1),
(24, 'lossss', '', '', '', 5),
(26, 'canada2', '', '', '', 8),
(29, 'Munich Intellectual Property Law Center (MIPLC)\r\n', 'The MIPLC offers the Master of Laws (LL.M.) program "Intellectual Property and Competition Law"', 'Marstallstraße 8, 80539 München, Germany', 'https://miplc.de/', 1);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
`id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneno` int(20) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `fullname`, `email`, `phoneno`, `message`) VALUES
(1, 'kabir', 'kabir123@gmail.com', 123456, 'good website'),
(2, 'kabir', 'kabir@123.com', 2147483647, 'good website best'),
(3, 'meet', 'saka@dscac', 151, 'xsacas\n');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE IF NOT EXISTS `countries` (
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`) VALUES
(1, 'Germany'),
(2, 'France'),
(3, 'Italy'),
(4, 'Australia'),
(5, 'New zee Land'),
(6, 'UK'),
(7, 'USA'),
(8, 'Canada');

-- --------------------------------------------------------

--
-- Table structure for table `countrycollege`
--

CREATE TABLE IF NOT EXISTS `countrycollege` (
`id` int(10) NOT NULL,
  `country_id` varchar(100) NOT NULL,
  `college_id` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countrycollege`
--

INSERT INTO `countrycollege` (`id`, `country_id`, `college_id`) VALUES
(1, '1', '5'),
(2, '1', '13'),
(3, '1', '29'),
(4, '2', '6'),
(5, '3', '7');

-- --------------------------------------------------------

--
-- Table structure for table `coursecollages`
--

CREATE TABLE IF NOT EXISTS `coursecollages` (
`id` int(10) NOT NULL,
  `collage_name` varchar(100) NOT NULL,
  `courses_id` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coursecollages`
--

INSERT INTO `coursecollages` (`id`, `collage_name`, `courses_id`) VALUES
(1, ' University of Auckland University of Auckland Auckland, New Zealand', 1),
(2, 'University of Auckland University of Auckland Auckland, New Zealand', 10),
(3, 'University of Stirling, United Kingdom', 10);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
`id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`) VALUES
(1, 'Arts, Design, Architecture'),
(2, 'Business and management'),
(3, 'computer science and IT'),
(4, 'Education and Training'),
(5, 'Engineering and Technology'),
(6, 'Jornalism and media'),
(7, 'Law '),
(8, 'Medicine and Health'),
(9, 'Environmental studies and earth science'),
(10, 'Agriculture and foresty'),
(11, 'Social Science '),
(12, 'Humanities'),
(16, 'IT'),
(20, 'B tech'),
(21, 'CE'),
(22, 'MBA'),
(23, 'ABC'),
(24, 'ABC');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
`id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `feedback` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `form_data`
--

CREATE TABLE IF NOT EXISTS `form_data` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `course_id` int(11) NOT NULL,
  `college_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `form_data`
--

INSERT INTO `form_data` (`id`, `name`, `email`, `dob`, `course_id`, `college_id`) VALUES
(1, 'kabir', 'kabir', '0000-00-00', 10, 2),
(2, 'kabir', 'kabir', '0000-00-00', 10, 2),
(3, 'kabir22', 'kabir22', '0000-00-00', 1, 1),
(4, 'user1', 'user1', '0000-00-00', 8, 1),
(5, '', '', '0000-00-00', 0, 0),
(6, '', '', '0000-00-00', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `fracolleges`
--

CREATE TABLE IF NOT EXISTS `fracolleges` (
`id` int(10) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `location` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fracolleges`
--

INSERT INTO `fracolleges` (`id`, `name`, `description`, `link`, `location`) VALUES
(1, 'Université Paris-Saclay', 'Paris-Saclay University (French: Université Paris-Saclay) is a public research university based in Paris, France. It is one of the 13 prestigious universities that emerged from the division of the University of Paris, also known as the Sorbonne.', 'https://www.universite-paris-saclay.fr/en', 'Bâtiment Bréguet, 3 Rue Joliot Curie 2e ét, 91190 Gif-sur-Yvette, France'),
(2, 'Sorbonne University', 'Sorbonne University is a public research university located in Paris, France. The institution''s legacy reaches back to 1257 when Sorbonne College was established by Robert de Sorbon as one of the first universities in Europe', 'https://www.sorbonne-universite.fr/en', 'Geschwister-Scholl-Platz 1 D-80539 München'),
(3, 'Aix-Marseille University', 'Aix-Marseille University is a public research university located in the Provence region of southern France. The institution was founded in 1409 when Louis II of Anjou, Count of Provence, petitioned the Pisan Antipope Alexander V to establish the University of Provence, making it the fourth-oldest university in France. ', 'https://www.univ-amu.fr/', 'Jardin du Pharo, 58 Boulevard Charles Livon, 13007 Marseille, France'),
(4, 'University of Bordeaux', 'The University of Bordeaux is a public university based in Nouvelle-Aquitaine in southwestern France. It has several campuses in the cities and towns of Bordeaux, Dax, Gradignan, Périgueux, Pessac, and Talence. There are also several smaller teaching sites in various other towns in the region, including in Bayonne.', 'https://www.u-bordeaux.fr/', 'Amphithéâtre 3 à 12, 33000 Bordeaux, France'),
(5, 'Paul Sabatier University', 'Paul Sabatier University is a French public university, in the Academy of Toulouse. It is one of the several successor universities of the University of Toulouse. Toulouse III was named after Paul Sabatier, winner of the 1912 Nobel prize in chemistry.', 'https://www.univ-tlse3.fr/', '118 Rte de Narbonne, 31062 Toulouse, France');

-- --------------------------------------------------------

--
-- Table structure for table `gercolleges`
--

CREATE TABLE IF NOT EXISTS `gercolleges` (
`id` int(11) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `location` varchar(1000) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gercolleges`
--

INSERT INTO `gercolleges` (`id`, `name`, `description`, `link`, `location`) VALUES
(1, 'TUM. The Entrepreneurial University', ' Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so.', 'https://www.tum.de/en/', 'Technical University of Munich Arcisstraße 21 80333 München'),
(2, 'Home Ludwig-Maximilians-Universität München Routing Plan section LMU main building', 'LMU is one of Europe’s leading research institutions. With its highly diversified array of disciplines, it has outstanding potential for pioneering research.', 'https://www.lmu.de/en/', 'Geschwister-Scholl-Platz 1 D-80539 München'),
(3, 'Munich Intellectual Property Law Center (MIPLC)', 'The MIPLC offers the Master of Laws (LL.M.) program "Intellectual Property and Competition Law"', 'https://miplc.de/', 'Marstallstraße 8, 80539 München, Germany');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `data` longblob NOT NULL,
  `countries_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `name`, `data`, `countries_id`) VALUES
(1, 'germany image', '', 1),
(2, 'abc', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `itacolleges`
--

CREATE TABLE IF NOT EXISTS `itacolleges` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itacolleges`
--

INSERT INTO `itacolleges` (`id`, `name`, `description`, `link`, `location`) VALUES
(1, 'Alma Mater Studiorum - Università di Bologna', 'The University of Bologna is a public research university in Bologna, Italy. Founded in 1088 by an organised guild of students, it is the oldest university in continuous operation in the world, and the first degree-awarding institution of higher learning.', 'https://www.unibo.it/it', 'Via Zamboni, 33, 40126 Bologna BO, Italy'),
(2, 'Sapienza University of Rome', 'The Sapienza University of Rome, also called simply Sapienza or the University of Rome, and formally the Università degli Studi di Roma "La Sapienza", is a public research university located in Rome, Italy. It is one of the largest European universities b', 'https://www.uniroma1.it/it/', 'Piazzale Aldo Moro, 5, 00185 Roma RM, Italy'),
(3, 'University of Padua', 'The University of Padua is an Italian university located in the city of Padua, region of Veneto, northern Italy. The University of Padua was founded in 1222 by a group of students and teachers from Bologna. Padua is the second-oldest university in Italy a', 'https://www.unipd.it/', 'Via VIII Febbraio, 2, 35122 Padova PD, Italy'),
(4, 'University of Milan', 'The University of Milan, known colloquially as UniMi or La Statale, is a public research university in Milan, Italy. It is one of the largest universities in Europe, with about 60,000 students, and a permanent teaching and research staff of about 2,000.', 'https://www.unimi.it/it', 'Via Festa del Perdono, 7, 20122 Milano MI, Italy');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
`id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phoneno` bigint(30) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `password` varchar(20) NOT NULL,
  `c_password` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `phoneno`, `age`, `gender`, `dob`, `city`, `state`, `country`, `nationality`, `password`, `c_password`) VALUES
(44, 'kabirpanchal', 'kabir1@gmail.com', 9924681841, 20, 'male', '2023-05-03', 'ahmedabad', 'gujarat', 'india', 'indian', '2000', '2000'),
(63, 'SAL ', 'sal@gmail.com', 12345, 12, 'male', '2023-05-27', 'Ahmedabad', 'Gujarat ', 'India ', 'indian', 'sal123', 'sal123'),
(64, 'oneplusnord', 'oneplus1@gmail.com', 9904945090, 21, 'male', '2023-04-11', 'ahmedabad', 'gujarat', 'india', 'indian', '7000', '7000'),
(65, 'KABIR PANCHAL', 'kabirpanchal5@gmail.com ', 9924681841, 20, 'male', '2002-10-26', 'Ahmedabad', 'Gujarat', 'India', 'Indian', 'kabird', 'kabird');

-- --------------------------------------------------------

--
-- Table structure for table `newcolleges`
--

CREATE TABLE IF NOT EXISTS `newcolleges` (
`id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `description` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `newcolleges`
--

INSERT INTO `newcolleges` (`id`, `name`, `description`, `link`, `location`) VALUES
(1, 'Lincoln University', 'Lincoln University is a New Zealand university that was formed in 1990 when Lincoln College, Canterbury was made independent of the University of Canterbury. Founded in 1878, it is the oldest agricultural teaching institution in the Southern Hemisphere.', 'https://www.lincoln.ac.nz/', '85084 Ellesmere Junction Road, Lincoln 7647, New Zealand'),
(2, 'The University of Auckland', 'The University of Auckland is a public research university based in Auckland, New Zealand. It is the largest, most comprehensive and highest-ranked university in New Zealand and consistently places among the top 100 universities in the QS World University', 'https://www.auckland.ac.nz/en.html', 'Auckland CBD, Auckland 1010, New Zealand'),
(3, 'University of Canterbury\r\n', 'The University of Canterbury is a public research university based in Christchurch, New Zealand. It was founded in 1873 as Canterbury College, the first constituent college of the University of New Zealand.', 'https://www.canterbury.ac.nz/', ' 20 Kirkwood Avenue, Upper Riccarton, Christchurch 8041, New Zealand'),
(4, 'University of Otago', 'The University of Otago is a public research collegiate university based in Dunedin, Otago, New Zealand. Founded in 1869, Otago is New Zealand''s oldest University and one of the oldest universities in Oceania.', 'https://www.otago.ac.nz/', '362 Leith Street, Dunedin North, Dunedin 9016, New Zealand');

-- --------------------------------------------------------

--
-- Table structure for table `ukcolleges`
--

CREATE TABLE IF NOT EXISTS `ukcolleges` (
`id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `description` varchar(225) NOT NULL,
  `link` varchar(225) NOT NULL,
  `location` varchar(225) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ukcolleges`
--

INSERT INTO `ukcolleges` (`id`, `name`, `description`, `link`, `location`) VALUES
(1, 'University of Oxford', 'Oxford University provides world-class research and education to benefit society on a local, regional, national and global scale', 'https://www.ox.ac.uk/', 'Oxford, England'),
(2, 'The University of Auckland', 'The University of Auckland is a public research university based in Auckland, New Zealand. It is the largest, most comprehensive and highest-ranked university in New Zealand and consistently places among the top 100 universit', 'https://www.auckland.ac.nz/en.html', 'Auckland CBD, Auckland 1010, New Zealand'),
(3, 'Victoria University of Wellington', 'The Victoria University of Wellington is a public university in Wellington, New Zealand. It was established in 1897 by Act of Parliament, and was a constituent college of the University of New Zealand.', 'https://www.wgtn.ac.nz/', ' Kelburn, Wellington 6012, New Zealand'),
(4, 'University of Waikato', 'The University of Waikato, is a public research university in Hamilton, New Zealand established in 1964. An additional campus is located in Tauranga.', 'https://www.waikato.ac.nz/', ' Hillcrest, Hamilton 3216, New Zealand');

-- --------------------------------------------------------

--
-- Table structure for table `usacolleges`
--

CREATE TABLE IF NOT EXISTS `usacolleges` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usacolleges`
--

INSERT INTO `usacolleges` (`id`, `name`, `description`, `link`, `location`) VALUES
(1, 'Stanford University', 'Stanford University, officially Leland Stanford Junior University, is a private research university in Stanford, California. The campus occupies 8,180 acres, among the largest in the United States, and enrolls over 17,000 students. ', 'https://www.stanford.edu/', '450 Serra Mall, Stanford, CA 94305, United States'),
(2, 'Harvard University', 'Harvard University is a private Ivy League research university in Cambridge, Massachusetts, United States. Founded in 1636 as Harvard College and named for its first benefactor, the Puritan clergyman John Harvard, it is the oldest institution of higher le', 'https://www.harvard.edu/', '3 Oxford St, Cambridge, MA 02138, United States'),
(3, 'Columbia University', 'Columbia University, officially titled as Columbia University in the City of New York, is a private Ivy League research university in New York City', 'https://www.columbia.edu/', 'New York, NY 10027, United States'),
(4, 'Yale University', 'Yale University is a private Ivy League research university in New Haven, Connecticut. Founded in 1701, Yale is the third-oldest institution of higher education in the United States and one of the nine colonial colleges chartered before the American Revol', 'https://www.yale.edu/', 'New Haven, CT 06520, United States'),
(5, 'University of California, Berkeley', 'The University of California, Berkeley is a public land-grant research university in Berkeley, California. Established in 1868 as the University of California, it is the state''s first land-grant university and the founding campus of the University of Cali', 'https://www.berkeley.edu/', 'Berkeley, CA 94720, United States');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `auscolleges`
--
ALTER TABLE `auscolleges`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cancolleges`
--
ALTER TABLE `cancolleges`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collages`
--
ALTER TABLE `collages`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countrycollege`
--
ALTER TABLE `countrycollege`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coursecollages`
--
ALTER TABLE `coursecollages`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `form_data`
--
ALTER TABLE `form_data`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fracolleges`
--
ALTER TABLE `fracolleges`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gercolleges`
--
ALTER TABLE `gercolleges`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `itacolleges`
--
ALTER TABLE `itacolleges`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newcolleges`
--
ALTER TABLE `newcolleges`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ukcolleges`
--
ALTER TABLE `ukcolleges`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usacolleges`
--
ALTER TABLE `usacolleges`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `auscolleges`
--
ALTER TABLE `auscolleges`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `cancolleges`
--
ALTER TABLE `cancolleges`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `collages`
--
ALTER TABLE `collages`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `countrycollege`
--
ALTER TABLE `countrycollege`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `coursecollages`
--
ALTER TABLE `coursecollages`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `form_data`
--
ALTER TABLE `form_data`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `fracolleges`
--
ALTER TABLE `fracolleges`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `gercolleges`
--
ALTER TABLE `gercolleges`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `itacolleges`
--
ALTER TABLE `itacolleges`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT for table `newcolleges`
--
ALTER TABLE `newcolleges`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `ukcolleges`
--
ALTER TABLE `ukcolleges`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `usacolleges`
--
ALTER TABLE `usacolleges`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
