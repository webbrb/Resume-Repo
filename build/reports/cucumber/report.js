$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/gradle/cucumber/feature01.feature");
formatter.feature({
  "name": "Allow administrators to add users to the database.",
  "description": "  The administrator should be able to add users to the database.\n  The program should take a single command-line argument for the database file.\n  It should present the user with a menu of three numbered options\n  as follows:\n  \n  1: exit\n  2: administrator\n\n  Choosing option 1 exits the program. Choosing option 2 prompts for the\n  administrator password (\"adminpwd\" in this case) and, if the correct password\n  is given, shows the following menu:\n  \n  1: back\n  2: add user\n\n  Choosing option 1 returns the administrator to the top-level menu (exit/administrator).\n  Choosing option 2 prompts the administrator for the username and password\n  of the user to be added. A user can only be added if the username is not\n  currently in the database.\n\n\n  Instructor\u0027s Note\n  -----------------\n  You will want to use the sqlite-jdbc library for this feature. You will need\n  to find the documentation and learn how to interact with a sqlite database.\n  The Utilities.java file contains the schema for the database in the static\n  method createNewDatabase. This schema should not be changed in any way; it is\n  a requirement of the product owner.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "The user requests to perform as administrator with the wrong password.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 1",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as administrator with password \"wrong\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAdministratorWithPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Incorrect administrator password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user to be added is not in the database because the database is empty.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 1",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database is empty",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseIsEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as administrator with password \"adminpwd\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAdministratorWithPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the user \"jsmith\" with password \"jsmith\"",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iAddTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"jsmith was added.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user to be added is not in the database but another user is.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 1",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"hjones\" with password \"hjones\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as administrator with password \"adminpwd\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAdministratorWithPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the user \"jsmith\" with password \"jsmith\"",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iAddTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"jsmith was added.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain the user \"hjones\" with password \"hjones\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user to be added already exists in the database with a different password.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 1",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as administrator with password \"adminpwd\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAdministratorWithPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the user \"jsmith\" with password \"abcdef\"",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iAddTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"jsmith already exists.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user to be added already exists in the database with the same password.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 1",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as administrator with password \"adminpwd\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAdministratorWithPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add the user \"jsmith\" with password \"jsmith\"",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iAddTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"jsmith already exists.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/gradle/cucumber/feature02.feature");
formatter.feature({
  "name": "Allow administrators to remove users from the database.",
  "description": "  The administrator should be able to remove users from the database.\n  The program should take a single command-line argument for the database file.\n  It should present the user with a menu of three numbered options\n  as follows:\n  \n  1: exit\n  2: administrator\n\n  Choosing option 1 exits the program. Choosing option 2 prompts for the\n  administrator password (\"adminpwd\" in this case) and, if the correct password\n  is given, shows the following menu:\n  \n  1: back\n  2: add user\n  3: remove user\n  \n  Choosing options 1 and 2 work as in the previous feature.\n  Choosing option 3 prompts the administrator for the username of the user to\n  be removed. A user can only be removed if the username is in the database.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "The user requests to perform as administrator with the wrong password.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 2",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as administrator with password \"wrong\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAdministratorWithPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Incorrect administrator password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user to be removed is not in the database because the database is empty.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 2",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database is empty",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseIsEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as administrator with password \"adminpwd\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAdministratorWithPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove the user \"jsmith\"",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iRemoveTheUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"jsmith does not exist.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should not contain the user \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldNotContainTheUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user to be removed is not in the database but another user is.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 2",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"hjones\" with password \"hjones\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as administrator with password \"adminpwd\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAdministratorWithPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove the user \"jsmith\"",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iRemoveTheUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"jsmith does not exist.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should not contain the user \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldNotContainTheUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain the user \"hjones\" with password \"hjones\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user to be removed is in the database alone.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 2",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as administrator with password \"adminpwd\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAdministratorWithPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove the user \"jsmith\"",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iRemoveTheUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"jsmith was removed.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should not contain the user \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldNotContainTheUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user to be removed is in a populated database.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 2",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"hjones\" with password \"hjones\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as administrator with password \"adminpwd\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAdministratorWithPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove the user \"jsmith\"",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iRemoveTheUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"jsmith was removed.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should not contain the user \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldNotContainTheUser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain the user \"hjones\" with password \"hjones\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/gradle/cucumber/feature03.feature");
formatter.feature({
  "name": "Allow users to generate a WoCoin wallet.",
  "description": "  A user should be able to create a WoCoin wallet.\n  The program should take a single command-line argument for the databse file.\n  It should then present a menu with the following options:\n  \n  1: exit\n  2: administrator\n  3: user\n  \n  If option 2 is chosen, the program should prompt for the administrator\n  password (\"adminpwd\" in this case) and, if the correct password is given,\n  show the menu from the previous feature with the same functionality.\n  \n  If option 3 is chosen, the program should prompt for the username and password\n  of the user. If that user does not exist in the database, or if the password\n  is incorrect, the program should output \"No such user.\" and return to the root\n  menu. Otherwise, if the user\u0027s credentials are correct, the program should\n  provide the following menu:\n  \n  1: back\n  2: create wallet\n  \n  If option 1 is chosen, the program should show the root menu again.\n  If option 2 is chosen, the program should check to see if the user already has\n  a wallet in the database. If so, the program should prompt the user for\n  confirmation (\"y\" or \"n\") that the previous wallet will be discarded and\n  replaced with the soon-to-be-created one (default to \"n\"). If the user\n  declines the confirmation, the program should output \"Action canceled.\" and\n  present the user menu again.\n  \n  Otherwise, the program should prompt for the root wallet directory, with the\n  default of the system\u0027s user home directory. Into this directory, the program\n  will create a subdirectory named the same as the username, and in that\n  subdirectory it will create a WoCoin wallet file (a JSON file) with the\n  public/private key information. Finally, the program will read that newly\n  created file to get the public key (the \"address\"), add the username and\n  public key to the wallets table of the database, and print the message\n  \"Wallet added.\" \n  \n  \n  Instructor\u0027s Note\n  -----------------\n  You will want to use the web3j library for this feature. You will need to find\n  the documentation and learn how to create a wallet programmatically in Java.\n  You will also do the same for the json-simple library in order to read the\n  generated wallet file. The web3j and json-simple dependencies are already a\n  part of the Gradle build file, so any proper import statements should work.\n  Also, I found that the web3j library was fairly resource intensive, so I had\n  to increase Java\u0027s memory allotment. You can do this in several ways, but on\n  a Unix system, the easiest way is to specify it on the command line:\n  \n  JAVA_TOOL_OPTIONS\u003d\"-Xmx512m\" ./gradlew --no-daemon cucumber\n  \n  This will set the maximum RAM to 512 MB.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Nonexistent user requests to create a wallet.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 3",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database is empty",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseIsEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jsmith\" and password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I create a wallet",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iCreateAWallet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"No such user.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user requests to create a wallet.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 3",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the directory \"tmp\" exists",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDirectoryExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the directory \"tmp/jsmith\" exists",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDirectoryExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the directory \"tmp/jsmith\" is empty",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDirectoryIsEmpty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jsmith\" and password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I create a wallet",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iCreateAWallet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I use the directory \"tmp\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iUseTheDirectory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Wallet added.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a file exists in the directory \"tmp/jsmith\" with extension \"json\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.aFileExistsInTheDirectoryWithExtension(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain a wallet with username \"jsmith\" and a nonempty public key",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainAWalletWithUsernameAndANonemptyPublicKey(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "The user requests to create a second wallet.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 3",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the wallet \"jsmith\" with public key \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheWalletWithPublicKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the directory \"tmp\" exists",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDirectoryExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the directory \"tmp/jsmith\" exists",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDirectoryExists(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the directory \"tmp/jsmith\" contains the file \"mykeyfile.json\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDirectoryContainsTheFile(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jsmith\" and password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I create a wallet",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iCreateAWallet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I accept the default option",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAcceptTheDefaultOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I use the directory \"tmp\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iUseTheDirectory(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Action canceled.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a file exists in the directory \"tmp/jsmith\" with name \"mykeyfile.json\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.aFileExistsInTheDirectoryWithName(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain a wallet with username \"jsmith\" and a nonempty public key",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainAWalletWithUsernameAndANonemptyPublicKey(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/gradle/cucumber/feature04.feature");
formatter.feature({
  "name": "Allow users to add products to the database.",
  "description": "  The user should be able to add products to the database as long as the user\n  is valid with an active wallet. The program should take a single command-line\n  argument for the database file. It should present the root menu as in the\n  previous feature:\n  \n  1: exit\n  2: administrator\n  3: user\n  \n  Option 2 should work exactly as in the previous feature. As before, option 3\n  should present a valid user with a menu of numbered options as follows:\n  \n  1: back\n  2: create wallet\n  3: add product\n\n  Choosing options 1 and 2 work as described in the previous feature. If\n  option 3 is chosen, the program should check to see if the user has an active\n  wallet. If not, the program should respond with \"User has no wallet.\" \n  Otherwise, the program should prompt for the name (a nonempty string),\n  description (a nonempty string), and price (a positive integer) of the\n  product. That product should be added to the database along with the\n  user\u0027s wallet\u0027s public key, and the program should print the message\n  \"Product added.\"",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "A nonexistent user attempts to add a product.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 4",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database is empty",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseIsEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jsmith\" and password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"No such user.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A user with no wallet attempts to add a product.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 4",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jsmith\" and password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a product named \"my title\" with description \"my description\" and price 3",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iAddAProductNamedWithDescriptionAndPrice(String,String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"User has no wallet.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain the product \"my name\" with description \"my description\" and price 3 added by \"whatever\" 0 times",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainTheProductWithDescriptionAndPriceAddedByTimes(String,String,Integer,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid user with a wallet attempts to add a product.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 4",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the wallet \"jsmith\" with public key \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheWalletWithPublicKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jsmith\" and password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a product named \"my name\" with description \"my description\" and price 3",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iAddAProductNamedWithDescriptionAndPrice(String,String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Product added.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database should contain the product \"my name\" with description \"my description\" and price 3 added by \"a615316333ba8622fd5bb60fe39758b3515f774d\" 1 times",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseShouldContainTheProductWithDescriptionAndPriceAddedByTimes(String,String,Integer,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid user with a wallet attempts to add a product with an empty name.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 4",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the wallet \"jsmith\" with public key \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheWalletWithPublicKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jsmith\" and password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a product named \"\" with description \"my description\" and price 3",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iAddAProductNamedWithDescriptionAndPrice(String,String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Invalid value.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Expected a string with at least 1 character.\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid user with a wallet attempts to add a product with an empty description.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 4",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the wallet \"jsmith\" with public key \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheWalletWithPublicKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jsmith\" and password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a product named \"my name\" with description \"\" and price 3",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iAddAProductNamedWithDescriptionAndPrice(String,String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Invalid value.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Expected a string with at least 1 character.\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid user with a wallet attempts to add a product with a non-positive price.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 4",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the wallet \"jsmith\" with public key \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheWalletWithPublicKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jsmith\" and password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add a product named \"my name\" with description \"my description\" and price 0",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iAddAProductNamedWithDescriptionAndPrice(String,String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Invalid value.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Expected an integer value greater than or equal to 1.\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/gradle/cucumber/feature06.feature");
formatter.feature({
  "name": "Allow users to display products in the database.",
  "description": "  The user should be able to display products in the database.\n  The program should take a single command-line argument for the database file.\n  It should present the root menu as in the previous feature:\n  \n  1. exit\n  2. administrator\n  3. user\n  \n  Option 2 should work exactly as in the previous feature. Option 3 should\n  present a valid user with a menu of numbered options as follows:\n  \n  1. back\n  2. create wallet\n  3. add product\n  4. remove product\n  5. display products\n\n  Choosing options 1--4 work as described in the previous feature. Choosing\n  option 5 displays a list of all products currently available in the database.\n  The products should be numbered and sorted in ascending order by price and,\n  within the same price, alphabetically by title (case insensitive). Any\n  products that were added by the current user should be prepended with \"\u003e\u003e\u003e\".\n  After displaying the products, the program should return to the user menu.\n  For instance, an example of the products displayed is as follows:\n\n  1: \u003e\u003e\u003e  skittles: a half-eaten bag  [1 WoCoin]\n  2: chalk: taken from a classroom  [2 WoCoins]\n  3: \u003e\u003e\u003e  Zombieland: DVD  [2 WoCoins]\n  4: apple: small  [3 WoCoins]\n  5: paper: a ream for a printer  [4 WoCoins]\n  6: \u003e\u003e\u003e  Risk: board game  [4 WoCoins]\n  7: trip to Charlotte: no questions asked  [4 WoCoins]",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "A nonexistent user wants to display the products.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 6",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the wallet \"jsmith\" with public key \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheWalletWithPublicKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"bicycle\" with description \"nothing fancy\" and price 1 added by \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"A Wrinkle in Time\" with description \"a book\" and price 3 added by \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"Time magazine\" with description \"issue 42\" and price 7 added by \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jdoe\" and password \"jdoe\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I display products",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iDisplayProducts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"No such user.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A user with no added products wants to display the products.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 6",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the wallet \"jsmith\" with public key \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheWalletWithPublicKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jdoe\" with password \"jdoe\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the wallet \"jdoe\" with public key \"587888ea2b080656816aad7e0bc8f1cf3cf0bced\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheWalletWithPublicKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"hjones\" with password \"hjones\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"skittles\" with description \"a half-eaten bag\" and price 1 added by \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"Zombieland\" with description \"DVD\" and price 2 added by \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"Risk\" with description \"board game\" and price 4 added by \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"paper\" with description \"a ream for a printer\" and price 4 added by \"587888ea2b080656816aad7e0bc8f1cf3cf0bced\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"chalk\" with description \"taken from a classroom\" and price 2 added by \"587888ea2b080656816aad7e0bc8f1cf3cf0bced\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"apple\" with description \"small\" and price 3 added by \"587888ea2b080656816aad7e0bc8f1cf3cf0bced\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"trip to Charlotte\" with description \"no questions asked\" and price 4 added by \"587888ea2b080656816aad7e0bc8f1cf3cf0bced\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"hjones\" and password \"hjones\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I display products",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iDisplayProducts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"1: skittles: a half-eaten bag  [1 WoCoin]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"2: chalk: taken from a classroom  [2 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"3: Zombieland: DVD  [2 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"4: apple: small  [3 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"5: paper: a ream for a printer  [4 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"6: Risk: board game  [4 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"7: trip to Charlotte: no questions asked  [4 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A user with three added products wants to display the products.",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the feature is 6",
  "keyword": "Given "
});
formatter.match({
  "location": "FeaturesSteps.theFeatureIs(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jsmith\" with password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the wallet \"jsmith\" with public key \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheWalletWithPublicKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"jdoe\" with password \"jdoe\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the wallet \"jdoe\" with public key \"587888ea2b080656816aad7e0bc8f1cf3cf0bced\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheWalletWithPublicKey(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains the user \"hjones\" with password \"hjones\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsTheUserWithPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"skittles\" with description \"a half-eaten bag\" and price 1 added by \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"Zombieland\" with description \"DVD\" and price 2 added by \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"Risk\" with description \"board game\" and price 4 added by \"a615316333ba8622fd5bb60fe39758b3515f774d\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"paper\" with description \"a ream for a printer\" and price 4 added by \"587888ea2b080656816aad7e0bc8f1cf3cf0bced\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"chalk\" with description \"taken from a classroom\" and price 2 added by \"587888ea2b080656816aad7e0bc8f1cf3cf0bced\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"apple\" with description \"small\" and price 3 added by \"587888ea2b080656816aad7e0bc8f1cf3cf0bced\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the database contains a product \"trip to Charlotte\" with description \"no questions asked\" and price 4 added by \"587888ea2b080656816aad7e0bc8f1cf3cf0bced\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.theDatabaseContainsAProductWithDescriptionAndPriceAddedBy(String,String,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I attempt to perform as a user with username \"jsmith\" and password \"jsmith\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iAttemptToPerformAsAUserWithUsernameAndPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I display products",
  "keyword": "When "
});
formatter.match({
  "location": "FeaturesSteps.iDisplayProducts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"1: \u003e\u003e\u003e  skittles: a half-eaten bag  [1 WoCoin]\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"2: chalk: taken from a classroom  [2 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"3: \u003e\u003e\u003e  Zombieland: DVD  [2 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"4: apple: small  [3 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"5: paper: a ream for a printer  [4 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"6: \u003e\u003e\u003e  Risk: board game  [4 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"7: trip to Charlotte: no questions asked  [4 WoCoins]\"",
  "keyword": "And "
});
formatter.match({
  "location": "FeaturesSteps.iShouldBeTold(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});