import time
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import getpass

email = getpass.getpass(prompt = "Email:")
# this will ask for the password in termainal without hard-coading it
password = getpass.getpass()

driver = webdriver.Chrome(ChromeDriverManager().install())

# open linkedin
driver.get("https://www.linkedin.com/login")

# the login page opens and driver will find the id's and then send the key values of email and password
driver.find_element_by_id('username').send_keys(email)
driver.find_element_by_id('password').send_keys(password)

# click on sign-up button
driver.find_element_by_css_selector('.btn__primary--large').click()

# it will get the url and open invitations page
driver.get("https://www.linkedin.com/mynetwork/invitation-manager/")

# initialize the empty array
acceptButton = []

# Get all the accept buttons from the invitations page if you have
while len(acceptButton) == 0:
    acceptButton = driver.find_elements_by_xpath("//button[@class='invitation-card__action-btn artdeco-button artdeco-button--2 artdeco-button--secondary ember-view']")

# now let's traverse each button one by one with a sleep timer of 5 sec and click the button
for accept in acceptButton:
    accept.click()
    time.sleep(5)
# Ta - Da your linkedin-automatic connection acceptor is ready