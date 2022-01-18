# Backend Setup

## 1. MYSQL Setup

#### Installing the MYSQL Server on Ubuntu / Debian
Follow these steps to install mysql server on debial/ubuntu. Taken from [Percona Docs](https://www.percona.com/doc/percona-server/8.0/installation/apt_repo.html)
```
sudo apt install gnupg2
```
```
wget https://repo.percona.com/apt/percona-release_latest.$(lsb_release -sc)_all.deb
```
```
sudo dpkg -i percona-release_latest.$(lsb_release -sc)_all.deb
```
```
sudo percona-release setup ps80
```
```
sudo apt install percona-server-server
```

#### Create User, and database <a name="createUser">
Start the mysql server:
```
sudo service mysql start
```
```
mysql
```
<br>

Execute the following within MYSQL. This will create the required database user and grant them the correct permissions. This will also create the required database.

```
CREATE USER 'switch_transact'@'localhost' identified by 'switch_transact';
```
```
CREATE DATABASE switch_transact;
```
```
CREATE TABLE switch_transact.posts (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(100) DEFAULT NULL,
  description text,
  date datetime DEFAULT NULL,
  status varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
```
```
GRANT ALL ON switch_transact.* TO 'switch_transact'@'localhost';
```
```
FLUSH PRIVILEGES;
```

## 2. Setup Node and npm
In order to install node and node package manager (npm) we are first going to install node version manager (nvm). This is the easiest way to manage node versions as the apt repository often causes problems

**Step 1: Install curl and fetch the install script**
```
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

**Step 2: This prevents us from having to log in and out again**
```
source ~/.profile   
```
**Step 3: Install node (installs latest version)**
```
nvm install node
```

## 3. Install Packages
Navigate to inside the root directory of the project and execute the following:
```
npm install
```

## 4. Run development Server
Execute from the root of the project directory
```
npm run dev
```
