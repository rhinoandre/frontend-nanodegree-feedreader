$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('should have the property URL defined and not empty for each object in the allFeeds array', function() {
            expect(allFeeds.every(feed => feed.url)).toBeTruthy();
        });

        it('should have the property name defined and not empty for each object in the allFeeds array', function() {
            expect(allFeeds.every(feed => feed.name)).toBeTruthy();
        });
    });


    describe('The menu', function() {
        it('should be hidden on page start', () => {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
         
        it('should toggle the menu when the button is clicked', () => {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    describe('Initial Entries', function() {
         beforeEach((done) => {
             loadFeed(0, () => done());
         });

        it('should have values', (done) => {
            expect($('.entry').length).toBeGreaterThan(0);
            done();
        });
    });
    
    describe('New Feed Selection', function() {
        let firstElementTitle;
        beforeEach((done) => {
            firstElementTitle = $('.entry:first > h2').text();
            loadFeed(1, () => done());
        })

        it('should update the list when load a new feed', (done) => {
            expect($('.entry:first > h2').text()).not.toEqual(firstElementTitle);
            done();
        });
    });
}());
