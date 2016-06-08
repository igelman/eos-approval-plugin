chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});

/*
	Attach listener to radios $( "[type=radio]" )
	On select:
	 $.get to taxene children
	 write the high / median / low weights -- maybe as placeholder text?
*/