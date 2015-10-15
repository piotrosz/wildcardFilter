describe("WildcardFilter", function() {
    'use strict'; 
    
    var $filter;

    beforeEach(function() {
        module('wildcardFilterModule');
        
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });  
    
    it('should match items containing letter inside word', function () {
        var items = [{name: 'lala'}, {name: 'bab'}, {name: 'kjlkjk'}, {name: 'bob'}];
        var result = $filter('wildcardFilter')(items, '*a*', 'name');
        expect(result).toEqual([{name: 'lala'}, {name: 'bab'}]);
    });
    
    it('should match beginning of word', function(){
        var items = [{a: 'John'}, {a: 'john'}, {a: 'Aja'}, {a: 'bob J'}];
        var result = $filter('wildcardFilter')(items, 'j', 'a');
        expect(result).toEqual([{a: 'John'}, {a: 'john'}]);
    });
    
    it('should match end of word', function() {
        var items = [{a: 'Beba'}, {a: 'Lloraba'}, {a: 'Baobab'}, {a: 'John'}];
        var result = $filter('wildcardFilter')(items, '*ba', 'a');
        expect(result).toEqual([{a: 'Beba'}, {a: 'Lloraba'}]);
    });
});
