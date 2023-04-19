const {Builder, By} = require("selenium-webdriver");

async function testIfProvidedCredentialAreCorrect(userName, password) {

    //opens sample app in firefox browser
    let driver = new Builder().forBrowser("firefox").build();
    driver.get("http://uitestingplayground.com/sampleapp");

    //fills in login form with provided credentials
    driver.findElement(By.name("UserName")).sendKeys(userName);
    driver.findElement(By.name("Password")).sendKeys(password);

    //simulates left click on login button
    let click = driver.findElement(By.id("login")); 
    const actions = driver.actions({async: true});
    actions.move({origin: click}).click().perform();

    //gets information from the app
    let result = await driver.findElement(By.id("loginstatus")).getText();

    //checks if credentials are correct i.e. user is able to login
    console.assert(result !== `Welcome, ${userName}!`, "able to login");
    console.assert(result === `Welcome, ${userName}!`, "unable to login");

}

//case 1
testIfProvidedCredentialAreCorrect("usr1", "pwd")
//output: able to login i.e. credentials correct

//case 2
testIfProvidedCredentialAreCorrect("usr2", "notpwd")
//output: unable to login i.e. user name and/or password are not correct