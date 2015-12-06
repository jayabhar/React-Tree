

dataService = (function () {

	var  TreeNode = { title: 'Customers',
                            id:0,
                            isRootNode: true,
                            childNodes: [
                          	{ title: 'Company 1',
                            id: 1,
                            childNodes: [
	                            { title: 'Item xxx',
	                            id: 11,
	                            childNodes: [
                                { title: 'part 111',
                                id: 11,
                                childNodes: []},
                                ]},
                            ]},
                          	{ title: 'Company 2',
                            id: 22,
                            childNodes: [
                            	 { title: 'Item yyy',
	                            id: 221,
	                            childNodes: []},
	                        ]},
                            { title: 'Company 3',
                            id: 33,
                            childNodes: [
                             { title: 'Item zzz',
	                            id: 331,
	                            childNodes: []},
	                        ]},
                            { title: 'Company 4',
                            id: 44,
                            childNodes: [
                             { title: 'Item aaa',
	                            id: 441,
	                            childNodes: []},
	                        ]},
                            { title: 'Company 5',
                            id: 55,
                            childNodes: []},
                            { title: 'Company 6',
                            id: 66,
                            childNodes: []},
                            ]
                          };
  
    // The public API
    return {
        getNodes: function() {
            return TreeNode;
        }
    };

}());