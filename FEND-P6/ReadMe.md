

#ReadMe#
##FEND-P6 Test Feed Testing:##

Jasmine is used to test the **UdaciFeeds** application.  The **feedreader.js**  file will contains all of the tests that will be run against this application.
All of the tests within the **$() function**.
Some of these tests require **DOM** elements.  Thus the test will not run until the **DOM** is ready.

###To Run the application:###
	*Open the application on your browser, then the Jasmine test will be conducted automatically.
	*If the test is red then the test failed.
	*If the test is green then the test passed.

###The RSS Tests:###
	1. Tests the **RSS** feeds definitions.  It tests to make sure that the **allFeeds** variable has been 	defined and that it is not empty.
    2. Tests that loops through each feed in the **allFeeds** object and ensures it has an **URL** defined and that the **URL** is not empty.
	3. Tests that loops through each feed in the **allFeeds** object and ensures it has a **name** defined and that the **name** is not empty.

###The Menu tests:###
	1. Tests that ensures the menu element is hidden by default.
	2. Tests the menu changes visibility when the menu icon is clicked.
	This test that the menu display when clicked and disappear when clicked again.

###The Initial Entries tests:###
	1. Tests that ensures when the **loadFeed** function is called and completes its work.
	2. Tests there is at least a single **.entry** element within the **.feed** container.
	3. Tests that the   **loadFeed()**   is asynchronous.
	This test requires the use of Jasmine's **beforeEach** and asynchronous  **done()**   function.

###The New Feed Selection tests:###
	1. Tests that ensures when a new feed is loaded by the asynchronous **loadFeed** function content actually changes.
