/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application
 * All of the tests within the $() function,
 * Some of these tests require DOM elements.
 * Thus the test will not run until the DOM is ready.
 */
$(function() {
    /* This test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in the application.
     */
    describe('RSS Feeds', function() {
    	/* tests the RSS feeds definitions.  It tests to
       	 * make sure that the   allFeeds  variable has
    	 * been defined and that it is not empty.
         */
        it(' are defined', function()
        {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
        */
		it(' url are defined and has a length > 0', function() {
        	allFeeds.forEach(function(feed)
        	{
 				expect(feed.url).toBeDefined();
 				expect(feed.url.length).not.toBe(0);
        	});


        });


        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it(' name are defined and has length > 0', function()
        {
        	allFeeds.forEach(function(feed)
        	{
 				expect(feed.name).toBeDefined();
 				expect(feed.name.length).not.toBe(0);
     	  	});


        });


    });


    /* New test suite named "The menu" */
	describe('The menu', function()
	{

        /* A test that ensures the menu element is
         * hidden by default
         */
		it(' is hidden by default', function()
		{
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});

	     /* A test that ensures the menu changes visibility
	      * when the menu icon is clicked.
          * This test that the menu display when clicked
          * and disappear when clicked again.
    */
    	it(' toggles visibility when menu icon is clicked', function()
		{
			$('.menu-icon-link').click();

			expect($('body').hasClass('menu-hidden')).toBe(false);

			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
	});


    /* A new test suite named "Initial Entries" */
/*******************************************
        A test that ensures when the loadFeed
         * function is called and completes its work,
         * there is at least a single .entry element
         * within the .feed container.
         * The  loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach
         * and asynchronous done() function.
         */
	describe('Initial Entries', function(){

        beforeEach(function(done)
        {
        	loadFeed(0,done);
        });

		it(' contains at least one entry',  function()
		{
			expect($('.entry').length).toBeGreaterThan(0);
		});
	});


    /* A new test suite named "New Feed Selection"

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * the  loadFeed() is asynchronous.
         */
	describe('New Feed Selection', function(){
        var feed0;

         //	Nest the second loadFeed() inside the first loadFeed()

      	beforeEach(function(done)
        {
        	loadFeed(0, function(){
        		feed0 = $('.feed').html();

        		loadFeed(1,	done);

        		});
        	});


        it(' with new content is loaded', function(done){

        	expect('.html').not.toBe(feed0);

        });

    });

}());
