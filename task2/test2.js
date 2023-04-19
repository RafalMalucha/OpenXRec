const {Builder, By, Key} = require("selenium-webdriver");

async function testIfUserCanCopyPassword(password) {

    //opens sample app in firefox browser
    let driver = new Builder().forBrowser("firefox").build();
    driver.get("http://uitestingplayground.com/sampleapp");

    //fills in password in form
    driver.findElement(By.name("Password")).sendKeys(password);

    //simulates actions needed to copy text
    driver.findElement(By.name("Password")).sendKeys(Key.CONTROL, "a");
    driver.findElement(By.name("Password")).sendKeys(Key.CONTROL, "c");
    driver.findElement(By.name("UserName")).sendKeys(Key.CONTROL, "v");

    let result = driver.findElement(By.name("UserName")).getText();

    //checks if password was copied correctly
    console.assert(result !== password, "able to copy password");
    console.assert(result === password, "unable to copy password");

}

//case 1
testIfUserCanCopyPassword("pwd");